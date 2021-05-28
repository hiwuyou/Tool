<template>
<div class="messageCard" @dblclick="scanAllPolicy" :class="[(isLight || isSelect)? 'messageCard-light' : 'messageCard-normal']" v-on:mouseover="changeActive" v-on:mouseout="removeActive">
    <div class="messageCard-time">{{data.printDate}}</div>
    <div class="messageCard-title">{{data.title}}</div>
    <div class="messageCard-policy">{{data.name}}</div>
    <div v-show="(isLight || isSelect || !isshow) " class="messageCard-scanDetail" @click.stop="goScanDetail">查看详情 ></div>
</div>
</template>

<script>
export default {
    name: 'scrollMessageCard',
    props: {
        data: {}, // data是一个卡片的信息  {"serialno":"","title":"","name":"","printDate":"",” topicClass”:””,"include":false}
        topicclass: '', // 标记相同topicclass 高亮的变量
        selectcell: '', // 标记相同topicclass 高亮的变量
        isshow: false // 高亮和双击事件和选中事件是否生效标记
    },
    data: function () {
        return {
            isLight: false, // 高亮标记
            isSelect: false
        }
    },
    watch: {
        // topicclass: function (val) {
        //     if (this.isshow) {
        //         if (this.data.topicClass !== '' && val == this.data.topicClass) {
        //             this.isLight = true;

        //         } else {
        //             this.isLight = false;
        //         }
        //     }

        // }, // 相同topicclass 鼠标移入之后同时高亮
        // selectcell: function (val) {
        //     if (this.isshow) {
        //         if (val == this.data.serialno) {
        //             this.isSelect = true
        //         } else {
        //             this.isSelect = false;
        //             this.isLight = false
        //         }
        //     }
        // },// 相同topicclass 鼠标点击之后同时高亮
    },
    methods: {
        scanAllPolicy: function () {
            //双击时光轴上的某一政策时
            if (this.isshow) {
                this.$emit("celldblclick", this.data)
            }
        },

        goScanDetail: function () {
            //查看详情
            this.$emit("goscandetail", this.data.serialno)
        },
        changeActive: function () {
            this.isLight = true
            //鼠标移入之后 高亮同类的卡片
            this.$emit("mousechange", this.data.topicClass)
        },
        removeActive: function () {

            this.isLight = false
            //鼠标移出之后  取消高亮
            this.$emit("mousechange", '')
        },
    },
}
</script>

<style  scoped>
</style>
