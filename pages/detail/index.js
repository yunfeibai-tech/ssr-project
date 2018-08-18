
/**
 * @Author: yunfei_bai
 * @Date: 2018/7/23 14:20
 * @Description:
 * */
import axios from '../../plugins/axios'
import * as d3 from 'd3'
export default {
  head: {
    title: '详情页',
    meta: [
      { charset: 'utf-8' },
      { name: 'keyword', content: '大数据' }
    ],
  },
  methods:{
    //渲染柱图
    initBar(){
      let width=300,height=300,dataSet = [ 250 , 210 , 170 , 130 , 90 ],rectHeight = 25;
      let min = d3.min(dataSet),max =d3.max(dataSet);
      let svg = d3.select('#bar')
                  .append('svg')
                  .attr('width',width)
                  .attr('height',height);
      //定义比例尺
      var linear = d3.scaleLinear()
        .domain([min, max])
        .range([0, 300]);
      svg.selectAll('rect')
         .data(dataSet)
         .enter()
         .append('rect')
         .attr('x',function (d,i) {
           return 0;
         })
         .attr('y',function (d,i) {
           return i * rectHeight;
         })
        .attr("height",function(d,i){
          return linear(d);
        })
        .attr("width",function(d){
          return 20;
        })
        .attr("fill","red");
    }
  },
  mounted(){
    this.initBar();
  }
  // middleware:'userAuth',
}
