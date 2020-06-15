Highcharts.chart('attd-by-date-program-overview', {

    title: {
        text: ''
    },

    xAxis: {
        categories: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
    },

    yAxis : {
        tickInterval: 50
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
        symbolWidth: 15,
        symbolPadding: 20
    },

    plotOptions: {
        series: {
            label: {
                enabled: false
            }
        }
    },

    chart: {
        styledMode: true,
        height: "230px"
    },


    series: [{
        name: 'aggregate',
        data: [134, 123, 177, 158, 131, 131, 133, 175],
        marker: {
            symbol: 'circle',
            radius: 3,
        }
    }, {
        name: 'group services',
        data: [16, 64, 42, 51, 90, 82, 21, 34],
        marker: {
            symbol: 'circle',
            radius: 3,
        }
    }, {
        name: 'individual services',
        data: [44, 22, 5, 71, 85, 77, 47, 87],
        marker: {
            symbol: 'circle',
            radius: 3,
        }
    }, {
        name: 'case management',
        data: [15, 7, 88, 69, 12, 52, 0, 27],
        marker: {
            symbol: 'circle',
            radius: 3,
        }
    }]

});


Highcharts.chart('attd-by-date-group-services', {
    title: {
        text: ''
    },

    xAxis: {
        categories: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
    },

    yAxis : {
        tickInterval: 50
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        symbolWidth: 6,
        symbolPadding: 20
    },

    plotOptions: {
        series: {
            label: {
                enabled: false
            }
        }
    },

    chart: {
        styledMode: true,
        height: "230px"
    },


    series: [{
        name: 'group services',
        data: [16, 64, 42, 51, 90, 82, 21, 34],
        marker: {
            symbol: 'circle',
            radius: 3,
        }
    }]

});


Highcharts.chart('attd-by-date-individual-services', {

    title: {
        text: ''
    },

    xAxis: {
        categories: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
    },

    yAxis : {
        tickInterval: 50
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        symbolWidth: 6,
        symbolPadding: 20
    },

    plotOptions: {
        series: {
            label: {
                enabled: false
            }
        }
    },

    chart: {
        styledMode: true,
        height: "230px"
    },


    series: [{
        name: 'individual services',
        data: [44, 22, 5, 71, 85, 77, 47, 87],
        marker: {
            symbol: 'circle',
            radius: 3,
        }
    }]

});



Highcharts.chart('attd-by-date-case-management', {

    title: {
        text: ''
    },

    xAxis: {
        categories: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
    },

    yAxis : {
        tickInterval: 50
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        symbolWidth: 4,
        symbolPadding: 20
    },

    plotOptions: {
        series: {
            label: {
                enabled: false
            }
        }
    },

    chart: {
        styledMode: true,
        height: "230px"
    },


    series: [{
        name: 'case management',
        data: [15, 7, 88, 69, 12, 52, 0, 27],
        marker: {
            symbol: 'circle',
            radius: 3,
        }
    }]

});
