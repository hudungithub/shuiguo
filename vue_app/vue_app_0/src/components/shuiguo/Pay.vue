<template>
    <div class="conts">
    <table></table>
        <v-Ddd></v-Ddd>
        <div class="pb">
            <div class="pbt">
                <div class="pk">
                    <div class="pi">0.00</div>
                    <div class="po">当前储值(元)</div>
                </div>
                <div class="paj" @click="lookV">充值记录</div>
            </div>
            <div ></div>
        </div>


        <!-- 这是储值选择 -->
        <div class="area">
            <div class="lis">
                <div class="ite">
                    <div class="reMoney">100元</div>
                    <div class="giveMoney">赠送50.00元</div>
                </div>
            </div>
        </div>
        <!-- 这是支付方式 -->
        <!-- <div> 
            <div>支付方式</div>
            <div>
                <input type="radio" name="payment" value="wechatPay">
                <span>微信</span>
            </div>
            <div>
                <input type="radio" name="payment" value="aliPay">
                <span>支付宝</span>
            </div>
        </div>-->
        <div class="ap">
            <div class="aq">
                <button @click="payc">充值</button>
            </div>
        </div>
    </div>
</template>
<script>
  import vDdd from "./Ddd.vue";
export default {
    data(){
        return {

        }
    },
    methods: {
        payc(){
            this.$messagebox("没有该支付方式")
        },
        lookV(){
            this.$router.push("/Vag")
        }
    }, 
    components: {
         vDdd
        }
}
</script>
<style scoped>
*{margin:0px;padding:0px;} 
.conts{
    height:100%;
    width:100%;
    box-sizing: border-box;
    min-height:568px;
    font-size:14px;
    color:#444;
}
.conts .pb{
  margin-top:30px;
    margin-bottom:48px;
}
.conts .pb .pbt{
  
    width:100%;
    height: 114px;
    background:url(../../assets/b2.png) 100% 100% no-repeat;
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
    background-size:cover;
}
.conts .pb .pbt .pk{
    color:#fff;
    text-align:center;
    font-size:14px;
}
.conts .pb .pbt .pk .pi{
    font-size:20px;
    line-height: 20px;
}
.conts .pb .pbt .pk .po{
    font-size:20px;
    line-height:20px;
    margin-top:10px;
}
.conts .pb .pbt .paj{
    width:80px;
    height:18px;
    border-radius:8px;
    color:#fff;
    position:absolute;
    top:28px;
    right:-8px;
    text-align:center;
    line-height:18px;
    background: hsla(0, 0%, 100%, .16)
}
.conts .area{
    margin:0 18px;
}
.conts .area .lis{
    display: flex;
    flex-flow: row wrap;

    margin-top:40px;
}
.conts .area .lis .ite{
    border:2px solid #ff7100;
    display:inline-flex;
    flex:0 1 auto;
    height: 92px;
    width:114px;
    border-radius:5px;
    color:#ccc;
    box-sizing:border-box;
    flex:0 1 auto;
    flex-direction:column;
    justify-content: center;
    align-items:center;
}
.conts .area .lis .ite .reMoney{
color:#ff7100;
font-size:18px;
}
.conts .area .lis .ite .giveMoney{
    color:#ff7100;
    margin-top:7px;
    font-size:11px;
   
}
.conts .ap{
    width:100%;
    height:73px;
    display: flex;
    margin-top:30px;
    position: fixed;
    bottom:0;
    background:#fff;
    z-index:2px;
}
.conts .ap .aq{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.conts .ap .aq button{
    width:308px;
    height:43px;
    line-height:43px;
    font-size:17px;
    border-radius:20px;
    color:#fff;
    text-align:center;
    margin:auto;
    border:0px;
    background:#ff7100;
}
</style>