import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"
import axios from "axios"
class Login extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:false
	  };
	}
	render(){
		return <div>
			<h1>登陆</h1>
			<i className="iconfont icon-close"></i>
			<p><NavLink to="/register">去注册</NavLink></p>
			<div>
				<input type="text" placeholder="用户名" name="username" ref="username"></input>
			</div>
			<div>
				<input type="password" placeholder="密码" name="password" ref="password"></input>
			</div>
			<button type="submit" onClick={this.handlClick.bind(this)}>登陆</button>
			{
				this.state.isShow?<p>用户名密码不匹配</p>:null
			}
			
		</div>
	}
	handlClick(){
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		axios.post("/v4/login",{
			username:username,
			password:password
		}).then(res=>{
			console.log(res.data.state)
			if(res.data.state === 1){
				this.props.history.push('/home')
			}else{
				this.setState({
					isShow:true
				})
			}
		})
	}
}


export default Login
