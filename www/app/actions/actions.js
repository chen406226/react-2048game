const defarr=[
    {
      "title": "row1",
      "colors": ["c2","c4","c8","c16","c32","c64","c128","c256","c512","c1024","c2048"],
      "content": [2,0,0,2],
      "id": 1
    },
    {
      "title": "row2",
      "colors": ["c2","c4","c8","c16","c32","c64","c128","c256","c512","c1024","c2048"],
      "content": [0,0,0,0],
      "id": 2
    },
    {
      "title": "row3",
      "colors": ["c2","c4","c8","c16","c32","c64","c128","c256","c512","c1024","c2048"],
      "content": [0,0,0,0],
      "id": 3
    },
    {
      "title": "row4",
      "colors": ["c2","c4","c8","c16","c32","c64","c128","c256","c512","c1024","c2048"],
      "content": [2,0,0,0],
      "id": 4
    }]

// 检测胜负

export const init = () => async function (dispatch){
	var arr = await fetch("/todos").then((data)=>{
		return data.json();
	});

	dispatch({"type" : "INIT" , arr})
}
// 恢复数据
export const def=()=>async function(dispatch){
	var abcd=await fetch("/todos").then((data)=>{	
		return data.json();
	});
	if(abcd.length>4){
		for (var k = 5; k <= abcd.length; k++) {
			fetch("/todos/"+k,{
				"method":"DELETE",
				headers:{
					"Content-Type":"application/json"
				}
			})
		};
	}


	for (var i = 1; i <= 4; i++) {
		fetch("/todos/"+i, {
			"method" : "PATCH" ,
			headers: {
    			'Content-Type': 'application/json'
 			},
 			body : JSON.stringify({"content" :defarr[i-1].content})
		});
	}
  	var arr=defarr;
  	dispatch({"type" : "INIT" , arr})
}

//增加


// export const add = (title) => async function(dispatch){
// 	length++;
// 	var array=[];
// 	do{array.push(0)}while(array.length<=length);
// 	var title="row"+length;

// 	var abcd=await fetch("/todos").then((data)=>{
// 		return data.json();
// 	});

// 	abcd.map((item,index)=>{
// 		var idd=item.id;
// 		fetch("/todos/"+idd, {
// 			"method" : "PATCH" ,
// 			headers: {
//     			'Content-Type': 'application/json'
//  			},
//  			body : JSON.stringify({"content" :array})
// 		});
// 	});

// 	var data = await fetch("/todos" , {
// 		"method" : "POST" ,
// 		headers: {
//     		'Content-Type': 'application/json'
//  		},
//  		body: JSON.stringify({"title" : title , "done" : 0,"content":array})
// 	}).then((data)=>{
// 		return data.json();
// 	});
// 	var dataarr=[]
// 	for (var i = 0; i < array.length; i++) {
// 		dataarr.push(data);
// 	};
// 	dispatch({"type" : "ADD" , dataarr});
// }
	// dispatch({"type":"INIT",dataarr})

//删除
	


