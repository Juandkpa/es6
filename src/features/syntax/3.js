import { print } from "../../util/logger";

/**
 * SPREAD SINTAX
 *  Allows an iterable such as an array expression or string to be expanded in
 *  places where zero or more arguments (for functions calls) or elements(for 
 *  array literals) are expected, or an object expression to be expanded in 
 *  places where zero or more key-value pairs (for object literals) are expected.
 */

 function sum(x, y, z) {
     
     return (x + y + z);
 };

 const numbers = [1, 2, 3];

 print( new sum(...numbers) ); 
 print( sum.apply(numbers) );
 
 /**
  * Remplace Apply()
  * - It is common to use Funciton.prototype.apply() in cases where yo want to 
  *   use the elements of an array as arguments to a function
  */

  function myFunctionA(x, y, z) { }
  var args = [0, 1, 2];
  myFunctionA.apply(null, args);

  //With spread syntax the above can be written as:

  function myFunctionB(x, y, z) { }
  var args = [0, 1, 2];
  myFunctionB(...args);

  //Any argument in the argument list can use spread sintax and it can be used
  //multyple times

  function myFunctionC(v, w, x, y, z) { }
  var args = [0, 1];
  myFunctionC(-1, ...args, 2, ...[3]);

  /**
   * Apply for new
   *   - When calling a constructor with new it's not possible directy use an 
   *    array and apply (apply does a [[Call]] y not a [[Construct]]).
   *    However, an array can be easily used with new thanks to spread syntax: 
   */

   var dateFields = [1970, 0, 1]; //1 Jan 1970
   var d = new Date(...dateFields);


   /**
    * SPREAD IN ARRAY LITERALS
    * A more powerfull array literal
    *   - Without spread sintax, to create a new array using an existing array 
    *   as part of it, the array literal is no longer sufficient and imperative
    *   code must be used instead using a combination of push(), splice(), 
    *   concat(), etc. With spread sintax this becomes much more succinct    
    */

    var parts = ['shoulders', 'knees'];
    var lyrics = ['head', ...parts, 'and', 'toes'];
    
    print(parts);
    print(lyrics);

    var countries = ['peru', 'argentina', 'mexico'];
    var copy = countries.slice();
    print(copy, "copy");

    /**
     * A better way of concatenate arrays
     *  - Array.prototype.concat() is often used to concatenate an array to the 
     *  end of an existing array. 
     */

     //Without spread sintax this is done as:     
     var arr1 = [0, 1, 2];
     var arr2 = [3, 4, 5];

     var arrR = arr1.concat(arr2);

     //With spread syntax this becomes
     var a1 = [0, 1, 2];
     var a2 = [3, 4, 5];

     arrR = [...a1, ...a2];

     //Array.prototype.unshift() is often used to insert an array of values at 
     //the start of an existing array. Without spread sintaxis this is done as:
     var ap1 = [0, 1, 2];
     var ap2 = [3, 4, 5];

     Array.prototype.unshift.apply(ap1, ap2);

     //With spread syntax, this becomes
     var ab1 = [0, 1, 2];
     var ab2 = [3, 4, 5];

     var abR = [...ab2, ...ab1];

    /**
     * Spread in object literals
     *  - It copies own enumerable properties from a provided object onto a new
     *     object
     */

    // Shallow-cloning (excluding protoype) or mergin of objects is now
    // possible using a shorter syntax than Object.assign()

    var obj1 = { foo: 'bar', x : 42 };
    var obj2 = { foo: 'baz', y : 13 };

    var cloneObj = { ...obj1 };
    print('cloned > ', cloneObj);

    var mergedObj = { ...obj1, ...obj2 };
    print('merged > ', mergedObj);
    //Note that object.assign() triggers setters whereas spread syntax doesn't.


    /**
     * Only for iterables
     *  - Spread sintax (other than in the case of spread properties) can be
     *  applied only to iterable objects
     */

     var objx = {key1: 'value1'};
     var array = [...objx]; //TypeError: objx is not iterable