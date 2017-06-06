"use strict";

var message;
$('body').scrollTop(0);
var jsonStudy = [],
    jsonGroup = [],
    jsonDevelop = [],
    jsonEmotion = [],
    jsonExperit = [],
    jsonOther = [];
$.ajax({
    type: "GET",
    //url: "http://123.207.83.243/coalball/Home/Index/test",
    url: "Home/Index/test",
    dataType: "json",
    success: function success(data) {
        message = data;
        for (var i = 0; i < 5; i++) {
            var _num = i + 1;

            $('.dataSort').eq(_num).html(HtmlEncode(message[i].cate + ':'));
            $('.dataHeadline').eq(_num).html(HtmlEncode(message[i].title));
            $('.dataBody').eq(_num).html(HtmlEncode(message[i].content));
            $('.timeStart').eq(_num).html(HtmlEncode('发布时间:' + message[i].update_time));
            $('.timeStop').eq(_num).html(HtmlEncode('截止时间:' + message[i].overtime));
            if (message[i].path0) {
                $('.img2').eq(_num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + message[i].path0 + message[i].savename0);
            } else {
                $('.img2').eq(_num).css('display', 'none');
            }

            if (message[i].path1) {
                $('.img1').eq(_num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + message[i].path1 + message[i].savename1);
            } else {
                $('.img1').eq(_num).css('display', 'none');
            }
        }
        divideJson(message);
    },
    error: function error(jqXHR) {
        alert("发生错误:" + jqXHR.status);
    }
});

function divideJson(message) {
    for (var i = 0; i < message.length; i++) {
        switch (message[i].cate) {
            case "学习":
                jsonStudy.push(message[i]);
                break;
            case "组队/招人":
                jsonGroup.push(message[i]);
                break;
            case "开发/设计/视频制作":
                jsonDevelop.push(message[i]);
                break;
            case "情感":
                jsonEmotion.push(message[i]);
                break;
            case "实验":
                jsonExperit.push(message[i]);
                break;
            case "其他":
                jsonOther.push(message[i]);
                break;
        }
    }
}

//懒式加载js开始，修改二
function throttle() {
    var fn = arguments.length <= 0 || arguments[0] === undefined ? load : arguments[0];
    var delay = arguments.length <= 1 || arguments[1] === undefined ? 50 : arguments[1];
    var atleast = arguments.length <= 2 || arguments[2] === undefined ? 1000 : arguments[2];

    var timeout = null,
        startTime = new Date();
    return function () {
        var curTime = new Date();
        clearTimeout(timeout);
        if (curTime - startTime >= atleast) {
            fn();
            startTime = curTime;
        } else {
            timeout = setTimeout(fn, delay);
        }
    };
}
var p = 0,
    t = 0,
    down = 0;
