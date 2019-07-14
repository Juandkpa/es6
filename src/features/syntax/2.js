import { print } from "../../util/logger";


/**
 * REST PARAMETERS
 * - Allow us to represent an indefinite number of arguments as an array
 */

 function sum(...theArgs) {
     return theArgs.reduce((previous, current) => {
         return previous + current
     })
 }

 print(sum(1,2,3));
 print(sum(1,2,3,4));

 /**
  * - A function's las parameter can be prefixed with ... which will cause all 
  *     remaining arguments to be placed within a "standar" javascript array.
  *     Only the las parameter can be "rest parameter"
  */

  function myFun(a, b, ...manyMoreArgs) {
      console.log("a", b);
      console.log("b", b);
      console.log("manyMoreArgs", manyMoreArgs);
  }

  myFun("one", "two", "three", "four", "five", "six");

  /**
   * - Rest parameters vs Arguments object
   *   * Rest parameters are only ones that haven't been given separate name 
   *     (i.e, formally defined in function expression) while the arguments 
   *     contains all arguments passed to the function
   *   * The arguments object is not a real array, while rest parameters are
   *     Array instances, meaning methods like sort, map, forEach or pop can be
   *     applied on it directly
   *   * The arguments object has additional functionality specific to itself
   *    (like the callee property)
   *   
   */

   function f(a, b) {
       //Before we have to convert arguments into a normal array
       var normalArray = Array.prototype.slice.call(arguments);
       var normalArray = [].slice.call(arguments);
       var normalArray = Array.from(arguments);

       var first = normalArray.shift(); //OK, gives the first argument
       var first = arguments.shift(); //ERROR, (arguments is not an array)
   }

   //ES6
   function f(...args) {
    var normalArray = args;
    var first = normalArray.shift(); //OK, gives the first argument
   }


   /**
    * - Destructuring rest parameters
    *   Rest parameters can be destructured (arrays only), then means their data
    *   can be unpacked into distict variables
    */

    function f(...[a,b,c]) {
        return a + b + c;
    }

    f(1)           // NaN (b and c are undefined)
    f(1, 2, 3)    // 6
    f(1, 2, 3, 4) // 6 (the fourth parameter is not destructured)