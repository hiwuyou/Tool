<template>
   <div>
       <button @click="back" class="btn">返回</button>
   </div>
</template>

<script>
export default {
  name: 'btns',
  data () {
    return {
    }
  },

  components: {},

  created(){},

  methods: {
      back() {
          this.$router.back(-1)
      }
  }
}

</script>
<style lang='less' scoped>
 .btn {
     width: 50px;
     height: 20px;
     color: #fff;
     background: rgb(112, 98, 98);
     position: absolute;
     left: 50px;
     top: 50px;
 }
</style>