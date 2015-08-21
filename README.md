# koa-addpushheader
This middleware (generator function) will parse a response body for any local linked assets (CSS, images, etc) and add them to the response headers. Modern HTTP/2 reverse proxies like [nghttpx](https://nghttp2.org/) parse this header and send out the required push promises to the client.

## Usage
Use the library like this:
```bash
npm install --save koa-addpushheader
```

```javascript
app.use(require('koa-addpushheader'));
```

## License
This project is licensed as [LGPLv3](http://www.gnu.org/licenses/lgpl-3.0.html), the license file is included in the project directory.

Copyright 2015 [Stefan Hamminga](stefan@prjct.net) - [prjct.net](https://prjct.net)
