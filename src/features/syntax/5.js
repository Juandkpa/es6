import { print } from "../../util/logger";

/**
 * FOR ... OF statement
 *  - The for .. of statement creates a loop iterating over iterable objects,
 *  including built-in String, Array, Array-like objects( eg. arguments or 
 *  NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes
 *  a custom iteration hook with statements to be executed for the value of each
 *  distinct property of the object. 
 */

 function* foo() {
     yield 1;
     yield 2;
 }

 for( let o of foo())  {
    print(o);
    break;
 }


 // Iterating over string
 var iterable = 'Colombia';
 for( let value of iterable) {
     print(value);
 }

 /**
  * Differences between for ... of and for ... in
  *  - Both for ... in and for .. of statements iterate over something. The main
  *     difference between them is in what they iterate over.
  * 
  *  - The for ... in statement iterates over the enumerable properties of an
  *     object, in an arbitrary order
  *  
  *  - The for ... of statement iterates over values that the iterable object 
  *     defines to be iterated over.
  *  
  */
  
  //Example

  Object.prototype.objCustom = function() {};
  Array.prototype.arrCustom = function() {};

  var iterable = [3, 5, 7];
  iterable.foo = 'hello';
   
  print('-------');
  for (let i in iterable) {
      print(i);
  }

  print('-------');
  for (let i in iterable) {
      if (iterable.hasOwnProperty(i) ) {
        print(i);
      }
  }

  print('-------');
  for (let i of iterable) {
      print(i);
  }