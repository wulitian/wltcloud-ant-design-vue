<template>
  <div class="main" style="width:100%;height:100%;">
    <!--为echarts准备一个具备大小的容器dom-->
    <div ref="myEchart" style="position: fixed;overflow: hidden;width: 100%;height: 100%;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'Echarts1',
    data () {
      return {
        imgUser:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACyUlEQVRYR8WXT0gUYRjGn2d2zT879k+dDSIITN0dCJPQkgLrkhFUBz1HdahTnfJsdI1OnupSnY3IQ5QhoREYGuKlnTULOgSxk1K5s7rZ7ryxq65p6szOrjrH+d739/z4vo/vmyHyfBJT9c0ivk7YaBMilGmnIAoFQ4TdG6iZeJ8Pkm6Lk2a4LgX2AGh36On3Q26UacakG7YrActsOAvxPQERcAOFIAGmO1Vt4qVTvaOAZepHIDIMsswJtmJcJAmyVdUi4xv1uRAIjwFsyis8VyxjqmYc9SxgxUJnQKXfW/hil9jtajD6aj3GhjNgmfpDAJcLEgAeqVrkileBEQDNBQkIRtRg5JgngbipfyJQW4iAAJ8rtcghjwLhQYJthQgAMqhqxmlvAjH9PolrhQiI4EFlMHLdk0D22LX9mX3g+aGSaglUfxz1JJBpipvel0EgQ5WaccrzOZBpnJ2uPZBOlY6T2JvPNIjId0VBY6DG+FaQwIJEqDWdYh/JGjcSIjLl8+N8RZXxzqne8SheAshMfXVizvca5OENoSIfAuXSxp3RaafwzLijwNyP0MHUH3ZR2AEi6AYKQYxEr1Ji3yvfE/3iaQnE1NWE4DaImwBKXAWvLhLMA+gJyHQ398USazHWnIHfU3XhedvfR7DOU/CqJoFM7lBSF0urJ43VvP8Esjcg+AxkeTHCcwyROfhwQa02Bv7lrhCYNfWTtsgAyNKihud2siR9RHu5ZrxZepUTkJlQlZVUMpfP7k0JX4QKZEYhQkvnQ07AMsOPAV7azPBl9vIFlRWYnQ4ft9Mc3prwhRRF7I6KYPRpViBu6m8JnNhKAQCjqhZpoRWrbwT9G365bqJYE62YfgvE3U0MWR8t6KJlhp8DPLctAsALxs1wlGDDdggIZCIj8JPgrm0S+JXZA5brf74iWwokzoSpXxXIHYD7i8x3wn0l0P0XyFr6ye6K96kAAAAASUVORK5CYII=",
        imgIdcard:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAgCAYAAACPb1E+AAACS0lEQVRYR+2Yv2sUQRTHv9892b2gxsI0Z0SFQAoLQbG3UBELMbfLCoKFjZddSdAIYiUoWIiFEYJ3K0qC2AjnXX6ApNB/QLRQEIPdkcZKDCm83T13n+xyh3ocFtnbcAc3xS7M8N77zHfevGGGaDbzquwKw8YFgZwGJdfq3/a/wAf5DuRKtai+j+Iz+uh24xQkWCC5f9uh/hdQMO+H6jQnCjKWUfzPILI9BdiEEZFnNGzvBYBLvQjYYqJue18JjPc2pOVtktg9gEyoAPV+UPLstAyvznEz4WRTNWdfQOoF/5iicDhVKRI674+c7IuNM4BMmIt/jsV+qJOD5R4sd5cU6JabQTHvWSUD8uhSUf1o2O5NgA9iUGGh4qhPowsfEb6JuwR3q452p9NEdMt1SE6mUicFWKmWtPPmjAwFdW+d5IiIfMt81w6Vy/QNy30L8iSAugt19HWJP9oh9YLkqPg1EGoqkC0V85Y7o5APoyChyI1FJztrTPrHoUh8jwbkcaWUneqkomH5j0C59vdY9zaOYLniaBOmKWqw16uRzAmwkcmq+8qzrBuW9wqEEXEHoo4tOay1Q54ryIia8dcBDP0DaVjeBog9SZM8JA4vFrU1w/KnQJmL9QJuV0vavfwVd1zZwTUAigheVh3tYsdctL37BG61j0X37k8AjiSFTNM+Wu4FEpfTDJLUN82CHAgz/hcAO5M6S8deVuMHq7zdOEEEzwkeTCfQFr0K5hu+ej2GjFpU2379bJhU5Awgo1t0m9ys+fTHkMuVJ+qHyOFvNUDzc1ScSusAAAAASUVORK5CYII=",
        charts: '',
        option:{
          //backgroundColor: '#000F1F',
          color:[
            '#09022C',
            '#040193',
            '#073CFE',
            '#0065C2'
          ],
          legend: {
            show:true,
            //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            data: [
              {
                name: '人物',
                symbolSize:30,
                icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACyUlEQVRYR8WXT0gUYRjGn2d2zT879k+dDSIITN0dCJPQkgLrkhFUBz1HdahTnfJsdI1OnupSnY3IQ5QhoREYGuKlnTULOgSxk1K5s7rZ7ryxq65p6szOrjrH+d739/z4vo/vmyHyfBJT9c0ivk7YaBMilGmnIAoFQ4TdG6iZeJ8Pkm6Lk2a4LgX2AGh36On3Q26UacakG7YrActsOAvxPQERcAOFIAGmO1Vt4qVTvaOAZepHIDIMsswJtmJcJAmyVdUi4xv1uRAIjwFsyis8VyxjqmYc9SxgxUJnQKXfW/hil9jtajD6aj3GhjNgmfpDAJcLEgAeqVrkileBEQDNBQkIRtRg5JgngbipfyJQW4iAAJ8rtcghjwLhQYJthQgAMqhqxmlvAjH9PolrhQiI4EFlMHLdk0D22LX9mX3g+aGSaglUfxz1JJBpipvel0EgQ5WaccrzOZBpnJ2uPZBOlY6T2JvPNIjId0VBY6DG+FaQwIJEqDWdYh/JGjcSIjLl8+N8RZXxzqne8SheAshMfXVizvca5OENoSIfAuXSxp3RaafwzLijwNyP0MHUH3ZR2AEi6AYKQYxEr1Ji3yvfE/3iaQnE1NWE4DaImwBKXAWvLhLMA+gJyHQ398USazHWnIHfU3XhedvfR7DOU/CqJoFM7lBSF0urJ43VvP8Esjcg+AxkeTHCcwyROfhwQa02Bv7lrhCYNfWTtsgAyNKihud2siR9RHu5ZrxZepUTkJlQlZVUMpfP7k0JX4QKZEYhQkvnQ07AMsOPAV7azPBl9vIFlRWYnQ4ft9Mc3prwhRRF7I6KYPRpViBu6m8JnNhKAQCjqhZpoRWrbwT9G365bqJYE62YfgvE3U0MWR8t6KJlhp8DPLctAsALxs1wlGDDdggIZCIj8JPgrm0S+JXZA5brf74iWwokzoSpXxXIHYD7i8x3wn0l0P0XyFr6ye6K96kAAAAASUVORK5CYII=' //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
              },
              {
                name: '信用卡',
                symbolSize:30,
                icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAgCAYAAACPb1E+AAACS0lEQVRYR+2Yv2sUQRTHv9892b2gxsI0Z0SFQAoLQbG3UBELMbfLCoKFjZddSdAIYiUoWIiFEYJ3K0qC2AjnXX6ApNB/QLRQEIPdkcZKDCm83T13n+xyh3ocFtnbcAc3xS7M8N77zHfevGGGaDbzquwKw8YFgZwGJdfq3/a/wAf5DuRKtai+j+Iz+uh24xQkWCC5f9uh/hdQMO+H6jQnCjKWUfzPILI9BdiEEZFnNGzvBYBLvQjYYqJue18JjPc2pOVtktg9gEyoAPV+UPLstAyvznEz4WRTNWdfQOoF/5iicDhVKRI674+c7IuNM4BMmIt/jsV+qJOD5R4sd5cU6JabQTHvWSUD8uhSUf1o2O5NgA9iUGGh4qhPowsfEb6JuwR3q452p9NEdMt1SE6mUicFWKmWtPPmjAwFdW+d5IiIfMt81w6Vy/QNy30L8iSAugt19HWJP9oh9YLkqPg1EGoqkC0V85Y7o5APoyChyI1FJztrTPrHoUh8jwbkcaWUneqkomH5j0C59vdY9zaOYLniaBOmKWqw16uRzAmwkcmq+8qzrBuW9wqEEXEHoo4tOay1Q54ryIia8dcBDP0DaVjeBog9SZM8JA4vFrU1w/KnQJmL9QJuV0vavfwVd1zZwTUAigheVh3tYsdctL37BG61j0X37k8AjiSFTNM+Wu4FEpfTDJLUN82CHAgz/hcAO5M6S8deVuMHq7zdOEEEzwkeTCfQFr0K5hu+ej2GjFpU2379bJhU5Awgo1t0m9ys+fTHkMuVJ+qHyOFvNUDzc1ScSusAAAAASUVORK5CYII='
              }
            ]
          },
          series : [ {//图片配置
            type : 'graph', //关系图
            //name : "拓扑图", //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            layout : 'force', //图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
            legendHoverLink : true,//是否启用图例 hover(悬停) 时的联动高亮。
            hoverAnimation : true,//是否开启鼠标悬停节点的显示动画
            coordinateSystem : null,//坐标系可选
            xAxisIndex : 0, //x轴坐标 有多种坐标系轴坐标选项
            yAxisIndex : 0, //y轴坐标
            force: {
              repulsion: 450,//相距距离
              edgeLength: [150, 200],
              layoutAnimation: true
            },
            /*force : { //力引导图基本配置
                //initLayout: ,//力引导的初始化布局，默认使用xy轴的标点
                repulsion : 200,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                gravity : 0.03,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                edgeLength :80,//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                layoutAnimation : true
                //因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
            },*/
            roam : true,//是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            nodeScaleRatio : 0.6,//鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
            draggable : true,//节点是否可拖拽，只在使用力引导布局的时候有用。
            focusNodeAdjacency : true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            //symbol:'roundRect',//关系图节点标记的图形。ECharts 提供的标记类型包括 'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）, 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）  也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
            //symbolSize:10 ,//也可以用数组分开表示宽和高，例如 [20, 10] 如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：(value: Array|number, params: Object) => number|Array
            //symbolRotate:,//关系图节点标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
            //symbolOffset:[0,0],//关系图节点标记相对于原本位置的偏移。[0, '50%']
            edgeSymbol : [ 'none', 'arrow' ],//边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
            symbolSize: 50,//图形大小
            edgeSymbolSize : 10,//边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
            itemStyle : {//===============图形样式，有 normal 和 emphasis 两个状态。normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
              normal : { //默认样式
                label : {
                  show : true
                },
                //borderType : 'solid', //图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                //borderColor : 'rgba(255,215,0,0.4)', //设置图形边框为淡金色,透明度为0.4
                //borderWidth : 2, //图形的描边线宽。为 0 时无描边。
                // opacity : 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

              },
              emphasis : {//高亮状态

              }
            },
            lineStyle : { //==========关系边的公用线条样式。
              normal : {
                color : '#31354B',
                width : '1',
                type : 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness : 0.2, //线条的曲线程度，从0到1
                opacity : 1
                // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
              },
              emphasis : {//高亮状态

              }
            },
            label : { //=============图形上的文本标签
              normal : {
                show : true,//是否显示标签。
                position : 'bottom',//标签的位置。['50%', '50%'] [x,y]   'inside'
                textStyle : { //标签的字体样式
                  color : '#2D2F3B', //字体颜色
                  fontStyle : 'normal',//文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                  fontWeight : 'bolder',//'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                  fontFamily : 'sans-serif', //文字的字体系列
                  fontSize : 12, //字体大小
                }
              },
              emphasis : {//高亮状态
              }
            },
            edgeLabel: { // ========连接线上的文本标签
              normal: {
                show: true, // 不显示连接线上的文字，如果显示只能显示结点的value值，而不是连接线的值
                textStyle: {
                  color: '#999',
                  fontSize: 10
                },
                formatter: "{c}"
              },
              emphasis: {
                // 高亮状态
              }
            },
            //别名为nodes   name:影响图形标签显示,value:影响选中后值得显示,category:所在类目的index,symbol:类目节点标记图形,symbolSize:10图形大小
            //label:标签样式。
            //数据
            data : [
              {"id":"1","name":"张三","category":0 },
              {"id":"2","name":"思思","category":0 },
              {"id":"3","name":"王五","category":0 },
              {"id":"4","name":"赵四","category":0 },
              {"id":"5","name":"王八","category":0 },
              {"id":"11","name":"建设银行","category":1 },
              {"id":"12","name":"交通银行","category":1 },
              {"id":"13","name":"民生银行","category":1 },
              {"id":"14","name":"民生银行","category":1 },
              {"id":"15","name":"民生银行","category":1 },
              {"id":"21","name":"建设银行","category":1 },
              {"id":"22","name":"交通银行","category":1 },
              {"id":"23","name":"民生银行","category":1 },
              {"id":"24","name":"广大银行","category":1 },
              {"id":"25","name":"广发银行","category":1 },
              {"id":"31","name":"民生银行","category":1 },
              {"id":"32","name":"浦发银行","category":1 },
              {"id":"33","name":"兴业银行","category":1 },
              {"id":"41","name":"建设银行","category":1 },
              {"id":"42","name":"邮政银行","category":1 },
              {"id":"51","name":"兴业银行","category":1 },
              {"id":"52","name":"邮政银行","category":1 },
              // {"id":1114,"name":"民生银行","category":1 },
              ],
            links : [
              {"source":"1","target":"11",value: ""},
              {"source":"1","target":"12",value: ""},
              {"source":"1","target":"13",value: ""},
              {"source":"1","target":"14",value: ""},
              {"source":"1","target":"15",value: ""},
              {"source":"2","target":"21",value: ""},
              {"source":"2","target":"22",value: ""},
              {"source":"2","target":"23",value: ""},
              {"source":"2","target":"24",value: ""},
              {"source":"2","target":"25",value: ""},
              {"source":"3","target":"31",value: ""},
              {"source":"3","target":"32",value: ""},
              {"source":"3","target":"33",value: ""},
              {"source":"4","target":"41",value: ""},
              {"source":"4","target":"42",value: ""},
              {"source":"5","target":"51",value: ""},
              {"source":"5","target":"52",value: ""},
              {"source":"11","target":"25",value: "转账678000元"},
              {"source":"25","target":"11",value: "转账23000元"},
              {"source":"25","target":"23",value: "转账2123000元"},
              {"source":"32","target":"11",value: "转账453000元"},
              {"source":"41","target":"11",value: "转账13000元"},
              {"source":"42","target":"11",value: "转账673000元"},
              {"source":"31","target":"11",value: "转账2678000元"},
              {"source":"22","target":"15",value: "转账234560元"},
              {"source":"32","target":"15",value: "转账2567000元"},
              {"source":"42","target":"15",value: "转账678000元"},
              {"source":"52","target":"15",value: "转账9300元"},
              ],//edges是其别名代表节点间的关系数据。
              categories: [ //symbol name：用于和 legend 对应以及格式化 tooltip 的内容。 label有效
                  {
                    name: '人物',
                    symbolSize:30,
                    symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACyUlEQVRYR8WXT0gUYRjGn2d2zT879k+dDSIITN0dCJPQkgLrkhFUBz1HdahTnfJsdI1OnupSnY3IQ5QhoREYGuKlnTULOgSxk1K5s7rZ7ryxq65p6szOrjrH+d739/z4vo/vmyHyfBJT9c0ivk7YaBMilGmnIAoFQ4TdG6iZeJ8Pkm6Lk2a4LgX2AGh36On3Q26UacakG7YrActsOAvxPQERcAOFIAGmO1Vt4qVTvaOAZepHIDIMsswJtmJcJAmyVdUi4xv1uRAIjwFsyis8VyxjqmYc9SxgxUJnQKXfW/hil9jtajD6aj3GhjNgmfpDAJcLEgAeqVrkileBEQDNBQkIRtRg5JgngbipfyJQW4iAAJ8rtcghjwLhQYJthQgAMqhqxmlvAjH9PolrhQiI4EFlMHLdk0D22LX9mX3g+aGSaglUfxz1JJBpipvel0EgQ5WaccrzOZBpnJ2uPZBOlY6T2JvPNIjId0VBY6DG+FaQwIJEqDWdYh/JGjcSIjLl8+N8RZXxzqne8SheAshMfXVizvca5OENoSIfAuXSxp3RaafwzLijwNyP0MHUH3ZR2AEi6AYKQYxEr1Ji3yvfE/3iaQnE1NWE4DaImwBKXAWvLhLMA+gJyHQ398USazHWnIHfU3XhedvfR7DOU/CqJoFM7lBSF0urJ43VvP8Esjcg+AxkeTHCcwyROfhwQa02Bv7lrhCYNfWTtsgAyNKihud2siR9RHu5ZrxZepUTkJlQlZVUMpfP7k0JX4QKZEYhQkvnQ07AMsOPAV7azPBl9vIFlRWYnQ4ft9Mc3prwhRRF7I6KYPRpViBu6m8JnNhKAQCjqhZpoRWrbwT9G365bqJYE62YfgvE3U0MWR8t6KJlhp8DPLctAsALxs1wlGDDdggIZCIj8JPgrm0S+JXZA5brf74iWwokzoSpXxXIHYD7i8x3wn0l0P0XyFr6ye6K96kAAAAASUVORK5CYII=',
                    label: {
                      "color":"#29f11d"
                    }
                  },
                  {
                    name: '信用卡',
                    symbolSize:30,
                    symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAgCAYAAACPb1E+AAACS0lEQVRYR+2Yv2sUQRTHv9892b2gxsI0Z0SFQAoLQbG3UBELMbfLCoKFjZddSdAIYiUoWIiFEYJ3K0qC2AjnXX6ApNB/QLRQEIPdkcZKDCm83T13n+xyh3ocFtnbcAc3xS7M8N77zHfevGGGaDbzquwKw8YFgZwGJdfq3/a/wAf5DuRKtai+j+Iz+uh24xQkWCC5f9uh/hdQMO+H6jQnCjKWUfzPILI9BdiEEZFnNGzvBYBLvQjYYqJue18JjPc2pOVtktg9gEyoAPV+UPLstAyvznEz4WRTNWdfQOoF/5iicDhVKRI674+c7IuNM4BMmIt/jsV+qJOD5R4sd5cU6JabQTHvWSUD8uhSUf1o2O5NgA9iUGGh4qhPowsfEb6JuwR3q452p9NEdMt1SE6mUicFWKmWtPPmjAwFdW+d5IiIfMt81w6Vy/QNy30L8iSAugt19HWJP9oh9YLkqPg1EGoqkC0V85Y7o5APoyChyI1FJztrTPrHoUh8jwbkcaWUneqkomH5j0C59vdY9zaOYLniaBOmKWqw16uRzAmwkcmq+8qzrBuW9wqEEXEHoo4tOay1Q54ryIia8dcBDP0DaVjeBog9SZM8JA4vFrU1w/KnQJmL9QJuV0vavfwVd1zZwTUAigheVh3tYsdctL37BG61j0X37k8AjiSFTNM+Wu4FEpfTDJLUN82CHAgz/hcAO5M6S8deVuMHq7zdOEEEzwkeTCfQFr0K5hu+ej2GjFpU2379bJhU5Awgo1t0m9ys+fTHkMuVJ+qHyOFvNUDzc1ScSusAAAAASUVORK5CYII=',
                    label: {
                      "color":"#29f11d"
                    }
                  },
              ]
          } ]
        }
      }
    },
    methods:{
      drawPie(){
        this.charts = echarts.init(this.$refs.myEchart);
        this.charts.setOption(this.option);
      }
    },
    //调用
    mounted(){
      this.$nextTick(function() {
        this.drawPie()
        this.charts.on('click', (params) =>{
          console.log(params.dataType)
        })
      })
    }
  }
</script>

<style scoped>
</style>
