import { print } from "../../util/logger";

/**
 * OBJECT LITERAL EXPRESSIONS
 */

 // Shortland property names
 var a  = 'foo', b = 42, c = {};
 var o = {a, b, c};
 print('shortland', o);

 // Shortland method names
 var o = {
     property(parameters) { }
 }

 // Compute property names
 var prop = 'foo';

 var o2 = {
     [prop] : 'hey',
     ['b' + 'ar']: 'there'
 }

 print('wow!!', o2);

 // When using the same name for your properties, the second property will 
 // overwrite the first

 var a = {x: 1, x: 2};
 print(a);

 // More of property computed names

 var i = 0;
 var a = {
     ['foo' + ++i]: i,
     ['foo' + ++i]: i,
     ['foo' + ++i]: i
 };

 print("jaja A: ", a);



