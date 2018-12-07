import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"
class Header extends Component{
	render(){
		return <div className={css.box}>
			<ul className={css.head}>
				<li><NavLink to="/home"><i className="iconfont icon-back"></i></NavLink></li>
				<li>购物车</li>
				<li>编辑</li>
			</ul>
		</div>
	}
}

export default Header
//http://www.mei.com/appapi/cart/view4H5