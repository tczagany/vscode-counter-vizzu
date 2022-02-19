function anim_0110_1010(chart) {

    return chart.animate({
        config: {
            channels: {
                y: { set: ['$count'], range: { min: '0%', max: '110%' } },
                x: { set: ['type'] },
            color: { set:['type']},
            label: { set: ['$count'] },
            },
            title: null, //  '10 File count + types 2',
            sort: 'byValue',
            legend: null,
                reverse: true,
        },
        style: {
            plot: {
                paddingLeft: '9em',                
                marker: { label: { position: 'top'} },
                xAxis: { label: { angle: -0.7 } }
            }
        }},
        { duration: 0.1 }
    )
    
    .then(chart => chart.animate({
        config: {
            channels: {
                y: { set: ['$count', 'file'], range: {min: '0%', max: '110%' } },
                x: { set: ['type'] },
            label: { set: null },
            },
            title: null, //  '11 File count + type 3',
            sort: 'byValue',
            legend: null,
                reverse: true,
        },
        style: {
            plot: {
                paddingLeft: '9em',                
                marker: { label: { position: 'top'} },
                xAxis: { label: { angle: -0.7 } }
            }
        }},
        { duration: 0.1 }
    ))
    
    .then(chart => chart.animate({
        config: {
            channels: {
                y: { set: ['type'], range: { min: '0%', max: '100%' } },
                x: { set: ['code', 'file'] },
                color: 'type',
                label: null,
                
            },
            title: null, //  '5 code + types 3'
            legend: null,
            sort: 'byValue',
            reverse: false
        },
        style: {
            plot: {
                paddingLeft: '9em',
                marker: { label: { position: 'right'} },
                yAxis: { label: { paddingRight: '1.3em', fontSize: '1em' } },
                xAxis: { label: { angle: 0 } }
            }
        }},
        { duration: 2 }
    ))

    .then(chart => chart.animate({
        config: {
            channels: {
                y: { set: ['type'], range: { min: '0%', max: '100%' } },
                x: { set: ['code'] },
                color: 'type',
                label: { set: ['code'] },
            },
            title: null, //  '4 code + types 2',
            legend: null,
            sort: 'byValue',
            reverse: false
        },
        style: {
            plot: {
                paddingLeft: '9em',
                marker: { label: { position: 'right'} },
                yAxis: { label: { paddingRight: '1.3em', fontSize: '1em' } },
                xAxis: { label: { angle: 0}}
            }
        }},
        { duration: 0.5 }
    ));
}
