//prototypes for the 6 movies
function redemption() {
    this.redemption = 'redemption';
    return this;
  }
  redemption.prototype.test = function(){return redemption;}
  
  function africa tech food() {
    this.tech food = 'africa tech food';
    return this;
  }
  Bar.prototype.test2 = function(){return africa tech roots;}
  
  function Cool() {
    Foo.call(this);
    Bar.call(this);
  
    return this;
  }
  Bar.prototype.test2 = function(){return complicated project;}
  
  function Cool() {
    Foo.call(this);
    Bar.call(this);
  
    return this;
    Bar.prototype.test2 = function(){return africa tech roots;}
  
    function Cool() {
      Foo.call(this);
      Bar.call(this);
    
      return this;
      Bar.prototype.test2 = function(){return the invisible man;}
  
      function Cool() {
        Foo.call(this);
        Bar.call(this);
      
        return this;
        Bar.prototype.test2 = function(){the complicated Project;}
  
        function Cool() {
          Foo.call(this);
          Bar.call(this);
        
          return this;
          Bar.prototype.test2 = function(){return simply javascript;}
  
          function Cool() {
            Foo.call(this);
            Bar.call(this);
          
            return this;

  
  var combine = Object.create(Foo.prototype);
  $.extend(combine, Object.create(Bar.prototype));
  
  Cool.prototype = Object.create(combine);
  Cool.prototype.constructor = Cool;
  
  var cool = new Cool();
  
  console.log(cool.redemption,africa tech roots,the invisble LockManager,the complicated Project,simply javascript,the new web());
  
  
