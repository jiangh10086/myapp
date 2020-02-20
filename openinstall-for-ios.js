var iosOpeninstallKey = "g2d1kx";
var userAgent = navigator.userAgent;
var isIosClient = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var openinstallForIosIsReady = false;
var openinstallForIos = null;
if (isIosClient){
    alert(1);
    var urldata = OpenInstall.parseUrlParams();
    openinstallForIos = new OpenInstall({ 
        appKey : iosOpeninstallKey, 
        onready : function() { 
            m.schemeWakeup(); 
        }
    }, urldata);
}
