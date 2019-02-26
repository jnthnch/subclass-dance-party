var Raver = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
}

Raver.prototype = Object.create(Dancer.prototype);
Raver.prototype.constructor = Raver;

Raver.prototype.step = function() {
    Dancer.prototype.step.call(this);
    //$node jump left/right

}