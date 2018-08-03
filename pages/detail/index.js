
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
      //定义比例尺
      let linear = d3.scale().linear()
        .domain([min,max])
        .range([0,300])
      let svg = d3.select('#bar')
                  .append('svg')
                  .attr('width',width)
                  .attr('height',height);
      svg.selectAll('rect')
         .data(dataSet)
         .enter()
         .append('rect')
         .attr('x',function (d,i) {
           return i * rectHeight;
         })
         .attr('y',0)
        .attr("height",function(d){
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