$(window).scroll(function (e) {
    p = $(this).scrollTop();
    if (t <= p) {
        //下滚
        down = 1;
    } else {
        //上滚
        down = 0;
    }
    t = p;
});
var num1 = 6;
var num2;
var num3;
var num4;
var num5;
var num6;
var num7;
var off2 = 1;
var off3 = 1;
var off4 = 1;
var off5 = 1;
var off6 = 1;
var off7 = 1;
var off8 = 1;
function lazyload() {
    return function () {
        var seeHeight = $(window).height();
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if ($('section:last').offset().top < seeHeight + scrollTop && down) {
            if (need == 0 && off2) {
                var i = num1-1;
                if (num1 <= message.length) {
                    $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
                }
                $('.dataSort').eq(num1).html(HtmlEncode(message[i].cate + ':'));
                $('.dataHeadline').eq(num1).html(HtmlEncode(message[i].title));
                $('.dataBody').eq(num1).html(HtmlEncode(message[i].content));
                $('.timeStart').eq(num1).html(HtmlEncode('发布时间：' + message[i].update_time));
                $('.timeStop').eq(num1).html(HtmlEncode('截止时间:' + message[i].overtime));

                if (message[i].path0) {
                    $('.img2').eq(num1).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + message[i].path0 + message[i].savename0);
                } else {
                    $('.img2').eq(num1).css('display', 'none');
                }

                if (message[i].path1) {
                    $('.img1').eq(num1).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + message[i].path1 + message[i].savename1);
                } else {
                    $('.img1').eq(num1).css('display', 'none');
                }

                num1++;
                if (num1 == message.length) {
                    off2 = 0;
                }
                $(".needData:last").on("click",pageInfo);
            }

            if (need == 1 && off3) {
                var i = num2-1;
                if (num <= jsonStudy.length) {
                    $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
                }
                $('.dataSort').eq(num2).html(HtmlEncode(jsonStudy[i].cate + ':'));
                $('.dataHeadline').eq(num2).html(HtmlEncode(jsonStudy[i].title));
                $('.dataBody').eq(num2).html(HtmlEncode(jsonStudy[i].content));
                $('.timeStart').eq(num2).html(HtmlEncode('发布时间：' + jsonStudy[i].update_time));
                $('.timeStop').eq(num2).html(HtmlEncode('截止时间:' + jsonStudy[i].overtime));
                if (jsonStudy[i].path0) {
                    $('.img2').eq(num2).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonStudy[i].path0 + jsonStudy[i].savename0);
                } else {
                    $('.img2').eq(num2).css('display', 'none');
                }

                if (jsonStudy[i].path1) {
                    $('.img1').eq(num2).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonStudy[i].path1 + jsonStudy[i].savename1);
                } else {
                    $('.img1').eq(num2).css('display', 'none');
                }

                num2++;
                if (num2 == jsonStudy.length) {
                    off3 = 0;
                }
                $(".needData:last").on("click",pageInfo);
            }
            if (need == 2 && off4) {
                var i = num3-1;
                if (num <= jsonGroup.length) {
                    $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
                }
                $('.dataSort').eq(num3).html(HtmlEncode(jsonGroup[i].cate + ':'));
                $('.dataHeadline').eq(num3).html(HtmlEncode(jsonGroup[i].title));
                $('.dataBody').eq(num3).html(HtmlEncode(jsonGroup[i].content));
                $('.timeStart').eq(num3).html(HtmlEncode('发布时间：' + jsonGroup[i].update_time));
                $('.timeStop').eq(num3).html(HtmlEncode('截止时间:' + jsonGroup[i].overtime));
                if (jsonGroup[i].path0) {
                    $('.img2').eq(num3).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonGroup[i].path0 + jsonGroup[i].savename0);
                } else {
                    $('.img2').eq(num3).css('display', 'none');
                }

                if (jsonGroup[i].path1) {
                    $('.img1').eq(num3).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonGroup[i].path1 + jsonGroup[i].savename1);
                } else {
                    $('.img1').eq(num3).css('display', 'none');
                }
                num3++;
                if (num3 == jsonGroup.length) {
                    off4 = 0;
                }
                $(".needData:last").on("click",pageInfo);
            }
            if (need == 3 && off5) {
                var i = num4-1;
                if (num <= jsonDevelop.length) {
                    $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
                }
                $('.dataSort').eq(num4).html(HtmlEncode(jsonDevelop[i].cate + ':'));
                $('.dataHeadline').eq(num4).html(HtmlEncode(jsonDevelop[i].title));
                $('.dataBody').eq(num4).html(HtmlEncode(jsonDevelop[i].content));
                $('.timeStart').eq(num4).html(HtmlEncode('发布时间：' + jsonDevelop[i].update_time));
                $('.timeStop').eq(num4).html(HtmlEncode('截止时间:' + jsonDevelop[i].overtime));
                if (jsonDevelop[i].path0) {
                    $('.img2').eq(num4).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonDevelop[i].path0 + jsonDevelop[i].savename0);
                } else {
                    $('.img2').eq(num4).css('display', 'none');
                }

                if (jsonDevelop[i].path1) {
                    $('.img1').eq(num4).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonDevelop[i].path1 + jsonDevelop[i].savename1);
                } else {
                    $('.img1').eq(num4).css('display', 'none');
                }

                num4++;
                if (num4 == jsonDevelop.length) {
                    off5 = 0;
                }
                $(".needData:last").on("click",pageInfo);
            }
            if (need == 4 && off6) {
                var i = num5-1;
                if (num <= jsonEmotion.length) {
                    $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
                }
                $('.dataSort').eq(num5).html(HtmlEncode(jsonEmotion[i].cate + ':'));
                $('.dataHeadline').eq(num5).html(HtmlEncode(jsonEmotion[i].title));
                $('.dataBody').eq(num5).html(HtmlEncode(jsonEmotion[i].content));
                $('.timeStart').eq(num5).html(HtmlEncode('发布时间：' + jsonEmotion[i].update_time));
                $('.timeStop').eq(num5).html(HtmlEncode('截止时间:' + jsonEmotion[i].overtime));
                if (jsonEmotion[i].path0) {
                    $('.img2').eq(num5).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonEmotion[i].path0 + jsonEmotion[i].savename0);
                } else {
                    $('.img2').eq(num5).css('display', 'none');
                }

                if (jsonEmotion[i].path1) {
                    $('.img1').eq(num5).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonEmotion[i].path1 + jsonEmotion[i].savename1);
                } else {
                    $('.img1').eq(num5).css('display', 'none');
                }

                num5++;
                if (num5 == jsonEmotion.length) {
                    off6 = 0;
                }
                $(".needData:last").on("click",pageInfo);
            }
            if (need == 5 && off7) {
                var i = num6-1;
                if (num <= jsonExperit.length) {
                    $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
                }
                $('.dataSort').eq(num6).html(HtmlEncode(jsonExperit[i].cate + ':'));
                $('.dataHeadline').eq(num6).html(HtmlEncode(jsonExperit[i].title));
                $('.dataBody').eq(num6).html(HtmlEncode(jsonExperit[i].content));
                $('.timeStart').eq(num6).html(HtmlEncode('发布时间：' + jsonExperit[i].update_time));
                $('.timeStop').eq(num6).html(HtmlEncode('截止时间:' + jsonExperit[i].overtime));
                if (jsonExperit[i].path0) {
                    $('.img2').eq(num6).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonExperit[i].path0 + jsonDevelop[i].savename0);
                } else {
                    $('.img2').eq(num6).css('display', 'none');
                }

                if (jsonExperit[i].path1) {
                    $('.img1').eq(num6).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonExperit[i].path1 + jsonDevelop[i].savename1);
                } else {
                    $('.img1').eq(num6).css('display', 'none');
                }

                num6++;
                if (num6 == jsonExperit.length) {
                    off7 = 0;
                }
                $(".needData:last").on("click",pageInfo);
            }
            if (need == 6 && off8) {
                var i = num7-1;
                if (num <= jsonOther.length) {
                    $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
                }
                $('.dataSort').eq(num7).html(HtmlEncode(jsonOther[i].cate + ':'));
                $('.dataHeadline').eq(num7).html(HtmlEncode(jsonOther[i].title));
                $('.dataBody').eq(num7).html(HtmlEncode(jsonOther[i].content));
                $('.timeStart').eq(num7).html(HtmlEncode('发布时间：' + jsonOther[i].update_time));
                $('.timeStop').eq(num7).html(HtmlEncode('截止时间:' + jsonOther[i].overtime));
                if (jsonOther[i].path0) {
                    $('.img2').eq(num7).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonOther[i].path0 + jsonOther[i].savename0);
                } else {
                    $('.img2').eq(num7).css('display', 'none');
                }

                if (jsonOther[i].path1) {
                    $('.img1').eq(num7).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonOther[i].path1 + jsonOther[i].savename1);
                } else {
                    $('.img1').eq(num7).css('display', 'none');
                }

                $('.img1').eq(num7).attr("src", jsonOther[i].path0);
                $('.img2').eq(num7).attr("src", jsonOther[i].path1);
                num7++;
                if (num7 == jsonOther.length) {
                    off8 = 0;
                }
                $(".needData:last").on("click",pageInfo);
            }
        }
    };
}
var load = lazyload();
window.addEventListener('scroll', throttle(), false);
// window.removeEventListener('scroll', throttle, false);

