var Twerker = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
}

Twerker.prototype = Object.create(Dancer.prototype);
Twerker.prototype.constructor = Twerker;

Twerker.prototype.step = function() {
  
  Dancer.prototype.step.call(this)
  //$node = jump up and down
}

