<template>
	<div>
		
		<router-link :to="{name:'index'}" class="header" tag="div">
		    <img src="../../img/logo.jpg" alt="" />
        </router-link>		
		<div class="main">
			 <div class="main1" v-for="nav in navs" :key="nav.id" :style="nav.background">
			 	<table border="1" cellspacing="0" cellpadding="0" width="368" height="100">
			 		<tr>
			 			<td rowspan="2">
			 				<router-link :to="{name:nav.path1}" tag="div">
			 				   {{nav.title1}}
			 				
			 				<br />
			 				<i :class="nav.icont" class="i1"></i>
			 			  </router-link>
			 			</td>
			 			<td>
			 				<router-link :to="{name:nav.path2}" tag="div">
			 				   {{nav.title2}}
			 			   </router-link>
			 			</td>
			 			<td>{{nav.title3}}</td>
			 		</tr>
			 		<tr>
			 			<td>{{nav.title4}}</td>
			 			<td>{{nav.title5}}</td>
			 		</tr>
			 	</table>
			 </div>
			 <div class="main2">
			 	<table border="1" cellspacing="0" cellpadding="0" width="368" height="52">
			 		<tr>
			 			<td>金融 理财</td>
			 			<td>保险 车险</td>
			 			<td>全球购</td>
			 		</tr>
			 	</table>
			 </div>
			 <div class="main3">
			 	  <div class="dv" v-for="nav in main3" :key="nav.id">
			 	  	 <i :class="nav.icont" class="i2"></i>
			 	  	 <span>{{nav.title}}</span>
			 	  </div>
			 </div>
			 <div class="main4">
			 	  <div class="dv2">
			 	  	<i class="iconfont icon-luotuo i3"></i>
			 	  	<span class="s1">下载APP</span>
			 	  </div>
			 	  <div class="dv2">
			 	  	<i class="iconfont icon-dingdan i3"></i>
			 	  	<span class="s1">我的订单</span>
			 	  </div>
			 	  <div class="dv2">
			 	  	<i class="iconfont icon-wode i3"></i>
			 	  	<span class="s1">我的</span>
			 	  </div>
			 </div>
		</div>
    </div>
</template>

<script>
	export default {
		name:'index',
		data () {
			return {
				navs:[
						{
						   id:1,
						   title1:'酒店',
						   title2:'特惠酒店',
						   title3:'海外酒店',
						   title4:'客栈 民宿',
						   title5:'会场 聚会',
						   path1:'hotel',
						   path2:'lowHotel',
						   path3:'hwhotel',
						   path4:'kezhan',
						   path5:'meet',
						   background:'background:#ff5555',
						   icont:'iconfont icon-guojijiudian'
						},
						{
						   id:2,
						   title1:'机票',
						   title2:'低价机票',
						   title3:'汽车票 船票',
						   title4:'火车票',
						   title5:'专车 自驾',
						   background:'background:#00a7f7',
						   icont:'iconfont icon-airplane__eas',
						   path1:'plan',
						   path2:'lowPlan',
						   path3:'car',
						   path4:'train',
						   path5:'your'
						},
						{
						   id:3,
						   title1:'度假',
						   title2:'景点 门票',
						   title3:'旅游团购',
						   title4:'自由行',
						   title5:'周边 短途',
						   path1:'holiday',
						   path2:'sight',
						   path3:'trval',
						   path4:'free',
						   path5:'ground',
						   background:'background:#7cb832',
						   icont:'iconfont icon-lvyou'
						}
				],
				main3:[
				    {id:1,title:'签证 WiFi',icont:'iconfont icon-qianzheng'},
				    {id:2,title:'出境游',icont:'iconfont icon-chujingyou'},
				    {id:3,title:'一日游',icont:'iconfont icon-lvyou1'},
				    {id:4,title:'美食林',icont:'iconfont icon-meishijiayin'},
				    {id:5,title:'汽车票',icont:'iconfont icon-qichepiao'},
				    {id:6,title:'国内游',icont:'iconfont icon-guoneiyou1'},
				    {id:7,title:'超级巴士',icont:'iconfont icon-listbashi'},
				    {id:8,title:'攻略',icont:'iconfont icon-listbashi'}
				]
			}
		}
	}
</script>

<style scoped>
	.header{
		width:3.68rem;
	}
	.main{
		width:3.75rem;
		display:flex;
		flex-direction:column;
		flex:1;
		background:#eeeeee
	}
	.main1{
		height:1rem;
		width:3.68rem;
		margin-top:0.02rem;
		margin:0 auto;
	}
	table{
		 border:none
	}
	td{
		width:1.23rem;
		height:0.4rem;
		font-size:16px;
		text-align:center;
		color:#fff;
	}
	.i1{
		font-size:46px;
	}
	.main2{
		height:0.52rem;
		width:3.68rem;
		background:#ff9900;
		margin-top:0.02rem;
		margin:0 auto;
	}
	.main3{
		height:1.5rem;
		display:flex;
		flex-wrap: wrap;
		background:#fff;
		margin-top:0.12rem;
	}
	.dv{
		height:0.54rem;
		width:0.62rem;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		align-items:center;
		margin-top:0.15rem;
		margin-left:0.23rem;
	}
	.i2{
		color:#45c8dd;
		font-size:26px;
	}
	span{
		color:#333333;
		font-size:12px;
	}
	.main4{
		height:1rem;
		
		margin-top:0.15rem;
		background:#fff;
		display:flex;
		justify-content:space-around;
		align-items:center;
	}
	.dv2{
		width:0.52rem;
		height:0.7rem;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		align-items:center;
	}
	.i3{
		font-size:40px;
		color:#333;
	}
	.s1{
		font-size:12px;
		color:#333;
	}
</style>