import axios from "axios";
import React,{Component} from "react";
import css from "./index.module.scss";

class Women extends Component{
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
	  </div>
	}

	componentDidMount() {
	  axios.get('/appapi/home/mktBannerApp/v3?silo_id=2013000100000000001&platform_code=PLATEFORM_H5').then(res=>{
	  	this.setState({
		  bannerdata: res.data.banners
	  	})
	  });

	  axios.get('/appapi/cms/cmsDetail/v3?silo=2013000100000000001&ids=2120000100000000276&timestamp=1543927060288&summary=054ac8c6b1b340d21005114a1d8eb0f0&platform_code=H5').then(res=>{
	  	console.log(res.data);
	  	this.setState({
	  	  imgs: res.data.resultList
	  	})
	  });

	  axios.get('/appapi/home/eventForH5?params=%7B%7D&timestamp=1543905725369&summary=63d15f190ce5c694469c17aa442242d4&platform_code=H5').then(res=>{
	  	// console.log(res.data);

	  	this.setState({
	  	  datalist: res.data.lists
	  	})
	  })

	}
}

export default Women
