<template>
	<div>
		<div class="main">
		    <div class="main1">
		    	<div class="title">
		    		<router-link :to="{name:'index'}">
			    	  <i class="iconfont icon-jiantou3"></i>
		    		</router-link>
			        <h2>旅游度假</h2>
				    <p class="p1">
				    <i class="iconfont icon-dingwei ding"></i>
				          北京站
				    </p>
				    <i class="iconfont icon-gouwuche che"></i>
				    <i class="iconfont icon-xinxi"></i>
		    	</div>
		    	<div class="sousuo">
		    		<p class="p2">国家/城市/关键词 </p>
		    	</div>
		    </div>
		    <swiper></swiper>
		    <hotTravel></hotTravel>
		</div>
		
	</div>
</template>

<script>
     import swiper from './swiper'
     import hotTravel from './hotTravel'
	
	export default {
		name:'holiday',
		components:{swiper,hotTravel}
	}
</script>

<style scoped>
	.main{
		display:flex;
		flex:1;
		flex-direction:column;
		background:#f8f8f8;
		width:3.75rem;
		margin:0 auto;
	}
	.main1{
		height:2.20rem;
		width:3.75rem;
		background:url("https://s.qunarzz.com/package_mobile/app/home/home-bg1.jpg") no-repeat;
	    background-size:100% 100%;
	}
	.title{
		display:flex;
		height:0.35rem;
		width:3.1rem;
		margin:0 auto;
		margin-top:0.1rem;
	}
	i{
		font-size:22px;
		color:#fff;
	}
	h2{
		color:#fff;
		font-size:20px;
		margin-left:0.5rem;
	}
	.p1{
		height:0.26rem;
		width:0.83rem;
		background:#f9a71f;
		font-size:16px;
		color:#fff;
		text-align:center;
		line-height:0.26rem;
		border-radius:0.13rem;
		margin-right:0.1rem;
		margin-left:0.06rem;
	}
	.ding{
		font-size:16px
	}
	.che{
		margin-right:0.1rem;
	}
	.sousuo{
		height:0.43rem;
		width:3.2rem;
		background:#fff;
		border-radius:0.1rem;
		margin-top:1.22rem;
		margin-left:0.3rem;
		text-align:center;
		line-height:0.43rem;
	}
	.p2{
		color:#333;
		font-size:12px;
	}
	
	
</style>