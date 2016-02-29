var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome',
				chromeOptions: {
//						extensions: [crxContent.extension]
				}
    },
		host:'testim-ci-grid.cloudapp.net',
		port: 443,
		logLevel: 'verbose'
};

function exe() {
   return window.navigator.language;
}
 
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
		.execute(exe)
		.execute(exe)
		.execute(exe)
		.execute(exe)
		.execute(exe)
	.execute(exe)
		.execute(exe)
		.execute(exe)
   .title(function(err, res) {
       console.log('Title was: ' + res.value);
   })
   .end();
