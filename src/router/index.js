import { BrowserRouter as Router, Route ,Redirect,Switch} from "react-router-dom";
import App from "../App";
import React from "react";
import {Provider} from "react-redux"
import store from "../store"

import Home from "../components/home"
import Recommend from "../components/home/recommend"
import Women from "../components/home/women"
import Men from "../components/home/men"
import Lifestyle from "../components/home/lifestyle"
import Kids from "../components/home/kids"
import Detail from "../components/detail"
import List from "../components/list"
import Login from "../components/login"
import Register from "../components/register"
import Shoppingcart from "../components/shoppingcart"
const router =(
<Provider store={store}>
<Router>
	<App>
		<Switch>
			<Route path="/home" render={()=>
				<Home>
					<Switch>
						<Route path="/home/recommend" component={Recommend}/>
						<Route path="/home/women" component={Women}/>
						<Route path="/home/men" component={Men}/>
						<Route path="/home/lifestyle" component={Lifestyle}/>
						<Route path="/home/kids" component={Kids}/>
						<Redirect from="/home" to="/home/recommend"/>
					</Switch>
				</Home>
			}/>
			<Route path="/list" component={List}/>
			<Route path="/detail" component={Detail}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<Route path="/shoppingcart" component={Shoppingcart}/>
			<Redirect from="/" to="/home"/>
		</Switch>
	</App>
</Router>
</Provider>)
export default router