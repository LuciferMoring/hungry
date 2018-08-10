<template>
    <div>
        <ul>
            <li v-for="(item,index) in restaurants" :key='index' >

                <Store :item=item></Store>

            </li>
        </ul>
    </div>
</template>

<script>
import {getRestaurants} from '../../../service/service.js'
import Store from './store.vue'
export default {
    components:{
        Store
    },
    data(){
        return{
            restaurants:[]             
        }
     },  
    mounted(){
        getRestaurants().then(result=>{      
            this.restaurants=result;
        })
     }
}
</script>

<style scoped>
li{
    border-bottom:1px solid #eee;
}
</style>
