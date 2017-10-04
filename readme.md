# keyestudio RPI 4-channel Relay Shield
### Controller for node.js
![keyestudio RPI 4-channel Relay Shield](http://www.keyestudio.com/media/catalog/product/cache/1/image/500x404/9df78eab33525d08d6e5fb8d27136e95/k/s/ks0212_2_.jpg)
Product Page:
- http://www.keyestudio.com/keyestudio-rpi-4-channel-relay-shield.html

This node module allows you to easily operate the keyestudio RPI 4-channel Relay Shield for the reaspberry PI.
It provides a clean programming interface to interact with each switch 
##### Getting Started
- First do an `npm install` to install the async and gpio libraries
- Then, use `sm.events.on('ready', () => {})` to wait unti the library is ready
- You can use `sm.set(1, true)` to turn on switch 1
- You can use `sm.set(1, false)` to turn off switch 1 for example
- You can use `sm.get(1)` to get the status of switch 1

##### Events:
- `ready` - Fires when the switch module is ready
- `change` - Fires when a switch is changed, and state information is passed

you can access the switch event emitter with `sm.events`

##### Example Code:

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

If you find any issues with this module, feel free to open an issue.

#### Software Licence
Copyright (c) 2017 Adam Fowler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.