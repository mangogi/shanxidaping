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
            var option1 = option = {
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