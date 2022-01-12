<!doctype html>
<html>
<head>
    <meta charset="utf-8">
<TRS_TEMPLATE TEMPNAME="细缆标识"></TRS_TEMPLATE>
<title><trs_channel FIELD="chnldesc" autolink="false"/>-<trs_website field="sitename"/></title>
<link rel="stylesheet" type="text/css" href="<trs_website field="_recurl" urlisabs="true"/>material/css/bootstrap.css" ignoreapd="1">
<link rel="stylesheet" type="text/css" href="<trs_channel id="css" TemplateName="18xn_style.css" UrlIsAbs="true" field="_recurl"/>">
<link rel="stylesheet" type="text/css" href="<trs_channel id="css" TemplateName="base.css" UrlIsAbs="true" field="_recurl"/>">
<link rel="stylesheet" type="text/css" href="<trs_website field="_recurl" urlisabs="true"/>material/css/yjzj_xq.css" ignoreapd="1">
<script type="text/javascript" src="<trs_channel id="js" TemplateName="jquery.min.js" UrlIsAbs="true" field="_recurl"/>"></script>
<script type="text/javascript" src="<trs_channel id="js" TemplateName="jquery.SuperSlide.js" UrlIsAbs="true" field="_recurl"/>"></script>
<script type="text/javascript" src="<trs_website field="_recurl" urlisabs="true"/>material/js/layer.js"></script>
<script type="text/javascript" src="<trs_website field="_recurl" urlisabs="true"/>material/js/layui/layui.js" ignoreapd="1"></script>

<style>
#fontzoom{
  font-size:16px;line-height:34px;
}
.TRS_Editor table tr,td{
   border:1px solid !important;
}
#fontzoom img{
   margin-bottom:20px;
}
</style>
</head>

<body>

<div class="xq-bg"  id="container">
    <!--咸宁头部部分-->
    <TRS_SSI ID="头部嵌套" fullpath="true"/>
        <div class="xwlb">
            <div class="now-addres">
                <div class="now-addres-box">
                    <img src="xn2018_icon01.png" OLDSRC="xn2018_icon01.png" OLDID="192" RELATED="1" />
                    <span>您现在的位置 ： </span><TRS_CURPAGE value="  &nbsp;&nbsp;  >&nbsp; &nbsp;" target="_blank"  homepagedesc="首页"/>
                </div>
            </div>
            <div class="wxxq-content">
                <div class="wxxq-content-box">
                    <div class="wxxq-content-one">
                        <div id="jsTheme"></div>
                        <p>
                            <span id="jsOpinionDept">来源：</span>
                            <span id="jsBeginTime">开始时间：</span>
                            <span id="jsEndTime">结束时间：</span>
                        </p>
                    </div>
                    <div class="wxxq-content-two">
<h3 class="tab mb20"><a class="current bgg">征集内容</a></h3>
 <div id="jsHtmlContent"></div>
    <h3 class="tab mb20"><a class="current">附件下载</a></h3>
    <div id="jsAttachsList"> </div>
    <script id="jsAttachsListTemp" type="text/html">
                    <ul class="files mb20">
                        {{#if(d.length>0){ }}
                        {{# layui.each(d, function(index, item){ }}
                        <li><a href="{{item.filePath}}"><i class="icon-paper-clip text-gray mr10"></i>{{item.fileName}}</a>
                        </li>
                        {{# }); }}
                        {{# }else{ }}
                        <li><a >暂无附件</a></li>
                        {{# } }}
                    </ul>
                </script>
    <h3 class="tab mb20"><a class="current">征集结果</a></h3>
    <div id="jsOpinionResult"></div>
  <h3 class="tab mb20 wyly"><a class="cxz" id="nmfk" style="cursor: pointer;">匿名反馈</a><a class="" id="smfk" style="cursor: pointer;">实名反馈</a></h3>
  <form id="opinionForm" action="javascript:;" class="layui-form">
    <div class="row">
     <div class="form-group col-md-4">
      <label for="userName"><span class="text-red mr10">*</span>昵称：</label>
      <input id="userName" name="userName" type="text" class="form-control" placeholder="请输入2到12位的昵称名" lay-verify="required|userName" />
     </div>
     <div class="form-group col-md-4">
      <label for="phone">联系方式：</label>
      <input id="phone" name="phone" type="text" class="form-control" placeholder="请输入11位的手机号码" lay-verify="mobile" />
     </div>
     <div class="form-group col-md-4"></div>
    </div>
    <div class="row">
     <div class="form-group col-md-12">
      <label for="content"><span class="text-red mr10">*</span>反馈内容：</label>
      <textarea id="content" name="content" class="form-control" rows="3"
                                  lay-verify="required|content" style="height:auto;"></textarea>
     </div>
    </div>
    <div class="form-inline mb20">
     <div class="form-group yzm">
      <label for="captcha"><span class="text-red mr10">*</span>验证码：</label>
      <input id="captcha" name="captcha" type="text" class="form-control" placeholder="" style="width: 120px" lay-verify="captcha" />
      <img class="img-captcha" src="" alt="" />
      <p class="form-control-static"><a class="img-captcha-change" href="javascript:">看不清楚换一张</a></p>
     </div>
    </div>
    <div class="tc mb20"> <span lay-submit lay-filter="opinionFormSubmit" class="btn md-blue"><i class="icon-check"></i>提交</span>  <span class="btn btn-default" onclick="$('#opinionForm')[0].reset();"><i class="icon-reload"></i>重置</span> </div>
   </form>
   <!-- 留言列表 -->
   <h3 class="tab mb20"><a class="current">意见列表</a>（共<span id="jsItemListCount">0</span>人提出意见）</h3>
   <ul id="jsItemListContent" class="list-b">
   </ul>
   <script id="jsItemListTemp" type="text/html">
                <ul class="files mb20">
                    {{#if(d.length>0){ }}
                    {{# layui.each(d, function(index, item){ }}
                    <li>
                        <h4><i class="icon-bubbles text-gray mr10"></i>{{item.content}}</h4>
                        <p>【网民留言】（{{item.userName}}） {{item.crTime}}</p>
                    </li>
                    {{# }); }}
                    {{# }else{ }}
                    <li><h4 href="javascript:;">暂无数据</h4></li>
                    {{# } }}
                </ul>
            </script>
    <div id="jsPages" class="pages clearfix"> </div>


                        <div class="wxxq-share">

                        </div>
			<div class="clear"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!--咸宁底部-->
  <TRS_SSI ID="底部嵌套" fullpath="true"/>
</div>
<script type="text/javascript" src="<TRS_CHANNEL FIELD="_recurl" ID="js" TEMPLATENAME="xlfunction.js"></TRS_CHANNEL>"></script>
<script type="text/javascript" src="<trs_channel id="js" TemplateName="com_31.js" UrlIsAbs="true" field="_recurl"/>"></script>
    <script type="text/javascript" src="<trs_website field="_recurl" urlisabs="true"/>material/js/opinion_detail.js"></script>
<script>
window.onload=function (){
  $(".bsStyle999").addClass('newClass');
  $('.newClass').css('margin-top','2px');
   //$('#fontzoom').css({'font-size':'16px','line-height':'34px'});
}
</script>
<script>
    $(".slideTxtBox").slide({});
	
    jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,scroll:2,vis:2});
	
       $("#xz_<TRS_CHANNEL id="OWNER"  field="CHANNELID"/>").attr("class","index-li-active").siblings().attr("class","");

</script>
<script type="text/javascript" src="<trs_website field="_recurl" urlisabs="true"/>material/js/ssoAjax.js"></script>
</body>
</html>