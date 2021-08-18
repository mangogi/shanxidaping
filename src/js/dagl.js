$(function () {
    $.ajax({
        type: 'get',
        url: './json/data.JSON',
        data: '',
        async: true,
        dataType: "json",
        success: function (res) {
            //console.log(res.archive)
            //存档总数  存档率
            var hj = [], cdl = [];
            for (var i = 0; i < res.archive.length; i++) {
                hj.push((res.archive[i].hj / 1000).toFixed(3));
                // cdl.push(((res.archive[i].zsda)/(res.archive.hj[i])*100).toFixed(2))
            }
            hj = hj.reverse().slice(17);
            cdl = cdl.reverse();
            console.log(hj)
            console.log(cdl)
            var chart1 = echarts.init(document.getElementById('charts1'));
            var option1 = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        snap: true,
                        crossStyle: {
                            color: '#999'
                        }
                    },
                },
                grid: {
                    top: 50,
                    left: 42,
                    bottom: 30,
                    right: 24
                },
                toolbox: {
                    feature: {
                        dataView: { show: false, readOnly: false },
                        magicType: { show: false, type: ['line', 'bar'] },
                        restore: { show: false },
                        saveAsImage: { show: false }
                    }
                },
                legend: {
                    data: ['档案存档数', '档案存档率'],
                    itemHeight: 8,
                    itemWidth: 8,
                    textStyle: {
                        fontSize: 12,
                        color: '#ffffff'
                    },
                    right: 22,
                    top: 12

                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {        //x轴标签的设置 
                            // formatter: '{value}',
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                            margin: 9
                        },
                        axisLine: {          //坐标轴
                            show: true,
                            lineStyle: {
                                height: 1,
                                color: '#235198',
                            }
                        },
                        axisTick: {
                            show: false,      //坐标轴的刻度，
                            linestyle: {
                                height: 1,
                                color: '#235198'
                            }
                        },
                        splitLine: {         //区域中的分割线是否显示
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '数量（千份）',
                        nameTextStyle: {    // 名称样式
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                            padding: [30, 0, 8, -10]    // 四个数字分别为上右下左与原位置距离
                            // fontWeight: 'bold'
                        },
                        min: 0,
                        max: 400,
                        interval: 100,
                        axisLabel: {        //x轴标签的设置 
                            formatter: '{value}',
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#14325f',
                                height: 0.5
                            }
                        }
                    },
                    {
                        type: 'value',
                        name: '温度',
                        show: false,
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series: [
                    {
                        name: '档案存档数',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#b65065'
                                }, {
                                    offset: 1,

                                    color: '#a02386'
                                }])

                            }
                        },
                        data: hj
                    },
                    {
                        name: '档案存档率',
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            color: '#ff7c1b'
                        },
                        lineStyle: {
                            color: '#ff7c1b',
                            width: 1
                        },
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    }
                ]
            };
            chart1.setOption(option1);

            //转出档案 档案转出率
            var dazc = [], zcl = [];
            console.log(res.transfer)
            for (var i = 0; i < res.transfer.length; i++) {
                dazc.push((res.transfer[i].dazc / 1000).toFixed(3));
                // cdl.push(((res.archive[i].zsda)/(res.archive.hj[i])*100).toFixed(2))
            }
            dazc = dazc.reverse().slice(6);
            zcl = zcl.reverse();
            console.log(dazc)
            console.log(zcl)

            var chart2 = echarts.init(document.getElementById('charts2'))
            var option2 = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        snap: true,
                        crossStyle: {
                            color: '#999'
                        }
                    },
                },
                grid: {
                    top: 50,
                    left: 42,
                    bottom: 30,
                    right: 24
                },
                toolbox: {
                    feature: {
                        dataView: { show: false, readOnly: false },
                        magicType: { show: false, type: ['line', 'bar'] },
                        restore: { show: false },
                        saveAsImage: { show: false }
                    }
                },
                legend: {
                    data: ['档案转出数', '档案转出率'],
                    itemHeight: 8,
                    itemWidth: 8,
                    textStyle: {
                        fontSize: 12,
                        color: '#ffffff'
                    },
                    right: 22,
                    top: 12

                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {        //x轴标签的设置 
                            // formatter: '{value}',
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                            margin: 9
                        },
                        axisLine: {          //坐标轴
                            show: true,
                            lineStyle: {
                                height: 1,
                                color: '#235198',
                            }
                        },
                        axisTick: {
                            show: false,      //坐标轴的刻度，
                            linestyle: {
                                height: 1,
                                color: '#235198'
                            }
                        },
                        splitLine: {         //区域中的分割线是否显示
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '数量（千份）',
                        nameTextStyle: {    // 名称样式
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                            padding: [30, 0, 8, -10]    // 四个数字分别为上右下左与原位置距离
                            // fontWeight: 'bold'
                        },
                        min: 0,
                        max: 16,
                        interval: 4,
                        axisLabel: {        //x轴标签的设置 
                            formatter: '{value}',
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#14325f',
                                height: 0.5
                            }
                        }
                    },
                    {
                        type: 'value',
                        name: '温度',
                        show: false,
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series: [
                    {
                        name: '档案转出数',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#1a809a'
                                }, {
                                    offset: 1,

                                    color: '#12bab0'
                                }])

                            }
                        },
                        data: dazc
                    },
                    {
                        name: '档案转出率',
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            color: '#55fadc'
                        },
                        lineStyle: {
                            color: '#48e748',
                            width: 1
                        },
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    }
                ]
            };
            chart2.setOption(option2);

            //转出档案 档案转出率
            var dazr = [], zrl = [];
            console.log(res.into)
            for (var i = 0; i < res.into.length; i++) {
                dazr.push((res.into[i].dazr / 1000).toFixed(3));
                // cdl.push(((res.archive[i].zsda)/(res.archive.hj[i])*100).toFixed(2))
            }
            dazr = dazr.reverse().slice(16);
            zrl = zrl.reverse();
            console.log(dazr)
            console.log(zrl)

            var chart3 = echarts.init(document.getElementById('charts3'))
            var option3 = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        snap: true,
                        crossStyle: {
                            color: '#999'
                        }
                    },
                },
                grid: {
                    top: 50,
                    left: 42,
                    bottom: 30,
                    right: 24
                },
                toolbox: {
                    feature: {
                        dataView: { show: false, readOnly: false },
                        magicType: { show: false, type: ['line', 'bar'] },
                        restore: { show: false },
                        saveAsImage: { show: false }
                    }
                },
                legend: {
                    data: ['档案转入数', '档案转入率'],
                    itemHeight: 8,
                    itemWidth: 8,
                    textStyle: {
                        fontSize: 12,
                        color: '#ffffff'
                    },
                    right: 22,
                    top: 12

                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {        //x轴标签的设置 
                            // formatter: '{value}',
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                            margin: 9
                        },
                        axisLine: {          //坐标轴
                            show: true,
                            lineStyle: {
                                height: 1,
                                color: '#235198',
                            }
                        },
                        axisTick: {
                            show: false,      //坐标轴的刻度，
                            linestyle: {
                                height: 1,
                                color: '#235198'
                            }
                        },
                        splitLine: {         //区域中的分割线是否显示
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '数量（千份）',
                        nameTextStyle: {    // 名称样式
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                            padding: [30, 0, 8, -10]    // 四个数字分别为上右下左与原位置距离
                            // fontWeight: 'bold'
                        },
                        min: 0,
                        max: 60,
                        interval: 15,
                        axisLabel: {        //x轴标签的设置 
                            formatter: '{value}',
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#14325f',
                                height: 0.5
                            }
                        }
                    },
                    {
                        type: 'value',
                        name: '温度',
                        show: false,
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series: [
                    {
                        name: '档案转入数',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#17448b'
                                }, {
                                    offset: 1,

                                    color: '#417ddd'
                                }])

                            }
                        },
                        data: dazr
                    },
                    {
                        name: '档案转入率',
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            color: '#0febff'
                        },
                        lineStyle: {
                            color: '#0bd2c9',
                            width: 1
                        },
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    }
                ]
            };
            chart3.setOption(option3);

            //地图
            /* 地图 需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
            var chart4 = echarts.init(document.getElementById('map'));
            option4 = {
                tooltip: {
                    trigger: 'item',
                    formatter: function (param) {
                        console.log(param)
                        return "档案流转:" + param.value
                    }
                },
                visualMap: {
                    type: 'piecewise',                  // 定义为分段型 visualMap
                    splitNumber: 5,                      //对于连续型数据，自动平均切分成几段。默认为5段
                    inverse: true,                      //是否反转 visualMap 组件
                    min: 200,
                    max: 30000,
                    text: ['高', '低'],
                    // minOpen:true,                       //界面上会额外多出一个『< min』的选块
                    // maxOpen:true,   
                    x: '20px',
                    y: 'top',
                    showLabel: true,
                    textStyle: {
                        color: '#fff',
                        position: 'left'
                    },
                    itemGap: 1,                          //每两个图元之间的间隔距离，单位为px
                    itemSymbol: "rect",
                    realtime: false,
                    calculable: false,
                    inRange: {
                        color: ['#0eddd5', '#07b5be', '#0082ba', '#0c40c4', '#07319c']
                    }
                },
                series: [{
                    name: '陕西',
                    type: 'map',
                    mapType: '陕西',
                    roam: false,
                    top: '8%',
                    zoom: 1.2,
                    x: '25%',
                    selectedMode: 'single',//multiple多选
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                textStyle: {
                                    color: "#231816"
                                }
                            },
                            areaStyle: { color: '#B1D0EC' },
                            color: '#B1D0EC',
                            borderColor: '#010b1c'//区块的边框颜色
                        },
                        emphasis: {//鼠标hover样式
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fa4f04'
                                }
                            },
                            areaStyle: { color: 'red' }
                        }
                    },
                    data: [
                        {
                            name: '榆林市',
                            value: 586
                        },
                        {
                            name: '延安市',
                            value: 2586
                        },
                        {
                            name: '铜川市',
                            value: 1246
                        },
                        {
                            name: '渭南市',
                            value: 2486
                        },
                        {
                            name: '莱芜市',
                            value: 8886
                        },
                        {
                            name: '咸阳市',
                            value: 5556
                        },
                        {
                            name: '宝鸡市',
                            value: 15862
                        },
                        {
                            name: '西安市',
                            value: 14569
                        },
                        {
                            name: '商洛市',
                            value: 25647
                        },
                        {
                            name: '汉中市',
                            value: 4582
                        },
                        {
                            name: '安康市',
                            value: 8562
                        }
                    ]
                }]
            };
            chart4.setOption(option4);

            // 右上
            var legends = ['学历材料', '党组织材料', '劳动合同', '其他材料'];
            var colors = ['#b9408e', '#3346a5', '#0b9e9e', '#00c6ac'].reverse();
            var allNub = res.transact.allNub;
            var ma1 = res.transact.material1;
            var ma2 = res.transact.material2;
            var ma3 = res.transact.material3;
            var ma4 = res.transact.material4;
            console.log(allNub)
            var data = [{
                name: '学历材料',
                value: ma3
            },
            {
                name: '党组织材料',
                value: ma1
            },
            {
                name: '劳动合同',
                value: ma4
            },
            {
                name: '其他材料',
                value: ma2
            },
            ];

            var chart5 = echarts.init(document.getElementById('charts5'))
            var option5 = {
                
                color: colors,
                legend: {
                    orient: 'vertical',
                    top: "center",
                    right: "1%",
                    itemGap: 20,
                    width: 50,
                    icon: 'circle', //设置图例小图标的样式，这里控制
                    itemWidth: 6,
                    itemHeight: 6,
                    textStyle: {
                        color: "#fff",
                        fontSize: 12,
                        rich: {
                            name: {
                                padding: [35.0, 0, 0]
                            },
                            num: {
                                color: '#22f2fa',
                                padding: [10, 0, 10, 0]         //上左下右？
                            },
                            per: {
                                color: '#f5ef97'
                            }

                        }
                    },
                    data: legends,
                    formatter: function (param) {
                        // return '{a|text}{a|   }{b|' +  name + '}'
                        // console.log(param)
                        // console.log(data)
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].name == param) {
                                console.log(data[i].value)
                                return '{name|' + param + '}' + '\n' + '{num|' + data[i].value + '千份' + '}' + '   '
                                    + '{per|' + (data[i].value / allNub * 100).toFixed(0) + '%' + '}'
                            }
                        }
                    },
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [{
                    name: '半径模式',
                    type: 'pie',
                    radius: ['15%', '70%'],
                    center: ['15%', '50%'],
                    roseType: 'radius',
                    minShowLabelAngle: 60,
                    label: {
                        show: true,
                        normal: {
                            position: 'outside',
                            fontSize: 16,
                            color: '#21e5e8',
                            formatter: (params) => {
                                return params.name + '\n' + (params.value / allNub * 100).toFixed(2) + '%'
                            }
                        }
                    },
                    labelLine: {
                        length: 0.5,
                        length2: 20,
                        smooth: false
                    },
                    data: data
                }]
            };
            chart5.setOption(option5)

            //右中2
            console.log(res.prove)
            var zs = res.prove.zs;
            var data = [];
            for (var i = 0; i < res.prove.length; i++) {
                data.push(res.prove[i].sl)
            }
            data = data.slice(0, 5)
            console.log(data)
            var className = ['存档证明', '政审证明', '未就业证明', '无犯罪记录证明', '其他证明'];
            var defaultData = [40000, 40000, 40000, 40000, 40000];
            var chart6 = echarts.init(document.getElementById('charts6'));
            var option6 = {
                grid: {
                    left: '2%',
                    right: '0%',
                    bottom: '5%',
                    top: '15%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none'
                    },
                    formatter: function (params) {
                        return params[0].name + '<br/>' +
                            "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                            // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                            params[0].seriesName + ' : ' + params[0].value
                    }
                },
                // backgroundColor: 'rgb(20,28,52)',
                xAxis: {
                    show: false,
                    type: 'value',
                    max: 20000,
                    min: 0,
                    interval: 4000
                },
                yAxis: [{
                    type: 'category',
                    name: '数量（单位：份）',
                    nameLocation: 'start',
                    nameTextStyle: {
                        color: '#fff',
                        padding: [0, 20, 0, -60]
                    },
                    inverse: true,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        },
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    data: className
                }, {
                    type: 'category',
                    inverse: true,
                    axisTick: 'none',
                    axisLine: 'none',
                    show: false,
                    axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '12',
                        },
                        formatter: function (value) {
                            return value;
                        },
                    },
                    data: data
                }],
                series: [{
                    name: '完成率',
                    type: 'bar',
                    zlevel: 1,
                    label: {
                        show: true,
                        position: 'right',   //---相对位置
                        textStyle: {
                            color: '#2ad1f7',
                            fontSize: 12
                        }
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius: 0,
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#1a809a'
                            }, {
                                offset: 1,
                                color: '#12bab0'
                            }]),
                            // color: colorList
                        },
                    },
                    barWidth: 12,
                    barCategoryGap: 22,       //---柱形间距
                    data: data
                },
                {
                    name: '背景',
                    type: 'bar',
                    barWidth: 12,
                    barGap: '-100%',
                    data: defaultData,
                    itemStyle: {
                        normal: {
                            color: '#08162f',
                            barBorderRadius: 0,
                        }
                    },
                },
                ]
            };
            chart6.setOption(option6)

            // 右下2
            var legends = ['20岁以下', '20~29岁', '30~39岁', '40岁及以上'];
            var colors = ['#b9408e', '#3346a5', '#0b9e9e', '#00c6ac'].reverse();
            var ma20 = res.age[0].c_20;
            var ma2029 = res.age[0].c_2029;
            var ma3039 = res.age[0].c_3039;
            var ma40 = res.age[0].c_40;
            console.log(res.age)
            console.log(ma20)
            var allNub = 0;
            allNub = ma20 + ma2029 + ma3039 + ma40
            console.log(allNub)
            var data = [{
                name: '20岁以下',
                value: ma20
            },
            {
                name: '20~29岁',
                value: ma2029
            },
            {
                name: '30~39岁',
                value: ma3039
            },
            {
                name: '40岁及以上',
                value: ma40
            },
            ];

            var chart7 = echarts.init(document.getElementById('charts7'))
            var option7 = {
                //   backgroundColor: "#0f375f",
                color: colors,
                // 中心标题&图片
                graphic: [
                    {
                        type: 'image',
                        style: {
                            image: "./imgs/img594.png", // 你的图片地址
                            width: 26,
                            height: 30,
                            color: '#fff'
                        },
                        left: 'center',
                        top: '20%'
                    },

                    {
                        type: 'text',
                        left: 'center',
                        top: '36%',
                        style: {
                            text: '年龄',
                            fill:'#fff',
                            width: 30,
                            height: 30,
                            fontSize: 12
                        }
                    }
                ],
                legend: {
                    orient: 'vertical',
                    top: "60%",
                    right: "1%",
                    left: "10%",
                    itemGap: 10,
                    width: 50,
                    icon: 'circle', //设置图例小图标的样式，这里控制
                    itemWidth: 6,
                    itemHeight: 6,
                    textStyle: {
                        color: "#fff",
                        fontSize: 12,
                        rich: {
                            name: {
                                padding: [35.0, 0, 0]
                            },
                            num: {
                                color: '#22f2fa',
                                padding: [10, 0, 10, 0]         //上左下右？
                            },
                            per: {
                                color: '#f5ef97'
                            }

                        }
                    },
                    data: legends,
                    formatter: function (param) {
                        // return '{a|text}{a|   }{b|' +  name + '}'
                        // console.log(param)
                        // console.log(data)
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].name == param) {
                                console.log(data[i].value)
                                return '{name|' + param + '}' + '\n' + '{num|' + data[i].value + '人' + '}' + '   '
                                    + '{per|' + (data[i].value / allNub * 100).toFixed(0) + '%' + '}'
                            }
                        }
                    },
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [{
                    name: '半径模式',
                    type: 'pie',
                    radius: ['30%', '45%'],
                    center: ['50%', '29%'],
                    //   roseType: 'radius',
                    minShowLabelAngle: 60,
                    label: {
                        
                        normal: {
                            show: false,
                            position: 'outside',
                            fontSize: 16,
                            color: '#21e5e8',
                            formatter: (params) => {
                                return params.name + '\n' + (params.value / allNub * 100).toFixed(2) + '%'
                            }
                        }
                    },
                    labelLine: {
                        show: false,
                        length: 0.5,
                        length2: 20,
                        smooth: false
                    },
                    data: data
                }]
            };
            chart7.setOption(option7)

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.responseText);
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
            console.log("获取失败")
        }
    })
})