import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"
import axios from "axios"
class Register extends Component{
	render(){
		return <div>
			<h1>注册</h1>
			<i className="iconfont icon-close"></i>
			<p><NavLink to="/login">去登陆</NavLink></p>
			<div>
				<input type="text" placeholder="用户名" name="username" ref="username"></input>
			</div>
			<div>
				<input type="password" placeholder="密码" name="password" ref="password"></input>
			</div>
			<button type="submit" onClick={this.handlClick.bind(this)}>注册</button>
		</div>
	}
	handlClick(){
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		axios.post("/v4/register",{
			username:username,
			password:password
		}).then(res=>{
			
			if(res.data.state===1){
				this.props.history.push('/login')
			}else{
				alert("注册失败")
			}
		})
	}
}

export default Register
