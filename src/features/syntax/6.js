 //DESCTRUCTURING

 const obj = {first: 'Kenny', last: 'Foo', age: 26};

 const {first: f, last: l} = obj;

 print(f);
 print(l);

 // short curt  for destructuring in variables of the same name of the keys
const {first, last} = obj;

print(first);
print(last);

// With arrays
const arr = ['a', 'b'];
const [x, y] = arr;
print(x);
print(y);

// With Functions

function f({x=0}) {
    print(x);
}

f({x:1, y:2, z:3});