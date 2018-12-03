import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunkMid from "redux-thunk"
import promiseMid from "redux-promise"
import testReducer from "./reducers/testReducer"
// 来来来，看一眼！！！！！！
// 我们用react-redux 每个组件都不要忘了引入{connect} 处理异步用thunk或promise都可以
// 你想建的各种reducer写在reducers文件里引入进来
// 请求的过程在组建文件夹中建一个action.js文件（不要忘记引入axios） 写在action.js里 就是老师写的那种结构
// 动这个文件喊一嗓子 不然git乱了 求求老爷们了 
// 祝你成功!
const reducer = combineReducers({
	testReducer//测试用的不用管
})




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMid,promiseMid)
  ));
export default store;