//懒式加载js结束
var need = 0;
 var num;
$('#need>li').click(function () {
    $('#middle-detail').css('display','none');
     $('#right-state').css("display",'block');
    $('#detail-page').remove();
    $('#middle-upload').fadeOut();
    $('#middle-show').fadeIn();
    $('body').scrollTop(0);
    if($(document.body).outerWidth(true)>479){
    $('.needActive').removeClass('needActive');
    $(this).addClass('needActive');
    }

    need = $(this).index();
    if (need == 0) {
        off2 = 1;
        $(".needData").remove();
        var i = undefined;
        for (var _num2 = 1; _num2 < 6; _num2++) {
            i = _num2-1;
            $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
            $('.dataSort').eq(_num2).html(HtmlEncode(message[i].cate + ':'));
            $('.dataHeadline').eq(_num2).html(HtmlEncode(message[i].title));
            $('.dataBody').eq(_num2).html(HtmlEncode(message[i].content));
            $('.timeStart').eq(_num2).html(HtmlEncode('发布时间：' + message[i].update_time));
            $('.timeStop').eq(_num2).html(HtmlEncode('截止时间:' + message[i].overtime));

            if (message[i].path0) {
                $('.img2').eq(_num2).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + message[i].path0 + message[i].savename0);
            } else {
                $('.img2').eq(_num2).css('display', 'none');
            }

            if (message[i].path1) {
                $('.img1').eq(_num2).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + message[i].path1 + message[i].savename1);
            } else {
                $('.img1').eq(_num2).css('display', 'none');
            }
            $(".needData:last").on("click",pageInfo);
        }

        num1 = 6;
    }
    if (need == 1) {
        off3 = 1;
        $(".needData").remove();
        num = 1;
        for (; num < 6; num++) {
            var i = num-1;
            $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1'><img class='img img2' ></section>");
            $('.dataSort').eq(num).html(HtmlEncode(jsonStudy[i].cate + ':'));
            $('.dataHeadline').eq(num).html(HtmlEncode(jsonStudy[i].title));
            $('.dataBody').eq(num).html(HtmlEncode(jsonStudy[i].content));
            $('.timeStart').eq(num).html(HtmlEncode('发布时间：' + jsonStudy[i].update_time));
            $('.timeStop').eq(num).html(HtmlEncode('截止时间:' + jsonStudy[i].overtime));
            if (jsonStudy[i].path0) {
                $('.img2').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonStudy[i].path0 + jsonStudy[i].savename0);
            } else {
                $('.img2').eq(num).css('display', 'none');
            }

            if (jsonStudy[i].path1) {
                $('.img1').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonStudy[i].path1 + jsonStudy[i].savename1);
            } else {
                $('.img1').eq(num).css('display', 'none');
            }
            $(".needData:last").on("click",pageInfo);
        }
        num2 = 6;
    }
    if (need == 2) {
        off4 = 1;
        $(".needData").remove();
        num = 1;
        for (; num < 6; num++) {
            var i = num-1;
            $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
            $('.dataSort').eq(num).html(HtmlEncode(jsonGroup[i].cate + ':'));
            $('.dataHeadline').eq(num).html(HtmlEncode(jsonGroup[i].title));
            $('.dataBody').eq(num).html(HtmlEncode(jsonGroup[i].content));
            $('.timeStart').eq(num).html(HtmlEncode('发布时间：' + jsonGroup[i].update_time));
            $('.timeStop').eq(num).html(HtmlEncode('截止时间:' + jsonGroup[i].overtime));

            if (jsonGroup[i].path0) {
                $('.img2').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonGroup[i].path0 + jsonGroup[i].savename0);
            } else {
                $('.img2').eq(num).css('display', 'none');
            }

            if (jsonGroup[i].path1) {
                $('.img1').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonGroup[i].path1 + jsonGroup[i].savename1);
            } else {
                $('.img1').eq(num).css('display', 'none');
            }
            $(".needData:last").on("click",pageInfo);
        }
        num3 = 6;
    }
    //jsonGroup=[],
    //    jsonDevelop=[],
    //    jsonEmotion=[],
    //    jsonExperit=[],
    //    jsonOther=[];
    if (need == 3) {
        off5 = 1;
        $(".needData").remove();
        num = 1;
        for (; num < 6; num++) {
            var i = num-1;
            $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
            $('.dataSort').eq(num).html(HtmlEncode(jsonDevelop[i].cate + ':'));
            $('.dataHeadline').eq(num).html(HtmlEncode(jsonDevelop[i].title));
            $('.dataBody').eq(num).html(HtmlEncode(jsonDevelop[i].content));
            $('.timeStart').eq(num).html(HtmlEncode('发布时间：' + jsonDevelop[i].update_time));
            $('.timeStop').eq(num).html(HtmlEncode('截止时间:' + jsonDevelop[i].overtime));
            if (jsonDevelop[i].path0) {
                $('.img2').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonDevelop[i].path0 + jsonDevelop[i].savename0);
            } else {
                $('.img2').eq(num).css('display', 'none');
            }

            if (jsonDevelop[i].path1) {
                $('.img1').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonDevelop[i].path1 + jsonDevelop[i].savename1);
            } else {
                $('.img1').eq(num).css('display', 'none');
            }
            $(".needData:last").on("click",pageInfo);
        }
        num4 = 6;
    }
    if (need == 4) {
        off6 = 1;
        $(".needData").remove();
        num = 1;
        for (; num < 6; num++) {
            var i = num-1;
            $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
            $('.dataSort').eq(num).html(HtmlEncode(jsonEmotion[i].cate + ':'));
            $('.dataHeadline').eq(num).html(HtmlEncode(jsonEmotion[i].title));
            $('.dataBody').eq(num).html(HtmlEncode(jsonEmotion[i].content));
            $('.timeStart').eq(num).html(HtmlEncode('发布时间：' + jsonEmotion[i].update_time));
            $('.timeStop').eq(num).html(HtmlEncode('截止时间:' + jsonEmotion[i].overtime));
            if (jsonEmotion[i].path0) {
                $('.img2').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonEmotion[i].path0 + jsonEmotion[i].savename0);
            } else {
                $('.img2').eq(num).css('display', 'none');
            }

            if (jsonEmotion[i].path1) {
                $('.img1').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonEmotion[i].path1 + jsonEmotion[i].savename1);
            } else {
                $('.img1').eq(num).css('display', 'none');
            }
            $(".needData:last").on("click",pageInfo);
        }
        num5 = 6;
    }
    if (need == 5) {
        off7 = 1;
        $(".needData").remove();
        num = 1;
        for (; num < 6; num++) {
            var i = num-1;
            $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1'><img class='img img2'></section>");
            $('.dataSort').eq(num).html(HtmlEncode(jsonExperit[i].cate + ':'));
            $('.dataHeadline').eq(num).html(HtmlEncode(jsonExperit[i].title));
            $('.dataBody').eq(num).html(HtmlEncode(jsonExperit[i].content));
            $('.timeStart').eq(num).html(HtmlEncode('发布时间：' + jsonExperit[i].update_time));
            $('.timeStop').eq(num).html(HtmlEncode('截止时间:' + jsonExperit[i].overtime));
            if (jsonExperit[i].path0) {
                $('.img2').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonExperit[i].path0 + jsonExperit[i].savename0);
            } else {
                $('.img2').eq(num).css('display', 'none');
            }

            if (jsonExperit[i].path1) {
                $('.img1').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonExperit[i].path1 + jsonExperit[i].savename1);
            } else {
                $('.img1').eq(num).css('display', 'none');
            }
            $(".needData:last").on("click",pageInfo);
        }
        num6 = 6;
    }
    if (need == 6) {
        off8 = 1;
        $(".needData").remove();
        num = 1;
        for (; num < 6; num++) {
            var i = num-1;
            $('#middle-show').append("<section class='needData data'><div class='leftData'><span class='dataSort'></span><span class='dataHeadline'></span><p class='dataBody'></p><span class='time timeStart'></span><span class='time timeStop'></span></div><img class='img img1' ><img class='img img2' ></section>");
            $('.dataSort').eq(num).html(HtmlEncode(jsonOther[i].cate + ':'));
            $('.dataHeadline').eq(num).html(HtmlEncode(jsonOther[i].title));
            $('.dataBody').eq(num).html(HtmlEncode(jsonOther[i].content));
            $('.timeStart').eq(num).html(HtmlEncode('发布时间：' + jsonOther[i].update_time));
            $('.timeStop').eq(num).html(HtmlEncode('截止时间:' + jsonOther[i].overtime));
            if (jsonOther[i].path0) {
                $('.img2').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonOther[i].path0 + jsonOther[i].savename0);
            } else {
                $('.img2').eq(num).css('display', 'none');
            }

            if (jsonOther[i].path1) {
                $('.img1').eq(num).attr("src", "http://123.207.83.243/coalball/Application/Common/Common/Uploads/" + jsonOther[i].path1 + jsonOther[i].savename1);
            } else {
                $('.img1').eq(num).css('display', 'none');
            }
              $(".needData:last").on("click",pageInfo);
        }
        num7 = 6;
    }
});

