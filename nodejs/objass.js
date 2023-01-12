const object1 = {  
  a: 1,  
  b: 2,  
  c: 3  
};  
const object3= {  
  g: 1,  
  h: 34,  
  i: 3  
};    
  
const object2 = Object.assign({c: 4, d: 5}, object1);  
// Object.assign(target,source)
const object4 = Object.assign({g: 2, h: 25}, object3);  
console.log(object2.c, object2.d);  
console.log(object4.g, object4.h);  