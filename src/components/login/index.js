import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"
import axios from "axios"
class Login extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:false,
	  	message:'用户名密码不匹配'
	  };
	}
	render(){
		return <div className={css.box}>
			<NavLink to="/home"><i className={"iconfont icon-close "+ css.btn}></i></NavLink>
			<h1  className={css.registertitle}>登陆</h1>
			<p className={css.smalltitle}><NavLink to="/register">去注册</NavLink></p>
			<div className={css.registerbox}>
				<div>
					<input type="text" placeholder="用户名" name="username" ref="username"></input>
				</div>
				<div>
					<input type="password" placeholder="密码" name="password" ref="password"></input>
				</div>
				<button className={css.registerBtn} type="submit" onClick={this.handlClick.bind(this)}>登陆</button>
			</div>
			{
				this.state.isShow?<p className={css.message}>{this.state.message}</p>:null
			}
			
		</div>
	}
	handlClick(){
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		if(username===''|| password===''){
			this.setState({
						isShow:true,
						message:'用户名密码不能为空'
					})
			return
		}else{
			
			axios.post("/v4/login",{
				username:username,
				password:password
			}).then(res=>{
				console.log(res.data.state)
				if(res.data.state === 1){
					this.props.history.push('/home')
				}else{
					this.setState({
						isShow:true,
						message:'用户名密码不匹配'
					})
				}
			})
		}
		
	}
}


export default Login
