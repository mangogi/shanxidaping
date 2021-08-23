$(function(){
  $.ajax({
    type:'get',
    url:'../JSON/dangan.JSON',
    data:'',
    async:true,
    dataType: "json",
    success:function(res){
      if(res){
      function setCancal(val,num){
        //左边第一个
        let archive=res.archive;
        let leftContent1Data=''
        if(val){
        let  nowDate=Number(val);
        let oldDate=Number(nowDate-10);
          leftContent1Data=archive.filter(v=>{
            if(oldDate<Number(v.aae036)&&Number(v.aae036)<=nowDate){
              return v.aae036
            }
          })
        }else{
          leftContent1Data=archive.filter(v=>{
            if(Number(v.aae036)>2010){
              return v.aae036
            }
          });
        }
        let leftAllData=leftContent1Data.map(item=>item.zsda)//正式档案
        let leftContent1Data1=leftContent1Data.map(item=>item.aae036).reverse() //年份
        let leftContentData2=leftContent1Data.map(item=>(((+item.zsda)/1000)).toFixed(0)).reverse()  //档案存档数
        let leftContentData3=leftContent1Data.map(item=>((+item.zsda)/(+item.hj)*100).toFixed(1)).reverse()//档案存档率
        var leftContent1=echarts.init(document.getElementById('leftContent1'));
        function setOption(Data1,Data2,Data3,stringData,numData,lvData){
          let op={
              tooltip: {
                  trigger: 'axis',
                  formatter:stringData
              },
              toolbox: {
                  show:false,
                  feature: {
                      dataView: {show: true, readOnly: false},
                      magicType: {show: true, type: ['line', 'bar']},
                      restore: {show: true},
                      saveAsImage: {show: true}
                  }
              },
              legend: {
                  data:[numData,lvData],
                  textStyle: {
                    color: '#ccc'
                  },
                  right:'0%'
              },
              grid:{
                  top:'18%',
                  right:'0%',
                  bottom:'8%',
                  left:'5%',
                  containLabel: true
              },
              xAxis: [
                  {
                      type: 'category',
                      data: Data1,
                      splitLine:{
                          show:false,
                          lineStyle:{
                              color: '#3c4452'
                          }
                      },
                    axisLabel:{
                        textStyle:{
                            color:"#fff"
                        },
                        lineStyle:{
                            color: '#519cff'
                        },
                      }    
                  }
              ],
              yAxis: [
                  {
                      type: 'value',
                      name: '数量（千份）',
                      nameTextStyle:{
                          color:'#fff'
                      },
                      interval: 100,
                      max:600,
                      min: 0,
                      splitLine:{
                          show:true,
                          lineStyle:{
                              color: '#23303f'
                          }
                      },
                      axisLine: {
                          show:true,
                          lineStyle: {
                              color: '#115372'
                          }
                      },
                  },
                  {
                      min: 0,
                      max: 100,
                      interval: 16.5,
                      type: 'value',
                      show:false,
                      name: '存档率',
                      nameTextStyle:{
                          color:'#fff'
                      },
                      splitLine:{
                          show:true,
                          lineStyle:{
                              color: '#23303f'
                          }
                      },
                      axisLine: {
                          show:false,
                          lineStyle: {
                              color: '#115372'
                          }
                      },
                  }
              ],
              color:"yellow",
              series: [
                  {
                      name:numData,
                      type:'bar',
                      data:Data2,
                      boundaryGap: '50%',
                      barWidth:'40%',
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  var colorList = [
                                      '#6bc0fb','#7fec9d','#fedd8b','#ffa597','#84e4dd','#84e4dd','#84e4dd','#84e4dd','#84e4dd','#84e4dd'
                                  ];
                                  return colorList[params.dataIndex]
                              }
                          }
                      }
                  },
                  {
                      name:lvData,
                      type:'line',
                      yAxisIndex: 1,
                      lineStyle: {
                          normal: {
                              color:'#c39705'
                          }
                      },
                      data:Data3
                  }
              ]
          
          }
          return op
        }
        option = setOption(leftContent1Data1,leftContentData2,leftContentData3,`{b}</br>{a}: {c}000</br>{a1}: {c1}%`,'档案存档数','档案存档率');
        if(num==1||!num){
          leftContent1.setOption(option);
        }
      //左边第二个
      let transfer=res.transfer.filter(v=>{if(Number(v.aae036)>2010){return v.aae036 }});
      leftAllData.forEach((e,index) => {
        transfer[index]['zsda']=e
      });
      let leftContentData4=transfer.map(item=>(+item.dazc)/1000).reverse()  //档案转出数
      let leftContentData5=transfer.map(item=>((+item.dazc)/(+item.zsda)*100).toFixed(2)).reverse()//档案转出率
      let leftContent2=echarts.init(document.getElementById('leftContent2'));
      option=setOption(leftContent1Data1,leftContentData4,leftContentData5,`{b}</br>{a}: {c}</br>{a1}: {c1}%`,'档案转出数','档案转出率');
      if(num==2||!num){
        leftContent2.setOption(option);
      }
      //左边第三个
      let into=res.into.filter(v=>{if(Number(v.aae036)>2010){return v.aae036 }});
      leftAllData.forEach((e,index) => {
        into[index]['zsda']=e
      });
      let leftContentData6=into.map(item=>(+item.dazr)/1000).reverse()  //档案转入数
      let leftContentData7=into.map(item=>((+item.dazr)/(+item.zsda)*100).toFixed(2)).reverse()//档案转入率
      let leftContent3=echarts.init(document.getElementById('leftContent3'));
      option=setOption(leftContent1Data1,leftContentData6,leftContentData7,`{b}</br>{a}: {c}</br>{a1}: {c1}%`,'档案转入数','档案转入率');
      if(num==2||!num){
        leftContent3.setOption(option);
      }
      }
      setCancal()
      //以下为日历变化
      $("#date1").change(function(){
          $("#date1").attr("value",$(this).val()); //赋值
          let dateValue1=$("#date1").attr("value");
          let year1=dateValue1.substring(0,4);
          setCancal(year1,1)
      });
      $("#date2").change(function(){
        $("#date2").attr("value",$(this).val()); //赋值
        let dateValue1=$("#date2").attr("value");
        let year1=dateValue1.substring(0,4);
        setCancal(year1,2)
      });
    $("#date3").change(function(){
      $("#date3").attr("value",$(this).val()); //赋值
      let dateValue1=$("#date3").attr("value");
      let year1=dateValue1.substring(0,4);
      setCancal(year1,3)
    });
      }
    },
    error: function () {},
    complete: function () {}
  })
     /* 地图 需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
     var maps = echarts.init(document.getElementById('mapadd'));
     option = {
         tooltip : {
             trigger: 'item',
             formatter: '{b}'
         },
         series : [{
             name: '山东',
             type: 'map',
             mapType: '山东',
             roam: false,
             top:'8%',
             zoom:1.2,
             x:'25%',
             selectedMode : 'single',//multiple多选
             itemStyle:{
                 normal:{
                     label:{
                         show:true,
                         textStyle: {
                             color: "#231816"
                         }
                     },
                     areaStyle:{color:'#B1D0EC'},
                     color:'#B1D0EC',
                     borderColor:'#dadfde'//区块的边框颜色
                 },
                 emphasis:{//鼠标hover样式
                     label:{
                         show:true,
                         textStyle:{
                             color:'#fa4f04'
                         }
                     },
                     areaStyle:{color:'red'}
                 }
             },
             data:[
                 {name:'济南市',
                     itemStyle: {
                         normal: {
                             areaColor: '#13d5ff',
                             borderColor: '#edce00'
                         }
                     }
                 },
                 {name:'德州市',
                     itemStyle: {
                         normal: {
                             areaColor: '#13d5ff',
                             borderColor: '#0abcee'
                         }
                     }
                 }, 
                 {name:'聊城市',
                     itemStyle: {
                         normal: {
                             areaColor: '#92d050',
                             borderColor: '#1ca9f2'
                         }
                     }
                 },
                 {name:'泰安市',
                     itemStyle: {
                         normal: {
                             areaColor: '#88ddf5',
                             borderColor: '#88ddf5',
                         }
                     }
                 },
                 {name:'莱芜市',
                     itemStyle: {
                         normal: {
                             areaColor: '#13d5ff',
                             borderColor: '#45b5ef',
                         }
                     }
                 },
                 {name:'菏泽市',
                     itemStyle: {
                         normal: {
                             areaColor: '#13d5ff',
                             borderColor: '#45b5ef'
                         }
                     }
                 },
                 {name:'枣庄市',
                     itemStyle: {
                         normal: {
                             areaColor: '#45b5ef',
                             borderColor: '#45b5ef',
                         }
                     }
                 },
                 {name:'济宁市',
                     itemStyle: {
                         normal: {
                             areaColor: '#ffd811',
                             borderColor: '#45b5ef',
                         }
                     }
                 },
                 {name:'临沂市',
                     itemStyle: {
                         normal: {
                             areaColor: '#ffa312',
                             borderColor: '#45b5ef',
                         }
                     }
                 },
                 {name:'青岛市',
                     itemStyle: {
                         normal: {
                             areaColor: '#92d050',
                             borderColor: '#1ca9f2'
                         }
                     }
                 },
                 {name:'烟台市',
                     itemStyle: {
                         normal: {
                             areaColor: '#88ddf5',
                             borderColor: '#88ddf5',
                         }
                     }
                 },
                 {name:'威海市',
                     itemStyle: {
                         normal: {
                             areaColor: '#13d5ff',
                             borderColor: '#45b5ef',
                         }
                     }
                 },
                 {name:'潍坊市',
                     itemStyle: {
                         normal: {
                             areaColor: '#13d5ff',
                             borderColor: '#45b5ef'
                         }
                     }
                 },
                 {name:'淄博市',
                     itemStyle: {
                         normal: {
                             areaColor: '#45b5ef',
                             borderColor: '#45b5ef',
                         }
                     }
                 },
                 {name:'滨州市',
                     itemStyle: {
                         normal: {
                             areaColor: '#13d5ff',
                             borderColor: '#45b5ef',
                         }
                     }
                 },
                 {name:'东营市',
                     itemStyle: {
                         normal: {
                             areaColor: 'red',
                             borderColor: '#45b5ef',
                         }
                     }
                 },
                 {name:'日照市',
                     itemStyle: {
                         normal: {
                             areaColor: 'red',
                             borderColor: '#45b5ef',
                         }
                     }
                 },
             ]
         }]
     };
     maps.setOption(option);
})