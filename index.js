/*//===
	Switch Controller Library
*///===

var async = require('async'),
	gpio = require('gpio'),
	events = require('events'),
	translation = {
		1 : 26,
		2 : 6,
		3 : 22,
		4 : 4
	}

class switchModule{
	constructor(){
		this.switches = {}
		this.events = new events();
		this.settings = {}
		var switchArray = []
		for(var x in translation)
			switchArray.push({
				number : x,
				pin : translation[x]
			})
		async.eachSeries(switchArray, (switchObj, nextSwitch) => {
			this.settings[switchObj.number] = false;
			this.switches[switchObj.number] = gpio.export(switchObj.pin, {
				direction: 'out',
				interval: 200,
				ready: function() {
					this.set();
					nextSwitch();
				}
			});
		}, () => {
			this.events.emit('ready', {});
		})
	}

	set(sw, setting){
		if(!(sw in this.switches))
			throw new Error(`Invalid Switch ${sw}`);

		if(!setting)
			this.switches[sw].set()
		else 
			this.switches[sw].set(0)

		this.settings[sw] = !!setting;

		this.events.emit('change', {
			switch : sw,
			setting : !setting,
			state : this.settings
		})
	}

	get(sw){
		return sw in this.settings ? this.settings[sw] : false;
	}
}

module.exports = switchModule;