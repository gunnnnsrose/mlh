import axios from "axios";
import {connect} from "react-redux";
import React,{Component} from "react";
import css from "./index.module.scss";
import { PullToRefresh, ListView, Button } from 'antd-mobile';

class Men extends Component{
	constructor(props) {
	  super(props);

	  this.state = {
	  	bannerdata: [],
	  	imgs: [],
	  	datalist: []
	  }
	}

	render(){
	  return <div className={css.main}>
	  	{
	  	  this.state.bannerdata.map(item=>
		  	<div className={css.ad} key={item.id}>
			  <img src={item.main_image} alt=""/>
			  <h3 className={css.h3}>{item.main_title}</h3>
			  <p className={css.p}>{item.sub_title}</p>
		  	</div>
		  )
	  	}
	  	{
	  	  this.state.imgs.map(item=>
			<div className={css.types} key={item.id}>
			  {
			  	item.data.map(info=>
			  	  <img src={info.categoryImgStr} key={info.categoryTwoId} className={css.img+' l'} alt=""/>
			  	)
			  }
			</div>
  	  	  )
	  	}
	  	<ul className={css.class}>
	  	  {
		  	this.state.datalist.map(item=>
			  <li className={css.product} key={item.eventId} onClick={this.jump.bind(this,item.eventId)}>
	  	  	  	<img className={css.productImg} src={item.imageUrl} alt=""/>
	  	  	  	<p className={css.p1}>{item.englishName}</p>
	  	  	  	<p className={css.p2}>{item.chineseName}</p>
	  	  	  	<p className={css.p3}>{item.discountText}</p>
	  	  	  </li>
		  	)
	  	  }
	  	</ul>
	  	<div className={css.footer}>
		  <p className={css.phone}>400-664-6698</p>
		  <p className={css.page}>
		  	<span>首页</span>|
		  	<span>客户端</span>|
		  	<span>登录</span>|
		  	<span>注册</span>
		  </p>
		  <p className={css.address}>浙ICP备16004860号-1</p>
		</div>
	  </div>
	}

	componentDidMount() {
		
	  axios.get('/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5').then(res=>{
	  	this.setState({
		  bannerdata: res.data.banners
	  	})
	  });

	  axios.get('/appapi/cms/cmsDetail/v3?silo=2013000100000000002&ids=2121000100000000234&timestamp=1544079999725&summary=d65f502173a983ce5477602020144af5&platform_code=H5').then(res=>{
	  	this.setState({
	  	  imgs: res.data.resultList
	  	})
	  });

	  axios.get('/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1544079999059&summary=06610aacd4e7538db4322e8f9a8f7670&platform_code=H5').then(res=>{
	  	this.setState({
	  	  datalist: res.data.eventList
	  	})
	  });

	}

	jump(id) {
	  this.props.history.push(`/list/${id}`);
	}
}

export default Men
