    var inp_num = document.getElementById("num");
    var num_group = document.getElementById("num_group");
    var left_push = document.getElementsByTagName("input")[1];
    var right_push = document.getElementsByTagName("input")[2];
    var left_pop = document.getElementsByTagName("input")[3];
    var right_pop = document.getElementsByTagName("input")[4];
    /*插入操作*/
    function insert(dir){
      if(!isFull()){
        if(inp_num.value == ""){
        alert("请输入插入的值");
      }
      else if(isNaN(inp_num.value)){
        alert("请输入一个数字");
      }else{
        if(inp_num.value<10 || inp_num.value>100){
          alert("输入限制是10-100之间");
        }
        else{
          var li =document.createElement("li");
          li.innerHTML = inp_num.value;
          li.style.height = disHeight(li.innerHTML,li);
          if(dir == "left"){
            num_group.insertBefore(li,num_group.firstChild);
          }
          else if(dir == "right"){
            li.innerHTML = inp_num.value;
            num_group.append(li);
          }
        }
      }
        inp_num.value = "";
        inp_num.focus();
      }  
    }
    /*删除操作*/
    function pop(dir){
      if(num_group.childNodes.length<0){
        alert("没有内容可以删除!");
        return false;
      }
      else{
        if(dir == "left"){
          num_group.removeChild(num_group.firstChild);
        }
        else if(dir == "right"){
          num_group.removeChild(num_group.lastChild);
        }
        else{
          return false;
        }
      }
    }
    /*判断队列是否溢出*/
    function isFull(){
      if(num_group.childNodes.length>60){
        alert("最多显示60个队列元素");
        return true;
      }
      return false;
    }
    /*动态显示li的高度*/
    function disHeight(value,node){
      return node.style.height = "(value*0.5)px"; 
    }
    window.onload = function(){
     /* left_push.addEventListener("click",insert("left"),false);     //为什么直接有alert弹出
      right_push.addEventListener("click",insert("right"),false);*/
      left_push.onclick = function(){
        insert("left");
      };
      right_push.onclick = function(){
        insert("right");
      };
      left_pop.onclick = function(){
        pop("left");
      };
      right_pop.onclick = function(){
        pop("right");
      };
    }()