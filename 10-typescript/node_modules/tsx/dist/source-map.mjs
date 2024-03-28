const t=`
//# sourceMappingURL=data:application/json;base64,`,a=()=>"setSourceMapsEnabled"in process&&typeof Error.prepareStackTrace!="function"?(process.setSourceMapsEnabled(!0),({code:r,map:e})=>r+t+Buffer.from(JSON.stringify(e),"utf8").toString("base64")):({code:r})=>r;export{a as installSourceMapSupport};
