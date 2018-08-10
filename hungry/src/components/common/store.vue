<template>
    <div class="tt">
        <img :src=item.image_path>
        <div class="box"> 
            <h4>{{item.name}}</h4>
            <p>
                <i class="sta">
                    <i class="star_y" :style="{width:wid}"></i>
                    <i class="iconfont star">&#xe62b;&#xe62b;&#xe62b;&#xe62b;&#xe62b;</i>
                </i>
                <span class="rating" v-show=rat>
                {{item.rating}}</span>月售{{item.recent_order_num}}单
            </p>
            <p>￥{{item.float_minimum_order_amount}}起送 | 配送费￥{{item.float_delivery_fee}}</p>      
            <p class="pppp">
                <span v-for="(tag,i) in item.support_tags" :key="i">{{tag.text}}</span>
                <span v-show="kb" :style="{color:'#e8470b',border:'none'}"><i class="iconfont font_1">&#xe600;</i>{{item.recommend.reason}}</span>
            </p>
            <p class="p_1" v-for="(tips,j) in item.activities_1" :key="j" ><span class="span1" :style="{background:'#'+tips.icon_color}" >{{tips.icon_name}}</span>{{tips.tips}}</p>
            <div v-show=type><p class="p_1" v-for="(tip,z) in item.activities_2" :key="z"  ><span class="span1" :style="{background:'#'+tip.icon_color}" >{{tip.icon_name}}</span>{{tip.tips}}</p></div>
            <div class="fengniao">{{item.mode}}</div>
            <div class="distance">{{item.distance}}<b class="time" v-show=isshow>{{item.order_lead_time}}分钟</b></div>
            <div class="sups"><span v-for="(sup,j) in item.supports" :key="j" >{{sup.icon_name}}</span></div>
            <div class="num" v-show=hide @click="click()">{{item.num}}个活动<b class="num_xia">◢</b></div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:Object
    },
    data(){
        return{
            type:false,            
        }
    },
    computed:{
        isshow(){
            if(this.item.order_lead_time==0){                        
                return false;
            }else{
                return true;
            }                                     
        },
        kb(){
            if(this.item.recommend.reason=="口碑人气好店"){
                return true;
            }else{
                return false;
            }
        },
        hide(){
            if(this.item.activities_2.length>=1){
                return true;
            }else{
                return false;
            }
        },
        rat(){
            if(this.item.rating==0){
                return false;
            }else{
                return true;
            }
        },
        wid(){
            let wid;
            wid=this.item.rating/5*60;
            return wid=wid+'px'
        }
    },  
    methods:{        
        click(){
            if(!this.type){
                this.type=true;
            }else{
                this.type=false;
            }           
        }
        
    },
    mounted(){
        
    }

}
</script>

<style scoped>
.tt{
    padding:15px 10px;
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
.p_1{
    width:200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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
    color: #888;
}
.time{
    border-left:1px solid #ddd;
    padding-left:6px;  
    font-weight: normal;
    margin-left: 6px;
}
.sups{
    position: absolute;
    right: 0;
    top: 6px;
}
.num{
    position: absolute;
    right: 0;
    top: 96px;
    color: #999;
}
.num .num_xia{
    display:inline-block;
    font-size: 12px;
    font-style: normal;
    padding: 6px;
    transform: rotate(45deg);
    transition: transform 200ms;
}
.color{
    color:#666;
    border: none;
}
.box p span.rating{
    border: none;
}
i{
    font-size: 12px;
}
.box p i.sta{
    display: inline-block;
    border: none;
    padding: 0;
    background: #eee;
    width: 60px;
    height: 11px;
    overflow: hidden;
    position: relative;
}
.star{
    line-height: 12px;
    color: #fff;
    position: absolute;
    top :0;
    left: 0;
}
.star_y{
    position: absolute;
    top :0;
    left: 0;
    display: inline-block;
    line-height: 12px;
    height: 100%;
    background: #ffe601;
}
</style>