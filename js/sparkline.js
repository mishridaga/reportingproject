Highcharts.SparkLineSmall = function (a, b, c) {
    var hasRenderToArg = typeof a === 'string' || a.nodeName,
        options = arguments[hasRenderToArg ? 1 : 0],
        defaultOptions = {
            chart: {
                renderTo: (options.chart && options.chart.renderTo) || this,
                borderWidth: 0,
                type: 'bar',
                height: 15,
                width: 70,
                margin : [0,0,0,0],
                style: {
                    overflow: 'visible'
                },
                skipClone: true
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            xAxis: {
                title: {
                    text: null
                },
                endOnTick: false,
                startOnTick: false,
            },

            yAxis: {
                endOnTick: false,
                startOnTick: false,
                title: {
                    text: null
                },
                max: 100,
                tickPositions: []

            },
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: true,
                    borderRadiusTopLeft: '50%',
                    borderRadiusTopRight: '50%'
                },
            }
        };

    options = Highcharts.merge(defaultOptions, options);

    return hasRenderToArg ?
        new Highcharts.Chart(a, options, c) :
    new Highcharts.Chart(options, b);
};

var start = +new Date(),
    $tds = $('td[data-sparkline]'),
    fullLen = $tds.length,
    n = 0;


function doChunkSmall() {
    var time = +new Date(),
        i,
        len = $tds.length,
        $td,
        stringdata,
        arr,
        data,
        chart;

    for (i = 0; i < len; i += 1) {
        $td = $($tds[i]);

        if ($td[0].className != 'no-border') {
            n += 1;
            continue;
        }

        stringdata = $td.data('sparkline');
        arr = stringdata.split(";")
        data = [parseFloat(arr[0])];
        max = parseFloat(arr[1]) * 1.1;
        chart = {};


        $td.highcharts('SparkLineSmall', {
            series: [{
                data: data,
                pointStart: 0,
                borderRadiusTopLeft: '50%',
                borderRadiusTopRight: '50%'
            }],
            chart: chart,
            yAxis: {
                max: max,
            },
        });

        n += 1;

        // If the process takes too much time, run a timeout to allow interaction with the browser
        if (new Date() - time > 500) {
            $tds.splice(0, i + 1);
            setTimeout(doChunkSmall, 0);
            break;
        }

    }
}

doChunkSmall();

