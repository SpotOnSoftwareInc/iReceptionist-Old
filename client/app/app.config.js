// var IS_MOBILE = true;

angular.module("robobetty")
    .constant("appConfig", {
        isMobile: IS_MOBILE || false, 
        baseUrl: "https://spotonsoftware.herokuapp.com/",
        debugMode: false
    });