// 登录弹出1层js开始
$('#close').click(function () {
    $('#mask').css('display', 'none');
    $('#login-box').css('display', 'none');
    $('html').css('overflowY', 'scroll');
});
$('#login').click(function () {
    $('html').css('overflowY', 'hidden');
    $("#login-email").html($.cookie("userName"));
    $("#login-password").val($.cookie("passWord"));

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    $('#mask').css('display', 'block');
    var width1 = Math.max(document.body.offsetWidth, document.documentElement.clientWidth) + 'px';
    var height1 = Math.max(document.body.offsetHeight, document.documentElement.clientHeight) + 'px';
    $('#mask').css('width', width1);
    $('#mask').css('height', height1);
    // $('#mask').css('top',scrollTop);
    $('#login-box').css('display', 'block');
    var width2 = (document.documentElement.clientWidth - $('#login-box').outerWidth()) / 2 + scrollLeft + 'px';
    var height2 = (document.documentElement.clientHeight - $('#login-box').outerHeight()) / 2 + scrollTop + 'px';
    $('#login-box').css('left', width2);
    $('#login-box').css('top', height2);
});
$(window).resize(function () {
    if ($('#mask').css("display") == 'none') return;
    var width1 = Math.max(document.body.offsetWidth, document.documentElement.clientWidth) + 'px';
    var height1 = Math.max(document.body.offsetHeight, document.documentElement.clientHeight) + 'px';
    $('#mask').css('width', width1);
    $('#mask').css('height', height1);
    if ($('#login-box').css("display") == 'none') return;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var width3 = (document.documentElement.clientWidth - $('#login-box').outerWidth()) / 2 + scrollLeft + 'px';
    var height3 = (document.documentElement.clientHeight - $('#login-box').outerHeight()) / 2 + scrollTop + 'px';
    $('#login-box').css("left", width3);
    $('#login-box').css("top", height3);
});
$('#login-headline').click(function () {
    $("#login-body").css('display', 'block');
    $("#register").css('display', 'none');
    $('.activeHeadline').removeClass('activeHeadline');
    $(this).addClass('activeHeadline');
});

