# koa-addpushheader
This middleware (generator function) will parse a response body for any local linked assets (CSS, images, etc) and add them to the response headers. Modern HTTP/2 reverse proxies like [nghttpx](https://nghttp2.org/) parse this header and send out the required push promises to the client.

## Usage
Use the library like this:
```bash
npm install --save koa-addpushheader
```

```javascript
app.use(require('koa-addpushheader'));
// view handling code
```

## Notes

The header added to the response looks like this:

```html
link: </apple-icon-57x57.png>; rel=preload, ...
```

Currently the following file types are added:
`bmp`, `css`, `eot`, `gif`, `ico`, `jpg`, `jpeg`, `js`, `otf`, `png`, `svg`, `ttf`, `webm`, `webp`, `woff`, `woff2`

For the complete spec on `rel=preload` see:
http://w3c.github.io/preload/

## License
This project is licensed as [LGPLv3](http://www.gnu.org/licenses/lgpl-3.0.html), the license file is included in the project directory.

Copyright 2015 [Stefan Hamminga](stefan@prjct.net) - [prjct.net](https://prjct.net)
