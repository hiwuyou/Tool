<template>
   <div>1111111111111
     <vmodel-test v-model="data"></vmodel-test>
   </div>
  
</template>

<script>
import VmodelTest from '../components/VmodelTest.vue'

export default {
  name: 'TestRequest',
  data () {
    return {
      data: {
        name: '测试',
        checked: false
      }
    }
  },
  components: {VmodelTest},
  watch: {
    data: {
      handler(val) {
        console.log(val)
      },
      deep: true
    }
  },

  computed: {},
  created() {
      let arr1 = [1, 1 , 2 , 2 , 3]
      let maps = new Map()
      let arr2 = arr1.filter( a => { !maps.has(a) && maps.set(a,1) }) 

  },  
  mounted(){
    // this.$http.post('/data/basisSurvey/entbasic/v1', {
    //         entname: this.entname
    //     }).then( res => {
    //       console.log( res )
    //     })
  },

  methods: {}
}

</script>
<style lang='less' scoped>
</style>