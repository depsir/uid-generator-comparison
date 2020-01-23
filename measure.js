const { performance, PerformanceObserver } = require('perf_hooks');

const util = require('util');
const debug = util.debuglog('performance');

const obs = new PerformanceObserver((items) => {
    items.getEntries().forEach((item) => {
        console.log(item.name, + ' ' + item.duration)
    })
})
obs.observe({entryTypes: ['measure']})

function test(f, times=100000){
    performance.mark('Beginning sanity check');

    for(var i=times; i>0; i--) f()

    performance.mark('Ending sanity check');
    performance.measure(`${f.name} for ${times} iterations takes `, 'Beginning sanity check', 'Ending sanity check');

}

module.exports = test
