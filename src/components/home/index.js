import React,{Component} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import css from "./index.module.scss";

class Home extends Component{
	constructor(props) {
	  super(props);

	  this.state = {
	  	isScroll: false
	  }
	}
	render(){
	  return <div className={css.home}>
	  	<div className={this.state.isScroll?css.scrollHeader:css.header}>
	  	  <div className={css.topnav+" clear"}>
	  	    <span className="l"><NavLink to="/login">登录</NavLink></span>
	  	    <input className={css.input+" l"} type="text" placeholder="PINKO 全场两折起"/>
	  	    <i className={"iconfont icon-bags l "+css.cart}><NavLink to="/register"></NavLink></i>
	  	  </div>
	      <ul className={css.nav}>
	  	    <li className={css.li+" l"}><NavLink to="/home/recommend">推荐 </NavLink></li>
	  	    <li className={css.li+" l"}><NavLink to="/home/women">女士 </NavLink></li>
	  	    <li className={css.li+" l"}><NavLink to="/home/men">男士 </NavLink></li>
	  	    <li className={css.li+" l"}><NavLink to="/home/lifestyle">家居 </NavLink></li>
	  	    <li className={css.li+" l"}><NavLink to="/home/kids">婴童 </NavLink></li>
	      </ul>
	  	</div>
	  	<section>
	    	{this.props.children}
	  	</section>
	  </div>
	}

	componentDidMount() {
	  window.onscroll = this.scroll.bind(this);
	}
	scroll() {
		console.log(document.documentElement.scrollTop)
	  if((document.documentElement.scrollTop||document.body.scrollTop)>0) {
		this.setState({
			isScroll: true
		})
	  } else {
	  	this.setState({
			isScroll: false
		})
	  }
	}
	
	conponentWillUnmount() {
	  window.onscroll = null;
	}
}

export default Home