$('#register-headline').click(function () {
    $("#login-body").css('display', 'none');
    $("#register").css('display', 'block');
    $('.activeHeadline').removeClass('activeHeadline');
    $(this).addClass('activeHeadline');
});
$('#login-email').blur(function () {
    var re = /^\w+[\.\_]?\w+\@\w+\.[a-zA-Z]+[\.a-zA-Z]*$/;
    if (!re.test($('#login-email').val())) {
        $('#email-tip').text('你的邮箱格式不正确');
    } else {
        $('#email-tip').html('&nbsp');
    }
});
$('#register-email').blur(function () {
    var re = /^\w+[\.\_]?\w+\@\w+\.[a-zA-Z]+[\.a-zA-Z]*$/;
    if (!re.test($('#register-email').val())) {
        $('#register-tip1').text('你的邮箱格式不正确');
    } else {
        $('#register-tip1').html('&nbsp');
    }
});
$('#login-password').blur(function () {
    var re = /^\S{6,16}$/;
    if (!re.test($('#login-password').val())) {
        $('#password-tip').text('你的密码格式不正确');
    } else {
        $('#password-tip').html('&nbsp');
    }
});
$('#register-password').blur(function () {
    var re = /^\S{6,16}$/;
    if (!re.test($('#register-password').val())) {
        $('#register-tip2').text('你的密码格式不正确');
    } else {
        $('#register-tip2').html('&nbsp');
    }
});
$('#login-form').submit(function () {
    if ($("#remeber-password").attr("checked") == 'checked') {
        var userName = $("#login-email").val();
        var passWord = $("#login-password").val();
        $.cookie("remeber-password", "true", { expires: 14 });
        $.cookie("userName", userName, { expires: 14 });
        $.cookie("passWord", passWord, { expires: 14 });
    }
});
// 登录弹出层js结束
// 修改一，之前已改过，但此文件未改动的，原代码为上面注释的

