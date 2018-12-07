import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import css from "./index.module.scss";

class Home extends Component{
	constructor(props) {
	  super(props);

	  this.state = {
	  	isScroll: false,
	  	page: this.props.page
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
	  	<section className='section'>
	      {this.props.children}
	  	</section>
	  </div>
	}

	componentDidMount() {
	  window.onscroll = this.scroll.bind(this);
	}
	componentDidUpdate(){
		if(this.props.page!==this.state.page){
			window.onscroll = this.scroll.bind(this);
		}
		console.log('Didupdate');
	}
	shouldComponentUpdate(state){
		console.log(state.page);
		return true;
		// if(this.props.page===state.page){
		// 	window.onscroll = null;
		// 	return false;
		// }else{
		// 	window.onscroll = this.scroll.bind(this);
		// 	return true;
		// }
	}
	scroll() {
	  let hei = 0;
	  if((document.documentElement.scrollTop||document.body.scrollTop)>0) {
		this.setState({
		  isScroll: true
		});
	  	
		hei = document.querySelector('.section').offsetHeight-document.documentElement.clientHeight-120;
		console.log(hei);
		// if(this.props.page===1){
		// 	console.log('11111');
		// }else{
		//   if(hei-(document.documentElement.scrollTop||document.body.scrollTop)<100) {
		//     this.props.pageup(this.props.page);
		//     // window.onscroll = null;
		//   }
		// }

		// if(document.querySelector('.section').offsetHeight===0){
		// 	console.log('111----<1000');
		// }else{
			if(hei-(document.documentElement.scrollTop||document.body.scrollTop)<100){
				// this.setState({
				// 	page:this.state.page+1
				// },()=>{
				// 	console.log(this.state.page);
				// })
				this.props.pageup(this.props.page);
				console.log(this.props.page);
				window.onscroll = null;
			}
			
		// }
	  } else {
	  	this.setState({
		  isScroll: false
		})
	  }
	}
	
	componentWillUnmount() {
	  window.onscroll = null;
	}
}

export default connect((state)=>{
  return {
	page: state.pageReducer
  }
},{
	pageup(page){
	  window.onscroll = null;
	  return (dispatch)=>{
	  	dispatch({
		  type: 'pageUp',
		  payload: page+1
	  	})
	  }
	}
})(Home)
