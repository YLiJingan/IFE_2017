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
		/*for(var i=0;i<arr.length;i++){                //setTimeout模拟setInterval
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
		}*/
		var i = 0;
		timer = setInterval(function(){
			i++;
			if(i == arr.length-1){
				flag = false;
				clearInterval(timer);
			}
			if(last){
				last.style.background = "#fff";
			}
				arr[i].style.background = "red";
				last = arr[i];
		},1000);
	}
	function reset(){
		arr=[];
		clearInterval(timer);
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
			postorder(node.firstElementChild);
			postorder(node.lastElementChild);
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
	/*使用事件代理为按钮添加事件
	function delegate(){
		btn.onclick = function(e){
			var event = e || window.event;
			var target = e.target || e.srcElement;
			if(target.nodeName.toLowerCase = "input"){
				reset();
				switch (target.id){
					case 'preorder':
						preorder(root);
						break;
					case 'inorder':
						inorder(root);
						break;
					case 'postorder':
						postorder(root);
						break;
					default:
						show();
						break;
				}
			}
		}
	}
	delegate();*/

})()