if ($("html").width() <= 479) {
    $(".leftNeed:first").text("最近");
}
var off = true;
$('#publish').click(function () {
	if($("#middle-upload").attr("display")=='none'){
        off = true;
	}
    if (off) {
        if ($(document.body).outerWidth(true) < 479) {
            $('#right-state').css('display', 'none');
            $('#left-bar').css('display', 'none');
            $('.upload-leftDate').css('display', 'none');
            $("#finish-btn").val('完成');
            $("#upload-btn").text('+');
            $('#need-select').css('display', 'block');
            $('#back-top').css("display",'none');
        }
        // $('#middle-show').css('display', 'none');
        $('#middle-show').fadeOut();
        $('#middle-headline').css('display', 'none');
        $('#detail-page').remove();
        // $('#middle-upload').css('display', 'block');
        $('#middle-upload').fadeIn();

        off = false;
    } else {
        
        if ($(document.body).outerWidth(true) > 479) {

            $('#middle-headline').css('display', 'block');
        }
        $('#detail-page').remove();
        $('#middle-upload').fadeOut();
        $('#middle-show').fadeIn();

        // $('#middle-upload').css('display', 'none');
        // $('#middle-show').css('display', 'block');
        $('#need-select').css('display', 'none');
        off = true;
    }
});
$('#triangle').click(function () {
    if ($(document.body).outerWidth(true) < 479) {
        $('#right-state').css('display', 'block');
        $('#left-bar').css('display', 'block');
        $('#middle-show').css('display', 'block');
        $('#middle-upload').css('display', 'none');
        $('#need-select').css('display', 'none');
        $('#back-top').css("display",'block');
        off = true;
    }
});

$('#empty').click(function () {
    $("#pic1").attr("src", '');
    $("#pic2").attr("src", '');
    $('#img-number').html(0);
    filesLength = 0;
    return false;
});

var filesLength = 1;
$("#xfile").change(function checkurl() {

    if (this.files.length) {
        filesLength = this.files.length;
    }
    var objUrl1 = getObjectURL(this.files[0]);
    if (objUrl1) {
        $("#pic1").attr("src", objUrl1);
    }
    if (this.files.length >= 2) {
        var objUrl2 = getObjectURL(this.files[1]);
        if (objUrl2) {
            $("#pic2").attr("src", objUrl2);
        }
    }
    $('#img-number').html(filesLength);
});

function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}

var str1;
var str2;
$('#refresh').click(function () {
    time();
    $('.upload-data').css('display', 'block');
    var text1 = $('#upload-headline').val();
    var text2 = $('#upload-content').val();
    $(".upload-data .dataHeadline").text(text1);
    $(".upload-data .dataBody").text(text2);
    $(".upload-data .dataSort").text(text3);
    $(".upload-data .timeStart").text('开始时间：' + str1);
    $(".upload-data .timeStop").text('截止时间:' + str2);
    if (filesLength == 1) {

        $("#pic2").attr("src", '');
    }
    if (filesLength == 0) {

        $("#pic1").attr("src", '');
        $("#pic2").attr("src", '');
    }
});

function time() {
    var mydate = new Date();
    str1 = "" + mydate.getFullYear() + ".";
    str1 += mydate.getMonth() + 1 + ".";
    str1 += mydate.getDate();
    var daynumber = $('#day-num').val();
    var str3 = mydate.getFullYear() + "-" + (mydate.getMonth() + 1) + "-" + mydate.getDate();
    console.log(str3);
    var d = new Date(str3);
    d.setDate(d.getDate() + Number(daynumber));
    str2 = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate();
};

$('#day-num').change(function () {
    time();
});

var text3 = "学习:";
$("[title='button']").click(function () {
    $('.selected').removeClass('selected');
    $("[title='button']").attr("checked", false);
    $(this).parent().addClass('selected');
    $(this).attr("checked", true);
    switch ($(this).index()) {
        case 3:
            text3 = "学习:";
            break;
        case 4:
            text3 = "组队/招人:";
            break;
        case 5:
            text3 = "开发/设计/视频制作:";
            break;
        case 6:
            text3 = "情感:";
            break;
        case 7:
            text3 = "实验:";
            break;
        case 8:
            text3 = "其他:";
            break;

    }
});

