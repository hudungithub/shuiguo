<template>
    <div>
        <div class="mor">
            <h1>果园优惠券</h1>
            <span>已下架( ఠൠఠ )ﾉ</span>
            <div class="fn" @click="ad">返回首页</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        ad(){
            this.$router.push("/home")
        }
    },
}
</script>
<style scoped>
*{margin:0;padding:0;}
.mor{
    background-color: #f3f3f3;
    width:100%;
    height:999px;
    text-align: center;
    position: relative;
}
.mor h1{
    color:#ff7100;
}
.mor span{
background:#ddd;
width:108px;
text-align: center;
border-radius:10px;
position:absolute;
top:170px;
left:36%;


}
.mor .fn{
    position:absolute;
    left:40%;
    top:279px;
    border:2px solid #ff7100;
    border-radius:8px;
    color:#ff7100;
}
</style>