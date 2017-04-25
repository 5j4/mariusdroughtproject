---
layout: dpe
published: true
permalink: /dashboard/dpe/drought_events_past_future/
_title: 'Meteorological Droughts: past and future'
related_links:
  - name: Drought datasets and how to access them
    url: '!science_url!/drought_climatology/dd/'
---
Over the past 40 years there has been a number of droughts in England. The most recent notable droughts were 1975-1976, 1989-1992, 1995-1996, 2004-2006 and 2010-2012. Over-abstraction to meet the needs of growing populations, agricultural and industrial use, and the effects of climate change are causing multiple challenges in many water-stressed regions, and these are likely to increase in the future.

<div id="interactionContainer">
        <select name="droughtFiles" id="droughtFiles">
            <option>Select</option>
            <option value="drought_historic_19750101-19771231_daily.csv">Historical drought (1976)</option>
            <option value="drought_real3_20020101-20041231_daily.csv">Synthetic drought (long and mild)</option>
            <option value="drought_real26_19940101-19961231_daily.csv">Synthetic drought (short and severe)</option>
            <option value="drought_real13_19950101-19971231_daily.csv">Synthetic drought (long and severe)</option>
        </select>
        <hr />
        <style>
            #interactionContainer
            {
                margin:0 auto;
                width:48%;
            }
            #chartContainer > #loader
            {
                display:none;
            }
        </style>
        <div id="chartContainer">
            <img src="loading.gif" alt="" id="loader">
            <div id="chart_div_1"></div>
            <div id="chart_div_2"></div>
            <div id="chart_div_3"></div>
            <div id="chart_div_4"></div>
            <div id="chart_div_5"></div>
            <div id="chart_div_6"></div>
            <div id="chart_div_7"></div>
        </div>
</div>
<script src="jquery.csv.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script>
google.charts.load('current', {packages: ['corechart', 'line']});
(function()
{
    $('select#droughtFiles').change(function()
    {
        var file = $(this).val();
        if(file !== 'Select')
        {
            $('#chartContainer > #loader').show();
            $('div#chartContainer > div').empty();
            google.charts.setOnLoadCallback(createLineChart(file));
        }
        else
        {
            $('div#chartContainer > div').empty();
        }
    });
})();

function createLineChart(file)
{
    var fullArr = getFileData(file);
    if(fullArr.length > 0)
    {
        for (var i = 1; i < 8; i++)
        {
            linesFromMeasure(fullArr, i);
        };
    }
    else
    {
        console.log('No data');
    }
}

function getFileData(file)
{
    var resultArr = [];
    $.ajax(
    {
        url: file,
        type: 'get',
        dataType: 'text',
        async: false,
        success: function(data)
        {
            resultArr = $.csv.toArrays(data);
        }
    });
    return resultArr;
}