export const keychange = (event) => async function(dispatch){
	var keycode=event.keyCode;
	if (keycode>40||keycode<37) {
		return;
	}
	var array=await fetch("todos").then((data)=>{
		return data.json();
	});
	//<<<<<<
	function ranklef(array){
		for (var i = 0; i < array.length; i++) {
			var arra=array[i].content;
			for (var j = 0; j < arra.length; j++) {
				for (var k = j+1; k < arra.length; k++) {
					if(arra[j]==0){
					arra[j]=arra[k];
					arra[k]=0;
					}else{break;}
				};
				if(arra[j]==0){
					break;
				};
			};
			for (var p = 0; p < arra.length; p++) {
				if(arra[p]==0){
					break;
		 		};
				for (var m = 0; m < arra.length-1; m++) {
					if(arra[m]==arra[m+1]&&arra[m]!=0){
						arra[m]=arra[m]*2;
						arra[m+1]=0;
					}
				};
			};
			for (var j = 0; j < arra.length; j++) {
				if(arra[0]==0){
					break;
				};
				for (var k = j+1; k < arra.length; k++) {
					if(arra[j]==0){
					arra[j]=arra[k];
					arra[k]=0;
					}else{break;}
				};
			};
		}
	}
//>>>>>>>
	function rankrig(array){
		for (var i = 0; i <array.length ; i++) {
			var arra=array[i].content;
			for (var j =arra.length-1; j>=0; j--) {
				for (var k = j-1; k >=0 ; k--) {
					if(arra[j]==0){
					arra[j]=arra[k];
					arra[k]=0;
					}else{break;}
				};
				if(arra[arra.length-1]==0){
					break;
				};
			};
			for (var j = arra.length-1; j>=0; j--) {
				if(arra[arra.length-1]==0){
					break;
				};
				for (var m = arra.length-1; m >=0; m--) {
					if(arra[m]==arra[m-1]&&arra[m]!=0){
						arra[m]=arra[m]*2;
						arra[m-1]=0;
					}
				};
			};
			for (var j = arra.length-1; j >=0; j--) {
				if(arra[arra.length-1]==0){
					break;
				};
				for (var k = j-1; k >=0; k--) {
					if(arra[j]==0){
					arra[j]=arra[k];
					arra[k]=0;
					}else{break;}
				};
			};
		}
	}
// ^^^^^准备下准备
	function rankupra(array){
		for (var i = 0; i <array.length ; i++) {
			var arra=array[i];
			for (var j =arra.length-1; j>=0; j--) {
				for (var k = j-1; k >=0 ; k--) {
					if(arra[j]==0){
					arra[j]=arra[k];
					arra[k]=0;
					}else{break;}
				};
				if(arra[arra.length-1]==0){
					break;
				};
			};
			for (var j = arra.length-1; j>=0; j--) {
				if(arra[arra.length-1]==0){
					break;
				};
				for (var m = arra.length-1; m >=0; m--) {
					if(arra[m]==arra[m-1]&&arra[m]!=0){
						arra[m]=arra[m]*2;
						arra[m-1]=0;
					}
				};
			};
			for (var j = arra.length-1; j >=0; j--) {
				if(arra[arra.length-1]==0){
					break;
				};
				for (var k = j-1; k >=0; k--) {
					if(arra[j]==0){
					arra[j]=arra[k];
					arra[k]=0;
					}else{break;}
				};
			};
		}
	}
///\\/\/\/准备上准备
function rankdora(array){
		for (var i = 0; i < array.length; i++) {
			var arra=array[i];
			for (var j = 0; j < arra.length; j++) {
				for (var k = j+1; k < arra.length; k++) {
					if(arra[j]==0){
					arra[j]=arra[k];
					arra[k]=0;
					}else{break;}
				};
				if(arra[j]==0){
					break;
				};
			};
			for (var p = 0; p < arra.length; p++) {
				if(arra[p]==0){
					break;
		 		};
				for (var m = 0; m < arra.length-1; m++) {
					if(arra[m]==arra[m+1]&&arra[m]!=0){
						arra[m]=arra[m]*2;
						arra[m+1]=0;
					}
				};
			};
			for (var j = 0; j < arra.length; j++) {
				if(arra[0]==0){
					break;
				};
				for (var k = j+1; k < arra.length; k++) {
					if(arra[j]==0){
					arra[j]=arra[k];
					arra[k]=0;
					}else{break;}
				};
			};
		}
	}



// ^^^^^^^^^^
	function rankup(array){
		var uparray=[];
		for (var i = 0; i < array[0].content.length; i++) {
			var uparr=[];
			for (var j = 0; j < array.length; j++) {
				var ele=array[j].content[i];
				uparr.push(ele);
			}
			uparray.push(uparr);
		};
		rankdora(uparray);
		for (var i = uparray.length-1; i>=0; i--) {
			var uparr=[];
			for (var j = 0; j<uparray.length; j++) {
				var ele=uparray[j][i];
				uparr.push(ele)
			}
			
			array[(i)].content=uparr;
		};

	}
//\/\/\/\/
	function rankdown(array){
		var uparray=[];
		for (var i = 0; i < array[0].content.length; i++) {
			var uparr=[];
			for (var j = 0; j < array.length; j++) {
				var ele=array[j].content[i];
				uparr.push(ele);
			}
			uparray.push(uparr);
		};
		rankupra(uparray);
		for (var i = 0; i < uparray.length; i++) {
			var uparr=[];
			for (var j = 0; j < uparray.length; j++) {
				var ele=uparray[j][i];
				uparr.push(ele)
			}
			array[i].content=uparr;
		};
	}

//******
	if (keycode==37) {
		ranklef(array);
	}else if(keycode==39){
		rankrig(array)	
	}else if(keycode==38){
		rankup(array)
	}else if(keycode==40){
		rankdown(array)
	}
//随机插入
	var numbe=parseInt(Math.random()+1.3)*2;
	var num,numrow,numcol;
	var numb=0;
	do{
		num=parseInt(Math.random()*Math.pow(array.length,2))
		numrow=parseInt(num/4);
		numcol=num%4;
		numb++;
		if (numb>Math.pow(array.length,2)) {
			return;
		}
	}while(array[numrow].content[numcol]!=0)
	array[numrow].content[numcol]=numbe;	

//er

	for (var i = 1; i <= 4; i++) {
		fetch("/todos/"+i, {
			"method" : "PATCH" ,
			headers: {
    			'Content-Type': 'application/json'
 			},
 			body : JSON.stringify({"content" :array[i-1].content})
		});
	}

	dispatch({"type" : "KEYEVENT" , array})
}


//改变done
export const changedone = (id , value) => async function(dispatch){
	await fetch("/todos/" + id , {
		"method" : "PATCH" ,
		headers: {
    		'Content-Type': 'application/json'
 		},
 		body : JSON.stringify({"done" : value ? 1 : 0})
	});
  
  	dispatch({"type" : "CHANGEDONE" , id , value})
}

export const changecolor = (trid,tdid,player) => async function(dispatch){
	var rowcontent = await fetch("/todos/"+trid).then((data)=>{
		return data.json();
	});
	var value=rowcontent.content.map((item,index)=>{
		if (index==tdid) {
			return player;
		}
		return item;
	})
	var win;
  	await fetch("/todos/" + trid , {
		"method" : "PATCH" ,
		headers: {
    		'Content-Type': 'application/json'
 		},
 		body : JSON.stringify({"content" : value})
	});
	win=check();
  	// if(win){
  	// 	console.log("aaaa");
  	// };
  	dispatch({"type" : "CHANGEPLAYER" , trid,value});
}