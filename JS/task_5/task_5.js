    var inp_num = document.getElementById("num");
    var num_group = document.getElementById("num_group");
    var left_push = document.getElementsByTagName("input")[1];
    var right_push = document.getElementsByTagName("input")[2];
    var left_pop = document.getElementsByTagName("input")[3];
    var right_pop = document.getElementsByTagName("input")[4];
    var sort = document.getElementsByTagName("input")[5];
    /*插入操作*/
    function insert(dir){
      if(!isFull()){
        if(inp_num.value == ""){
        alert("请输入插入的值");
      }
      else if(isNaN(inp_num.value) || inp_num.value<10 || inp_num.value>100){
        alert("请输入一个10-100以内的数字");
      }else{
          var li =document.createElement("li");
          li.style.height = inp_num.value+'px';      /*直接将iput的值作为li的高度*/
          li.style.marginTop = (100 - inp_num.value) + "px";
          if(dir == "left"){
            num_group.insertBefore(li,num_group.firstChild);     /*在ul的第一个子节点前插入新元素*/
          } 
          else if(dir == "right"){
            num_group.append(li);                    /*在ul的最后一个子节点后插入新元素*/
          }
        }
        inp_num.value = "";           /*完成一次输入之后的复位操作*/
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
    /*冒泡排序*/
    function bubbleSort(){
        var i = document.getElementsByTagName("li").length;
        var numlist = document.getElementsByTagName("li");
        var temp;
        //假设有i个元素，则在最复杂情况下要进行i-1次循环遍历，使用while循环语句共遍历了i次;
        while(i>0){
          for (var j = 0; j < i-1; j++) {
            if (numlist[j].style.height > numlist[j+1].style.height) {
              temp = numlist[j].style.height;
              numlist[j].style.height = numlist[j+1].style.height;
              numlist[j+1].style.height = temp;
            }
          }
          i--;
        }
    }

    window.onload = function(){
     /* left_push.addEventListener("click",function(){insert("left")},false); 
      right_push.addEventListener("click",function(){insert("right")},false);*/
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
      sort.onclick = function(){
        bubbleSort();
      };
    }()