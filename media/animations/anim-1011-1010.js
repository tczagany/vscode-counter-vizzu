function anim_1011_1010(chart) {

    return chart.animate({
        config: {
            channels: {
                y: { set: ['type'], range: { min: '0%', max: '100%' } },
                x: { set: ['code', 'file'] },
                color: 'type',
                label: null
            },
            title: null, //  '5 code + types 3'
            legend: null,
            reverse: false,
            sort: 'byValue'
        },
        style: {
            plot: {
                paddingLeft: '9em',
                yAxis: { label: { fontSize: '0em', paddingRight: '1.3em' } },
                    xAxis: { label: { angle: 0, fontSize:  '1em' } }
            }
        }},
        { duration: 2 }
    )

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
            reverse: false,
            sort: 'byValue'
        },
        style: {
            plot: {
                paddingLeft: '9em',
                marker: { label: { position: 'right'} },
                yAxis: { label: { fontSize: '1em', paddingRight: '1.3em' } },
                xAxis: { label: { angle: 0 } }
            }
        }},
        { duration: 0.5 }
    ));
}
