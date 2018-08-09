import Axios from "axios"
import API from "../src/api/index.js"
//请求banner数据:
export function getBanner(){
	let p1 = new Promise((resolve,reject)=>{
	
	})
	

}

//请求商家详情数据
export function getRestaurants(){
	return new Promise((resolve,reject)=>{
		Axios.get(API.SHOPPING_RESTAURANTS_DATA,{
			params: {
				offset:0
			}
		})
		.then(response=>{
			let data = response.data.items.map(item=>{
				//判断是否有蜂鸟联盟的mode
				let mode=null
				if(item.restaurant.delivery_mode){
					mode=item.restaurant.delivery_mode.text
				}else{
					mode=''
				}
				//判断用km还是m
				let tance=null
				if(item.restaurant.distance/1000>=1){
					tance=parseInt(item.restaurant.distance/10)/100+'km'
				}else{
					tance=item.restaurant.distance+'m'
				}
				//判断图片类型
				let op=null;
				if(item.restaurant.image_path.indexOf('png')==-1){
					op='.jpeg';
				}else{
					op='.png';
				}
				
				return{
					name: item.restaurant.name,
					recent_order_num: item.restaurant.recent_order_num,
					float_minimum_order_amount: item.restaurant.float_minimum_order_amount,
					float_delivery_fee: item.restaurant.float_delivery_fee,
					support_tags:item.restaurant.support_tags,
					distance:tance,
					activities:item.restaurant.activities,
					image_path:'//fuss10.elemecdn.com/'+item.restaurant.image_path+op+'?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/',
					mode:mode,
					order_lead_time:item.restaurant.order_lead_time
				}
				
			})
			resolve(data);
		})
		.catch(error=>{
			console.log(error)
		})
	})
}

