!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(){function e(e){if(!e)return r;try{var n=(0,o["default"])(e);if(n){var t=u["default"].highlight("ruby",n);return t.value}}catch(a){return console.log(a),'<span class="clr-red">'+a+"</span>"}}function n(){var n=document.getElementById("input").value,t=document.getElementById("output");t.innerHTML=e(n)}var t="Ruby code will appear here",r='<span style="color: #777;">'+t+"</span>";["focus","blur","keyup"].forEach(function(e){document.getElementById("input").addEventListener(e,n)}),n(),document.getElementById("output").addEventListener("click",function(){if(document.selection){var e=document.body.createTextRange();e.moveToElementText(this),e.select()}else if(window.getSelection){var n=document.createRange();n.selectNode(this),window.getSelection().addRange(n)}}),window.useExample=function(e){var t=document.getElementById(e).innerHTML.trim(),r=document.getElementById("input");r.value=t,n()}}var i=t(4),o=r(i),s=t(13),u=r(s);"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)},function(e,n){e.exports=function(e,n){if(e.filter)return e.filter(n);for(var r=[],a=0;a<e.length;a++)t.call(e,a)&&n(e[a],a,e)&&r.push(e[a]);return r};var t=Object.prototype.hasOwnProperty},function(e,n){e.exports=function(e,n){if(e.map)return e.map(n);for(var r=[],a=0;a<e.length;a++){var i=e[a];t.call(e,a)&&r.push(n(i,a,e))}return r};var t=Object.prototype.hasOwnProperty},function(e,n){var t=Object.prototype.hasOwnProperty;e.exports=function(e,n,r){var a=arguments.length>=3;if(a&&e.reduce)return e.reduce(n,r);if(e.reduce)return e.reduce(n);for(var i=0;i<e.length;i++)t.call(e,i)&&(a?r=n(r,e[i],i):(r=e[i],a=!0));return r}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){function n(e){var n="";return n+='uri = URI.parse("'+s(e.url)+'")\n',n+="response = Net::HTTP.get_response(uri)\n",c+"\n"+n+f}function t(e){function n(e){try{return JSON.parse(e),!0}catch(n){return!1}}for(var t={},r=0;r<e.headers.length;r++){var a=e.headers[r].indexOf(":");if(-1!=a){var l=e.headers[r].substr(0,a).trim(),d=e.headers[r].substr(a+1).trim();t[i(l)]=d}}delete t["Accept-Encoding"];var h="";h+='uri = URI.parse("'+s(e.url)+'")\n',h+=g[e.method]?"request = Net::HTTP::"+g[e.method]+".new(uri)\n":'request = Net::HTTPGenericRequest.new("'+s(e.method)+'", false, false, uri)\n',e.basicauth&&(h+='request.basic_auth("'+s(e.basicauth.user)+'", "'+s(e.basicauth.pass)+'")\n'),t["Content-Type"]&&(h+='request.content_type = "'+s(t["Content-Type"])+'"\n',delete t["Content-Type"]);for(var l in t)h+='request["'+s(l)+'"] = "'+s(t[l])+'"\n';if(e.data.ascii)if(n(e.data.ascii)){var b=JSON.parse(e.data.ascii);c+="require 'json'\n",h+="request.body = JSON.dump("+(0,u["default"])(b)+")\n"}else if(p.test(e.data.ascii)){var v=o["default"].parse(e.data.ascii);h+="request.set_form_data(\n";for(var l in v){var m=v[l];h+='  "'+s(l)+'" => "'+s(m)+'",\n'}h+=")\n"}else h+='request.body = "'+s(e.data.ascii)+'"\n';if(e.data.files&&e.data.files.length>0){e.data.ascii||(h+='request.body = ""\n');for(var r=0;r<e.data.files.length;r++)h+='request.body << File.read("'+s(e.data.files[r])+'").delete("\\r\\n")\n'}return h+="\n",h+='response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == "https") do |http|\n',h+="  http.request(request)\n",h+="end\n",c+"\n"+h+f}function r(e){var n={url:"",method:"",headers:[],data:{}};e.url&&e.url.length>0?n.url=e.url[0]:e._.length>1&&(n.url=e._[1]),n.url=a(n.url),e.H&&(n.headers=n.headers.concat(e.H)),e.header&&(n.headers=n.headers.concat(e.header)),(e.I||e.head)&&(n.method="HEAD"),e.request&&e.request.length>0?n.method=e.request[e.request.length-1].toUpperCase():e.X&&e.X.length>0&&(n.method=e.X[e.X.length-1].toUpperCase());var t=[],r=[],i=function(e){n.method||(n.method="POST");for(var a=0;a<e.length;a++)e[a].length>0&&"@"==e[a][0]?r.push(e[a].substr(1)):t.push(e[a])};e.d&&i(e.d),e.data&&i(e.data),e["data-binary"]&&i(e["data-binary"]),t.length>0&&(n.data.ascii=t.join("&")),r.length>0&&(n.data.files=r);var o="";e.user&&e.user.length>0?o=e.user[e.user.length-1]:e.u&&e.u.length>0&&(o=e.u[e.u.length-1]);var s=o.indexOf(":");return s>-1?n.basicauth={user:o.substr(0,s),pass:o.substr(s+1)}:n.basicAuth={user:o,pass:"<PASSWORD>"},n.method||(n.method="GET"),n}function a(e){return e&&!new RegExp("^https?://","i").test(e)?"http://"+e:e}function i(e){return e.replace(/\w*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function s(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}var c="require 'net/http'\nrequire 'uri'\n",f="\n# response.code\n# response.body\n",d=["#","progress-bar","-","next","0","http1.0","http1.1","http2","no-npn","no-alpn","1","tlsv1","2","sslv2","3","sslv3","4","ipv4","6","ipv6","a","append","anyauth","B","use-ascii","basic","compressed","create-dirs","crlf","digest","disable-eprt","disable-epsv","environment","cert-status","false-start","f","fail","ftp-create-dirs","ftp-pasv","ftp-skip-pasv-ip","ftp-pret","ftp-ssl-ccc","ftp-ssl-control","g","globoff","G","get","ignore-content-length","i","include","I","head","j","junk-session-cookies","J","remote-header-name","k","insecure","l","list-only","L","location","location-trusted","metalink","n","netrc","N","no-buffer","netrc-file","netrc-optional","negotiate","no-keepalive","no-sessionid","ntlm","O","remote-name","oauth2-bearer","p","proxy-tunnel","path-as-is","post301","post302","post303","proxy-anyauth","proxy-basic","proxy-digest","proxy-negotiate","proxy-ntlm","q","raw","remote-name-all","s","silent","sasl-ir","S","show-error","ssl","ssl-reqd","ssl-allow-beast","ssl-no-revoke","socks5-gssapi-nec","tcp-nodelay","tlsv1.0","tlsv1.1","tlsv1.2","tr-encoding","trace-time","v","verbose","xattr","h","help","M","manual","V","version"],g={COPY:"Copy",DELETE:"Delete",GET:"Get",HEAD:"Head",LOCK:"Lock",MKCOL:"Mkcol",MoVE:"Move",OPTIONS:"Options",PATCH:"Patch",POST:"Post",PROPFIND:"Propfind",PROPPATCH:"Proppatch",PUT:"Put",TRACE:"Trace",UNLOCK:"Unlock"},p=/^([^\s]+=[^\s]+)(&[^\s]+=[^\s]+)*$/;if(e.trim()){var h=(0,l["default"])(e,{boolFlags:d});if("curl"!=h._[0])throw"Not a curl command";var b=r(h);return 0!=b.headers.length||"GET"!=b.method||b.data.ascii||b.data.files||b.basicauth?t(b):n(b)}}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=a;var i=t(10),o=r(i),s=t(5),u=r(s),c=t(6),l=r(c)},function(e,n){"use strict";function t(e){var n=arguments.length<=1||void 0===arguments[1]?"":arguments[1],a="undefined"==typeof e?"undefined":r(e);if(null==e)return"nil";if("boolean"==a)return e.toString();if("number"==a)return e.toString();if("string"==a)return'"'+e.toString()+'"';if(Array.isArray(e)){var i="[\n";return e.forEach(function(e){i+=n+"  ",i+=t(e,n+"  "),i+=",\n"}),i=i.slice(0,-2),i+="\n"+n+"]"}if("object"==a){var o="{\n";for(var s in e)o+=n+"  ",o+=t(s),o+=" => ",o+=t(e[s],n+"  "),o+=",\n";return o=o.slice(0,-2),o+="\n"+n+"}"}throw"Invalid JSON object"}Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};n["default"]=t},function(e,n,t){"use strict";function r(e,n){function t(e,n){o[e]||(o[e]=[]),o[e].push(n)}function r(e){if(Array.isArray(n.boolFlags))for(var t=0;t<n.boolFlags.length;t++)if(n.boolFlags[t]==e)return!0;return!1}"undefined"==typeof n&&(n={}),e=e.replace(/\\\n/g,""),e=e.trim();for(var i=(0,a.parse)(e),o={_:[]};i.length;){var s=i.shift();if("-"==s[0]){if(s=s.substring(1,s.length),"-"==s[0])if(s=s.substring(1,s.length),r(s))o[s]=!0;else if(s.indexOf("=")>0){var u=s.substring(0,s.indexOf("="));t(u,s.substring(s.indexOf("=")+1,s.length))}else t(s,i.shift());else r(s)?o[s]=!0:s.length>1?t(s[0],s.substring(1,s.length)):t(s[0],i.shift());r(s)&&(o[s]=!0)}else t("_",s)}return o}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r;var a=t(11)},function(e,n,t){n.parse=t(8),n.stringify=t(9)},function(e,n){var t,r,a,i,o={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"},s=function(e){throw{name:"SyntaxError",message:e,at:t,text:a}},u=function(e){return e&&e!==r&&s("Expected '"+e+"' instead of '"+r+"'"),r=a.charAt(t),t+=1,r},c=function(){var e,n="";for("-"===r&&(n="-",u("-"));r>="0"&&"9">=r;)n+=r,u();if("."===r)for(n+=".";u()&&r>="0"&&"9">=r;)n+=r;if("e"===r||"E"===r)for(n+=r,u(),"-"!==r&&"+"!==r||(n+=r,u());r>="0"&&"9">=r;)n+=r,u();return e=+n,isFinite(e)?e:void s("Bad number")},l=function(){var e,n,t,a="";if('"'===r)for(;u();){if('"'===r)return u(),a;if("\\"===r)if(u(),"u"===r){for(t=0,n=0;4>n&&(e=parseInt(u(),16),isFinite(e));n+=1)t=16*t+e;a+=String.fromCharCode(t)}else{if("string"!=typeof o[r])break;a+=o[r]}else a+=r}s("Bad string")},f=function(){for(;r&&" ">=r;)u()},d=function(){switch(r){case"t":return u("t"),u("r"),u("u"),u("e"),!0;case"f":return u("f"),u("a"),u("l"),u("s"),u("e"),!1;case"n":return u("n"),u("u"),u("l"),u("l"),null}s("Unexpected '"+r+"'")},g=function(){var e=[];if("["===r){if(u("["),f(),"]"===r)return u("]"),e;for(;r;){if(e.push(i()),f(),"]"===r)return u("]"),e;u(","),f()}}s("Bad array")},p=function(){var e,n={};if("{"===r){if(u("{"),f(),"}"===r)return u("}"),n;for(;r;){if(e=l(),f(),u(":"),Object.hasOwnProperty.call(n,e)&&s('Duplicate key "'+e+'"'),n[e]=i(),f(),"}"===r)return u("}"),n;u(","),f()}}s("Bad object")};i=function(){switch(f(),r){case"{":return p();case"[":return g();case'"':return l();case"-":return c();default:return r>="0"&&"9">=r?c():d()}},e.exports=function(e,n){var o;return a=e,t=0,r=" ",o=i(),f(),r&&s("Syntax error"),"function"==typeof n?function u(e,t){var r,a,i=e[t];if(i&&"object"==typeof i)for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(a=u(i,r),void 0!==a?i[r]=a:delete i[r]);return n.call(e,t,i)}({"":o},""):o}},function(e,n){function t(e){return s.lastIndex=0,s.test(e)?'"'+e.replace(s,function(e){var n=u[e];return"string"==typeof n?n:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function r(e,n){var s,u,c,l,f,d=a,g=n[e];switch(g&&"object"==typeof g&&"function"==typeof g.toJSON&&(g=g.toJSON(e)),"function"==typeof o&&(g=o.call(n,e,g)),typeof g){case"string":return t(g);case"number":return isFinite(g)?String(g):"null";case"boolean":case"null":return String(g);case"object":if(!g)return"null";if(a+=i,f=[],"[object Array]"===Object.prototype.toString.apply(g)){for(l=g.length,s=0;l>s;s+=1)f[s]=r(s,g)||"null";return c=0===f.length?"[]":a?"[\n"+a+f.join(",\n"+a)+"\n"+d+"]":"["+f.join(",")+"]",a=d,c}if(o&&"object"==typeof o)for(l=o.length,s=0;l>s;s+=1)u=o[s],"string"==typeof u&&(c=r(u,g),c&&f.push(t(u)+(a?": ":":")+c));else for(u in g)Object.prototype.hasOwnProperty.call(g,u)&&(c=r(u,g),c&&f.push(t(u)+(a?": ":":")+c));return c=0===f.length?"{}":a?"{\n"+a+f.join(",\n"+a)+"\n"+d+"}":"{"+f.join(",")+"}",a=d,c}}var a,i,o,s=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,u={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};e.exports=function(e,n,t){var s;if(a="",i="","number"==typeof t)for(s=0;t>s;s+=1)i+=" ";else"string"==typeof t&&(i=t);if(o=n,n&&"function"!=typeof n&&("object"!=typeof n||"number"!=typeof n.length))throw new Error("JSON.stringify");return r("",{"":e})}},function(e,n,t){"use strict";function r(e,n){return n?a(e):encodeURIComponent(e)}var a=t(12);n.extract=function(e){return e.split("?")[1]||""},n.parse=function(e){var n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),a=t.length>0?t.join("="):void 0;r=decodeURIComponent(r),a=void 0===a?null:decodeURIComponent(a),void 0===n[r]?n[r]=a:Array.isArray(n[r])?n[r].push(a):n[r]=[n[r],a]}),n):n},n.stringify=function(e,n){n=n||{};var t=n.strict!==!1;return e?Object.keys(e).sort().map(function(n){var a=e[n];if(void 0===a)return"";if(null===a)return n;if(Array.isArray(a)){var i=[];return a.slice().sort().forEach(function(e){void 0!==e&&(null===e?i.push(r(n,t)):i.push(r(n,t)+"="+r(e,t)))}),i.join("&")}return r(n,t)+"="+r(a,t)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,n,t){function r(e,n,t){function r(e,t,r){var i="function"==typeof n?n(r):n[r];return void 0===i&&(i=""),"object"==typeof i?t+g+a.stringify(i)+g:t+i}var s=new RegExp(["("+u+")","("+l+"|"+f+"|"+d+")*"].join("|"),"g"),c=o(e.match(s),Boolean),p=!1;return c?(n||(n={}),t||(t={}),i(c,function(e,n){function a(){b+=1;var n,t;if("{"===e.charAt(b)){if(b+=1,"}"===e.charAt(b))throw new Error("Bad substitution: "+e.substr(b-2,3));if(n=e.indexOf("}",b),0>n)throw new Error("Bad substitution: "+e.substr(b));t=e.substr(b,n-b),b=n}else/[*@#?$!_\-]/.test(e.charAt(b))?(t=e.charAt(b),b+=1):(n=e.substr(b).match(/[^\w\d_]/),n?(t=e.substr(b,n.index),b+=n.index-1):(t=e.substr(b),b=e.length));return r(null,"",t)}if(!p){if(RegExp("^"+u+"$").test(e))return{op:e};for(var i="'",o='"',s="$",l=t.escape||"\\",f=!1,d=!1,g="",h=!1,b=0,v=e.length;v>b;b++){var m=e.charAt(b);if(h=h||!f&&("*"===m||"?"===m),d)g+=m,d=!1;else if(f)m===f?f=!1:f==i?g+=m:m===l?(b+=1,m=e.charAt(b),g+=m===o||m===l||m===s?m:l+m):g+=m===s?a():m;else if(m===o||m===i)f=m;else{if(RegExp("^"+u+"$").test(m))return{op:e};if(RegExp("^#$").test(m))return p=!0,g.length?[g,{comment:e.slice(b+1)+c.slice(n+1).join(" ")}]:[{comment:e.slice(b+1)+c.slice(n+1).join(" ")}];m===l?d=!0:g+=m===s?a():m}}return h?{op:"glob",pattern:g}:g}}).reduce(function(e,n){return void 0===n?e:e.concat(n)},[])):[]}var a=void 0!==typeof JSON?JSON:t(7),i=t(2),o=t(1),s=t(3);n.quote=function(e){return i(e,function(e){return e&&"object"==typeof e?e.op.replace(/(.)/g,"\\$1"):/["\s]/.test(e)&&!/'/.test(e)?"'"+e.replace(/(['\\])/g,"\\$1")+"'":/["'\s]/.test(e)?'"'+e.replace(/(["\\$`!])/g,"\\$1")+'"':String(e).replace(/([\\$`()!#&*|])/g,"\\$1")}).join(" ")};for(var u="(?:"+["\\|\\|","\\&\\&",";;","\\|\\&","[&;()|<>]"].join("|")+")",c="|&;()<> \\t",l="(\\\\['\""+c+"]|[^\\s'\""+c+"])+",f='"((\\\\"|[^"])*?)"',d="'((\\\\'|[^'])*?)'",g="",p=0;4>p;p++)g+=(Math.pow(16,8)*Math.random()).toString(16);n.parse=function(e,n,t){var u=r(e,n,t);return"function"!=typeof n?u:s(u,function(e,n){if("object"==typeof n)return e.concat(n);var t=n.split(RegExp("("+g+".*?"+g+")","g"));return 1===t.length?e.concat(t[0]):e.concat(i(o(t,Boolean),function(e){return RegExp("^"+g).test(e)?a.parse(e.split(g)[1]):e}))},[])}},function(e,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t(15),i=r(a),o=t(16),s=r(o);i["default"].registerLanguage("ruby",s["default"]),n["default"]=i["default"]},,function(e,n,t){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(n)}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var n,t,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return y(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;r>n;n++)if(y(i[n])||a(i[n]))return i[n]}function o(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function s(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function u(e,r,a){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function s(e){l+="</"+t(e)+">"}function u(e){("start"==e.event?o:s)(e.node)}for(var c=0,l="",f=[];e.length||r.length;){var d=i();if(l+=n(a.substr(c,d[0].offset-c)),c=d[0].offset,d==e){f.reverse().forEach(s);do u(d.splice(0,1)[0]),d=i();while(d==e&&d.length&&d[0].offset==c);f.reverse().forEach(o)}else"start"==d[0].event?f.push(d[0].node):f.pop(),u(d.splice(0,1)[0])}return l+n(a.substr(c))}function c(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords){var s={},u=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");s[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.keywords?u("keyword",a.keywords):Object.keys(a.keywords).forEach(function(e){u(e,a.keywords[e])}),a.keywords=s}a.lexemesRe=t(a.lexemes||/\w+/,!0),i&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=t(a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=t(a.end)),a.terminator_end=n(a.end)||"",a.endsWithParent&&i.terminator_end&&(a.terminator_end+=(a.end?"|":"")+i.terminator_end)),a.illegal&&(a.illegalRe=t(a.illegal)),void 0===a.relevance&&(a.relevance=1),a.contains||(a.contains=[]);var c=[];a.contains.forEach(function(e){e.variants?e.variants.forEach(function(n){c.push(o(e,n))}):c.push("self"==e?a:e)}),a.contains=c,a.contains.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(n).filter(Boolean);a.terminators=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,t,a,i){function o(e,n){for(var t=0;t<n.contains.length;t++)if(r(n.contains[t].beginRe,e))return n.contains[t]}function s(e,n){if(r(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.endsWithParent?s(e.parent,n):void 0}function u(e,n){return!a&&r(n.illegalRe,e)}function d(e,n){var t=E.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function g(e,n,t,r){var a=r?"":_.classPrefix,i='<span class="'+a,o=t?"":"</span>";return i+=e+'">',i+n+o}function p(){if(!x.keywords)return n(S);var e="",t=0;x.lexemesRe.lastIndex=0;for(var r=x.lexemesRe.exec(S);r;){e+=n(S.substr(t,r.index-t));var a=d(x,r);a?(A+=a[1],e+=g(a[0],n(r[0]))):e+=n(r[0]),t=x.lexemesRe.lastIndex,r=x.lexemesRe.exec(S)}return e+n(S.substr(t))}function h(){var e="string"==typeof x.subLanguage;if(e&&!w[x.subLanguage])return n(S);var t=e?l(x.subLanguage,S,!0,O[x.subLanguage]):f(S,x.subLanguage.length?x.subLanguage:void 0);return x.relevance>0&&(A+=t.relevance),e&&(O[x.subLanguage]=t.top),g(t.language,t.value,!1,!0)}function b(){R+=void 0!==x.subLanguage?h():p(),S=""}function v(e,n){R+=e.className?g(e.className,"",!0):"",x=Object.create(e,{parent:{value:x}})}function m(e,n){if(S+=e,void 0===n)return b(),0;var t=o(n,x);if(t)return t.skip?S+=n:(t.excludeBegin&&(S+=n),b(),t.returnBegin||t.excludeBegin||(S=n)),v(t,n),t.returnBegin?0:n.length;var r=s(x,n);if(r){var a=x;a.skip?S+=n:(a.returnEnd||a.excludeEnd||(S+=n),b(),a.excludeEnd&&(S=n));do x.className&&(R+="</span>"),x.skip||(A+=x.relevance),x=x.parent;while(x!=r.parent);return r.starts&&v(r.starts,""),a.returnEnd?0:n.length}if(u(n,x))throw new Error('Illegal lexeme "'+n+'" for mode "'+(x.className||"<unnamed>")+'"');return S+=n,n.length||1}var E=y(e);if(!E)throw new Error('Unknown language: "'+e+'"');c(E);var N,x=i||E,O={},R="";for(N=x;N!=E;N=N.parent)N.className&&(R=g(N.className,"",!0)+R);var S="",A=0;try{for(var M,T,C=0;;){if(x.terminators.lastIndex=C,M=x.terminators.exec(t),!M)break;T=m(t.substr(C,M.index-C),M[0]),C=M.index+T}for(m(t.substr(C)),N=x;N.parent;N=N.parent)N.className&&(R+="</span>");return{relevance:A,value:R,language:e,top:x}}catch(j){if(-1!=j.message.indexOf("Illegal"))return{relevance:0,value:n(t)};throw j}}function f(e,t){t=t||_.languages||Object.keys(w);var r={relevance:0,value:n(e)},a=r;return t.filter(y).forEach(function(n){var t=l(n,e,!1);t.language=n,t.relevance>a.relevance&&(a=t),t.relevance>r.relevance&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function d(e){return _.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,_.tabReplace)})),_.useBR&&(e=e.replace(/\n/g,"<br>")),e}function g(e,n,t){var r=n?N[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function p(e){var n=i(e);if(!a(n)){var t;_.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?l(n,r,!0):f(r),c=s(t);if(c.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=u(c,s(p),r)}o.value=d(o.value),e.innerHTML=o.value,e.className=g(e.className,n,o.language),e.result={language:o.language,re:o.relevance},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.relevance})}}function h(e){_=o(_,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function m(n,t){var r=w[n]=t(e);r.aliases&&r.aliases.forEach(function(e){N[e]=n})}function E(){return Object.keys(w)}function y(e){return e=(e||"").toLowerCase(),w[e]||w[N[e]]}var _={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},w={},N={};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=d,e.highlightBlock=p,e.configure=h,e.initHighlighting=b,e.initHighlightingOnLoad=v,e.registerLanguage=m,e.listLanguages=E,e.getLanguage=y,e.inherit=o,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},function(e,n){e.exports=function(e){var n="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",t={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},r={className:"doctag",begin:"@[A-Za-z]+"},a={begin:"#<",end:">"},i=[e.COMMENT("#","$",{contains:[r]}),e.COMMENT("^\\=begin","^\\=end",{contains:[r],relevance:10}),e.COMMENT("^__END__","\\n$")],o={className:"subst",begin:"#\\{",end:"}",keywords:t},s={className:"string",contains:[e.BACKSLASH_ESCAPE,o],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:"%[qQwWx]?\\(",end:"\\)"},{begin:"%[qQwWx]?\\[",end:"\\]"},{begin:"%[qQwWx]?{",end:"}"},{begin:"%[qQwWx]?<",end:">"},{begin:"%[qQwWx]?/",end:"/"},{begin:"%[qQwWx]?%",end:"%"},{begin:"%[qQwWx]?-",end:"-"},{begin:"%[qQwWx]?\\|",end:"\\|"},{begin:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},u={className:"params",begin:"\\(",end:"\\)",endsParent:!0,keywords:t},c=[s,a,{className:"class",beginKeywords:"class module",end:"$|;",illegal:/=/,contains:[e.inherit(e.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{begin:"<\\s*",contains:[{begin:"("+e.IDENT_RE+"::)?"+e.IDENT_RE}]}].concat(i)},{className:"function",beginKeywords:"def",end:"$|;",contains:[e.inherit(e.TITLE_MODE,{begin:n}),u].concat(i)},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(\\!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[s,{begin:n}],relevance:0},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{className:"params",begin:/\|/,end:/\|/,keywords:t},{begin:"("+e.RE_STARTERS_RE+")\\s*",contains:[a,{className:"regexp",contains:[e.BACKSLASH_ESCAPE,o],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r{",end:"}[a-z]*"},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(i),relevance:0}].concat(i);o.contains=c,u.contains=c;var l="[>?]>",f="[\\w#]+\\(\\w+\\):\\d+:\\d+>",d="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",g=[{begin:/^\s*=>/,starts:{end:"$",contains:c}},{className:"meta",begin:"^("+l+"|"+f+"|"+d+")",starts:{end:"$",contains:c}}];return{aliases:["rb","gemspec","podspec","thor","irb"],keywords:t,illegal:/\/\*/,contains:i.concat(g).concat(c)}}}]);