define(["app"],function(o){return o.module("SplashApp",function(o,p,n,s,t,e){o.startWithParent=!1,o.onStart=function(){console.info("starting SplashApp")},o.onStop=function(){console.info("stopping SplashApp")}}),o.module("Routers.SplashApp",function(o,p,n,s,t,e){o.Router=s.AppRouter.extend({appRoutes:{splash:"showSplash"}});var a={showSplash:function(){require(["apps/splash/show/controller"],function(o){p.executeAction("SplashApp",o.showSplash),p.execute("sidebar:deactivate:all")})}};p.on("splash:show",function(){p.navigate("splash"),a.showSplash()}),new o.Router({controller:a})}),o.Routers.SplashApp});