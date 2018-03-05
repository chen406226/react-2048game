// import R from "ramda";



const R=require("ramda")

const defaultState = {
	"todos" : []
}

export default (state = defaultState , action) => {
	switch(action.type){
		case "INIT" : 
			return R.set(
				R.lensProp("todos") ,
				action.arr,
				state
			);
 		case "ADD" : 
 			return R.set(
 				R.lensProp("todos") ,
 				action.dataarr,
 				state
 			);

 		case "DEL" : 
 			return R.set(
 				R.lensProp("todos"),
 				state.todos.filter((item)=>{
 					return item.id != action.id;
 				}),
 				state
 			);
 		case "CHANGEDONE" :  
 			return R.set(
 				R.lensProp("todos"),
 				state.todos.map((item)=>{
 					if(item.id == action.id){
 						return R.set(
 							R.lensProp("done"),
 							action.value ? "1" : "0",
 							item
 						)
 					}
 					return item;
 				}),
 				state
 			);
		case "KEYEVENT" : 
			return R.set(
 				R.lensProp("todos"),
 				action.array,
 				state
 			);
 	}
	return state;
}