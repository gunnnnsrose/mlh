import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"
import axios from "axios"
class Register extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:false,
	  	message:'用户名已存在'
	  };
	}
	render(){
		return <div className={css.box}>
			<NavLink to="/home"><i className={"iconfont icon-close "+ css.btn}></i></NavLink>
			<h1 className={css.registertitle}>注册</h1>
			<p className={css.smalltitle}><NavLink to="/login">已有账号 去登陆</NavLink></p>
			<div className={css.registerbox}>
				<div>
					<input type="text" placeholder="用户名" name="username" ref="username"></input>
				</div>
				<div>
					<input type="password" placeholder="密码" name="password" ref="password"></input>
				</div>
				<button className={css.registerBtn} type="submit" onClick={this.handlClick.bind(this)}>注册</button>
			</div>
			{
				this.state.isShow?<p className={css.message}>{this.state.message}</p>:null
			}
		</div>
	}
	handlClick(){
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		axios.post("/v4/register",{
			username:username,
			password:password
		}).then(res=>{
			console.log(res.data.state);
			if(res.data.state===1){
				this.props.history.push('/login')
			}else{
				this.setState({
					isShow:true
				})
			}
		})
	}
}

export default Register
