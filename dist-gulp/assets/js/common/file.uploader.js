define(["app"],function(e){var a={};return a.uploadURL=e.request("setting","RootURL")+"/upload",a.uploadFiles=function(e){for(var n,o=$.Deferred(),r=e.length,t=0,l=0,p=[],u=0;n=e[u];u++){var f=new FormData;f.append("file",n),f.append("folder","files");var i=$.ajax({url:a.uploadURL,type:"POST",data:f,cache:!1,contentType:!1,processData:!1});i.done(function(e){p.push(e.filename),t++}),i.fail(function(){l++}),i.always(function(){t+l===r&&o.resolve(p)})}return 0===r&&o.resolve([]),o.promise()},a});