$('#back-top').click(function(){
    $('body').scrollTop(0);
})
// 移动端头部缩进
$(window).scroll(function(){
    if($("html").width()<=479 && $('body').scrollTop()>100 ){
        $('#right-state').css('display','none');
        $('#left-text').css('display','none');
        $('#left-bar').height('1.6rem');
        $('#need').css('top','0.2rem');
        $('#box').css('top','0.2rem');
    }
    if($("html").width()<=479 && $('body').scrollTop()<100 && off==true && off1==true){
        $('#right-state').css('display','block');
        $('#left-text').css('display','block');
        $('#left-bar').css('height','4.235rem');
        $('#need').css('top','3.2rem');
        $('#box').css('top','3.2rem');
    }
});
$('#need-select').change(function(){
                    var selectNum=$(this).get(0).selectedIndex-1;
                      $("input[type='radio']").eq(selectNum).attr("checked","checked");
                });


//提交格式的验证
$("form").submit(function(e){
    if($('#upload-headline').val()==''){
        console.log('未输入标题');
        e.preventDefault();
    }
    if($('#upload-content').val()==''){
        console.log('未输入内容');
        e.preventDefault();
    }
    if(isNaN($('#day-num').val())){
       console.log('日期格式不正确');
       e.preventDefault();
    }
    
});
  // 4.21 需求详情展示

 $(".needData").on("click",pageInfo);
function pageInfo(ev){
        $('#middle-bar').append("<div id='detail-page'><span id='page-cate'></span><h4 id='page-headline'></h4><p id='page-body'></p><img id='page-img1' src='' ><img id='page-img2' src=''><span id='timeStart'></span><span id='timeStop'></span><button id='page-btn'>返回首页</button></div>");
        $('#middle-show').css('display','none');
        var pageInfo1 = $(this).find(".dataHeadline").text();
        var pageInfo0 = $(this).find(".dataSort").text();
        var pageInfo2 = $(this).find(".dataBody").text();
        var pageInfo3 = $(this).find(".timeStart").text();
        var pageInfo4 = $(this).find(".timeStop").text();
        var pageInfo5 = $(this).find(".img1").attr('src');
        var pageInfo6 = $(this).find(".img2").attr('src');
        $('#page-cate').html(HtmlEncode(pageInfo0));
        $('#page-headline').html(HtmlEncode(pageInfo1));
        $('#page-body').html(HtmlEncode(pageInfo2));
        $('#timeStart').html(HtmlEncode(pageInfo3));
        $('#timeStop').html(HtmlEncode(pageInfo4));
        $('#page-img1').attr('src',pageInfo5);
        $('#page-img2').attr('src',pageInfo6);;
          var evPagey = ev.pageY-50;
          $("body").scrollTop(0);
        
        $('#page-btn').click(function(){
        $('#detail-page').remove();
     $('#middle-show').css('display','block');
    
    $("body").scrollTop(evPagey);
});

}

