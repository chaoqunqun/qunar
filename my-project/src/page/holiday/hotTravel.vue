<template>
	<div>
	   <p>当季热门旅游目的地</p>
	   <div class="main5">
	   	    <div class="dv" v-for="data in data" :key="data.id">
	   	    	<img :src="data.img" alt="" />
	   	    	<div class="dv1">
	   	    		 <span class="s1">{{data.name}}</span>
	   	    		 <br />
	   	    		 <span class="s2">{{data.person}}人喜欢</span>
	   	    	</div>
	   	    </div>
	   </div>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default {
		name:'hotTravel',
		data () { 
			return {
				data:[
				  {id:1,img:'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_190x250_3703cc3a.jpg',name:'泰国',person:6666},
{id:2,img:'https://imgs.qunarzz.com/p/p58/201302/28/8db08d342fdbb13c93835fbb.jpg_190x250_a1f5693b.jpg',name:'法国',person:18888},
{id:3,img:'https://imgs.qunarzz.com/p/p2/201302/28/e574803e7e04696e93835fbb.jpg_190x250_9a9a4252.jpg',name:'美国',person:16666},
{id:4,img:'https://imgs.qunarzz.com/p/p5/1411/67/677f3ca100291a23213a9cdb.jpg_190x250_a4470d1f.jpg',name:'日本',person:29899},
{id:5,img:'https://imgs.qunarzz.com/p/p48/201302/28/e9603bf3a8f7fbfd93835fbb.jpg_190x250_8ff2d7c9.jpg',name:'新加坡',person:38656},
{id:6,img:'https://imgs.qunarzz.com/p/p1/201302/28/dc26239409edf12293835fbb.jpg_190x250_6d3f8535.jpg',name:'马来西亚',person:90566}
				  				  
				]
			}
		}
//		methods:{
//			getData () {
//				axios.get(this.$root.config.host+'/qa/golfz/destination/appHomeArrive?version=1&width=190&height=250&count=14&uid=dXrgglqadohT7zZaWqUoAg==&userName=&dep=%E5%8C%97%E4%BA%AC&depType=100&callback=jsonp_1520223848637_62557',{params:{depType:10}}).then(data=>{
//					this.data = data.data
//					console.log(this.data)
//				})
//           }  
//		},
//		created () {
//			this.getData()
//		}
	}
</script>

<style scoped>
	
p{
	  color:#333;
	  font-size:18px;
	  margin:0.18rem 0.16rem;
	}
	.main5{
		
		width:3.75rem;
		display:flex;
		flex:1;
		flex-wrap:wrap;
	}
	.dv{
		height:1.1rem;
		width:1.1rem;
		margin-left:0.1rem;
		margin-bottom:0.2rem;
		position:relative;
	}
	.dv1{
		height:0.6rem;
		width:0.83rem;
		background:#fff;
		position:absolute;
		bottom:-0.04rem;
		left:0.12rem;
		text-align:center;
		line-height:0.2rem;
	}
	span{
		color:#333;
	}
	.s1{
		font-size:18px;
		margin-top:0.1rem;
	}
	.s2{
		font-size:12px;
	}
	img{
		height:1.1rem;
		width:100%;
	}
</style>