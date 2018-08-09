<template>
    <div>
        <ul>
            <li v-for="(item,index) in restaurants" :key='index' >
                <img :src=item.image_path>
                <div class="box"> 
                    <h4>{{item.name}}</h4>
                    <p>月售{{item.recent_order_num}}单</p>
                    <p>￥{{item.float_minimum_order_amount}}起送 | 配送费￥{{item.float_delivery_fee}}</p>      
                    <p class="pppp"><span v-for="(tag,i) in item.support_tags" :key="i">{{tag.text}}</span></p>
                    <p class="p_1" v-for="(tips,k) in item.activities" :key="k"><span class="span1" :style="style_1" >{{tips.icon_name}}</span>{{tips.tips}}</p>
                    <div class="fengniao">{{item.mode}}</div>
                    <div class="distance">{{item.distance}}<b class="time" v-show=isshow(index)>{{item.order_lead_time}}分钟</b></div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
import {getRestaurants} from '../../../service/service.js'
export default {
    data(){
        return{
            restaurants:[],
            style_1:{
                background: "rgb(112, 188, 70)"
            }
           
        }
    },  
    methods:{
            isshow(index){
                let isshow;
                if(this.restaurants[index].order_lead_time==0){                        
                    isshow=false;
                }else{
                    isshow=true;
                }  
                
                return isshow             
            }    
    },
    mounted(){
        getRestaurants().then(result=>{      
            this.restaurants=result;
            console.log(this.restaurants);
        })
     }
}
</script>

<style scoped>
li{
    padding:15px 10px;
    border-bottom:1px solid #eee;
    display: flex;
}
img{
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 2px;
    height: 64px;
}
.box{
    width: 100%;
    padding-left:13px ;
    font-size: 12px;
    color: #666;
    position: relative;
}
.box h4{
    color: #333;
    font-weight: 800;
    font-size: 15px;
    line-height: 24px;
}
.box p{
    line-height: 24px;
}
.box span{
    border: #eee 1px solid;
    border-radius: 2px;
    padding: 0 2px;
    margin-right: 4px;
}
.box .span1{
    padding: 0 2px;
    border: none;
    border-radius: 2px;
    color:#fff;
    font-weight: 500;
    margin-right: 10px;
}

.pppp{
    border-bottom:dashed 1px #eee; 
}
.fengniao{
    position: absolute;
    right: 0;
    top:30px;
    background: #0097ff;
    border-radius: 2px; 
    color: #fff;
    padding: 0 2px;
}
.distance{
    position: absolute;
    right: 0;
    top:52px;
    color: #ddd;
}
.time{
    border-left:1px solid #ddd;
    padding-left:6px;  
    font-weight: normal;
    margin-left: 6px;
}
</style>
