
const { performance, PerformanceObserver } = require('perf_hooks');
function d(){
  return performance.now()
}

function generateId(){
  const reference = d();
  let uniqueId = d()
  while(uniqueId == reference){
      uniqueId = d();
  }
  return uniqueId;
}

module.exports = generateId;
