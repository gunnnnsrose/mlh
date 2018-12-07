const listReducer = (prevState=[],action={})=>{

	let {type,payload} = action;

	switch(type) {
		case 'loadData':
			return [...prevState,...payload];
		default:
			return prevState;
	}
	
}

export default listReducer;