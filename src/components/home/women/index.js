import axios from "axios";
import {connect} from "react-redux";
import React,{Component} from "react";
import css from "./index.module.scss";
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import action from "./action.js";

class Women extends Component{

	render(){
	  return <div className={css.main}>
	  	{
	  	  this.props.bannerdata.map(item=>
		  	<div className={css.ad} key={item.id}>
			  <img src={item.main_image} alt=""/>
			  <h3 className={css.h3}>{item.main_title}</h3>
			  <p className={css.p}>{item.sub_title}</p>
		  	</div>
		  )
	  	}
	  	{
	  	  this.props.imgs.map(item=>
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
		  	this.props.datalist.map(item=>
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
		
	  // axios.get('/appapi/home/mktBannerApp/v3?silo_id=2013000100000000001&platform_code=PLATEFORM_H5').then(res=>{
	  // 	this.setState({
		 //  bannerdata: res.data.banners
	  // 	})
	  // });

	  if(this.props.bannerdata.length===0) {
	    this.props.loadBanner();
	  }

	  // axios.get('/appapi/cms/cmsDetail/v3?silo=2013000100000000001&ids=2120000100000000276&timestamp=1543927060288&summary=054ac8c6b1b340d21005114a1d8eb0f0&platform_code=H5').then(res=>{
	  // 	this.setState({
	  // 	  imgs: res.data.resultList
	  // 	})
	  // });

	  
	  if(this.props.imgs.length===0) {
	    this.props.loadImgs();
	  }

	  // axios.get(`/appapi/silo/eventForH5?categoryId=women&pageIndex=${this.props.page}&timestamp=1543969746419&summary=f90d18b8b42ca704b7e5a0939d0e68f4&platform_code=H5`).then(res=>{
	  // 	this.setState({
	  // 	  datalist: res.data.eventList
	  // 	})
	  // });

	  if(this.props.datalist.length===0) {
	    this.props.load(this.props.page);
	  }

	}
	// shouldComponentUpdate(state){
	// 	if(this.props)
	// }
	componentDidUpdate(){
		console.log('update111');
		console.log(this.props.page);
		// this.props.load(this.props.page);
	}

	jump(id) {
	  this.props.history.push(`/list/${id}`);
	}
}

export default connect((state)=>{
  return {
	page: state.pageReducer,
	datalist: state.listReducer,
	bannerdata: state.bannerReducer,
	imgs: state.imgReducer
  }
},action)(Women)
