import React,{Component} from "react"
import css from "./index.module.scss"
import Header from "./header"
class Shoppingcart extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isnew:true
	  };
	}
	render(){
		return <div>
			<Header></Header>
			<footer className={css.footerlist}>
				<div>
					<label className={css.choice}><input type="checkbox" />  全选</label>
					<p className={css.money}>总价 :<span>￥0000.00</span></p>
					<div className={this.state.isnew?css.btn:css.red}>去结算</div>
				</div>
			</footer>
		</div>
	}
}

export default Shoppingcart