function linesFromMeasure(resultArr,measure)
{
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'X');
        data.addColumn('number', 'Value');
        data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});

        var rowCount = 0;
        var lineVal = 0;
        var floatVal = 0;
        var measureTitle = '';
        var theYear = 0;
        var theMonth = 0;
        var theDay = 0;
        $.each(resultArr, function(key, value)
        {
            if(rowCount > 0)
            {
                lineVal = parseInt(value[measure]);
                var dateSplit;
                if(value[0].indexOf('/') > 0)
                {
                    dateSplit = value[0].split("/");
                    theYear = parseInt(dateSplit[2]);
                    theMonth = parseInt(dateSplit[1]);
                    theDay = parseInt(dateSplit[0]);
                }
                else
                {
                    dateSplit = value[0].split("-");
                    theYear = parseInt(dateSplit[0]);
                    theMonth = parseInt(dateSplit[1]);
                    theDay = parseInt(dateSplit[2]);
                }
                /* var tooltipText = createTooltip(value); */
                var tooltipText = '';
                if((isNumeric(theYear) == true) && (isNumeric(theMonth) == true) && (isNumeric(theDay) == true) && (isNumeric(lineVal) == true))
                {
                    tooltipText = createTooltip(resultArr, rowCount, theDay, theMonth, theYear, lineVal);
                    data.addRow([new Date(theYear,theMonth,theDay), lineVal, tooltipText]);
                }
            }
            else
            {
                measureTitle = value[measure];
                switch(measure)
                {
                    case 1 : measureTitle = 'Precipitation (mm)';
                    break;
                    case 2 : measureTitle = 'Temperature (°C)';
                    break;
                    case 3 : measureTitle = 'Potential evapotranspiration (mm)';
                    break;
                    case 4 : measureTitle = 'Flow (m³/s)';
                    break;
                    case 5 : measureTitle = 'Suspended sediment (mg/L)';
                    break;
                    case 6 : measureTitle = 'Total phosphorus (mg/L)';
                    break;
                    case 7 : measureTitle = 'Nitrate (mg/L)';
                    break;
                }
            }
            rowCount++;
        });

      var options = {
        hAxis: {
          title: 'Date'
        },
        vAxis: {
          title: measureTitle
        },
        tooltip: {isHtml: true},
        legend: 'none'
      };
      var chartName = 'chart_div_'+measure;
      var chart = [];
      $('#chartContainer > #loader').hide();
      chart[measure] = new google.visualization.LineChart(document.getElementById(chartName));
      chart[measure].draw(data, options);
}

function createTooltip(resultArr, rowCount, theDay, theMonth, theYear, lineVal)
{
    var finalStr =  '';
    var row = resultArr[rowCount];
    finalStr = '<div style="padding:1em;">';
    finalStr += '<strong>Date : </strong>'+theDay+'/'+theMonth+'/'+theYear+'<br />';
    finalStr +=  '<strong>Precipitation (mm) : </strong>'+parseFloat(row[1]).toFixed(2)+'<br />';
    finalStr +=  '<strong>Temperature (°C) : </strong>'+parseFloat(row[2]).toFixed(2)+'<br />';
    finalStr +=  '<strong>Potential evapotranspiration (mm) : </strong>'+parseFloat(row[3]).toFixed(2)+'<br />';
    finalStr +=  '<strong>Flow (m<sup>3</sup>/s) : </strong>'+parseFloat(row[4]).toFixed(2)+'<br />';
    finalStr +=  '<strong>Suspended sediment (mg/L) : </strong>'+parseFloat(row[5]).toFixed(2)+'<br />';
    finalStr +=  '<strong>Total phosphorus (mg/L) : </strong>'+parseFloat(row[6]).toFixed(2)+'<br />';
    finalStr +=  '<strong>Nitrate (mg/L) : </strong>'+parseFloat(row[7]).toFixed(2)+'</div>';
    return finalStr;
}

function isNumeric(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
}
</script>


<div id="coming-soon">
	<div class="ident">INTERACTIVE <span class="cs">COMING SOON</span></div>
	<div class="description">
		<ul>
			<li>Projected change in drought characteristics for the baseline, near, far future.</li>
			<li>SPEI timeseries and associated maps for the UK showing the most extreme droughts identified in the event set for the baseline, near and far future.</li>
			<li>How do the most extreme droughts identified compare to the 1975-1976 drought event?</li>
		</ul>
	</div>
</div>

However, a study of historical events alone does not provide sufficiently diverse and extreme conditions to study the full range of possible drought conditions and impacts that may occur in the future. As such, MaRIUS has developed an extensive ‘event set’ covering the past, present day and future drought conditions.

The event set has been used to provide a range of possible weather time series and assess projected changes in drought characteristics for different time-periods that:

* could have occured in the past (‘Baseline’, 1900-2006)
* might occur in the near future (‘Near Future’, 2020-2049)
* might occur in the far future (‘Far Future’, 2070-2099)
