$(function(){
    $.ajax({
        type:'get',
        url:'./json/data.JSON',
        data:'',
        async:true,
        dataType:"json",
        success:function(res){
            console.log(res)
            //在库人数 缴费金额 缴费人数  占比
        //     var zkrs =[],ycs23t=[], js=[], rszb = [];
        //     for(var i = 0; i < res.floatSocial.length; i++){
        //         ycs23t.push((res.floatSocial[i].ycs23t/10000).toFixed(0));
        //         zkrs.push((res.peopleSocial[i].hj/10000).toFixed(0))
        //         js.push((res.floatSocial[i].js/10000).toFixed(3))
        //         rszb.push((res.floatSocial[i].js/res.peopleSocial[i].hj *100).toFixed(2))
        //     }
        //     zkrs = zkrs.reverse();
        //     ycs23t = ycs23t.reverse();
        //     js = js.reverse();
        //     rszb = rszb.reverse();

        //     var chart1 = echarts.init(document.getElementById('lnsbdl'));
        //     var option1 =  {
        //         tooltip: {
        //             trigger: 'axis',
        //             axisPointer: {
        //                 type: 'cross',
        //                 snap: true,
        //                 crossStyle: {
        //                     color: '#999999'
        //                 }
        //             },
        //             backgroundColor: '#020a17', // 提示框浮层的背景颜色
        //             borderColor: '#020a17', // 提示框浮层的边框颜色
        //             borderWidth:0,
        //             textStyle: { // 提示框浮层的文本样式。
        //                 color: '#fff',
        //                 fontStyle: 'normal',
        //                 fontWeight: 'normal',
        //                 fontFamily: 'sans-serif',
        //                 fontSize: 12,
        //             },
        //             formatter:function(arg){
        //                 console.log(arg);
        //                 return arg[0].name + "<br />" + "代收缴资金：" + arg[2].value + "万元" + "<br />" + "缴费人数：" + arg[0].value + "千人"
        //             }
        //         },
        //         grid:{
        //             top:50,
        //             left:59,
        //             bottom:30

        //         },
        //         toolbox: {
        //             feature: {
        //                 dataView: {show: false, readOnly: false},
        //                 magicType: {show: false, type: ['line', 'bar']},
        //                 restore: {show: false},
        //                 saveAsImage: {show: false}
        //             }
        //         },
        //         legend: {
        //             data: ['代收资金','缴费人数', '在库人数', '所占比例（100%）'],
        //             itemHeight:8,
        //             itemWidth:8,
        //             textStyle:{
        //                 fontSize:12,
        //                 color:'#ffffff'
        //             },
        //             left:'1%'
        //         },
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        //                 axisPointer: {
        //                     type: 'shadow'
        //                 },
        //                 axisLabel: {        //x轴标签的设置 
        //                    // formatter: '{value}',
        //                     fontSize:12,
        //                     color:'#ffffff',
        //                     fontWeight: 'normal',
        //                     margin:9
        //                 },
        //                 axisLine:{          //坐标轴
        //                     show:true,
        //                     lineStyle:{
        //                         height:1,
        //                         color:'#235198',
        //                     }
        //                 },
        //                 axisTick:{
        //                     show:false,      //坐标轴的刻度，
        //                     linestyle:{
        //                         height:1,
        //                         color:'#235198'
        //                     }
        //                 },
        //                 splitLine:{         //区域中的分割线是否显示
        //                     show:false
        //                 }
        //             }
        //         ],
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 // name: '金额（万元）',
        //                 // nameTextStyle: {    // 名称样式
        //                 //     fontSize: 12,
        //                 //     color:'#ffffff',
        //                 //     fontWeight: 'normal',
        //                 //     padding: [0, 0, 17, -10]    // 四个数字分别为上右下左与原位置距离
        //                 //     // fontWeight: 'bold'
        //                 // },
        //                 min: 0,
        //                 max: 45000,
        //                 interval: 9000,
        //                 axisLabel: {        //x轴标签的设置 
        //                     formatter: '{value}',
        //                     fontSize:12,
        //                     color:'#ffffff',
        //                     fontWeight: 'normal',
        //                 },
        //                 splitLine:{     //区域中的分隔线是否显示 
        //                     show:false
        //                 }
        //             },
        //             {
        //                 type: 'value',
        //                 // name: '金额（万元）',
        //                 // nameTextStyle: {    // 名称样式
        //                 //     fontSize: 12,
        //                 //     color:'#ffffff',
        //                 //     fontWeight: 'normal',
        //                 //     padding: [0, -40, 17, 40]    // 四个数字分别为上右下左与原位置距离
        //                 //     // fontWeight: 'bold'
        //                 // },
        //                 min: 0,
        //                 max: 100,
        //                 interval: 20,
        //                 axisLabel: {        //x轴标签的设置 
        //                     formatter: '{value}%',
        //                     fontSize:12,
        //                     color:'#ffffff',
        //                     fontWeight: 'normal',
        //                 },
        //                 splitLine:{
        //                     show:true,
        //                     lineStyle:{
        //                         color:'#14325f',
        //                         height:0.5
        //                     }
        //                 }
        //             }
        //         ],
        //         series: [
        //             {
        //                 name: '缴费人数',
        //                 type: 'bar',
        //                 // areaStyle:{
        //                 //     backgroundColor:'#ffffff'
        //                 // },
        //                 itemStyle:{
        //                     normal:{
        //                         //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
        //                         color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
        //                             offset: 0,
        //                             color: '#214072'
        //                         }, {
        //                             offset: 1,
                                    
        //                             color: '#12bab0'
        //                         }])
            
        //                     }
        //                 },
        //                 data: js
        //             },
        //             {
        //                 name: '在库人数',
        //                 type: 'bar',
        //                 itemStyle:{
        //                     normal:{
        //                         //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
        //                         color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
        //                             offset: 0,
        //                             color: '#224072'
        //                         }, {
        //                             offset: 1,
                                    
        //                             color: '#c4477e'
        //                         }])
            
        //                     }
        //                 },
        //                 data:zkrs
        //             },
        //             {
        //                 name: '代收资金',
        //                 type: 'bar',
        //                 itemStyle:{
        //                     normal:{
        //                         color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
        //                             offset: 0,
        //                             color: '#17448b'
        //                         }, {
        //                             offset: .5,
                                    
        //                             color: '#417ddd'
        //                         }])
        //                     }
        //                 },
                    
        //                 // smooth:true,
        //                 // yAxisIndex: 1,
        //                 data:ycs23t
        //             },
        //             {
        //                 name: '所占比例（100%）',
        //                 type: 'line',
        //                 itemStyle:{
        //                     color:'#e85274'
        //                 },
        //                 lineStyle:{
        //                     color:'#ff7c1b',
        //                     type:'dashed',       //线条的样式
        //                     width:1
        //                 },
        //                 smooth:true,
        //                 yAxisIndex: 1,
        //                 data:rszb
        //             }
        //         ]
        //     };
        //     chart1.setOption(option1);
        //      //左上第二个
        //    var legends = ['代收养老保险', '代收医疗保险'];
        //    var colors = ['#b9408e', '#3346a5'].reverse();
        //    var aae036 = 2020;
        //    var yldsje , ybdsje;

        //        for(var i = 0; i < res.floatAgency.length; i++){
        //            if(res.floatAgency[i].aae036 == aae036){
        //                yldsje = res.floatAgency[i].yldsje;
        //                ybdsje = res.floatAgency[i].ybdsje;
        //            }
        //        }
        //        var all = yldsje + ybdsje;
        //        console.log(all)
        //    var data = [{
        //        name: '代收养老保险',
        //        value: yldsje
        //    },
        //    {
        //        name: '代收医疗保险',
        //        value: ybdsje
        //    }
        //    ];

        //   var chart2 = echarts.init(document.getElementById('chart2'))
        //    var option2 = {
        //        //   backgroundColor: "#0f375f",
        //        color: colors,
        //        // 中心标题&图片
        //        graphic: [
        //            {
        //                type: 'text',
        //                left: '18%',
        //                top: '38%',
        //                style: {
        //                    text: '{text|'+'总金额' +'}'+ '\n' + '{wan|' + ' (万元)'+ '}' +'\n\n' + '{num|' +(all/10000).toFixed(1) + '}',
        //                    fill:'#fff',
        //                    width: 30,
        //                    height: 30,
        //                    fontSize: 12,
        //                    rich:{
        //                        num:{
        //                         fill:'#21e5e8',
        //                         fontSize:22,
        //                         padding:[0,50,0,0]   //xia 
        //                        },
        //                        wan:{
        //                            padding:[5,0,0,3]
        //                        },
        //                        text:{
        //                            padding:[5,5,0,5]
        //                        }
        //                    }
        //                }
        //            }
        //        ],
        //        legend: {
        //            orient: 'vertical',
        //            top: "15%",
        //            right: "1%",
        //            left: "60%",
        //            itemGap: 20,
        //            width: 50,
        //            icon: 'circle', //设置图例小图标的样式，这里控制
        //            itemWidth: 6,
        //            itemHeight: 6,
        //            textStyle: {
        //                color: "#fff",
        //                fontSize: 12,
        //                rich: {
        //                    name: {
        //                        padding: [35.0, 0, 0]
        //                    },
        //                    num: {
        //                        color: '#22f2fa',
        //                        padding: [10, 0, 10, 0]         //上左下右？
        //                    },
        //                    per: {
        //                        color: '#f5ef97'
        //                    }

        //                }
        //            },
        //            data: legends,
        //            formatter: function (param) {
        //                // return '{a|text}{a|   }{b|' +  name + '}'
        //                console.log(param)
        //                // console.log(data)
        //                for (var i = 0; i < data.length; i++) {
        //                    if (data[i].name == param && data[i].name == param) {
        //                        console.log(data[i].value)
        //                        return '{name|' + param + '}' + '\n' + '{num|金额:' + (data[i].value/10000).toFixed(0)  +'万元'+ '}' + '   '
        //                            + '\n' + '{per|占比' + (data[i].value/all*100).toFixed(0) + '%' + '}'
        //                    }
        //                }
        //            },
        //        },
        //        tooltip: {
        //            trigger: 'item',
        //            formatter: '{a} <br/>{b} : {c} ({d}%)'
        //        },
        //        series: [{
        //            name: '通过率',
        //            type: 'pie',
        //            radius: ['40%', '55%'],
        //            center: ['25%', '50%'],
        //            //   roseType: 'radius',
        //            minShowLabelAngle: 60,
        //            label: {
        //                normal: {
        //                    show: false,
        //                    position: 'outside',
        //                    fontSize: 16,
        //                    color: '#21e5e8',
        //                    formatter: (params) => {
        //                        console.log(params)
        //                        console.log(data[params.dataIndex])
        //                        return '通过率'+ '\n' + (params.value / data[params.dataIndex].value * 100).toFixed(2) + '%'
        //                    }
        //                }
        //            },
        //            labelLine: {
        //                show: false,
        //                length: 0.5,
        //                length2: 20,
        //                smooth: false
        //            },
        //            data: data
        //        }
        //        ]
        //    };
        //    chart2.setOption(option2);

        //     //左中2
        //     console.log(res.floatServe)
        //     var zs = 0;
        //     var data = [],per = [];
        //     for (var i = 0; i < res.floatServe.length; i++) {
        //         data.push(res.floatServe[i].sl)
        //     }
        //     data = data.slice(1, 9)
        //     for(var i = 0; i < data.length; i++){
        //         zs= zs + data[i]
        //     }
        //     console.log(zs)
        //     for(var i = 0; i < data.length; i++){
        //        //  console.log(data[i]/zs )
        //         per.push((data[i]/zs * 100).toFixed(0))
        //     }
        //     console.log(per)
        //     console.log(data)
        //     var className = ['社保咨询', '住房公积金', '4050补贴', '办理证卡业务', '医疗保险业务','养老保险业务','退休业务','其他业务'];
        //     var defaultData = [100, 100, 100, 100, 100, 100,100,100];
        //     var chart3 = echarts.init(document.getElementById('chart3'));
        //     var option3 = {
        //         grid: {
        //             left: '2%',
        //             right: '0%',
        //             bottom: '1%',
        //             top: '8%',
        //             containLabel: true
        //         },
        //         tooltip: {
        //             trigger: 'axis',
        //             axisPointer: {
        //                 type: 'none'
        //             },
        //             formatter: function (params) {
        //                 return params[0].name + '<br/>' +
        //                     "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
        //                     // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
        //                     params[0].seriesName + ' : ' + params[0].value
        //             }
        //         },
        //         // backgroundColor: 'rgb(20,28,52)',
        //         xAxis: {
        //             show: false,
        //             type: 'value',
        //             max: 100,
        //             min: 0,
        //             interval: 10
        //         },
        //         yAxis: [{
        //             type: 'category',
        //            //  name: '数量（单位：份）',
        //            //  nameLocation: 'start',
        //            //  nameTextStyle: {
        //            //      color: '#fff',
        //            //      padding: [0, 20, 0, -60]
        //            //  },
        //             inverse: true,
        //             axisLabel: {
        //                 show: true,
        //                 textStyle: {
        //                     color: '#fff'
        //                 },
        //             },
        //             splitLine: {
        //                 show: false
        //             },
        //             axisTick: {
        //                 show: false
        //             },
        //             axisLine: {
        //                 show: false
        //             },
        //             data: className
        //         }, {
        //             type: 'category',
        //             inverse: true,
        //             axisTick: 'none',
        //             axisLine: 'none',
        //             show: false,
        //             axisLabel: {
        //                 textStyle: {
        //                     color: '#ffffff',
        //                     fontSize: '12',
        //                 },
        //                 formatter: function (value) {
        //                     return value;
        //                 },
        //             },
        //             data: data
        //         }],
        //         series: [{
        //             name: '业务经办人次',
        //             type: 'bar',
        //             zlevel: 1,
        //             label: {
        //                 show: true,
        //                 position: 'right',   //---相对位置
        //                 formatter:function(param){
        //                     console.log(param)
        //                        return param.value + '   ' + per[param.dataIndex] + '%' 
        //                 },
        //                 textStyle: {
        //                     color: '#2ad1f7',
        //                     fontSize: 12
        //                 }
        //             },
        //             itemStyle: {
        //                 normal: {
        //                     barBorderRadius: 0,
        //                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        //                         offset: 0,
        //                         color: '#1a809a'
        //                     }, {
        //                         offset: 1,
        //                         color: '#12bab0'
        //                     }]),
        //                     // color: colorList
        //                 },
        //             },
        //             barWidth: 20,
        //             barCategoryGap: 32,       //---柱形间距
        //             data: data
        //         },
        //         {
        //             name: '背景',
        //             type: 'bar',
        //             barWidth: 20,
        //             barGap: '-100%',
        //             data: defaultData,
        //             itemStyle: {
        //                 normal: {
        //                     color: '#08162f',
        //                     barBorderRadius: 0,
        //                 }
        //             },
        //         },
        //         ]
        //     };
        //     chart3.setOption(option3);

            //左下第二个
            var data2 = [26000, 20373, 15895, 24040]
            var all = 112308;
            var indicator= [
                {text: '小于20岁', max: 30000},
                {text: '20~29岁', max: 30000},
                {text: '30~39岁', max: 30000},
                {text: '40岁以上', max: 30000}
            ];
            var chart4 = echarts.init(document.getElementById('chart4'));
            var option4 =  {
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
            chart4.setOption(option4);

            //左下第三个
           
            // var legends = [];
            // var data = [];
            // var zb = "1%";
            // for(var i = 0; i < res.socialServe.length;i++){
            //     if(res.socialServe[i].ywzb > zb){
            //         legends.push(res.socialServe[i].gnname);
            //         data.push(res.socialServe[i].sl)
            //     }
            // }
            // data = data.splice(0,6)
            // legends = legends.splice(0,6)
            // function sortnum(a, b){
            //     return a - b
            // }
            // data = data.sort(sortnum).reverse();
            // console.log(data)
            // console.log(legends)
            // var all = 0;
            // for(var i = 0; i < data.length; i++){
            //     all = all + data[i]
            // }
            // var colors = ['#b9408e', '#3346a5', '#0b9e9e', '#00c6ac','#7d2fba','#35739f'].reverse();
            // var data2 = [{
            //     name: legends[0],
            //     value: data[0]
            // },
            // {
            //     name: legends[1],
            //     value: data[1]
            // },
            // {
            //     name: legends[2],
            //     value: data[2]
            // },
            // {
            //     name: legends[3],
            //     value: data[3]
            // },
            // {
            //     name: legends[4],
            //     value: data[4]
            // },
            // {
            //     name: legends[5],
            //     value: data[5]
            // },
            // ];

            // var chart5 = echarts.init(document.getElementById('chart5'))
            // var option5 = {
                
            //     color: colors,
            //     legend: {
            //         orient: 'vertical',
            //         top: "8%",
            //         left: "60%",
            //         itemGap: 20,
            //         width: 50,
            //         icon: 'circle', //设置图例小图标的样式，这里控制
            //         itemWidth: 6,
            //         itemHeight: 6,
            //         textStyle: {
            //             color: "#fff",
            //             fontSize: 12,
            //             rich: {
            //                 name: {
            //                     padding: [0.0, 0, 0]
            //                 },
            //                 num: {
            //                     color: '#22f2fa',
            //                     padding: [0, 0, 0, 0]         //上左下右？
            //                 },

            //             }
            //         },
            //         data: legends,
            //         formatter: function (param) {
            //             console.log(param)
            //             // console.log(data)
            //             for (var i = 0; i < data2.length; i++) {
            //                 if (data2[i].name == param) {
            //                     console.log(data2[i].value)
            //                      return '{name|' + param + '：'+ '}' + '{num|' + (data2[i].value/all*100).toFixed(0) + '%' + '}'
            //                 }
            //             }
            //         },
            //     },
            //     tooltip: {
            //         trigger: 'item',
            //         formatter: '{a} <br/>{b} : {c} ({d}%)'
            //     },
            //     series: [{
            //         name: '半径模式',
            //         type: 'pie',
            //         radius: [30, 90],
            //         center: ['25%', '60%'],
            //         roseType: 'area',
            //         // minShowLabelAngle: 60,
            //         label: {
            //             show: false,
            //             // normal: {
            //             //     position: 'outside',
            //             //     fontSize: 16,
            //             //     color: '#21e5e8',
            //             //     formatter: (params) => {
            //             //         return params.name + '\n' + (params.value / 10000 * 100).toFixed(2) + '%'
            //             //     }
            //             // }
            //         },
            //         labelLine: {
            //             length: 0.5,
            //             length2: 20,
            //             smooth: false
            //         },
            //         data: data2
            //     }]
            // };
            // chart5.setOption(option5);
            // //右上
            // var chart6 = echarts.init(document.getElementById('chart6'));
            // var option6 = {
            //     tooltip: {
            //         trigger: 'axis',
            //         axisPointer: {
            //             type: 'cross',
            //             label: {
            //                 backgroundColor: '#6a7985'
            //             }
            //         }
            //     },
            //     legend: {
            //         data: ['养老', '医疗'],
            //         icon:'rect',
            //         itemHeight: 2,
            //         itemWidth: 8,
            //         textStyle: {
            //             fontSize: 12,
            //             color: '#ffffff'
            //         },
            //         right: '5%',
            //         top: 10
            //     },
            //     grid: {
            //         left: '3%',
            //         right: '4%',
            //         bottom: '3%',
            //         containLabel: true
            //     },
            //     xAxis: [
            //         {
            //             type: 'category',
            //             boundaryGap: false,
            //             axisPointer: {
            //                 type: 'shadow'
            //             },
            //             axisLabel: {        //x轴标签的设置 
            //                 // formatter: '{value}',
            //                 fontSize: 12,
            //                 color: '#ffffff',
            //                 fontWeight: 'normal',
            //                 margin: 9
            //             },
            //             axisLine: {          //坐标轴
            //                 show: true,
            //                 lineStyle: {
            //                     height: 1,
            //                     color: '#235198',
            //                 }
            //             },
            //             axisTick: {
            //                 show: false,      //坐标轴的刻度，
            //                 linestyle: {
            //                     height: 1,
            //                     color: '#235198'
            //                 }
            //             },
            //             splitLine: {         //区域中的分割线是否显示
            //                 show: false
            //             },
            //             data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
            //         }
            //     ],
            //     yAxis: [
            //         {
            //             type: 'value',
            //             name:'金额（万元）',
            //             nameTextStyle: {    // 名称样式
            //                 fontSize: 12,
            //                 color: '#ffffff',
            //                 fontWeight: 'normal',
            //                 padding: [30, 0, 8, 30]    // 四个数字分别为上右下左与原位置距离
            //                 // fontWeight: 'bold'
            //             },
            //             min:0,
            //             max:400,
            //             interval:80,
            //             axisLabel: {        //x轴标签的设置 
            //                 formatter: '{value}',
            //                 fontSize: 12,
            //                 color: '#ffffff',
            //                 fontWeight: 'normal',
            //             },
            //             splitLine: {
            //                 show: true,
            //                 lineStyle: {
            //                     color: '#14325f',
            //                     height: 0.5
            //                 }
            //             }
            //         },
            //         {
            //             type:'value',
            //             show:false,
            //             name:'单位数（个）',
            //             nameTextStyle: {    // 名称样式
            //                 fontSize: 12,
            //                 color: '#ffffff',
            //                 fontWeight: 'normal',
            //                 padding: [30, 0, 8, 30]    // 四个数字分别为上右下左与原位置距离
            //                 // fontWeight: 'bold'
            //             },
            //             min: 0,
            //             max: 400,
            //             interval: 80,
            //             axisLabel: {        //x轴标签的设置 
            //                 formatter: '{value}',
            //                 fontSize: 12,
            //                 color: '#ffffff',
            //                 fontWeight: 'normal',
            //             },
            //             splitLine: {
            //                 show: true,
            //                 lineStyle: {
            //                     color: '#14325f',
            //                     height: 0.5
            //                 }
            //             }
            //         }
            //     ],
            //     series: [
            //         {
            //             name: '养老',
            //             type: 'line',
            //             stack: '金额',
            //             itemStyle:{
            //                 color:'#59bbff'
            //             },
            //             smooth:true,
            //             areaStyle: {
            //                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //                     offset: 0,
            //                     color: 'rgb(89, 187, 255,0.3)'
            //                 }, {
            //                     offset: 1,
            //                     color: 'rgb(89, 187, 255,0)'
            //                 }])
            //             },
            //             emphasis: {
            //                 focus: 'series'
            //             },
            //             data: [120, 132, 101, 134, 90, 230, 210,250,190,240]
            //         },
            //         {
            //             name: '医疗',
            //             type: 'line',
            //             stack: '数量',
            //             itemStyle:{
            //                 color:'#e85274'
            //             },
            //             smooth:true,
            //             areaStyle: {
            //                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //                     offset: 0,
            //                     color: 'rgb(232, 82, 116,0.5)'
            //                 }, {
            //                     offset: 1,
            //                     color: 'rgb(255, 70, 131,0)'
            //                 }])
            //             },
            //             emphasis: {
            //                 focus: 'series'
            //             },
            //             data: [220, 182, 191, 234, 290, 330, 310,300, 250,380]
            //         }
                    
            //     ]
            // };
            // chart6.setOption(option6)

            // //右下
            //  console.log(res.floatServe)
            //  var zs = 0;
            //  var data = [],per = [];
            //  for (var i = 0; i < res.floatServe.length; i++) {
            //      data.push(res.floatServe[i].sl)
            //  }
            //  data = data.slice(1, 10)
            //  for(var i = 0; i < data.length; i++){
            //      zs= zs + data[i]
            //  }
            //  console.log(zs)
            //  for(var i = 0; i < data.length; i++){
            //     //  console.log(data[i]/zs )
            //      per.push((data[i]/zs * 100).toFixed(0))
            //  }
            //  console.log(per)
            //  console.log(data)
            //  var className = ['医保立户', '医保关系转入', '医保关系转出', '医疗停保', '医疗年审','医疗上账','医疗退费','医疗报销','其他'];
            //  var defaultData = [100, 100, 100, 100, 100, 100,100,100,100];
            //  var chart8 = echarts.init(document.getElementById('chart8'));
            //  var option8 = {
            //      grid: {
            //          left: '2%',
            //          right: '15%',
            //          bottom: '1%',
            //          top: '8%',
            //          containLabel: true
            //      },
            //      tooltip: {
            //          trigger: 'axis',
            //          axisPointer: {
            //              type: 'none'
            //          },
            //          formatter: function (params) {
            //              return params[0].name + '<br/>' +
            //                  "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
            //                  // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
            //                  params[0].seriesName + ' : ' + params[0].value
            //          }
            //      },
            //      // backgroundColor: 'rgb(20,28,52)',
            //      xAxis: {
            //          show: false,
            //          type: 'value',
            //          max: 100,
            //          min: 0,
            //          interval: 10
            //      },
            //      yAxis: [{
            //          type: 'category',
            //         //  name: '数量（单位：份）',
            //         //  nameLocation: 'start',
            //         //  nameTextStyle: {
            //         //      color: '#fff',
            //         //      padding: [0, 20, 0, -60]
            //         //  },
            //          inverse: true,
            //          axisLabel: {
            //              show: true,
            //              textStyle: {
            //                  color: '#fff'
            //              },
            //          },
            //          splitLine: {
            //              show: false
            //          },
            //          axisTick: {
            //              show: false
            //          },
            //          axisLine: {
            //              show: false
            //          },
            //          data: className
            //      }, {
            //          type: 'category',
            //          inverse: true,
            //          axisTick: 'none',
            //          axisLine: 'none',
            //          show: false,
            //          axisLabel: {
            //              textStyle: {
            //                  color: '#ffffff',
            //                  fontSize: '12',
            //              },
            //              formatter: function (value) {
            //                  return value;
            //              },
            //          },
            //          data: data
            //      }],
            //      series: [{
            //          name: '业务经办人次',
            //          type: 'bar',
            //          zlevel: 1,
            //          label: {
            //              show: true,
            //              position: [400,0],   //---相对位置
            //              formatter:function(param){
            //                  console.log(param)
            //                     return param.value + '人次' +'   ' + per[param.dataIndex] + '%' 
            //              },
            //              textStyle: {
            //                  color: '#2ad1f7',
            //                  fontSize: 12
            //              }
            //          },
            //          itemStyle: {
            //              normal: {
            //                  barBorderRadius: 1,
            //                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                      offset: 0,
            //                      color: '#17448b'
            //                  }, {
            //                      offset: 1,
            //                      color: '#417ddd'
            //                  }]),
            //                  // color: colorList
            //              },
            //          },
            //          barWidth: 12,
            //          barCategoryGap: 32,       //---柱形间距
            //          data: data
            //      },
            //      {
            //          name: '背景',
            //          type: 'bar',
            //          barWidth: 12,
            //          barGap: '-100%',
            //          data: defaultData,
            //          itemStyle: {
            //              normal: {
            //                  color: '#08162f',
            //                  barBorderRadius: 1,
            //              }
            //          },
            //      },
            //      ]
            //  };
            //  chart8.setOption(option8);


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