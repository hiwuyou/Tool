<template>
<div class="timeScrollContent">
    <el-row>
        <el-row>
            <div class='timeScrollTitle'>时光轴</div>
        </el-row>
        <div class='timeScrollTitleBtn'>
            <button type='button' class="deletePolicy" @click="deletePolicy">删除节点</button>
        </div>
    </el-row>
    <div class="timeScroll">
        <div class="scroll-content flex">
            <div class="begin-scroll">
                <div class="begin-scroll-line"></div>
            </div>
            <el-row v-for="(item, index) in data" class="flex" :key="index">
                <div :class="[(index%2 == 0)? 'time-scroll-oddTime' : 'time-scroll-evenTime']">
                    <div v-if="index%2 != 0" class="printDate-icon"><i class="el-icon-date"></i></div>
                    <div class="printDate">{{item.printDate}}</div>
                    <div v-if="index%2 == 0" class="printDate-icon"><i class="el-icon-date"></i></div>
                </div>

                <!-- iszoom===false 去除缩放效果  如果不要缩放效果可以不用写 @zoom="datazoom" :data='item'-->
                <scroll-circular-item @zoom="datazoom" :iszoom="true" :data='item' :class="[(index%2 == 0)? 'evenCircular' : '']"></scroll-circular-item>

                <!--卡片  isshow===false 表示去除高亮和双击事件和选中事件  -->
                <scroll-message-card @mousechange="hightLight" :topicclass="heightLightCellTopicClass" :data="item" :selectcell='select' :class="[(index%2 == 0)? 'evenCard' : 'oddCard']" @click.native="selectOperation(index)" :isshow="true" @celldblclick="cellDblclick" @goscandetail="goScanDetail"> </scroll-message-card>
                <div v-if="index < data.length-1" class="scroll-line"></div>
            </el-row>
            <div>
                <div class="end-scroll-line"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    data
} from './timeData'
import scrollMessageCard from '@/components/scrollMessageCard'
import scrollCircularItem from '@/components/scrollCircularItem'
export default {
    name: "TimeScroll",
    data: function () {
        return {
            heightLightCellTopicClass: '',
            select: '',
            selectedCell: -1,
            data: [],
            downSize: 5 //每次缩小的节点个数
        }
    },
    components: {
        scrollMessageCard,
        scrollCircularItem
    },
    watch: {},
    methods: {
        selectOperation: function (index) {
            //单击卡片事件
            var serialno = this.data[index].serialno
            if (this.select == serialno) {
                this.select = ''
                this.selectedCell = -1
            } else {
                this.select = serialno
                this.selectedCell = index
            }

        },

        goScanDetail: function (serialno) {
            // 点击查看详情 
            console.log(serialno)
        },
        cellDblclick: function (cell) {
            // 双击时触发方法， cell 双击的卡片数据 
            console.log(cell)
        },
        datazoom: function (type, cell) {
            // type 鼠标滚动方向     down 放大  up缩小， cell 滚动节点数据  重新获取数据赋值给data

            //当前展示已是最小或者最大时，不能再缩小或放大 直接返回
            var index = this.data.indexOf(cell)
            if (type == 'down') {
                //将原数组从要删除的第一个元素开始截断
                var dataArray = this.data.splice(this.data.indexOf(cell))
                //新增的元素
                var addCell = [{
                    "serialno": "43",
                    "title": "addTitle",
                    "name": "addName",
                    "printDate": "2018年6月1日",
                    " topicClass": "主题分类",
                    "include": true
                }, {
                    "serialno": "33",
                    "title": "addTitle",
                    "name": "addName",
                    "printDate": "2018年6月1日",
                    " topicClass": "主题分类",
                    "include": true
                }]
                //删除无用元素
                dataArray.splice(0, 1)
                // 连接成新数组
                var data = this.data.concat(addCell, dataArray)
                this.data = data
            }
            if (type == 'up') {
                if ((this.data.length / this.downSize) <= 1) {
                    this.$message.warning('已缩至最小')
                    return
                }
                this.data.splice(index, index + this.downSize)
            }

        },
        hightLight: function (topicClass) {
            this.heightLightCellTopicClass = topicClass
        },
        deletePolicy: function () {
            if (this.selectedCell == -1) {
                this.$message.error("请选择要删除节点")
                return;
            }
            // 后台删除数据  ajax返回成功之后做下面操作，这样就不用再次请求数据
            this.data.splice(this.selectedCell, 1)
            this.select = ''
            this.selectedCell = -1
        },
        getData: function () {
            //页面初次加载需要获取数据
            this.data = data()
        }
    },
    created: function () {
        this.getData()

    }
}
</script>

<style scoped>
.timeScrollContent {
    width: 1000px;
}
</style>
