<template>
    <div>
    <table></table>  
        <v-Ddd></v-Ddd>
 

       <div class="sc">
           <!-- 这里有个页头 -->
           <h1>这里有个页头</h1>
           <!-- 付款给我 -->
           <div class="sen">
               <div class="l1">
                   <div class="f1">付款给:<span>boss</span></div>
                   <div class="f2">优惠说明</div>
               </div>
               <!-- 消费金额 -->
               <div class="l2">
                   <div class="f3">
                       <div class="f4">消费金额</div>
                       <div class="f5">
                           <input type="text" placeholder="请输入金额" v-model="value" @keyup="keyc">
                       </div>
                   </div>
               </div>
              <!-- 不参与金额 -->
               <div class="l2">
                   <div class="f3">
                       <div class="f4">不参与金额</div>
                       <div class="f5">
                           <input type="text" placeholder="请输入金额" value="￥0.00"   >
                       </div>
                   </div>
                </div>

                <!-- 店铺满减 -->
               <!-- <div class="l4"> 
                   <div class="swit">
                       <div class="store">店铺满减</div>
                       <div class="sss">
                           <mt-switch v-model="dis" ></mt-switch>
                       </div>
                   </div>
                   <div class="top" v-show="dis">不满足满减条件</div>
                </div>-->
                <!-- 备注信息 -->

                <!-- 储值优惠(充值广告) -->

                <div class="pc" v-show="pn">
                    <div class="pc1">储值有礼</div>
                    <div class="pc2">
                        <div class="pc3">
                            <div class="pc4">￥100.0</div>
                            <div class="pc5">
                                <span>赠送50元</span>
                            </div>
                            <div class="ff">
                                <button @click="cctv">立即充值</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!--这是备注信息  -->
                
                <br>
                <div class="l2">
                   <div class="f3">
                       <div class="f4">备注</div>
                       <div class="f5">
                           <input type="text" placeholder="请填写备注信息">
                       </div>
                   </div>
               </div>

                <!-- 充值按钮 -->
               <button class="btn">确认支付</button>
           </div>
       </div>
    </div>
</template>
<script>
  import vDdd from "./Ddd.vue";
export default {
    data(){
        return{
          pn:false,
          value:"",
       

        }
    },
    methods: {
        keyc(){
          if(isNaN(this.value)==false){
              this.pn=true;
          }else{
              this.$messagebox("请输入正确金额");
                  this.value=""
          
          }

            },
        cctv(){
           this.$router.push("/Pay")
        }
        },
        components: {
	vDdd
 }
      
    }

</script>
<style scoped>
.sc{
    background-color:#f3f3f3;
    font-size:10px;
    color:#333;
    width:100%;
    height:999px;
}
.sc .sen{
    padding:0 7px 16px;
}
.sc .sen .l1{
    padding:10px 8px 7px 6px;
    display: flex;
    justify-content: space-between;
}
.sc .sen .l1 .f1{
    overflow: hidden;
    font-size:10px;
    
}
.sc .sen .l1 .f1 span{
    margin-left:5px;
    white-space: nowrap;
}
.sc .sen .l1 .f2{
    color:rgb(255,113,0);
    font-size:10px;
}
.sc .sen .l2{
    padding:7px 10px;
    border-radius:5px;
    margin-bottom: 20px;
    background-color:#fff; 
}
.sc .sen .l2 .f3{
    display: flex;
    justify-content: space-between;
}
.sc .sen .l2 .f3 .f4{
   
    align-items:center;
    display: inline-flex;
}
.sc .sen .l2 .f3 .f5{
    display: inline-flex;
    align-items: center;
}
.sc .sen .l2 .f3 .f5 input{
    text-align: right;
    flex:1;
    font-size:11px;
    display: inline-block;
    border:0px;
    outline:none;
}
.sc .btn{
    background:rgb(255,113,0);
    color:hsla(0, 0%, 100%, .6);
    line-height: 39px;
    border-radius: 5px;
    font-size:10px;
    text-align: center;
    margin-top:15px;
    width:100%;
    border:0;
}
/* .sc .sen .l4{ 
    border-radius:5px;
    background-color:#fff;
    margin-top:6px;
    font-size:10px;
    margin-top:10px;
    overflow: hidden;
}
.sc .sen .l4 .swit{
    border-bottom:none;
    margin:0 6px;
    padding:5px 0;
    text-align:right;
    display:flex;
    justify-content: space-between;
}
.sc .sen .l4 .top{
    text-align: right;
    padding-bottom: 12px;
    padding-top:12px

}*/
.sc .pc{
    margin-top:20px;
    padding:6px 8px;
    background: #fff;
    border-radius:5px;
}
.sc .pc .pc1{
    font-size:16px;
    margin-bottom:8px;
    border-bottom:3px dotted #f3f3f3;
    padding-bottom:8px;
}
.sc .pc .pc2{
    display:flex;
    flex-flow:row wrap;
    margin-top:6px;
}
.sc .pc .pc2 .pc3{
    border-color:rgb(255,113,0);
    width:100%;
    border:3px solid #ff7100;
    border-radius:5px;
    padding:8px 8px;
    position:relative;
}
.sc .pc .pc2 .pc3 .pc4{
    color:rgb(255,113,0);
    font-size:14px;
    margin-bottom:4px;
    
}
.sc .pc .pc2 .pc3 button{
    background-color:rgb(255,113,0);
    widows: 20px;
    line-height: 10px;
    position:absolute;
    top:39%;
    right:3%;
    color:#fff;
    font-size:12px;
    text-align: center;
    border-radius: 8px;
    border:0px;
}

</style>