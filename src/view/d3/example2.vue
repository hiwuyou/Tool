<template>
   <div class="canvas">
       <btns></btns>
       <div id='svg'></div>
   </div>
</template>

<script>
import Btns from '../../components/btns.vue'
import Figure from './canvas'
export default {
  name: 'example2',
  data () {
    return {
        svg: null,
        nodes: [ 
                { name: "桂林" }, { name: "广州" },
                { name: "厦门" }, { name: "杭州" },
                { name: "上海" }, { name: "青岛" },
                { name: "天津" } 
            ],

        edges: [ { source : 0 , target: 1 } , { source : 0 , target: 2 } ,
              { source : 0 , target: 3 } , { source : 1 , target: 4 } ,
              { source : 1 , target: 5 } , { source : 1 , target: 6 } ],
        color: ['#8a6ce4', '#6ca7e4', '#5cb7b2', '#6bb187', '#79b16b', '#d9de88', '#888bde', '#d8c775'],
    }
  },

  components: {Btns},
  mounted() {
      this.$nextTick( () => {
          this.svg = new Figure(800, 600)
          this.svg.init('div[id=svg]')
          this.svg.drawForce(this.nodes,this.edges, this.color)
      })
  },

  created(){},

  methods: {
    
  }
}

</script>
<style lang='less' scoped>
.canvas {
    height: 100vh;
}
.axis path,
.axis line{
    fill: none;
    stroke: black;
    shape-rendering: crispEdges;
}

.axis text {
    font-family: sans-serif;
    font-size: 11px;
}
</style>