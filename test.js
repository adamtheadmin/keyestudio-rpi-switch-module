/*//===
	Switch Controller
*///===

var async = require('async'),
	switchLibrary = require('./index'),
	sm = new switchLibrary();

sm.events.on('ready', () => {
	var run = () => {
		async.eachSeries([1,2,3,4], (pin, nextPin) => {
			sm.set(pin, !sm.get(pin));
			setTimeout(nextPin, 1000)
		}, run)
	}

	run();
})