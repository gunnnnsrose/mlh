import React,{Component} from "react"
import css from "./index.module.scss"
import {connect} from "react-redux"
import axios from "axios"
//测试了一下store和反向代理好不好用
class Kids extends Component{
	render(){
		return <div className={css.sss}>Kids
		{/*下面这个循环不用管删了就行 就是测试了一下store好不好用*/}
		<ul>
		{
			this.props.textlist.map(item=>
				<li key={item}>{item}</li>
				)
		}
		</ul>
		</div>
	}
	componentWillMount(){

		axios.get('http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1543831350971&summary=a12784a41c73792039a7b30718588cc0&platform_code=H5').then(res=>{
			console.log(res.data.eventList);
		})
	}
}

export default connect((state)=>{
	console.log(state);
	return{
		//测试了一下store好不好用
		textlist:state.testReducer
	}
})(Kids)
