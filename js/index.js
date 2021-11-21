(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".bar .career"));
    // 2. 指定配置项和数据
    let option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top:"10%",
            left: "0",
            right: "0",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                axisLabel: {
                    color: "#65D5FF",
                    fontStyle: "normal",
                    fontSize: 12
                },
                axisLine: {
                    show:false
                },
                type: "category",
                data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                // y轴线条样式
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                type: "value",
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            },
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "35%",
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".line .career"));
    // 2. 指定配置项和数据
    option = {
        // backgroundColor:'#031d33',
        legend: {
            top: "20",
            x: "center",
            textStyle: {
                fontSize: 16,
                color: "rgba(101, 213, 255, 1)"
            },
            icon:
                "path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",
            itemWidth:8, // 设置宽度
            itemHeight:8, // 设置高度、
            itemGap: 12 // 设置间距
        },
        tooltip: {
            show: true,
            trigger: "axis", //axis , item
            backgroundColor: "RGBA(0, 49, 85, 1)",
            borderColor: "rgba(0, 151, 251, 1)",
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
                color: "#BCE9FC",
                fontSize: 16,
                align: "left"
            }
        },
        grid: {
            right: "5%",
            top: "20%",
            left: "5%",
            bottom: "5%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            boundaryGap: true,
            data: ["奉城镇","南桥镇",'四团镇','青村镇','柘林镇'],
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: "#65D5FF",
                    fontStyle: "normal",
                    fontSize: 12
                }
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false
            },
            axisLine: {
                //坐标轴轴线相关设置
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)"
                }
            },
            splitLine: {
                //坐标轴在 grid 区域中的分隔线。
                show: true,
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)"
                }
            }
        },
        yAxis: [
            {
                type: "value",
                splitNumber: 3,
                axisLabel: {
                    textStyle: {
                        color: "#65D5FF",
                        fontStyle: "normal",
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(77, 128, 254, 0.2)"
                    }
                }
            }
        ],
        series: [
            {
                name: '1月',
                type: "pictorialBar",
                barWidth: "60%",
                stack: "总量",
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(0, 151, 251, 1)" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 34, 66, 0.2)" // 100% 处的颜色
                                }
                            ],

                        } //渐变颜色
                    }
                },
                symbol:
                    "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

                data: [23,84,101,74,87]
            },  {
                name: '2月',
                type: "pictorialBar",
                barWidth: "60%",
                stack: "总量",
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(48, 236, 166, 1)" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 34, 66, 0.2)" // 100% 处的颜色
                                }
                            ],

                        } //渐变颜色
                    }
                },
                symbol:
                    "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

                data: [13,54,71,24,57]
            }],
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".one .career"));
    // 2. 指定配置项和数据
    var colorArray = [
        {
            top: '#ffa800', //黄
            bottom: 'rgba(11,42,84,.3)'
        }, {
            top: '#1ace4a', //绿
            bottom: 'rgba(11,42,84, 0.3)'
        },
        {
            top: '#4bf3ff', //蓝
            bottom: 'rgba(11,42,84,.3)'
        }, {
            top: '#4f9aff', //深蓝
            bottom: 'rgba(11,42,84,.3)'
        },
        {
            top: '#b250ff', //粉
            bottom: 'rgba(11,42,84,.3)'
        }
    ];
    option = {
        // backgroundColor: '#0E2A43',
        tooltip: {
            show: true,
            formatter: "{b}:{c}"
        },
        grid: {
            left: '5%',
            top: '12%',
            right: '1%',
            bottom: '8%',
            containLabel: true
        },

        xAxis: {
            type: 'value',
            show:false,
            position: 'top',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                show: false
            },
        },
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

            },
            "splitLine": { //网格线
                "show": false
            },
            inverse: 'true', //排序
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: ['first', 'two', 'three', 'four', 'five']
        }

        ],
        series: [{
            name: '能耗值',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                        color: 'white' //color of value
                    }
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],

                        }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [60, 132, 89, 134, 60]
        }

        ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".bar .career"));
    // 2. 指定配置项和数据
    let option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top:"10%",
            left: "0",
            right: "0",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                axisLabel: {
                    color: "#65D5FF",
                    fontStyle: "normal",
                    fontSize: 12
                },
                axisLine: {
                    show:false
                },
                type: "category",
                data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                // y轴线条样式
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                type: "value",
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            },
        ],
        series: [
            {

                name: "直接访问",
                type: "bar",
                barWidth: "35%",
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".first .career"));
    // 2. 指定配置项和数据
    var colors=[
        "#00ADD0",
        "#FFA12F",
        "#B62AFF",
        "#604BFF",
        "#6E35FF",
        "#002AFF",
        "#20C0F4",
        "#95F300",
        "#04FDB8",
        "#AF5AFF"
    ]
    var getaway=function getData() {
        let data = {
            name: "根节点1",
            value: 0,
            children: []
        };
        for (let i = 1; i <= 5; i++) {
            let obj = {
                name: "" + i,
                value: i,
                children: [],
            };
            for (let j = 1; j <= 3; j++) {
                let obj2 = {
                    name: `1-${i}-${j}`,
                    value: 1 + "-" + i + "-" + j,
                };
                if(j%2==1){
                    obj2.children=[]
                    for (let k = 1; k <= 3; k++) {
                        let obj3 = {
                            name: `1-${i}-${j}-${k}`,
                            value: 1 + "-" + i + "-" + j+'-'+k,
                        };
                        obj2.children.push(obj3);
                    }
                }

                obj.children.push(obj2);
            }

            data.children.push(obj);
        }
        let arr=[]
        arr.push(data)
        // 
        arr=handle(arr,0)
        console.log(arr);
        return arr;
    }
    var handle=function handleData(data,index,color='#00f6ff'){
        //index标识第几层
        return data.map((item,index2)=>{
            //计算出颜色
            if(index==1){
                color = colors.find((item, eq) => eq == index2 % 10);
            }
            // 设置节点大小
            if(index===0 || index===1){
                item.label= {
                    position: "inside",
                    //   rotate: 0,
                    //   borderRadius: "50%",
                }
            }
            // 设置label大小
            switch(index){
                case 0:
                    item.symbolSize=70
                    break;
                case 1:
                    item.symbolSize=50
                    break;
                default:
                    item.symbolSize=10
                    break;
            }
            // 设置线条颜色
            item.lineStyle= { color: color }

            if (item.children) {//存在子节点
                item.itemStyle = {
                    borderColor: color,
                    color:color
                };
                item.children=handle(item.children,index+1,color)
            } else {//不存在
                item.itemStyle = {
                    color:'transparent',
                    borderColor: color
                };
            }
            return item
        })
    }

    var option = {
        type: "tree",
        // backgroundColor: "#000",
        toolbox: { //工具栏
            show: false,
            iconStyle: {
                borderColor: "#03ceda"
            },
            feature: {
                restore: {}
            }
        },
        gird: {
            top:"15%"
        },
        tooltip: {//提示框
            trigger: "item",
            triggerOn: "mousemove",
            backgroundColor: "rgba(1,70,86,1)",
            borderColor: "rgba(0,246,255,1)",
            borderWidth: 0.5,
            textStyle: {
                fontSize: 10
            }
        },
        series: [
            {
                type: "tree",
                hoverAnimation: true, //hover样式
                data:getaway(),
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                layout: "radial",
                symbol: "circle",
                symbolSize: 10,
                nodePadding: 20,
                animationDurationUpdate: 750,
                expandAndCollapse: true, //子树折叠和展开的交互，默认打开
                initialTreeDepth: 2,
                roam: true, //是否开启鼠标缩放和平移漫游。scale/move/true
                focusNodeAdjacency: true,
                itemStyle: {
                    borderWidth: 1,
                },
                label: { //标签样式
                    color: "#fff",
                    fontSize: 10,
                    fontFamily: "SourceHanSansCN",
                    position: "inside",
                    rotate: 0,
                },
                lineStyle: {
                    width: 1,

                }
            }
        ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".two .career"));
    // 2. 指定配置项和数据
    var fontColor = '#30eee9';
    var xAxisData = [];
    var data = [];
    var data2 = [];
    for (var i = 0; i < 50; i++) {
        xAxisData.push(i);
        data.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
        data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
    }

    option = {
        // backgroundColor: '#08263a',
        grid: {
            top:"3%",
            left:"3%",
            right:"3%",
            bottom:"3%",
            containLabel: true
        },
        xAxis: [{
            show: false,
            data: xAxisData
        }, {
            show: false,
            data: xAxisData
        }],
        visualMap: {
            show: false,
            min: 0,
            max: 50,
            dimension: 0,
            inRange: {
                color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
            }
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#4a657a'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#08263f'
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [{
            name: 'back',
            type: 'bar',
            data: data2,
            z: 1,
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    barBorderRadius: 5,
                    shadowBlur: 3,
                    shadowColor: '#111'
                }
            }
        }, {
            name: 'Simulate Shadow',
            type: 'line',
            data: data,
            z: 2,
            showSymbol: false,
            animationDelay: 0,
            animationEasing: 'linear',
            animationDuration: 1200,
            lineStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            areaStyle: {
                normal: {
                    color: '#08263a',
                    shadowBlur: 50,
                    shadowColor: '#000'
                }
            }
        }, {
            name: 'front',
            type: 'bar',
            data: data,
            xAxisIndex: 1,
            z: 3,
            itemStyle: {
                normal: {
                    barBorderRadius: 5
                }
            }
        }],
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay: function (idx) {
            return idx * 20;
        },
        animationDelayUpdate: function (idx) {
            return idx * 20;
        }
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".left3 .career"));
    // 2. 指定配置项和数据
    let option = {
        // backgroundColor:"#0B1837",
        color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
        // title: {
        //     text: '网络/安全设备',
        //     left: '60',
        //     top: 0,
        //     textAlign: 'center',
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 14,
        //         fontWeight: 0
        //     }
        // },
        grid: {
            left: -100,
            top: 50,
            bottom: 10,
            right: 10,
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            show:false,
            type: "scroll",
            orient: "vartical",
            // x: "right",
            top: "center",
            right: "15",
            // bottom: "0%",
            itemWidth: 16,
            itemHeight: 8,
            itemGap: 16,
            textStyle: {
                color: '#A3E2F4',
                fontSize: 12,
                fontWeight: 0
            },
            data: ['IDS', 'VPN', '交换机', '防火墙', 'WAF', '堡垒机']
        },
        polar: {},
        angleAxis: {
            interval: 1,
            type: 'category',
            data: [],
            z: 10,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#0B4A6B",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                interval: 0,
                show: true,
                color: "#0B4A6B",
                margin: 8,
                fontSize: 16
            },
        },
        radiusAxis: {
            min: 40,
            max: 120,
            interval: 20,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#0B3E5E",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                formatter: '{value} %',
                show: false,
                padding: [0, 0, 20, 0],
                color: "#0B3E5E",
                fontSize: 16
            },
            splitLine: {
                lineStyle: {
                    color: "#0B3E5E",
                    width: 2,
                    type: "solid"
                }
            }
        },
        calculable: true,
        series: [{
            type: 'pie',
            radius: ["5%", "10%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 10,
                    length2: 10
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#0B4A6B"
                    }
                }
            }]
        }, {
            type: 'pie',
            radius: ["60%", "70%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 10
                },
                emphasis: {
                    show: false
                }
            },
            name: "",
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#0B4A6B"
                    }
                }
            }]
        },{
            stack: 'a',
            type: 'pie',
            radius: ['20%', '80%'],
            roseType: 'area',
            zlevel:10,
            label: {
                normal: {
                    show: true,
                    formatter: "{c}",
                    textStyle: {
                        fontSize: 12,
                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 10
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                value: 10,
                name: 'IDS'
            },
                {
                    value: 5,
                    name: 'VPN'
                },
                {
                    value: 15,
                    name: '交换机'
                },
                {
                    value: 25,
                    name: '防火墙'
                },
                {
                    value: 20,
                    name: 'WAF'
                },
                {
                    value: 35,
                    name: '堡垒机'
                }
            ]
        }, ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".hi4"));
    // 2. 指定配置项和数据
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };

    var XAData = [
        [{name:'西安'}, {name:'北京',value:100}],
        [{name:'西安'}, {name:'上海',value:100}],
        [{name:'西安'}, {name:'广州',value:100}],
        [{name:'西安'}, {name:'西宁',value:100}],
        [{name:'西安'}, {name:'银川',value:100}]
    ];

    var XNData = [
        [{name:'西宁'}, {name:'北京',value:100}],
        [{name:'西宁'}, {name:'上海',value:100}],
        [{name:'西宁'}, {name:'广州',value:100}],
        [{name:'西宁'}, {name:'西安',value:100}],
        [{name:'西宁'}, {name:'银川',value:100}]
    ];

    var YCData = [
        [{name:'银川'}, {name:'北京',value:100}],
        [{name:'银川'}, {name:'广州',value:100}],
        [{name:'银川'}, {name:'上海',value:100}],
        [{name:'银川'}, {name:'西安',value:100}],
        [{name:'银川'}, {name:'西宁',value:100}],
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {

        var res = [];
        for (var i = 0; i < data.length; i++) {

            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;

    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
    var series = [];
    [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
        series.push({
                name: item[0] + ' Top3',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: 'red',   //arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top3',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top3',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i],
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    var option = {
        // backgroundColor: '#000',
        // title : {
        //     text: '模拟航线',
        //     subtext: '数据纯属虚构',
        //     left: 'center',
        //     textStyle : {
        //         color: '#fff'
        //     }
        // },
        tooltip : {
            trigger: 'item',
            formatter:function(params, ticket, callback){
                if(params.seriesType=="effectScatter") {
                    return "线路："+params.data.name+""+params.data.value[2];
                }else if(params.seriesType=="lines"){
                    return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
                }else{
                    return params.name;
                }
            }
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['西安 Top3', '西宁 Top3', '银川 Top3'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'multiple'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color:'#fff'
                }
            },
            zoom:1.2,
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: "rgba(0, 24, 110,0.6)",
                    borderColor: '#195BB9',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            }
        },
        series: series
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();