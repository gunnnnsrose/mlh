import React,{Component} from "react"
import css from "./index.module.scss"
import Header from "./header"
class Shoppingcart extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isnew:true,
	  	productlist:[
	  		{
	  			brand:"MICHAEL KORS",
	  			name: "女士米色皮革手提斜挎包",
	  			color: "米色",
	  			size: "21.5*19*10cm",
	  			price: "1839",
	  			num:1,
	  			itemId: 1,
	  			Englishname:"aaa",
	  			imgUrl: "https://cdn15.mei.com/product/MOC-403-00137/d31e06bb2599c9ac5007dc152f57d4f7f86da5dcfd5dbbb4.jpg@182w_242h_2e_65q"
	  		},
	  		
	  		{
	  			brand: "MANOLO BLAHNIK",
	  			name: "黑色牛皮优雅时尚水钻装饰女士细高跟鞋",
	  			color: "黑色",
	  			size: "36",
	  			price: "5000",
	  			num:1,
	  			itemId: 6,
	  			Englishname:"bbb",
	  			imgUrl: "https://cdn13.mei.com/product/XSY-407-00092/62c9806f2fde16814bc88ee747c971b9.jpg@182w_242h_2e_65q"
	  		}
	  	],
	  	total:0,
	  	arr:[]
	  };
	}
	render(){
		return <div>
			<Header></Header>
			<ul className={css.productlist}>
			{
				this.state.productlist.map(item=>
					<li key={item.itemId}>
						<input type="checkbox" ref={item.itemId} onChange={this.changeClick.bind(this,item.itemId,item.price*item.num)}/>
						<img src={item.imgUrl}/>
						<div>
							<h2>{item.brand}</h2>
							<p className={css.name}>{item.name}</p>
							<span className={css.color}>{item.color}</span>
							<p className={css.price}>￥<span>{item.price}</span></p>
							<p className={css.num}>×<span>{item.num}</span></p>
						</div>
					</li>
					)
			}
			</ul>
			<footer className={css.footerlist}>
				<div>
					<label className={css.choice}><input type="checkbox" />  全选</label>
					<p className={css.money}>总价 :<span>￥0000.00</span></p>
					<div className={this.state.isnew?css.btn:css.red}>去结算</div>
				</div>
			</footer>
		</div>
	}
	changeClick(itemId,price){
		//console.log(this.refs[itemId].checked)
		if(this.refs[itemId].checked){
			this.setState({
				arr:[...this.state.arr,price]
			})
			//console.log(this.state.total)
		}else{
			// var length = this.state.arr.length-1
			this.setState({
				arr:this.state.arr.pop()
			})
			
		}
		console.log(this.state.arr) 
	} 
	// Sum(price){
	// 	var sum = 0;
	// 	sum+=price;
	// 	this.setState({
	// 		total:
	// 	})
	// }
}

export default Shoppingcart
