window.onload =(function(){
	var arr =[];
	var root = document.getElementsByClassName("root")[0];
	var btn = document.getElementsByClassName("btn_group")[0];
	var prebtn = document.getElementById("preorder");
	var postbtn = document.getElementById("postorder");
	var search = document.getElementById("search");
	var search_btn = document.getElementById("search_btn");
	var divs = document.getElementsByTagName("div");

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
})()