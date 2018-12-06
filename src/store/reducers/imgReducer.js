const imgReducer = (prevState=[],action={})=>{

	let {type,payload} = action;

	switch(type) {
		case 'loadImg':
			return payload;
		default:
			return prevState;
	}
	
}

export default imgReducer;