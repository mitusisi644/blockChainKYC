<template>
	<div id="lssChart" class="lss-chart"></div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		name: "charts",
		props: ["chartTitle","kId"],
		data() {
			return {
				docId:"lssChart",
				upColor: '#ec0000',
	            upBorderColor: '#8A0000',
	            downColor: '#00da3c',
	            downBorderColor: '#008F28',
	            oneDay: 24 * 3600 * 1000,
	            date: [],
	            now: new Date(+new Date(2014, 9, 3)),
	            datas: [[2320.26,2320.26,2287.3,2362.94]],
	            newRow: [],
				data0: []
			}
		},
		methods: {
			addData: function(shift){
	            this.now = [this.now.getFullYear(), this.now.getMonth(), this.now.getDate()].join('/');
	            this.newRow = [Math.random()*2000,Math.random()*2000,Math.random()*2000,Math.random()*2000];
	            this.datas.push(this.now);
	            this.date.push(this.now);
	            if (shift) {
	                this.date.shift();
	                this.datas.shift();
	            }
	            this.now = new Date(+new Date(this.now) + this.oneDay);
	        },
			splitData: function(rawData) {
		        var categoryData = [];
		        var values = []
		        // 数据意义：开盘(open)，收盘(close)，最低(low)，最高(high)
		        rawData.map((item,index,key)=>{
		        	categoryData.push(item.date);
		        	const arr =[Number(item.open),Number(item.close),Number(item.low),Number(item.high)];
		        	values.push(arr);
		        })
		        return {
		            categoryData: categoryData,
		            values: values
		        };
		    },
	        calculateMA: function(dayCount) {
	            var result = [];
	            for (var i = 0, len = this.data0.values.length; i < len; i++) {
	                if (i < dayCount) {
	                    result.push('-');
	                    continue;
	                }
	                var sum = 0;
	                for (var j = 0; j < dayCount; j++) {
	                    sum += this.data0.values[i - j][1];
	                }
	                result.push(sum / dayCount);
	            }
	            return result;
	        },
			drawLine:function(){
			    let myChart = echarts.init(document.getElementById(this.docId))
			    // 绘制图表
			    myChart.setOption({
			        title: {
	                    text: this.chartTitle,
	                    left: 0
	                },
	                tooltip: {
	                    trigger: 'axis',
	                    axisPointer: {
	                        type: 'cross'
	                    }
	                },
	                legend: {
	                        data: ['日K', 'MA5', 'MA10', 'MA30']
	                },
	                grid: {
	                    left: '10%',
	                    right: '10%',
	                    bottom: '15%'
	                },
			        xAxis: {
			        	type: 'category',
			        	scale: true,
	                    boundaryGap : false,
	                    axisLine: {onZero: false},
	                    splitLine: {show: false},
	                    splitNumber: 20,
	                    min: 'dataMin',
	                    max: 'dataMax',
			            data: this.data0.categoryData
			        },
			        yAxis: {
	                    scale: true,
	                    splitArea: {
	                        show: true
	                    }
	                },
	                dataZoom: [
	                    {
	                        type: 'inside',
	                        start: 99,
	                        end: 100
	                    },
	                    {
	                        show: false,
	                        type: 'slider',
	                        y: '90%',
	                        start: 99,
	                        end: 100
	                    }
	                ],
			        series: [
			        	{
			        		name: '日K',
	                        type: 'candlestick',
	                        data: this.data0.values,
	                        itemStyle: {
	                            normal: {
	                                color: this.upColor,
	                                color0: this.downColor,
	                                borderColor: this.upBorderColor,
	                                borderColor0: this.downBorderColor
	                            }
	                        },
			                markPoint: {
			                    label: {
			                        normal: {
			                            formatter: function (param) {
			                                return param != null ? Math.round(param.value) : '';
			                            }
			                        }
			                    },
			                    data: [
			                        {
			                            name: 'XX标点',
			                            coord: ['2013/5/31', 2300],
			                            value: 2300,
			                            itemStyle: {
			                                normal: {color: 'rgb(41,60,85)'}
			                            }
			                        },
			                        {
			                            name: 'highest value',
			                            type: 'max',
			                            valueDim: 'highest'
			                        },
			                        {
			                            name: 'lowest value',
			                            type: 'min',
			                            valueDim: 'lowest'
			                        },
			                        {
			                            name: 'average value on close',
			                            type: 'average',
			                            valueDim: 'close'
			                        }
			                    ],
			                    tooltip: {
			                        formatter: function (param) {
			                            return param.name + '<br>' + (param.data.coord || '');
			                        }
			                    }
			                },
			                markLine: {
			                    symbol: ['none', 'none'],
			                    data: [
			                        [
			                            {
			                                name: 'from lowest to highest',
			                                type: 'min',
			                                valueDim: 'lowest',
			                                symbol: 'circle',
			                                symbolSize: 10,
			                                label: {
			                                    normal: {show: false},
			                                    emphasis: {show: false}
			                                }
			                            },
			                            {
			                                type: 'max',
			                                valueDim: 'highest',
			                                symbol: 'circle',
			                                symbolSize: 10,
			                                label: {
			                                    normal: {show: false},
			                                    emphasis: {show: false}
			                                }
			                            }
			                        ],
			                        {
			                            name: 'min line on close',
			                            type: 'min',
			                            valueDim: 'close'
			                        },
			                        {
			                            name: 'max line on close',
			                            type: 'max',
			                            valueDim: 'close'
			                        }
			                    ]
			                }
			        	},
			        	{
	                        name: 'MA5',
	                        type: 'line',
	                        data: this.calculateMA(5),
	                        smooth: true,
	                        lineStyle: {
	                            normal: {opacity: 0.5}
	                        }
	                    },
	                    {
	                        name: 'MA10',
	                        type: 'line',
	                        data: this.calculateMA(10),
	                        smooth: true,
	                        lineStyle: {
	                            normal: {opacity: 0.5}
	                        }
	                    },
	                    {
	                        name: 'MA30',
	                        type: 'line',
	                        data: this.calculateMA(30),
	                        smooth: true,
	                        lineStyle: {
	                            normal: {opacity: 0.5}
	                        }
	                    }
			        ]
			    });
			},
			updateKlineData:function(){
		        var _this = this;
		        this.$http.get('../../../static/json/'+_this.kId+'.json').then(res => {
		        	_this.data0 = _this.splitData(res.body);
		        })
      		}
		},
		created() {
			this.updateKlineData();
		},
		watch: {
			"data0":function(){
				this.drawLine();
			},
			"chartTitle": function(){
        		this.updateKlineData();
			},
			"kId": function(){
        		this.updateKlineData();
			}
		},
		beforeDestroy(){
			//console.info('销毁前');
		},
		destroyed() {
		}
	};
</script>

<style scoped>
	.lss-chart {height:100%; width: 100%; overflow: hidden; position: relative;}
</style>
