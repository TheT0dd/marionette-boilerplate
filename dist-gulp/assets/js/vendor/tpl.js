define(["text","underscore"],function(e,n){"use strict";var t={},r="define('{pluginName}!{moduleName}', function () { return {source}; });\n";return{version:"0.0.2",load:function(r,l,u,o){if(t[r])u(t[r]);else{var a=o.tpl&&o.tpl.extension||".html",i=o.tpl&&o.tpl.path||"";e.load(i+r+a,l,function(e){t[r]=n.template(e),u(t[r])},o)}},write:function(e,n,l){var u=t[n],o=u&&u.source;o&&l.asModule(e+"!"+n,r.replace("{pluginName}",e).replace("{moduleName}",n).replace("{source}",o))}}});