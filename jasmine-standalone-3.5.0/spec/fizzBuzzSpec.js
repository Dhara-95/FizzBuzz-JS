describe('FizzBuzz', function() {
  
  var fizzbuzz;
  
  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });
  
  describe('is divisible by three', function() {
    it('returns Fizz', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it('returns Fizz', function () {
      expect(fizzbuzz.play(9)).toEqual('Fizz');
    });
  });

  describe('is divisible by five', function() {
    it('returns Buzz', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });

    it('returns Buzz', function() {
      expect(fizzbuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('is divisible by three and five', function() {
    it('returns FizzBuzz', function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });

    it('returns FizzBuzz', function() {
      expect(fizzbuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('any other number', function() {
    it('returns the number', function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });
    
    it('returns the number', function () {
      expect(fizzbuzz.play(11)).toEqual(11);
    });
  });
});
