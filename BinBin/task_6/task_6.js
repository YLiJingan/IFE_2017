    var inp_num = document.getElementById("num");
    var num_group = document.getElementById("num_group");
    var left_push = document.getElementsByTagName("input")[0];
    var right_push = document.getElementsByTagName("input")[1];
    var left_pop = document.getElementsByTagName("input")[2];
    var right_pop = document.getElementsByTagName("input")[3];
    var search_val = document.getElementsByTagName("input")[4];
    var search_btn = document.getElementsByTagName("input")[5];
    var sort = document.getElementById("sort");
    /*插入操作*/
    function insert(dir){
      if(inp_num.value == ""){
      alert("请输入插入的值");
       }
      else{
          var str = inp_num.value;            /*输入 可能是多个内容*/
          var getValue=str.split(/,|，|、|\s|\n|\t|\r/);   /*当输入多个分隔符时未处理*/
          for(var i=0;i<getValue.length;i++){
            var li = document.createElement("li");
            li.innerHTML = getValue[i];
            if(dir == "left"){
              num_group.insertBefore(li,num_group.childNodes[0]);     /*在ul的第一个子节点前插入新元素*/
            } 
            else if(dir == "right"){                
              num_group.insertBefore(li,num_group.lastChild);         /*在ul的最后一个子节点后插入新元素*/
              /*num_group.appendChild(li);     将新节点追加到子节点列表的末尾*/
              /* num_group.append(li);         会出现text节点 不是li*/
            }
          }                                  
        }
        inp_num.value = "";           /*完成一次输入之后的复位操作*/
        inp_num.focus();
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

    /*冒泡排序*/
    function bubbleSort(){
        var i = document.getElementsByTagName("li").length;
        var numlist = document.getElementsByTagName("li");
        var temp;
        //假设有i个元素，则在最复杂情况下要进行i-1次循环遍历，使用while循环语句共遍历了i次;
        while(i>0){
          for (var j = 0; j < i-1; j++) {
            if (numlist[j].innerHTML > numlist[j+1].innerHTML) {
              temp = numlist[j].innerHTML;
              numlist[j].innerHTML = numlist[j+1].innerHTML;
              numlist[j+1].innerHTML = temp;
            }
          }
          i--;
        }
    }
    /*模糊查询*/
    function search(){
        var search = search_val.value;
        var len = num_group.childNodes.length;        /*len默认为1*/
        if(len!=1){
            for(var i=0;i<len-1;i++){
              if(num_group.childNodes[i].innerHTML.indexOf(search)>=0){
                num_group.childNodes[i].className="dim_li";
              }
            }
            /*for(var i=0;i<len-1;i++){      
            var str = num_group.childNodes[i].innerHTML;
            alert(num_group.childNodes[i].innerHTML);
            str = str.replace(search,"<li style='color:blue;font-size:18px;'>"+search+"</li>");
            num_group.childNodes[i].innerHTML = str;
          }*/
        }
        else{
          alert("请先在队列中插入值");
        }    
    }

    window.onload = function(){
     /* left_push.addEventListener("click",function(){insert("left")},false); 
      right_push.addEventListener("click",function(){insert("right")},false);  注意写法*/      
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
      search_btn.onclick = function(){
        search();
      }
      /*每个按钮都添加了点击事件，可以使用事件代理进行优化*/
    }()