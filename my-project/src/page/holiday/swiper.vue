<template>
	<div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
			    <div class="swiper-slide"><img  src="//img1.qunarzz.com/qs/1802/ad/f7a793d44a175502.jpg" alt="" /></div>
			    <div class="swiper-slide"><img src="//img1.qunarzz.com/qs/1802/6c/60a05e5d04c90f02.jpg" alt="" /></div>
			    <div class="swiper-slide"><img src="//img1.qunarzz.com/qs/1802/71/b355c5e289920802.jpg" alt="" /></div>
			    <div class="swiper-slide"><img src="//img1.qunarzz.com/qs/1801/17/7abafd5f4eb8b202.jpg" alt="" /></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	
	export default {
		name:'swiper',
		mounted () {
			new Swiper('.swiper-container',{ 
				loop:true,
				autoplay:{
					delay:1000,
					disableOnInteraction:false
				},
				pagination:{
					el:'.swiper-pagination'
				}
			})
		}
	}
</script>

<style>
	.swiper-container{
		margin-top:0.2rem;
		height:0.96rem;
	}
	img{
		height:0.96rem;
	}
</style>