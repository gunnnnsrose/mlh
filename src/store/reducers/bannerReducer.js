const bannerReducer = (prevState=[],action={})=>{

	let {type,payload} = action;

	switch(type) {
		case 'loadBanner':
			return payload;
		default:
			return prevState;
	}
	
}

export default bannerReducer;