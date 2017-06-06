
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        dscreate();
    }
}

function dscreate()
{
    var dashname = document.getElementsByName("dashmain");
    var a,b,c;
    objs = new Array();
    var n = 1;

    for(var i=0;i<dashname.length;i++){
        c = dashname[i].id.split("-");
        dashname[i].id += "-" + n;
        objs[i] = createDash(c[3], n);
        objs[i].dsinit();
        n += 1;
    }
}

function createDash(suffix, extra) {
    var dash = new Object;
    dash.d=null;
    dash.flag=0;
    dash.suffix="-"+suffix;
    dash.extra="-"+extra;
    dash.mainid="dash-main-id";
    dash.imgid="dash-img-id";
    dash.urlprefix="http://www.dashangcloud.com";

    dash.dsinit = function(){
        this.flag = 0;
        this.d = document;
        this.mainid += this.suffix+this.extra;

        this.d.getElementById(this.mainid).innerHTML = this.dshtml();
        this.dsresetid();

        this.dscss();
    };


    dash.dshtml = function(){
        var mainvalue = this.d.getElementById(this.mainid).className;

        var a = mainvalue.split(" ");
        if(a.length == 2){
            b = a[1].split("-");
        }else{
        }

        var url = encodeURIComponent(window.location.href);

        return "<a href=\""+ dash.urlprefix +"/sh/"+b[0]+"?body="+url+"\" id=\"dash-tip-id\" class=\"dash-tip\" target=\"_blank\">" +
            "<span id=\"sail\">打赏</span> </a>";
            //"<img id=\"dash-img-id\" src=\""+ "Application/Home/Common/img/2.png\" alt=\"打赏\" /></a>";

    };


    dash.dsresetid = function(){
        this.d.getElementById(this.imgid).setAttribute("id", this.imgid+this.suffix+this.extra);
        this.imgid += this.suffix+this.extra;
    };

    dash.dscss = function(){
        //var obj = document.createElement('style');
        var obj = document.getElementById('sail');
        obj.type = "text/css";
        //var styles = ".sail{display:inline-block;width:1.406rem;height:0.302rem;border-radius:0.0592rem;color:#ffffff;font-size:0.148rem;text-align:center;line-height:0.302rem;margin-left:0.351rem;margin-bottom:0.137rem;font-weight:bold;cursor: pointer;background:linear-gradient(to top right, rgba(255, 166, 106, 1), rgba(252, 229, 72, 1));background: -ms-linear-gradient(left bottom,rgba(34, 42, 46, 1), rgba(34, 42, 46, 1));background:-moz-linear-gradient(left bottom,yellow,orange);"};
        //var styles =".dash-tip span{position:relative;width:1.406rem;height:0.302rem;margin-left:0.351rem;margin-bottom:0.137rem; cursor: pointer;} background:linear-gradient(to top right, rgba(255, 166, 106, 1), rgba(252, 229, 72, 1));background: -ms-linear-gradient(left bottom,rgba(34, 42, 46, 1), rgba(34, 42, 46, 1));background:-moz-linear-gradient(left bottom,yellow,orange);";
        var style = ".dash-tip span{width:1.406rem;height:0.302rem;background:black;}";
        if (obj.styleSheet) obj.styleSheet.cssText = styles;
        else obj.appendChild(document.createTextNode(styles));
        document.getElementById(this.mainid).appendChild(obj);
    };
    return dash;
}
