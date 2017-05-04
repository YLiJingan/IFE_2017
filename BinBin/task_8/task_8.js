window.onload =(function(){
	var arr =[];
	var last;
	var flag = false;
	var timer = null;
	var root = document.getElementsByClassName("root")[0];
	var btn = document.getElementsByClassName("btn_group")[0];
	var prebtn = document.getElementById("preorder");
	var search_val = document.getElementById("search").value;
	var search_btn = document.getElementById("search_btn");
	var divs = document.getElementsByTagName("div");

	/*遍历过程的显示*/
	function show(){
		var i = 0;
		timer = setInterval(function(){
			if(i == arr.length-1){
				flag = false;
				clearInterval(timer);
			}
			if(last){
				last.style.background = "#fff";
			}
			arr[i].style.background = "blue";
			last = arr[i];i++;
		},500);
	}
	function reset(){
		arr=[];
		clearInterval(timer);
		if(last){
			last.style.background = "#fff";
		}
	}

	function preorder(node){
		if(node !== null){
			arr.push(node);
			for(var i=0;i<node.children.length;i++){
				preorder(node.children[i]);
			}
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
})()