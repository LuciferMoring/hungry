import Axios from "axios"
import API from "../src/api/index.js"
//请求banner数据:
export function getBannerData1(){
	let p1 = new Promise((resolve,reject)=>{
		Axios.get(API.BANNER_DATA)
		.then(response=>{
			
			let data = response.data[0].entries.slice(0,10).map(item=>{
				return {
					name:item.name,
					//图片url拼接
					src:'//fuss10.elemecdn.com/' + item.image_hash +'.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
				}
			});
			resolve(data);
			// console.log('请求成功')
		})
		.catch(error=>{
			console.log(error)
		})
  })
  return p1;
}
export function getBannerData2(){
	let p2 = new Promise((resolve,reject)=>{
		Axios.get(API.BANNER_DATA)
		.then(response=>{
			let data2 =response.data[0].entries.slice(10,13).map(item=>{
				return {
					name:item.name,
					//图片url拼接
					src:'//fuss10.elemecdn.com/' + item.image_hash +'.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
				}
			})
			resolve(data2);
			// console.log('请求成功')
		})
		.catch(error=>{
			console.log(error)
		})
  })
  return p2;
}
//请求筛选条件数据:
export function getConditionData(){
	let p3 = new Promise((resolve,reject)=>{
		Axios.get(API.CONDITION)
		.then(response=>{
			let conditionData = response.data.inside_sort_filter.map(item=>{
				return {
					name:item.name
				}	
			})
			
			resolve(conditionData);
		})
		.catch(error=>{
			console.log(error)
		})	
	})
	return p3;
}
export function getConditionData2(){
	let p4 = new Promise((resolve,reject)=>{
		Axios.get(API.CONDITION)
		.then(response=>{
			let conditionData2 = response.data.outside_sort_filter.map(item=>{
				return {
					name:item.name
				}	
			})
			
			resolve(conditionData2);
		})
		.catch(error=>{
			console.log(error)
		})	
	})
	return p4;
}