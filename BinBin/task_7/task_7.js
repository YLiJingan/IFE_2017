window.onload =(function(){
	var arr =[];
	var last;
	var flag = false;
	var timer = null;
	var root = document.getElementsByClassName("root")[0];
	var btn = document.getElementsByClassName("btn_group")[0];
	var prebtn = document.getElementById("preorder");
	var inbtn = document.getElementById("inorder");
	var postbtn = document.getElementById("postorder");
	/*遍历过程的显示*/
	function show(){
		for(var i=0;i<arr.length;i++){                //setTimeout模拟setInterval
			setTimeout(function(i){
				return function(){
					if(i == arr.length-1){
						flag = false;
					}
					if(last){
						last.style.background = "#fff";
					}
					arr[i].style.background = "red";
					last = arr[i];
				}
			}(i),i*1000);
		}
		/*var timer = setInterval(function(){
			var i = 0;
			i++;
			if(i < arr.length){
				arr[i].style.background = "red";
				arr[i-1].style.background = "white";
			}
			else{
				clearInterval(timer);
				arr[arr.length-1].style.background = "white";
			}
		},500);*/
	}
	/*function reset(){
		clearInterval(timer);
		var divList = document.getElementsByTagName("div");
		for(var i=0;i < divList.length;i++){
			divList[i].style.background = "#fff";
		}
	}*/
	function reset(){
		if(last){
			last.style.background = "#fff";
		}
	}
	/*先序遍历 父左右*/
	function preorder(node){
		if(node !== null){
			arr.push(node);
			preorder(node.firstElementChild);
			preorder(node.lastElementChild);
		}
	}
	/*中序遍历 左父右*/
	function inorder(node){
		if(node !== null){
			inorder(node.firstElementChild);
			arr.push(node);
			inorder(node.lastElementChild);
		}
	}
	/*后序遍历 左右父*/
	function postorder(node){
		if(node !== null){
			inorder(node.firstElementChild);
			inorder(node.lastElementChild);
			arr.push(node);
		}
	}
	prebtn.onclick = function(){
		if(!flag){
			flag = true;
			reset();
			preorder(root);
			show();
		}
	}

	inbtn.onclick = function(){
		if(!flag){
			flag = true;
			reset();
			inorder(root);
			show();
		}
	}
	postbtn.onclick = function(){
		if(!flag){
			flag = true;
			reset();
			postorder(root);
			show();
		}
	}

})()