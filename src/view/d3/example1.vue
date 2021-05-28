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
  name: 'example1',
  data () {
    return {
        svg: null,
        data: [ 250 , 210 , 170 , 130 , 90 ] //矩形的高
    }
  },

  components: {Btns},
  mounted() {
      this.$nextTick( () => {
          this.svg = new Figure(500, 500)
          this.svg.init('div[id=svg]')
          this.svg.draw(this.data)
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