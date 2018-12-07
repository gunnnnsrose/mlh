import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"
import axios from "axios"

class List extends Component{
	constructor(props){
		super(props);

		this.state={
			looplist:[],
			isShow:true
		};
	}

	render(){
		return <div className={css.sss}>
				<div id="zhiding"></div>
				<div className={this.state.isShow?css.head:css.head+' '+css.hide}>
					<div className={css.head1}>
						<div className={css.fh}>
							<NavLink to="/home" replace className={css.a}>	
								<i className={"iconfont icon-back "+css.fh1}></i>
							</NavLink>
						</div>
						<p className={css.bt}>
							{this.state.looplist.eventName}
						</p>
						<div className={css.cz}>
							<i className={"iconfont icon-category " +css.cz1}></i>
						</div>
					</div>
					<ul className={css.head2}>
						<li className={css.list+' '+css.current}>人气</li>
						<li className={css.list}>折扣</li>
						<li className={css.list}>价格</li>
						<li className={css.list+' '+css.sx}>筛选</li>
					</ul>
				</div>
			
			{
				this.state.looplist.length===0?
				null:
				<div className={css.xiaoxi}>
					<p className={css.p}>免运</p>	
					<span className={css.span}>{this.state.looplist.promotions.info}</span>			
				</div>
			}
			{
				this.state.looplist.length===0?
				null:
				<div className={css.pitem}>
					{
						this.state.looplist.products.map(item=>
							/*<div onClick={this.jump.bind(this,this.props.match.params.id,item.productId)} className={css.zhanshi} key={item.productId}>*/
							<NavLink to="/detail" replace className={css.zhanshi} key={item.productId}>
								<img className={css.img} src={item.imageUrl} alt=""/>
								<p className={css.leibie}>{item.brandName}</p>
								<p className={css.miaoshu}>{item.productName}</p>
								<p className={css.jiage}>￥{item.itemPriceDto.price}</p>
							</NavLink>
							/*</div>*/
						)
					}		
				</div>
			}
			<a href="#zhiding" className={this.state.isShow?css.huiding+' '+css.hide:css.huiding} >
				<img src="./img/返回顶部.png" alt="" className={css.img1}/>
			</a>			
		</div>
	}

	componentDidMount(){
		axios({
			/*url:"/appapi/event/product/v3?pageIndex=1&categoryId=2042204290000005420&key=&sort=&timestamp=1543883628691&summary=a090b7849facdafa80f787bf1cf13d95&platform_code=H5",
			method:'get'*/
			url:`/appapi/event/product/v3?pageIndex=1&categoryId=${this.props.match.params.id}&key=&sort=&timestamp=1543883628691&summary=a090b7849facdafa80f787bf1cf13d95&platform_code=H5`,
			method:'get'
		}).then(res=>{
			this.setState({
				looplist:res.data
			})
			console.log(this.state.looplist)
		})
		console.log(this.props.match.params.id);

		window.onscroll =this.handleScroll.bind(this);
	}

	handleScroll(){
		var head =document.querySelector(`.${css.head}`);
		if(document.documentElement.scrollTop > head.offsetHeight){
			this.setState({
				isShow:false
			})
		}else{
			this.setState({
				isShow:true
			})
		}
		

	}
	jump(id1,id2){

		this.props.history.push(`/detail/${id1}/${id2}`);
	}
}
/*http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=2042204290000005420&key=&sort=&timestamp=1543883628691&summary=a090b7849facdafa80f787bf1cf13d95&platform_code=H5*/

export default List
