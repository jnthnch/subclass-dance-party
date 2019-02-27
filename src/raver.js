var Raver = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.attr("src", "https://media.giphy.com/media/rFFRITuKyV3uo/giphy.gif");

    
    this.$node.attr("class", "raver");
    this.$node.hover(function(event) {
        // event.currentTarget.style.transform = 'scale(1.5)'
        // console.log(event.currentTarget.style)

        // this.$node.css("transform", scale(1.5));
        // console.log("hello");
    });
    
}

Raver.prototype = Object.create(Dancer.prototype);
Raver.prototype.constructor = Raver;

Raver.prototype.step = function() {
    Dancer.prototype.step.call(this);
};

Raver.prototype.lineUp = function() {
    
};


