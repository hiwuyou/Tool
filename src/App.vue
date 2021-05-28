<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
@import 'assets/css/colors';
body {
    padding: 0;
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.flex {
    display: flex;
}

.y-center {
    align-self: center;
}

.timeScrollContent {
    min-height: 700px;
    padding: 20px;
    overflow-x: hidden;
}

.messageCard-scanDetail {
    cursor: pointer;
    width: 100%;
    height: 24px;
    background: @color-time-scroll-detail;
    border-radius: 12px;
    font-size: 12px;
    color: #FFFFFF;
    line-height: 24px;
    margin-top: 20px;
    text-align: center;
}

.messageCard {
    border-radius: 16px;
    padding: 22px 16px;
    font-size: 16px;
    line-height: 22px;
    min-width: 128px;
    width: 128px;
    min-height: 116px;
}

.messageCard-normal {
    color: #323A52;
    background: #F6F6FF;
}

.messageCard-light {
    color: #FFFFFF;
    background: @color-time-scroll-main;
}

.messageCard-title {
    padding-top: 10px;
}

.messageCard-normal .messageCard-policy {
    color: #79808B;
}

.messageCard-policy {
    padding-top: 20px;
    font-size: 12px;
    text-align: justify;
    line-height: 16px;
}

.timeScrollTitle {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0;
    line-height: 32px;
}

.timeScrollTitleBtn {
    position: absolute;
    right: 100px;
    top: 0px;
}

.deletePolicy,
.addPolicy {
    border-radius: 2px;
    width: 88px;
    height: 32px;
    line-height: 32px;
}

.deletePolicy {
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.15);
    opacity: 0.65;
    color: #000000;
}

.addPolicy {
    background: @color-time-scroll-main;
    border: 1px solid @color-time-scroll-main;
    color: #FFFFFF;
}

.timeScroll {
    width: 100%;
    min-height: 500px;
    overflow-x: auto;
    padding: 20px 0 0 20px;
    overflow-y: hidden;
    height: 100%;
}

.scroll-content {
    position: relative;
    padding-top: 50%;
    transform: translatey(-50%);
}

.begin-scroll-line,
.end-scroll-line {
    width: 39px;
    border-radius: 8px;
}

.scroll-line {
    min-width: 200px;
}

.scroll-line,
.begin-scroll-line,
.end-scroll-line {
    position: relative;
    background: @color-time-scroll-main;
    height: 12px;
}

.begin-scroll-line:after,
.scroll-line:after,
.scroll-line:before,
.end-scroll-line:before {
    content: '';
    display: block;
    position: absolute;
    background: #ffffff;
    width: 10px;
    height: 16px;
    border-radius: 50%;
    top: -2px;
}

.begin-scroll-line:after,
.scroll-line:after {
    right: -6px;
}

.scroll-line:before,
.end-scroll-line:before {
    left: -6px;
}

.scroll-circular-item {
    position: relative;
    min-width: 28px;
    height: 28px;
    background: rgba(255, 255, 255, 0);
}

.border-solid {
    border: 1px solid #ffffff;
}

.border-dashed {
    border: 1px dashed #ffffff;
}

.item-circular {
    background: @color-time-scroll-main;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: auto auto;
    top: -5px;
    z-index: 10;
    position: relative;
    box-shadow: 1px 1px 11px @color-time-scroll-main;
}

.pointer {
    cursor: pointer;
}

.item-line:after {
    content: '';
    background: #EDECFF;
    position: absolute;
    border: 1px solid @color-time-scroll-main;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    bottom: -11px;
    z-index: 12;
    left: -5px;
}

.item-line {
    position: absolute;
    background: @color-time-scroll-main;
    width: 1px;
    height: 36px;
    top: 16px;
    right: 13px;
    z-index: 12;
}

.evenCard,
.oddCard {
    position: absolute;
    left: -64px;
}

.oddCard {
    top: 48px;
}

.evenCard {
    bottom: 65px;
}

.time-scroll-oddTime,
.time-scroll-evenTime {
    position: absolute;
}

.time-scroll-oddTime {
    top: 40px;
    transform: translateX(-39%);
}

.time-scroll-evenTime {
    bottom: 56px;
    /* right: 69%; */
    transform: translateX(-39%);
}

.printDate {
    font-size: 16px;
    color: #323A52;
    line-height: 32px;
    min-width: 125px;
    text-align: center;
}

.printDate-icon {
    background: #EDECFF;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    text-align: center;
    line-height: 32px;
    font-size: 15px;
    color: @color-time-scroll-main;
    margin: auto;
}

.evenCircular {
    top: -16px;
    z-index: 10;
    transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    /* Internet Explorer */
    -moz-transform: rotate(180deg);
    /* Firefox */
    -webkit-transform: rotate(180deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(180deg);
    /* Opera */
}
</style>
