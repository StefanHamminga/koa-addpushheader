var PUSHFILTER=/['\"][/]{1}[a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*\.(bmp|css|eot|gif|ico|jpe?g|js|otf|png|svg|ttf|webm|webp|woff|woff2)/gi;

module.exports = function* (next) {
  yield next;

  if ((this.type.indexOf("text/html") > -1) || (this.type.indexOf("text/css") > -1)) {
    if (typeof this.body === 'string') {
      var pushUrls = this.body.match(PUSHFILTER) || [];
      var pushList = "<" + pushUrls.join(">; rel=preload, <") + ">; rel=preload";
      this.set('link', pushList.replace(/['\"']/g, ""));
    }
  }
};
