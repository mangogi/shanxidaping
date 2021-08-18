$(function(){
    $.ajax({
        type:'get',
        url:'./json/data.JSON',
        data:'',
        async:true,
        dataType:"json",
        success:function(res){
            console.log(res)

            var jfje =[],jfrs=[];
            for(var i = 0; i < res.peopleSocial.length; i++){
                jfje.push((res.peopleSocial[i].jfje/10000).toFixed(2));
                jfrs.push((res.peopleSocial[i].jfrs/1000).toFixed(3))
            }
            jfje = jfje.reverse();
            jfrs = jfrs.reverse();
            console.log(jfje)

                //养老代理单位总数  社保单位代理书  每年单位代理数
            var ycs05o =[],ycs05s=[], mndws = [];
            for(var i = 0; i < res.companySocial.length; i++){
                ycs05o.push((res.companySocial[i].ycs05o/1000).toFixed(3));
                ycs05s.push((res.companySocial[i].ycs05s/1000).toFixed(3));
                mndws.push((res.companySocial[i].mndws/1000).toFixed(3))
            }
            ycs05o = ycs05o.reverse();
            ycs05s = ycs05s.reverse();
            mndws = mndws.reverse();


            var chart1 = echarts.init(document.getElementById('lnsbdl'));
            var option1 =  {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        snap: true,
                        crossStyle: {
                            color: '#999999'
                        }
                    },
                    backgroundColor: '#020a17', // 提示框浮层的背景颜色
                    borderColor: '#020a17', // 提示框浮层的边框颜色
                    borderWidth:0,
                    textStyle: { // 提示框浮层的文本样式。
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: 'sans-serif',
                        fontSize: 12,
                    },
                    formatter:function(arg){
                        console.log(arg);
                        return arg[0].name + "<br />" + "代收缴资金：" + arg[6].value + "万元" + "<br />" + "缴费人数：" + arg[0].value + "千人"
                    }
                },
                grid:{
                    top:50,
                    left:59,
                    bottom:30

                },
                toolbox: {
                    feature: {
                        dataView: {show: false, readOnly: false},
                        magicType: {show: false, type: ['line', 'bar']},
                        restore: {show: false},
                        saveAsImage: {show: false}
                    }
                },
                legend: {
                    data: ['代收资金','缴费人数', '在库人数', '基础代理单位数','社保代理单位数','养老代理单位数','代理单位数'],
                    itemHeight:8,
                    itemWidth:8,
                    textStyle:{
                        fontSize:12,
                        color:'#ffffff'
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLabel: {        //x轴标签的设置 
                           // formatter: '{value}',
                            fontSize:12,
                            color:'#ffffff',
                            fontWeight: 'normal',
                            margin:9
                        },
                        axisLine:{          //坐标轴
                            show:true,
                            lineStyle:{
                                height:1,
                                color:'#235198',
                            }
                        },
                        axisTick:{
                            show:false,      //坐标轴的刻度，
                            linestyle:{
                                height:1,
                                color:'#235198'
                            }
                        },
                        splitLine:{         //区域中的分割线是否显示
                            show:false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '人数（千人）',
                        nameTextStyle: {    // 名称样式
                            fontSize: 12,
                            color:'#ffffff',
                            fontWeight: 'normal',
                            padding: [0, 0, 17, -10]    // 四个数字分别为上右下左与原位置距离
                            // fontWeight: 'bold'
                        },
                        min: 0,
                        max: 50,
                        interval: 10,
                        axisLabel: {        //x轴标签的设置 
                            formatter: '{value}',
                            fontSize:12,
                            color:'#ffffff',
                            fontWeight: 'normal',
                        },
                        splitLine:{     //区域中的分隔线是否显示 
                            show:false
                        }
                    },
                    {
                        type: 'value',
                        name: '金额（万元）',
                        nameTextStyle: {    // 名称样式
                            fontSize: 12,
                            color:'#ffffff',
                            fontWeight: 'normal',
                            padding: [0, -40, 17, 40]    // 四个数字分别为上右下左与原位置距离
                            // fontWeight: 'bold'
                        },
                        min: 0,
                        max: 16000,
                        interval: 4000,
                        axisLabel: {        //x轴标签的设置 
                            formatter: '{value}',
                            fontSize:12,
                            color:'#ffffff',
                            fontWeight: 'normal',
                        },
                        splitLine:{
                            show:true,
                            lineStyle:{
                                color:'#14325f',
                                height:0.5
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '缴费人数',
                        type: 'bar',
                        // areaStyle:{
                        //     backgroundColor:'#ffffff'
                        // },
                        itemStyle:{
                            normal:{
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                                    offset: 0,
                                    color: '#214072'
                                }, {
                                    offset: 1,
                                    
                                    color: '#12bab0'
                                }])
            
                            }
                        },
                        data: jfrs
                    },
                    {
                        name: '在库人数',
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                                    offset: 0,
                                    color: '#224072'
                                }, {
                                    offset: 1,
                                    
                                    color: '#c4477e'
                                }])
            
                            }
                        },
                        data: [ 40.6, 50.2,25.6, 32.2,44.6, 26.2,33.6, 15.2 ]
                    },
                     {
                        name: '基础代理单位数',
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                                    offset: 0,
                                    color: '#224072'
                                }, {
                                    offset: 1,
                                    
                                    color: '#7a74e8'
                                }])
            
                            }
                        },
                        data: [ 40.6, 10.2,41.6, 32.2,29.6, 21.2,39.6, 48.2 ]
                    },
                     {
                        name: '社保代理单位数',
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                                    offset: 0,
                                    color: '#214072'
                                }, {
                                    offset: 1,
                                    
                                    color: '#b436aa'
                                }])
            
                            }
                        },
                        data:ycs05s
                    },
                     {
                        name: '养老代理单位数',
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                                    offset: 0,
                                    color: '#214072'
                                }, {
                                    offset: 1,
                                    
                                    color: '#bb6716'
                                }])
            
                            }
                        },
                        data:ycs05o
                    },
                     {
                        name: '代理单位数',
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ 
                                    offset: 0,
                                    color: '#214072'
                                }, {
                                    offset: 1,
                                    
                                    color: '#1f93d5'
                                }])
            
                            }
                        },
                        data: mndws
                    },
                    {
                        name: '代收资金',
                        type: 'line',
                        itemStyle:{
                            color:'#e85274'
                        },
                        lineStyle:{
                            color:'#ff7c1b',
                            type:'dashed',       //线条的样式
                            width:1
                        },
                        yAxisIndex: 1,
                        data:jfje
                    }
                ]
            };
            chart1.setOption(option1);

            //左中2
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
            var chart3 = echarts.init(document.getElementById('chart3'));
            var option3 = {
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
            chart3.setOption(option3);

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