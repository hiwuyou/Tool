<template>
   <div>
       <router-link to='/d3/example1'>简单的柱状图</router-link>
       <router-link to='/d3/example2'>简单的力导图</router-link>
   </div>
</template>

<script>
let extence = require('./extence')
export default {
  name: 'tableOfContent',
  data () {
    return {
    }
  },

  components: {},

  created(){
    let log = console.log
    let con = extence.content(extence.Person.prototype)
    function Sub () {
      // log(this)
      extence.Person.call(this)
      log(this)
    }
    Sub.prototype = con
    con.constructor = Sub
    let sub1 = new Sub()
    log(sub1)
  },

  methods: {}
}

</script>
<style lang='less' scoped>
</style>