//特殊字符进行转义
    var JavaScriptEncode = function(str){

        var hex=new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');

        function changeTo16Hex(charCode){
            return "\\x" + charCode.charCodeAt(0).toString(16);
        }

        function encodeCharx(original) {

            var found = true;
            var thecharchar = original.charAt(0);
            var thechar = original.charCodeAt(0);
            switch(thecharchar) {
                case '\n': return "\\n"; break; //newline
                case '\r': return "\\r"; break; //Carriage return
                case '\'': return "\\'"; break;
                case '"': return "\\\""; break;
                case '\&': return "\\&"; break;
                case '\\': return "\\\\"; break;
                case '\t': return "\\t"; break;
                case '\b': return "\\b"; break;
                case '\f': return "\\f"; break;
                case '/': return "\\x2F"; break;
                case '<': return "\\x3C"; break;
                case '>': return "\\x3E"; break;
                default:
                    found=false;
                    break;
            }
            if(!found){
                if(thechar > 47 && thechar < 58){ //数字
                    return original;
                }

                if(thechar > 64 && thechar < 91){ //大写字母
                    return original;
                }

                if(thechar > 96 && thechar < 123){ //小写字母
                    return original;
                }

                if(thechar>127) { //大于127用unicode
                    var c = thechar;
                    var a4 = c%16;
                    c = Math.floor(c/16);
                    var a3 = c%16;
                    c = Math.floor(c/16);
                    var a2 = c%16;
                    c = Math.floor(c/16);
                    var a1 = c%16;
                    return "\\u"+hex[a1]+hex[a2]+hex[a3]+hex[a4]+"";
                }
                else {
                    return changeTo16Hex(original);
                }

            }
        }

        var preescape = str;
        var escaped = "";
        var i=0;
        for(i=0; i < preescape.length; i++){
            escaped = escaped + encodeCharx(preescape.charAt(i));
        }
        return escaped;
    };

    var HtmlEncode = function(str){
        var hex = new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');
        var preescape = str;
        var escaped = "";
        for(var i = 0; i < preescape.length; i++){
            var p = preescape.charAt(i);
            escaped = escaped + escapeCharx(p);
        }

        return escaped;

        function escapeCharx(original){
            var found=true;
            var thechar=original.charCodeAt(0);
            switch(thechar) {
                case 10: return "<br/>"; break; //newline
                case 32: return "&nbsp;"; break; //space
                case 34:return "&quot;"; break; //"
                case 38:return "&amp;"; break; //&
                case 39:return "&#x27;"; break; //'
                case 47:return "&#x2F;"; break; // /
                case 60:return "&lt;"; break; //<
                case 62:return "&gt;"; break; //>
                case 198:return "&AElig;"; break;
                case 193:return "&Aacute;"; break;
                case 194:return "&Acirc;"; break;
                case 192:return "&Agrave;"; break;
                case 197:return "&Aring;"; break;
                case 195:return "&Atilde;"; break;
                case 196:return "&Auml;"; break;
                case 199:return "&Ccedil;"; break;
                case 208:return "&ETH;"; break;
                case 201:return "&Eacute;"; break;
                case 202:return "&Ecirc;"; break;
                case 200:return "&Egrave;"; break;
                case 203:return "&Euml;"; break;
                case 205:return "&Iacute;"; break;
                case 206:return "&Icirc;"; break;
                case 204:return "&Igrave;"; break;
                case 207:return "&Iuml;"; break;
                case 209:return "&Ntilde;"; break;
                case 211:return "&Oacute;"; break;
                case 212:return "&Ocirc;"; break;
                case 210:return "&Ograve;"; break;
                case 216:return "&Oslash;"; break;
                case 213:return "&Otilde;"; break;
                case 214:return "&Ouml;"; break;
                case 222:return "&THORN;"; break;
                case 218:return "&Uacute;"; break;
                case 219:return "&Ucirc;"; break;
                case 217:return "&Ugrave;"; break;
                case 220:return "&Uuml;"; break;
                case 221:return "&Yacute;"; break;
                case 225:return "&aacute;"; break;
                case 226:return "&acirc;"; break;
                case 230:return "&aelig;"; break;
                case 224:return "&agrave;"; break;
                case 229:return "&aring;"; break;
                case 227:return "&atilde;"; break;
                case 228:return "&auml;"; break;
                case 231:return "&ccedil;"; break;
                case 233:return "&eacute;"; break;
                case 234:return "&ecirc;"; break;
                case 232:return "&egrave;"; break;
                case 240:return "&eth;"; break;
                case 235:return "&euml;"; break;
                case 237:return "&iacute;"; break;
                case 238:return "&icirc;"; break;
                case 236:return "&igrave;"; break;
                case 239:return "&iuml;"; break;
                case 241:return "&ntilde;"; break;
                case 243:return "&oacute;"; break;
                case 244:return "&ocirc;"; break;
                case 242:return "&ograve;"; break;
                case 248:return "&oslash;"; break;
                case 245:return "&otilde;"; break;
                case 246:return "&ouml;"; break;
                case 223:return "&szlig;"; break;
                case 254:return "&thorn;"; break;
                case 250:return "&uacute;"; break;
                case 251:return "&ucirc;"; break;
                case 249:return "&ugrave;"; break;
                case 252:return "&uuml;"; break;
                case 253:return "&yacute;"; break;
                case 255:return "&yuml;"; break;
                case 162:return "&cent;"; break;
                case '\r': break;
                default:
                    found=false;
                    break;
            }
            if(!found){
                if(thechar>127) {
                    var c=thechar;
                    var a4=c%16;
                    c=Math.floor(c/16);
                    var a3=c%16;
                    c=Math.floor(c/16);
                    var a2=c%16;
                    c=Math.floor(c/16);
                    var a1=c%16;
                    return "&#x"+hex[a1]+hex[a2]+hex[a3]+hex[a4]+";";
                }
                else{
                    return original;
                }
            }
        }
    };

    //个人详情页代码开始
    var off1 =true;
    var publishNum=0;
    $('.head').click(function(){
        off1 =false;
       $('#middle-detail').css('display','block');
       $('#middle-show').css("display",'none');
       $('#middle-upload').css("display",'none');
       $('#right-state').css("display",'none');
       publishNum=$('#user-publish').children(".publish-data").length;
       $('#publish-num').html(publishNum);
       if($(document.body).outerWidth(true)<479){
     $('#left-bar').css('display',"none");
     $('.publish-remove').val('X');
    }
    });
    //用户注销代码

    $('#user-cancel').click(function(){
        off1 =true;
       $('#middle-detail').css('display','none');
       $('#middle-show').css("display",'block');
       $('#right-state').css("display",'block');
       $('#left-bar').css('display',"block");
    });

    //退出个人页代码
    $('#detail-back').click(function(){
        off1 =true;
       $('#middle-detail').css('display','none');
       $('#middle-show').css("display",'block');
       $('#right-state').css("display",'block');
       $('#left-bar').css('display',"block");
    });
    $('.publish-remove').click(function(){
        $(this).parent().fadeOut();
       $('#publish-num').html(--publishNum);
    });
    $('#user-changedata').click(function(){
           $('#user-sign').removeAttr("disabled");
           $('#user-sign').foces();
    });
    $('#user-sign').blur(function(){
           $('#user-sign').attr('disabled','disabled');  
    });