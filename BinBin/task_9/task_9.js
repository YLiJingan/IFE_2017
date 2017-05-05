window.onload =(function(){
	var arr =[];
	var targetEle;
	var root = document.getElementsByClassName("root")[0];
	var btn = document.getElementsByClassName("btn_group")[0];
	var prebtn = document.getElementById("preorder");
	var postbtn = document.getElementById("postorder");
	var search = document.getElementById("search");
	var search_btn = document.getElementById("search_btn");
	var divs = document.getElementsByTagName("div");
	var del_btn = document.getElementById("del_btn");
	var append = document.getElementById("append");
	var append_btn = document.getElementById("append_btn");
	/*遍历过程的显示*/
	function show(){
        var i=0;
        arr[i].style.backgroun="#0000ff";
        var timer=setInterval(function(){
            i++;
            if(i>=arr.length){
                clearInterval(timer);
                arr[arr.length-1].style.background="#fff";
            }else{
                arr[i-1].style.background="#fff";
                arr[i].style.background="#0000ff";
            }
        },500);
	}
	/*重置颜色*/
	function reset(){
		for(var i=0;i<arr.length;i++){
            arr[i].style.backgroundColor="#fff";
        }
	}
	/*先序遍历*/
	function preorder(node){
		if(node !== null){
			arr.push(node);
			for(var i=0;i<node.children.length;i++){
				preorder(node.children[i]);
			}
		}
	}
	/*后序遍历*/
	function postorder(node){
		if(node !== null){
			for(var i=0;i<node.children.length;i++){
				postorder(node.children[i]);
			}
			arr.push(node);
		}
	}
	/*查找过程显示*/
    function searchFun(word){
        var i=0;
        var timer=setInterval(function(){
            i++;
            if(search.value==""){
                clearInterval(timer);
                alert("请输入内容")
                return;
            }
            if(i>=arr.length){
                clearInterval(timer);
                arr[arr.length-1].style.background="#fff";
                alert("未查找到内容");
                return;
            }else{
                arr[i-1].style.background="#fff";
                arr[i].style.background="#ff0000";
            }
            if(arr[i].childNodes[0].nodeValue.search(word)!=-1){
            	alert(arr[i].childNodes[0]);
                alert("查找到内容");
                clearInterval(timer);
            }
        },500)
    }
    /*点击元素添加效果  点击删除按钮 删除选中元素*/
    /*function changeClick(){
    	root.onclick = function(e){
    		var e = window.event || e;
    		if(e.target.nodeName.toLowerCase() == "div"){
    			e.target.style.background = "#00ff00";
    			del_btn.onclick = function(){                 //通过点击删除按钮删除选中的元素
    				e.target.remove(e.target.childNodes);
    			}
    			//e.target.remove(e.target.childNodes);            //点击元素直接删除
    		}
    	}
    }
    function changeAppend(){                                  //功能实现需要优化 代码冗余
    	root.onclick = function(e){
    		var e = window.event || e;
    		if(e.target.nodeName.toLowerCase() == "div"){
    			e.target.style.background = "#00ff00";
    			append_btn.onclick = function(){
    				var div = document.createElement("div");
    				div.innerHTML = append.value;                
    				e.target.append(div);
    			}
    		}
    	}
    }*/

    function changeColor(){
    	root.onclick = function(e){
    		var e = window.event || e;
    		if(e.target.nodeName.toLowerCase() == "div"){
    			e.target.style.background = "#00ff00";
    			targetEle = e.target;
    		return targetEle;
    		}
    	}
    }
    /*按钮添加点击事件*/
	prebtn.onclick = function(){
			reset();
			preorder(root);
			show();
	}
	postbtn.onclick = function(){
			postorder(root);
			reset();
			show();
	}
	search_btn.onclick = function(){
		reset();
		preorder(root);
		searchFun(search.value);
	}
	/*changeClick();
	changeAppend();*/
    var targetEle = changeColor();
    
    del_btn.onclick = function(){     
    alert(targetEle);           
		targetEle.remove(targetEle.childNodes);
	}
    append_btn.onclick = function(){
		var div = document.createElement("div");
		div.innerHTML = append.value;                
		targetEle.append(div);
	}
})()