function anim_1001_1000(chart) {

    return chart.animate({
        config: {
            channels: {
                y: { set: ['file'], range: { min: '0%', max: '100%' } },
                x: { set: ['code'] },
                label: {set:null},
                color:  { detach: ['type'] }
            },
            title: null, //  '7 code+ Files 1',
            sort: 'byValue',
            legend: null,
                reverse: false,
        },
        style: {
            plot: {
                paddingLeft: '9em',
                yAxis: { label: { fontSize: 0  } },
                xAxis: { label: { angle: 0 } }
            }
        }},
        { duration: 0.1 }
    )

    .then(chart => chart.animate({
        config: {
            channels: {
                y: { set: null, range: {min: '0%', max: '100%' } },
            x: { set: ['code', 'file' ], range: { min: '0%', max: '100%' } },
            color: { set: null },
            label: { set: null },
        },
        title: null, //1 code1
        sort: 'byValue'
        },
        style: {
            logo:{filter: 'lightness(-0.2)' },
        legend:{paddingLeft:'5.789473684'},
        plot: {
            paddingLeft: '9em',
            marker: { label: { position: 'center'} },
            yAxis: { label: { fontSize: 0, paddingRight: '1.3em'} },
            xAxis: { label: { angle: 0 } }
        }
        }},
        { duration: 2 }
    ))
    
    .then(chart => chart.animate({
        config: {
            channels: {
                y: { set: null, range: {min: '0%', max: '100%' } },
                x: { set: ['code' ], range: { min: '0%', max: '100%' } },
                color: { set: null },
                label: { set: ['code' ] },
            },
            title: null
        },
        style: {
            logo:{filter: 'lightness(-0.2)' },
            legend:{paddingLeft:'5.789473684'},
            plot: {
                paddingLeft: '9em',
                marker: { label: { position: 'center'} },
                yAxis: { label: { fontSize: '1em', paddingRight: '1.3em'} },
                xAxis: { label: { angle: 0 } }
            }
        }},
        { duration: 0.5 }
    ));
}
