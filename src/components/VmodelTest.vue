<template>
   <div class="btn" @click="change">
       <span class="unchecked" v-if="!value.checked"> {{ value.name}}</span>
       <span class="checked" v-if="value.checked">{{ value.name}}</span>
   </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  props: {
      value:Object,
  },  
  components: {},

  computed: {},

  mounted(){},

  methods: {
      change() {
          this.value.checked = !this.value.checked
          this.$emit('input',this.value)
      }
  }
}

</script>
<style lang='less' scoped>
.btn {
    width: 50px;
    color: #fff;
    margin: 20px 100px;
    span {
        display: block;
        padding: 10px;
        border-radius: 5px;
    }
}
.unchecked {
    background: rgb(84, 85, 85);
}
.checked {
    background: rgb(121, 138, 177);
}
</style>