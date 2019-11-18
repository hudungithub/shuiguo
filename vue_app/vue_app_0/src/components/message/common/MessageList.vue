<template>
    <div>
        <!--消息列表MessageList.vue-->
        <!--1一条消息-->
        <div class="rootstyle" v-for="(item,index) of list.data" :key="index">
        <!--1.1左侧一组【图片和标题】-->
            <div class="leftimgtxt">
                <img :src="require('../../../assets/tblogo.png')" class="imgstyle">
                <div class="titlestyle">
                <span class="title">
                    {{item.title}}
                </span>
                 <span class="subtitle">
                    {{item.subtime}}
                </span>
                </div>
            </div>
        <!--1.2右侧时间-->
            <span class="sendtime">
                {{item.time}}
            </span>
        </div>
    </div>
</template>
<script>
import mlist from '../json/messagelist.json'
export default {
    data(){
        return{
            list:mlist
        }
    }
}
</script>
<style scoped>
    /*1:一条消息*/
    /*1.1:父元素 弹性布局*/
    .rootstyle{
        display: flex;
        justify-content: space-between;
        align-items:center;
        border-bottom: 1px solid #ccc;
    }
    /*1.2:左侧图片与标题*/
    .leftimgtxt{
        display: flex;
        align-items: center;
    }
    /*1.3:修改图片样式*/
    .imgstyle{
        width:50px;
        height:50px;
    }
    /*1.4:标题布局*/
    .titlestyle{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left:7px;
    }
    /*1.5:标题样式*/
    .title{
        color: #000;
        font-size:17px;
    }
    /*1.6:子标题样式*/
    .subtitle{
        color: gray;
        margin-top:4px;
    }
    /*1.7:发送时间*/
    .sendtime{
        color:gray;
    }
</style>