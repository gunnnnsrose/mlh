import axios from "axios";

var action = {

	loadBanner() {

	  return (dispatch)=> {
	  	axios.get('/appapi/home/mktBannerApp/v3?silo_id=2013000100000000001&platform_code=PLATEFORM_H5').then(res=>{
	  	  dispatch({
	  	  	type: 'loadBanner',
	  	  	payload: res.data.banners
	  	  })
	  	})
	  }

	},
	loadImgs() {
	  
	  return (dispatch)=>{
	  	axios.get('/appapi/cms/cmsDetail/v3?silo=2013000100000000001&ids=2120000100000000276&timestamp=1544064101853&summary=170303a1a051362db192b1ae17690d3b&platform_code=H5').then(res=>{
	  	  dispatch({
	  	  	type: 'loadImg',
	  	  	payload: res.data.resultList
	  	  })
	  	})
	  }

	},
	load(page) {

	  return (dispatch)=> {
	  	axios.get(`/appapi/silo/eventForH5?categoryId=women&pageIndex=${page}&timestamp=1543969746419&summary=f90d18b8b42ca704b7e5a0939d0e68f4&platform_code=H5`).then(res=>{
	  	  dispatch({
	  	  	type: 'loadData',
	  	  	payload: res.data.eventList
	  	  })
	  	})
	  }
	  
	}

}

export default action;