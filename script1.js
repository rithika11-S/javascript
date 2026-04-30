const s="rithika";
console.log(s.at(1));
console.log(s.at(-1));
console.log(s.charAt(1));
console.log(s.charAt(-1));
console.log(s.charCodeAt(1));
console.log(s.codePointAt(1));
console.log(s.concat(" S"));

const b="Hello world"
console.log(b.endsWith("World"));
console.log(b.startsWith("Hello"));
console.log(b.includes("sr"));
console.log(b.indexOf("o"));
console.log(b.lastIndexOf("l"));

const a="istanbul";
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a.toLocaleLowerCase("tr"));
console.log(a.toLocaleUpperCase("tr"));

const str="Hello world"    
console.log(str.match(/o/g));//array else null
console.log([...str.matchAll(/o/g)]);//array
console.log(str.search("World"));//index of the first match else -1

const f="Hello World"
console.log(f.replace("World", "JS"));
console.log(f.replaceAll("o", "0"));

const t="helloworld join"
console.log(t.slice(0,5));//supports negative indexing 
console.log(t.slice(-2));
console.log(t.substring(0,7));//does not support negative index
console.log(t.substring(-2));

const r="Hello world"
console.log(r.split(" "));// string to array by white space

st="hello"
console.log(st.padStart(6,"*"));
console.log(st.padEnd(6,"*"));

console.log("Hi ".repeat(3));


let sp = "   Hello   ";
console.log(sp.trim()); // remove space in begining and end
console.log(sp.trimStart()); //remove space at start
console.log(sp.trimEnd());//remove spacce at end



console.log("apple".localeCompare("banana"));
console.log("banana".localeCompare("apple"));
console.log("apple".localeCompare("apple"));

const d=100;
console.log(d.toString());//cnvert to string
console.log(d.valueOf());//return the value of d 

const c="Hello world"
console.log(c.isWellFormed()); // checls the string is valid unicode
console.log(c.toWellFormed());  //fix invalid unicode and gives the correct string


const s="rithika";
const s1=" S"
console.log(s+s1);

const s2=`${s} ${s1}` // template literal
console.log(s2);


const user={
    name:"Rithika",
    age:20,
    dept:"CSE",
}
console.log(Object.entries(user));


objects

const user={
    a:1,
    b:2,
}
const user2={
    a:2,
    c:3,
    d:4,
}
const user3={
    d:5,
    a:3,
}
console.log(user);
console.log(Object.assign(user,user2,user3))
console.log(user);
console.log(user2);
console.log(user3);

const obj={
    name:"rithi",
    age:20,
}
const obj2= Object.create(obj)
obj2.course="CSE";
console.log(obj2)//empty object
console.log(obj2.name)// rithi
console.log(Object.getPrototypeOf(obj2));


let objs = {};

Object.defineProperty(objs, "name",{
        value: "sgdg",
        writable: true,  
        enumerable: true,
        configurable: true
    });

console.log(objs.name);


let objs2 = {};

Object.defineProperties(objs2, {
    name:{
        value: "sgdg",
        writable: true,  
        enumerable: true,
        configurable: true
    },
    age:{
        value: 20,
        writable: true,  
        enumerable: true,
        configurable: true
    }

    });

console.log(objs2);



const users={
    name:"Rithika",
    age:20,
    dept:"CSE",
}
console.log(Object.entries(users));


const arr = [
  ["name", "Rithika"],
  ["age", 20],
  ["city", "Coimbatore"]
];
const obje = Object.fromEntries(arr);
console.log(obje);
console.log(Object.getPrototypeOf(arr));


const object = {};

Object.defineProperty(object, "age", {
  value: 20,
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(object, "age"));



const object2 = {};

Object.defineProperties(object2, {
    name:{
        value: "sgdg",
        writable: true,  
        enumerable: true,
        configurable: true
    },
    age:{
        value: 20,
        writable: true,  
        enumerable: true,
        configurable: true
    }

    });

console.log(Object.getOwnPropertyDescriptors(object2));
console.log(Object.getOwnPropertyNames(object2));// arrar only keys name,age
console.log(Object.getPrototypeOf(object2));//return the prototype of the parent


const people = [
  {name:"Rithika", age:20},
  {name:"Abi", age:25},
  {name:"Anu", age:20}
];

const result = Object.groupBy(people, person => person.age);

console.log(result);

const ob = {
  name: "Rithika",
  age: 20
};

console.log(Object.hasOwn(ob, "name"));
console.log(Object.hasOwn(ob, "city"));


console.log(Object.is(5,5))


const obs = { name: "Rithika" };

console.log(Object.isExtensible(obs));


const parent = {
  country: "India"
};
const child = {
  name: "Rithika"
};
console.log(Object.getPrototypeOf(child));
Object.setPrototypeOf(child, parent);
console.log(Object.getPrototypeOf(child));
console.log(child.name);
console.log(child.country);

