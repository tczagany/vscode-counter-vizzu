function anim_1011_1001(chart) {

    return chart.animate({
        config: {
            channels: {
                y: { set: ['file', 'type'], range: { min: '0%', max: '100%' } },
                x: { set: ['code'] },
                color: { set: ['type'] }
            },
            title: null, //  '8 code + types + Files 2',
            sort: 'none',
            legend: 'color',
            reverse: true,
        },
        style: {
            plot: {
                paddingLeft: '0em',
                yAxis: { label: { fontSize: 0 } },
                xAxis: { label: { angle: 0 } }
            }
        }
    },
        { duration: 0.1 }
    )

        .then(chart => chart.animate({
            config: {
                channels: {
                    y: { set: ['file', 'type'], range: { min: '0%', max: '100%' } },
                    x: { set: ['code'] },
                    color: { detach: ['type'] },
                    label: { set: null }
                },
                title: null, //  '7 code + Files 1',
                sort: 'byValue',
                legend: null,
                reverse: false,
            },
            style: {
                plot: {
                    paddingLeft: '9em',
                    yAxis: { label: { fontSize: 0 } },
                    xAxis: { label: { angle: 0 } }
                }
            }
        },
            { duration: 2 }
        ));
}
