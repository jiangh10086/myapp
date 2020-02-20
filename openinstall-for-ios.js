var iosOpeninstallKey = "g2d1kx";
var userAgent = navigator.userAgent;
var isIosClient = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var openinstallForIosIsReady = false;
var openinstallForIos = null;
if (isIosClient){
    var urldata = OpenInstall.parseUrlParams();
    openinstallForIos = new OpenInstall({ 
        appKey : iosOpeninstallKey, 
        onready : function() { 
            openinstallForIosIsReady = true;
            openinstallForIos.schemeWakeup(); 
        }
    }, urldata);
}

function DownLoadIosApp() {
    if (openinstallForIosIsReady) {
        openinstallForIos.wakeupOrInstall();
    }else{
        window.location.href="https://apps.apple.com/cn/app/the-curvy-line/id1494555237"
    }
}
