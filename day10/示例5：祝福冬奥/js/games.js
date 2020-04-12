/**
 * Created by zongjuan.wang on 2016/6/17.
 */

$(document).ready(function(){
    //用过滤选择器给h2设置背景颜色和字体颜色
     $(".contain :header").css({"background":"#2a65ba","color":"#ffffff"});


    var $newNode1=$("<li>你喜欢哪些冬季运动项目？最后</li>");
    var $newNode2=$("<li title='last'>北京申办冬奥会是再合适不过了！</li>");
    //追加到最后面
      //$("ul").append($newNode1);
    //追加到第一个
      //$("ul").prepend($newNode2);
    var $newNode3=$("<li>北京冬残会筹备工作在京举行最后2</li>");
    var $newNode4=$("<li>北京奥匹克塔奥运五环标志落成！</li>");
    
   //追加到最后面
      $("ul").after($newNode3);
    
     //追加到最前面
      $("ul").before($newNode4);

		//删除
      $(".gameList li:eq(1)").remove();
      
      //把值设置为空
      $(".gameList li:eq(1)").empty();



    //li 最后一个 没有边框
    //$(".gameList li:last").css("border","none");


});