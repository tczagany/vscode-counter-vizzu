function anim_1000_0100() {

    chart.animate({
        config: {
            channels: {
                y: { set: ['$count'], range: {min: '0%', max: '100%' } },
                x: { set: null },
            color: { set: null },
            label: { set: ['$count'] },
            },
            title: null, //  '13 File count 2',
            legend: null
        },
        style: {
            plot: {
                paddingLeft: '13em',                
                marker: { label: { position: 'center', fontSize: '1.3em'} },
                    xAxis: { label: { angle: 0, fontSize:  '1em' },
                             title: { paddingTop: '2.5em' } }
            }
        }},
        { duration: 1 }
    );

}
