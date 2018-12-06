const pageReducer = (prevState=1,action={})=>{
	
	let {type,payload} = action;

	switch(type) {
		case 'pageUp':
			return payload;
		default:
			return prevState;
	}

}

export default pageReducer;