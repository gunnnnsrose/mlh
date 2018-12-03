import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom";

class Home extends Component{
	render(){
		return <div className={css.sss}>
		<ul>
			<li><NavLink to="/home/recommend">推荐 </NavLink></li>
			<li><NavLink to="/home/women">女士 </NavLink></li>
			<li><NavLink to="/home/men">男士 </NavLink></li>
			<li><NavLink to="/home/lifestyle">家居 </NavLink></li>
			<li><NavLink to="/home/kids">婴童 </NavLink></li>
		</ul>
		{this.props.children}
		</div>
	}
}

export default Home
