---
layout: dpe
published: true
permalink: /dashboard/dpe/drought_impacts/water_quality/
subsection: Drought Impacts
_title: Impacts of drought on water quality
related_links:
  - name: Water Quality
    url: '!science_url!/drought_impacts_management/water_quality/'
---
Droughts can affect **water quality** in rivers and reservoirs due to reduced dilution of discharges and runoff, enhanced biogeochemical processes and longer residence times in rivers. Moreover, at the end of a drought the sudden wetting of the soils releases significant fluxes of sediments and chemicals that can disrupt public water supplies, trigger algal blooms and damage ecosystems.  

In MaRIUS water quality models were extended and developed for different spatial scales. The national scale data and modelling analysis of the impact of drought on water quality in UK rivers provides us with a better understanding of how water quality changes during droughts across multiple catchments.  This is essential information for many different stakeholders so that we can anticipate and, if possible, mitigate the impact of future drought and maintain resilience of freshwater systems to these extreme events.

The response of water chemistry in the lower Thames catchment to different severity and duration droughts, based on the observed historical drought of 1975-76 and three synthetic events, are shown below. The time series data highlights how changes in precipitation, temperature, potential evapotranspiration and flow can affect suspended sediment concentration, total phosphorus concentration, and nitrate concentration.

*[MaRIUS]: Managing the Risks, Impacts and Uncertainties of drought and water Scarcity
*[biogeochemical]: relating to or denoting the cycle in which chemical elements and compounds are transferred between living systems and the environment.

<div id="interactionContainer">
        <select name="droughtFiles" id="droughtFiles">
            <option>Select</option>
            <option value="{{ site.data_url }}/drought_historic_19750101-19771231_daily.csv">Historical drought (1976)</option>
            <option value="{{ site.data_url }}/drought_real3_20020101-20041231_daily.csv">Synthetic drought (long and mild)</option>
            <option value="{{ site.data_url }}/drought_real26_19940101-19961231_daily.csv">Synthetic drought (short and severe)</option>
            <option value="{{ site.data_url }}/drought_real13_19950101-19971231_daily.csv">Synthetic drought (long and severe)</option>
        </select>
        <hr />
        <style>
            #interactionContainer
            {
                margin:0 auto;
                width:100%;
            }
            #chartContainer > #loader
            {
                display:none;
            }
        </style>
        <div id="chartContainer">
            <img src="{{ site.images_url }}/loading.gif" alt="" id="loader">
            <div id="chart_div_1"></div>
            <div id="chart_div_2"></div>
            <div id="chart_div_3"></div>
            <div id="chart_div_4"></div>
            <div id="chart_div_5"></div>
            <div id="chart_div_6"></div>
            <div id="chart_div_7"></div>
        </div>
</div>
<script src="{{ site.assets_url }}/js/jquery.csv.js"></script>
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
