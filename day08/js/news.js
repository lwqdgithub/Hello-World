/**
 * Created by zongjuan.wang on 2016/6/16.
 */

$(document).ready(function(){
    //$("#news a[class]").css("background","#c9cbcb");  //����class������
    //$("#news a[class='hot']").css("background","#c9cbcb");  //����class��������ֵΪhot
    //$("#news a[class!='hot']").css("background","#c9cbcb");  //class��������ֵ����hot
    //$("#news a[href^='www']").css("background","#c9cbcb");  //hrefֵ��www��ͷ
    //$("#news a[href$='html']").css("background","#c9cbcb");  //hrefֵ��html��β
    $("#news a[href*='k2']").css("background","#c9cbcb");  //hrefֵ����k2
})