import React,{Component} from "react"
import css from "./index.module.scss"
import {NavLink} from "react-router-dom"
import { Carousel, WingBlank } from 'antd-mobile';
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";


class Detail extends Component{
	constructor(props){
		super(props);

		this.state = {
		    looplist:{},
		    looplist_img:[],
		    material_quality_img:"",
		    attributesList:[],
		    design:"",
		    product_img1:[],
		    isShow:false
		};
	}

	render(){
		return <div className={css.sss}>
			<div className={css.head}>
				<div className={css.head1}>
					<div className={css.fh}>
						<NavLink to="/home" replace className={css.a}>	
							<i className={"iconfont icon-back "+css.fh1}></i>
						</NavLink>
					</div>
					<div className={css.bt}>
						<p className={css.bt1}>
							{this.state.looplist.brandName}
						</p>
						<span className={css.jiage}>￥{this.state.looplist.price}</span>
					</div>
					
					<div className={css.cz}>
						<i className={"iconfont icon-category " +css.cz1}></i>
					</div>
				</div>
				<ul className={this.state.isShow?css.head2:css.head2+' '+css.hide}>
					<li className={css.list+' '+css.current}>参数</li>
					<li className={css.list}>详情</li>
					<li className={css.list}>品牌</li>
					<li className={css.list}>评论</li>
				</ul>
			</div>
			<div className={css.lunbo}>
				<div className="swiper-container">
				    <div className="swiper-wrapper">
				    	{
				    		this.state.looplist_img.map(item=>								
				      			<div className="swiper-slide">
									<img src={item.bigImgUrl} alt="" className={css.lbtp}/>
				      			</div>
				    		)
				    	}
				    </div>
				    <div className="swiper-pagination"></div>
	  			</div>
			</div>
			<div className={css.xinxi}>
				<p className={css.shangpm}>
					{this.state.looplist.name}
				</p>
				<span className={css.yuanjia}>
					￥{this.state.looplist.marketPrice}
				</span>
				<p className={css.xianjia}>￥{this.state.looplist.price}</p>
				<div className={css.fahuo}>
					<i className="iconfont icon-clock"></i>
					<i className={css.shijian}>{this.state.looplist.deliver_date}</i>
				</div>
				<img src="../img/1.jpg" alt="" className={css.img1}/>
				<p className={css.spcs}>商品参数</p>
				<img  src={this.state.material_quality_img}  className={css.datu}/>
				<table className={css.table}>
					<tbody className={css.tbody}>
					{
						this.state.attributesList.map(item=>
							<tr className={css.tr}>
								<td className={css.td1}>{item.name}</td>
								<td className={css.td2}>{item.value}</td>
							</tr>
						)
					}
					</tbody>
				</table>
				<p className={css.spxq}>商品详情</p>
				<p className={css.miaoshu}>{this.state.design}</p>
				{
					this.state.product_img1.map(item=>
						<img src={item.bigImgUrl} alt="" className={css.xiangxitu}/>
					)
				}
				<p className={css.xihu}>洗护和养护</p>
				<span className={css.xihu_ms}>不可水洗不可漂白不可翻转干燥不可熨烫和干洗</span>
				<p className={css.pinpai}>{this.state.looplist.brandName}</p>
				<img className={css.pinpai_tp} src={this.state.looplist.brandImg} alt=""/>
				<span className={css.pinpai_ms}>{this.state.looplist.brand_story}</span>
				<img className={css.jinyong} src="https://cdn12.mei.com/category/20180827/0fbf3063df883190fae63312e54ad5c3d72eb86efc6c943a.jpg@750w_408h_2e_100q" alt=""/>
			</div>
			
		</div>
	}

	componentDidMount() {
		console.log(this.props.match.params.id1)
		console.log(this.props.match.params.id2)
		
		axios({
			url:`appapi/product/detail/v3?categoryId=2120005100000001626&productId=2121212199000125581&platform_code=H5&timestamp=1544163582257&summary=dc2120e24fa04809d121d871df6def62`,
			/*url:`appapi/product/detail/v3?categoryId=${this.props.match.params.id1}&productId=${this.props.match.params.id2}&platform_code=H5&timestamp=1544057028529&summary=d970604ef5c192b316fc802d9dd102d6`,*/
			method:'get'
		}).then(res=>{
			console.log(res)
			this.setState({
				looplist:res.data.infos,
				looplist_img:res.data.infos.images,
				material_quality_img:res.data.infos.description.material_quality_img,
				attributesList:res.data.infos.description.attributesList,
				design:res.data.infos.description.design,
				product_img1:res.data.infos.description.product_img1,
			})
			console.log(this.state.looplist)

			var swiper = new Swiper('.swiper-container', {
	      		pagination: {
	        		el: '.swiper-pagination',
	     	 	},
	   	 	});
		})

	    window.onscroll =this.handleScroll.bind(this);
	}
	handleScroll(){
		if(document.documentElement.scrollTop>736){
			this.setState({
				isShow:true
			})
		}else{
			this.setState({
				isShow:false
			})
		}
	}
}

export default Detail
