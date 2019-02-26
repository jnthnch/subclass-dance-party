describe('twerker', function() {

    var twerker, clock;
    var timeBetweenSteps = 2000;
  
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      twerker = new Twerker(10, 20, timeBetweenSteps);
    });
  
    it('should have a jQuery $node object', function() {
      expect(twerker.$node).to.be.an.instanceof(jQuery);
    });
  
    it('should have a step function that makes its node jump up/down', function() {
      sinon.spy(twerker.$node, 'jump');
      twerker.step();
      expect(twerker.$node.toggle.called).to.be.true;
    });
  
    describe('dance', function() {
      it('should call step at least once per second', function() {
        sinon.spy(twerker, 'step');
        expect(twerker.step.callCount).to.be.equal(0);
        clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
        clock.tick(timeBetweenSteps);
  
        expect(twerker.step.callCount).to.be.equal(1);
  
        clock.tick(timeBetweenSteps);
        
        expect(twerker.step.callCount).to.be.equal(2);
      });
    });
  });