//接口页面

//banner数据接口
const BANNER_DATA = '/restapi/shopping/openapi/entries?latitude=22.547&longitude=114.085947&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5'
const CONDITION = '/restapi/shopping/v1/restaurants/outside_filter/attributes?latitude=22.547&longitude=114.085947&terminal=h5'








//品牌商家详情请求
const SHOPPING_RESTAURANTS_DATA ='/restapi/shopping/v3/restaurants?latitude=22.547&longitude=114.085947&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=5&rank_id=&terminal=h5'





export default {
	BANNER_DATA,
	SHOPPING_RESTAURANTS_DATA,
	CONDITION
}