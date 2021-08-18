$(function(){
    $.ajax({
        type:'get',
        url:'./json/data.JSON',
        data:'',
        async:true,
        dataType:"json",
        success:function(res){
            console.log(res)

            var hjzs = res.census[0].hjzs;
            var hjrs = [];
            for (var i = 0; i < res.census.length; i++){
                hjrs.push(res.census[i].hjrs)
            }
            console.log(hjrs)
            var data =  ['新生儿', '成人', '市内迁移']
            //左上
            var chart1 = echarts.init(document.getElementById('chart1'));
            var option1 =  {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // Use axis to trigger tooltip
                        type: 'line'        // 'shadow' as default; can also be 'line' or 'shadow'
                    }
                },
                legend: {
                    data:data,
                    textStyle:{                 //----图例内容样式
                        color:'#fff',               //---所有图例的字体颜色
                        fontSize:12,
                        rich:{
                            name:{
                                padding:[20,0,0,0]
                            },
                            num:{
                                color:'#22f2fa',
                                padding:[5,0,0,0]
                            },
                            per:{
                                color:'#f5ef97',
                                padding:[5,0,0,0]
                            }
                        }

                    }, 
                    itemWidth:6,
                    itemHeight:6,
                    icon: "circle",
                    orient: "horizontal", // 图例列表的布局朝向。 'horizontal'  'vertical'
                    itemGap: 70, // 图例每项之间的间隔。
                    formatter:function(params){
                        for(var i = 0; i < data.length; i++){
                            if(data[i] == params){
                                console.log(data[i])
                                return '{name|' + params +'}'
                                + '\n' + '{num|' + hjrs[i] + '人' + '}' + '   '
                                + '{per|' + (hjrs[i]/hjzs * 100).toFixed(0) + '%' + '}'
                            }
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    show:false
                },
                yAxis: {
                    type: 'category',
                    data: ['人数'],
                    show:false
                },
                series: [
                    {
                        name: '新生儿',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 0,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{    //左、下、右、上
                                    offset: 0,
                                    color: '#2de8e1'
                                }, {
                                    offset: 1,
                                    color: '#1c78ca'
                                }]),
                                // color: colorList
                            },
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320]
                    },
                    {
                        name: '成人',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 0,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{    //左、下、右、上
                                    offset: 0,
                                    color: '#b65065'
                                }, {
                                    offset: 1,
                                    color: '#a02386'
                                }]),
                                // color: colorList
                            },
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120]
                    },
                    {
                        name: '市内迁移',
                        type: 'bar',
                        barWidth:16,
                        stack: 'total',
                        label: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 0,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{    //左、下、右、上
                                    offset: 0,
                                    color: '#b5aa11'
                                }, {
                                    offset: 1,
                                    color: '#d38e15'
                                }]),
                                // color: colorList
                            },
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220]
                    },
                ]
            };
            chart1.setOption(option1);

            //左下1
            var aae036 = [], qc = [], qr = [];
            for(var i = 0; i < res.removed.length; i++){
                aae036.push(res.removed[i].aae036);
                qc.push(res.removed[i].qc);
                qr.push(res.removed[i].qr);
            }
            aae036 = aae036.reverse();
            qc = qc.reverse();
            qr = qr.reverse();
            var chart2 = echarts.init(document.getElementById('chart2'))
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
                    data: ['迁入', '迁出'],
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
                        data: aae036,
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
                        name: '人数（单位：千人）',
                        nameTextStyle: {    // 名称样式
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                            padding: [30, 0, 8, 30]    // 四个数字分别为上右下左与原位置距离
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
                        name: '迁入',
                        type: 'bar',
                        label:{
                            show:true,
                            position:'top',
                            textStyle:{
                                color:'#629fff',
                                fontSize:12
                            }
                        },
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
                        barWidth:20,
                        data: qr
                    },
                    {
                        name: '迁出',
                        type: 'bar',
                        label:{
                            show:true,
                            position:'top',
                            textStyle:{
                                color:'#ff41ba',
                                fontSize:12
                            }
                        },
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
                        barWidth:20,
                        data:qc
                    },
                ]
            };
            chart2.setOption(option2);
            //左下2
            var data2 = [26000, 20373, 15895, 24040]
            var all = 112308;
            var indicator= [
                {text: '小于20岁', max: 30000},
                {text: '20~29岁', max: 30000},
                {text: '30~39岁', max: 30000},
                {text: '40岁以上', max: 30000}
            ];
            var chart3 = echarts.init(document.getElementById('chart3'));
            var option3 =  {
                backgroundColor:null,
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    left: 'center',
                    data: ['年龄'],
                    show:false
                },
                radar: [
                    {
                        indicator: indicator,
                        nameGap: 10,
                        // 指示器名称和指示器轴的距离。[ default: 15 ]
                        name: { // (圆外的标签)雷达图每个指示器名称的配置项。
                            formatter: function(param){
                                console.log(param)
                                for(var i = 0; i < indicator.length; i++){
                                    if(param == indicator[i].text){
                                        return param + '\n' + '{num|' + (data2[i]/10000).toFixed(1) + '万人' + '}'
                                               + '\n' + '{per|' + (data2[i]/all*100).toFixed(0) + '%' + '}'
                                    }
                                 }
                            },
                            textStyle: {
                                fontSize: 12,
                                color: '#fff',
                                rich:{
                                    num:{
                                        color:'#22f2fa'
                                    },
                                    per:{
                                        color:'#f5ef97'
                                    }
                                }
                            }
                        },
                        center: ['50%', '50%'],
                        radius: 60,
                        axisLine: { // (圆内的几条直线)坐标轴轴线相关设置
                            lineStyle: {
                                color: '#1b3b75',
                                // 坐标轴线线的颜色。
                                width: 1,
                                // 坐标轴线线宽。
                                type: 'dashed',
                                // 坐标轴线线的类型。
                            }
                        },
                        splitLine: { // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
                            lineStyle: {
                                color: '#1b3b75',
                                // 分隔线颜色
                                width: 1,
                                // 分隔线线宽
                                type:'dashed'
                            }
                        },
                        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                            show: true,
                            areaStyle: { // 分隔区域的样式设置。
                                color: null,
                                // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                            }
                        },
                        shape: 'circle',
                    },
                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        lineStyle: { // 单项线条样式。
                            normal: {
                                opacity: 0.5, // 图形透明度
                                color:'#32d3ec'
                            }
                        },
                        itemStyle: { // 单个拐点标志的样式设置。
                            normal: {
                                lineStyle: {
                                    width: 1
                                },
                               color: '#32d3ec',
                                // 拐点的描边颜色。[ default: '#000' ]
                                // borderWidth: .5,
                                // 拐点的描边宽度，默认不描边。[ default: 0 ]
                            }
                        },
                        areaStyle: {
                            normal:{
                                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [{ 

                                    offset: 0,
                                    color: 'rgba(52,205,234,0.8)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(52,205,234,0.1)'
                                }])
                    
                            }
                        },
                        
                        data: [
                            {
                                value: data2,
                                name: '年龄'
                            }
                        ]
                    },
                    
                ]
            };
            chart3.setOption(option3);

            //中下1
            var chart5 =echarts.init(document.getElementById('chart5'));
            var option5 = {
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
                    data: ['通过人数', '未通过人数'],
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
                        data: ['2013','2014','2015','2016','2017','2018','2019','2020'],
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
                        name: '人数（单位：千人）',
                        nameTextStyle: {    // 名称样式
                            fontSize: 12,
                            color: '#ffffff',
                            fontWeight: 'normal',
                            padding: [30, 0, 8, 30]    // 四个数字分别为上右下左与原位置距离
                            // fontWeight: 'bold'
                        },
                        min: 0,
                        max: 80,
                        interval: 20,
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
                        name: '通过人数',
                        type: 'bar',
                        label:{
                            show:true,
                            position:'top',
                            textStyle:{
                                color:'#1be4d9',
                                fontSize:12
                            }
                        },
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
                        barWidth:20,
                        data: [44,55,66,42,33,44,49,56]
                    },
                    {
                        name: '未通过人数',
                        type: 'bar',
                        label:{
                            show:true,
                            position:'top',
                            textStyle:{
                                color:'#ff41ba',
                                fontSize:12
                            }
                        },
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
                        barWidth:20,
                        data:[15,25,23,19,13,22,19,20]
                    },
                ]
            };
            chart5.setOption(option5);

             //中下2
             console.log(res.prove)
             var zs = 0;
             var data = [],per = [];
             for (var i = 0; i < res.prove.length; i++) {
                 data.push(res.prove[i].sl)
             }
             data = data.slice(1, 7)
             for(var i = 0; i < data.length; i++){
                 zs= zs + data[i]
             }
             console.log(zs)
             for(var i = 0; i < data.length; i++){
                //  console.log(data[i]/zs )
                 per.push((data[i]/zs * 100).toFixed(0))
             }
             console.log(per)
             console.log(data)
             var className = ['考试报名', '认定报名', '缴费办理', '打印委托函', '报名审核','材料审核'];
             var defaultData = [40000, 40000, 40000, 40000, 40000, 40000];
             var chart6 = echarts.init(document.getElementById('chart6'));
             var option6 = {
                 grid: {
                     left: '2%',
                     right: '0%',
                     bottom: '1%',
                     top: '8%',
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
                     max: 10000,
                     min: 0,
                     interval: 2000
                 },
                 yAxis: [{
                     type: 'category',
                    //  name: '数量（单位：份）',
                    //  nameLocation: 'start',
                    //  nameTextStyle: {
                    //      color: '#fff',
                    //      padding: [0, 20, 0, -60]
                    //  },
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
                     name: '业务经办人次',
                     type: 'bar',
                     zlevel: 1,
                     label: {
                         show: true,
                         position: 'right',   //---相对位置
                         formatter:function(param){
                             console.log(param)
                                return param.value + '   ' + per[param.dataIndex] + '%' 
                         },
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
                                 color: '#17448b'
                             }, {
                                 offset: 1,
                                 color: '#417ddd'
                             }]),
                             // color: colorList
                         },
                     },
                     barWidth: 20,
                     barCategoryGap: 32,       //---柱形间距
                     data: data
                 },
                 {
                     name: '背景',
                     type: 'bar',
                     barWidth: 20,
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
             chart6.setOption(option6);
             //中下3  一共两个
             var data1= [{name:'人数:',value:4485}];
             var chart71 = echarts.init(document.getElementById('chart7-1'))
             var option71 = {
                backgroundColor:null,
                yAxis: {
                    type: 'category',
                     name:'职称考试',
                        nameTextStyle:{
                          color:'#fff'  ,
                          fontSize:14,
                          padding:[-100,145,30,0]
                        },
                        nameLocation:'top',         //---轴名称相对位置value
                        nameGap:60,                 //---坐标轴名称与轴线之间的距离
                    axisLine: {
                        show: false, //坐标线
                    },
                    axisTick: {
                        show: false, //小横线
                    },
                    axisLabel: {
                        formatter:function(params){
                            console.log(params)
                            return '{name|' + data1[0].name+ '}'+ '  ' +'{num|'+params+ '}'
                        },
                        textStyle:{
                            color:'#2bd5fb',
                            rich:{
                                name:{
                                    fontSize:14,
                                },
                                num:{
                                    fontSize:22
                                }
                            }
                        },
                        color: '#999', //坐标轴字颜色
                    },
                    data:data1
                },
            
                xAxis: {
                    show: false,
                    max: 10000,
                    min:0,
                    interval:1000
                },
                grid: {
                    top: '45%',
                    right: '10%',
                    left: '28%',
                    bottom: '40', //图表尺寸大小
                },
                animationDuration: 3000,
                series: [
                    {
                        type: 'bar',
                        barWidth: '20px',
                        zlevel: 1,
                       top:'20%',
                        label: {
                            show: true,
                            position: 'right', //每一条的数据位置
                            padding: [-16, 30, 0, -12],
                            formatter: (params) => {
                                return '◆' + params.value;
                            },
                            textStyle: {
                                color: '#red',
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#1a809a'
                                }, {
                                    offset: 1,
                                    color: '#12bab0'
                                }]),
                                barBorderRadius: [5, 0,0, 5], //圆角大小
                                // shadowBlur: 10,
                                // shadowColor: null,
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                            },
                        },
                        data: [4485],
                    },
                    {
                        name: '背景',
                        type: 'bar',
                        barWidth: 20,
                        barGap: '-100%',
                        data: defaultData,
                        itemStyle: {
                            normal: {
                                color: '#000000',
                                barBorderRadius: [5, 0,0, 5], //圆角大小
                            }
                        },
                    },
                ],
            };
            chart71.setOption(option71)            

            //中下3第二个
            var data1= [{name:'人数:',value:5515}];
            var chart72 = echarts.init(document.getElementById('chart7-2'))
            var option72 = {
               backgroundColor: null,
               yAxis: {
                   type: 'category',
                    name:'职称认定',
                       nameTextStyle:{
                         color:'#fff'  ,
                         fontSize:14,
                         padding:[-100,145,30,0]
                       },
                       nameLocation:'top',         //---轴名称相对位置value
                       nameGap:60,                 //---坐标轴名称与轴线之间的距离
                   axisLine: {
                       show: false, //坐标线
                   },
                   axisTick: {
                       show: false, //小横线
                   },
                   axisLabel: {
                       formatter:function(params){
                           console.log(params)
                           return '{name|' + data1[0].name+ '}'+ '  ' +'{num|'+params+ '}'
                       },
                       textStyle:{
                           color:'#2bd5fb',
                           rich:{
                               name:{
                                   fontSize:14,
                               },
                               num:{
                                   fontSize:22
                               }
                           }
                       },
                       color: '#999', //坐标轴字颜色
                   },
                   data:data1
               },
           
               xAxis: {
                   show: false,
                   max: 10000,
                   min:0,
                   interval:1000
               },
               grid: {
                   top: '45%',
                   right: '10%',
                   left: '28%',
                   bottom: '40', //图表尺寸大小
               },
               animationDuration: 3000,
               series: [
                   {
                       type: 'bar',
                       barWidth: '20px',
                       zlevel:1,
                      top:'20%',
                       label: {
                           show: true,
                           position: 'right', //每一条的数据位置
                           padding: [-16, 30, 0, -12],
                           formatter: (params) => {
                               return '◆' + params.value;
                           },
                           textStyle: {
                               color: '#red',
                           },
                       },
                       itemStyle: {
                           normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#b65065'
                            }, {
                                offset: 1,
                                color: '#a02386'
                            }]),
                               barBorderRadius: [5, 0, 0, 5], //圆角大小
                           },
                       },
                       data: [5515],
                   },
                   {
                    name: '背景',
                    type: 'bar',
                    barWidth: 20,
                    barGap: '-100%',
                    data: defaultData,
                    itemStyle: {
                        normal: {
                            color: '#000000',
                            barBorderRadius: [5, 0,0, 5], //圆角大小
                        }
                    },
                },
               ],
           };
           chart72.setOption(option72);
            
           //右上
           var legends = ['正常退休', '特殊工种退休', '视同退休'];
            var colors = ['#b9408e', '#3346a5', '#00c6ac'].reverse();
            var zctx = 0, zctxtg = 0;
            var gztx = 0, gztxtg = 0;
            var sttx = 0, sttxtg = 0;
                for(var i = 0; i < res.retire.length; i++){
                    if(res.retire[i].ywlx == '特殊工种退休'){
                        gztx = gztx + res.retire[i].zrs
                        zctxtg = zctxtg + res.retire[i].blzrs
                    }
                }
                for(var i = 0; i < res.retire.length; i++){
                    if(res.retire[i].ywlx == '正常退休'){
                        zctx = zctx + res.retire[i].zrs
                        gztxtg = gztxtg + res.retire[i].blzrs
                    }
                }
                for(var i = 0; i < res.retire.length; i++){
                    if(res.retire[i].ywlx != '特殊工种退休'&& res.retire[i].ywlx != '正常退休'){
                        sttx = sttx + res.retire[i].zrs
                        sttxtg = sttxtg + res.retire[i].blzrs
                    }
                }
                var all = zctx + gztx+sttx;
                console.log(all)
            var data = [{
                name: '正常退休',
                value: zctx
            },
            {
                name: '特殊工种退休',
                value: gztx
            },
            {
                name: '视同退休',
                value: sttx
            },
            ];
            var data2 = [{
                name: '正常退休',
                value: zctxtg
            },
            {
                name: '特殊工种退休',
                value: gztxtg
            },
            {
                name: '视同退休',
                value: sttxtg
            },
            ];

           var chart8 = echarts.init(document.getElementById('chart8'))
            var option8 = {
                //   backgroundColor: "#0f375f",
                color: colors,
                // 中心标题&图片
                graphic: [
                    {
                        type: 'image',
                        style: {
                            image: "./imgs/形状594.png", // 你的图片地址
                            width: 26,
                            height: 30,
                            color: '#fff'
                        },
                        left: '22%',
                        top: '40%'
                    },

                    {
                        type: 'text',
                        left: '22.5%',
                        top: '57%',
                        style: {
                            text: '退休',
                            fill:'#fff',
                            width: 30,
                            height: 30,
                            fontSize: 12
                        }
                    }
                ],
                legend: {
                    orient: 'vertical',
                    top: "15%",
                    right: "1%",
                    left: "60%",
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
                        console.log(param)
                        // console.log(data)
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].name == param && data2[i].name == param) {
                                console.log(data[i].value)
                                return '{name|' + param + '}' + '\n' + '{num|受理数:' + data[i].value + '}' + '   '
                                    + '{per|通过数' + data2[i].value + '}'
                            }
                        }
                    },
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [{
                    name: '通过率',
                    type: 'pie',
                    radius: ['30%', '45%'],
                    center: ['25%', '50%'],
                    //   roseType: 'radius',
                    minShowLabelAngle: 60,
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            fontSize: 16,
                            color: '#21e5e8',
                            formatter: (params) => {
                                console.log(params)
                                console.log(data[params.dataIndex])
                                return '通过率'+ '\n' + (params.value / data[params.dataIndex].value * 100).toFixed(2) + '%'
                            }
                        }
                    },
                    labelLine: {
                        show: false,
                        length: 0.5,
                        length2: 20,
                        smooth: false
                    },
                    data: data2
                },
                {
                    name: '受理率',
                    type: 'pie',
                    radius: ['50%', '65%'],
                    center: ['25%', '50%'],
                    //   roseType: 'radius',
                    minShowLabelAngle: 60,
                    label: {
                        
                        normal: {
                            show: true,
                            position: 'outside',
                            fontSize: 16,
                            color: '#21e5e8',
                            formatter: (params) => {
                                return '受理数' + '\n' + (params.value / all * 100).toFixed(2) + '%'
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
            chart8.setOption(option8);

            //右中
            var legends = ['一胎登记', '二胎登记', '婚育证明', '独子证'];
            var colors = ['#b9408e', '#3346a5', '#0b9e9e', '#00c6ac'].reverse();
            console.log(res.plan)
            var ytdj = res.plan[0].ytdj;
            var etdj = res.plan[0].etdj;
            var hyzm = res.plan[0].ywzs;
            var dzz = res.plan[0].ytdj;
            var allNub = ytdj + etdj + hyzm + dzz;
            console.log(allNub)
            var data = [{
                name: '一胎登记',
                value: ytdj
            },
            {
                name: '二胎登记',
                value: etdj
            },
            {
                name: '婚育证明',
                value: hyzm
            },
            {
                name: '独子证',
                value: dzz
            },
            ];

            var chart9 = echarts.init(document.getElementById('chart9'))
            var option9 = {
                
                color: colors,
                legend: {
                    orient: 'vertical',
                    top: "center",
                    left: "60%",
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
                    center: ['25%', '50%'],
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
            chart9.setOption(option9);

            //水滴图
            var value = 195;
            var chart101 = echarts.init(document.getElementById('chart101'));
            var option101 = {
                title: [
                    {
                        text: '{num|' + (value).toFixed(0)+ '}' + '\n' + '\n' + '{text|' +'通过数' + '}',
                        left: '50%',
                        top: '40%',
                        textAlign: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: '400',
                            color: '#8b8d90',
                            textAlign: 'center',
                            // textBorderColor: 'rgba(0, 0, 0, 0)',
                            // textShadowColor: '#000',
                            // textShadowBlur: '0',
                            // textShadowOffsetX: 0,
                            // textShadowOffsetY: 1,
                            rich:{
                                text:{
                                    fontSize:12,
                                    padding:[0,0,60,0],
                                    
                                }
                            }
                        },
                    },
                ],
                polar: {
                    radius: ['43%', '40%'],
                    center: ['50%', '50%'],
                },
                angleAxis: {
                    max: 100,
                    clockwise: false,
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                    },
                },
                radiusAxis: {
                    type: 'category',
                    name:'你好',
                    show: true,
                    axisLabel: {
                        show: true,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
                series: [
                    {
                        type: 'liquidFill',
                        radius: '40%',
                        z: 1,
                        center: ['50%', '50%'],
                        amplitude: 20,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [
                                {
                                    offset:0,
                                    color: '#8e5139',
                                },
                                {
                                    offset: 1,
                                    color: '#94802b',
                                },
                            ],
                            globalCoord: false,
                        },
                        data: [
                            0.3,
                            {
                                value: 0.25,
                                direction: 'left',
                            },
                        ],
                        backgroundStyle: {
                            borderWidth: 1,
                            color: 'transparent',
                        },
                        label: {
                            normal: {
                                formatter: '',
                            },
                        },
                        outline: {
                            show: true,
                            itemStyle: {
                                borderWidth: 0,
                            },
                            borderDistance: 0,
                        },
                    },
                    {
                        name: '',
                        type: 'bar',
                        roundCap: true,
                        z: 2,
                        showBackground: true,
                        backgroundStyle: {
                            color: '#15181e',
                        },
                        data: [70],
                        coordinateSystem: 'polar',
                        itemStyle: {
                            normal: {
                                width:1,
                                color: new echarts.graphic.LinearGradient(0, 0, .5, 1, [
                                    {
                                        offset: 0,
                                        color: '#eda244',
                                    },
                                    {
                                        offset: .7,
                                        color: '#f88c54',
                                    },
                                    {
                                        offset: 1,
                                        color: '#e6e02d',
                                    },
                                ]),
                            },
                        },
                    },
                ],
            };
            chart101.setOption(option101)
            
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.responseText); 
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
            console.log("获取失败")
        }
    })
})