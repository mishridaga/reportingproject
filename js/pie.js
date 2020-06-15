Highcharts.chart('group_participants_pie', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '100px'
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
            name: 'Academic',
            y: 20,
        }, {
            name: 'College and Career Readiness',
            y: 30
        }, {
            name: 'Enrichment',
            y: 10
        }, {
            name: 'Character Education',
            y: 30
        }, {
            name: 'No Category',
            y: 10
        }]
    }]
});

Highcharts.chart('group_sessions_pie', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '100px'
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
            name: 'Academic',
            y: 8,
        }, {
            name: 'College and Career Readiness',
            y: 12
        }, {
            name: 'Enrichment',
            y: 4
        }, {
            name: 'Character Education',
            y: 12
        }, {
            name: 'No Category',
            y: 4
        }]
    }]
});

Highcharts.chart('group_service_hours_pie', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '100px'
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
            name: 'Academic',
            y: 6,
        }, {
            name: 'College and Career Readiness',
            y: 9,
        }, {
            name: 'Enrichment',
            y: 3
        }, {
            name: 'Character Education',
            y: 9,
        }, {
            name: 'No Category',
            y: 3,
        }]
    }]
});

Highcharts.chart('indiv_participants_pie', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '100px'
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
            name: 'Academic',
            y: 20,
        }, {
            name: 'College and Career Readiness',
            y: 11.84
        }, {
            name: 'Enrichment',
            y: 10.85
        }, {
            name: 'Character Education',
            y: 4.67
        }, {
            name: 'No Category',
            y: 4.18
        }]
    }]
});

Highcharts.chart('indiv_sessions_pie', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '100px'
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
            name: 'Academic',
            y: 20,
        }, {
            name: 'College and Career Readiness',
            y: 11.84
        }, {
            name: 'Enrichment',
            y: 10.85
        }, {
            name: 'Character Education',
            y: 4.67
        }, {
            name: 'No Category',
            y: 4.18
        }]
    }]
});

Highcharts.chart('indiv_service_hours_pie', {
    chart: {
        type: 'pie',
        styledMode: true,
        height: '100px'
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
            name: 'Academic',
            y: 20,
        }, {
            name: 'College and Career Readiness',
            y: 11.84
        }, {
            name: 'Enrichment',
            y: 10.85
        }, {
            name: 'Character Education',
            y: 4.67
        }, {
            name: 'No Category',
            y: 4.18
        }]
    }]
});





