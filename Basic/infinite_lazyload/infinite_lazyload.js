/**
 * Created by yan on 2017/5/26.
 */
/*$(document).ready((function(){
    var isloaded = false;
    function isShow($el){
        var winH = $(window).height(),//获取窗口高度
            scrollH = $(window).scrollTop(),//获取窗口滚动高度
            top = $el.offset().top;//获取元素距离窗口顶部偏移高度
        if(top < scrollH + winH){
            return true;//在可视范围
        }else{
            return false;//不在可视范围
        }
    }

    $(window).on('scroll', function(){//监听滚动事件
        checkShow();
    })
    checkShow();
    function checkShow(){//检查元素是否在可视范围内
        $('li').each(function(){//遍历每一个元素
            var $cur = $(this);
            if(!!isloaded($cur)){return;}//判断是否已加载
            if (isShow($cur)) {
                setTimeout(function(){
                    showContent($cur);
                },300)//设置时间是为了更好的看出效果
            };
        });
    }
    function showContent($el){

    }
})*/

$(function(){
    var count=1;
    var it=true;
    $(function(){

        for(var i =0;i<30;i++){
            $('.comment_list').append('<li>item'+count+++'</li>');
        }
        setTimeout(function(){
            $('#container').append("<div class='footer'></div>");
        },100)
        $(window).scroll(function(){
            if(it){
                var win_sc=$(this).scrollTop();
                var win_height=$(window).innerHeight();
                if(win_sc+win_height==$(document).height()){
                    it=false;
                    $('.footer').append("<div class='spinner'>"+
                        "<div class='box box_1'></div>"+
                        "<div class='box box_2'></div>"+
                        "<div class='box box_3'></div>"+
                        "<div class='box box_4'></div>"+
                        "<div class='box box_5'></div>"+
                        "</div>")
                    setTimeout(add,2000);
                    setTimeout(function(){
                        $('#container').append("<div class='footer'></div>");
                    },2100);
                }
            }

        })
    })

    function add (){
        for(var i =0;i<10;i++){
            $('.comment_list').append('<li>item'+count+++'</li>');
        }
        $('.footer').remove();
        it=true;
    }
})
