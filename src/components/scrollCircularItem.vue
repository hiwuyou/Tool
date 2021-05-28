<template>
<div class="scroll-circular-item">
    <div v-if="iszoom" class="item-circular pointer border-solid" v-on:mousewheel.prevent="zoom"></div>
    <div v-else :class="[data.include ? 'border-solid' : 'border-dashed']" class="item-circular"></div>
    <div class="item-line"></div>
</div>
</template>

<script>
export default {
    name: 'scrollCircularItem',
    props: {
        iszoom: false, //缩放效果
        data: {}, // data是一个卡片的信息  {"serialno":"","title":"","name":"","printDate":"",” topicClass”:””,"include":false}
    },
    data: function () {
        return {
            file: '',
            isUploaded: '',
        }
    },
    methods: {
        zoom: function (e) {
            var event = e || window.event;
            var wheel = event.wheelDelta || -event.detail;
            var delta = Math.max(-1, Math.min(1, wheel));
            if (delta < 0) { //向下滚动
                this.$emit('zoom', 'up', this.data)
            } else { //向上滚动
                this.$emit('zoom', 'down', this.data)
            }
        }
    },
}
</script>

<style scoped>
</style>
