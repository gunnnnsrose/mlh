import axios from "axios";
import React,{Component} from "react";
import css from "./index.module.scss";

class Recommend extends Component{
	constructor(props) {
	  super(props);

	  this.state = {
	  	bannerdata: [],
	  	img: '',
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
  		<img className={css.img} src={this.state.img} alt=""/>
		{
		  this.state.datalist.map(item=>
		  	<div className={css.type} key={item.name}>
		  	  <h2 className={css.h2}>{item.name}</h2>
		  	  {
		  	  	item.events.map(info=>
		  	  	  <div className={css.product} key={item.eventId}>
		  	  	  	<img className={css.productImg} src={info.imageUrl} alt=""/>
		  	  	  </div>
	  	  		)
		  	  }
		  	</div> 
	  	  )
		}
	  </div>
	}

	componentDidMount() {
	  axios.get('/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5').then(res=>{
	  	this.setState({
		  bannerdata: res.data.banners
	  	})
	  });

	  axios.get('/appapi/home/newZoneEntrance/v3?credential=').then(res=>{
	  	this.setState({
	  	  img: res.data.img
	  	})
	  });

	  axios.get('/appapi/home/eventForH5?params=%7B%7D&timestamp=1543905725369&summary=63d15f190ce5c694469c17aa442242d4&platform_code=H5').then(res=>{
	  	console.log(res.data);

	  	this.setState({
	  	  datalist: res.data.lists
	  	})
	  })
	}

}

export default Recommend
