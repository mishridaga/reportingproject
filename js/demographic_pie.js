Highcharts.chart('by_gender', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '145px'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            }
        }
    },
    series: [{
        colorByPoint: true,
        data: [{
            name: 'Female',
            y: 79,
        }, {
            name: 'Male',
            y: 20
        }, {
            name: 'Missing',
            y: 1
        }]
    }]
});

Highcharts.chart('by_ethnicity', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '145px'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            }
        }
    },
    series: [{
        colorByPoint: true,
        data: [{
            name: 'American Indian/Alaskan Native',
            y: 12,
        }, {
            name: 'Hispanic/Latino',
            y: 28
        },{
            name: 'Black/African American',
            y: 15
        },{
            name: 'Asian',
            y: 15
        },{
            name: 'White',
            y: 10
        }, {
            name: 'Missing',
            y: 15
        }]
    }]
});

Highcharts.chart('by_age', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '145px'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            }
        }
    },
    series: [{
        colorByPoint: true,
        data: [{
            name: '5',
            y: 12,
        }, {
            name: '6',
            y: 8
        }, {
            name: '7',
            y: 5
        },{
            name: '8',
            y: 15,
        }, {
            name: '9',
            y: 12
        }, {
            name: '10',
            y: 8
        },{
            name: '11',
            y: 11,
        }, {
            name: '12',
            y: 9
        }, {
            name: '13',
            y: 20
        }]
    }]
});

Highcharts.chart('by_grade', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '145px'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            }
        }
    },
    series: [{
        colorByPoint: true,
        data: [{
            name: '5',
            y: 18,
        }, {
            name: '6',
            y: 12
        }, {
            name: '7',
            y: 11
        }, {
            name: '8',
            y: 19,
        }, {
            name: '9',
            y: 20
        }, {
            name: '10',
            y: 20
        }]
    }]
});

Highcharts.chart('by_lep', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '145px'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            }
        }
    },
    series: [{
        colorByPoint: true,
        data: [{
            name: 'Yes',
            y: 10,
        }, {
            name: 'No',
            y: 18
        }, {
            name: 'Unspecified',
            y: 12
        }, {
            name: 'Missing',
            y: 60
        }]
    }]
});

Highcharts.chart('by_frls', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '145px'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            }
        }
    },
    series: [{
        colorByPoint: true,
        data: [{
            name: 'Yes',
            y: 10,
        }, {
            name: 'No',
            y: 18
        }, {
            name: 'Unspecified',
            y: 12
        }, {
            name: 'Missing',
            y: 60
        }]
    }]
});