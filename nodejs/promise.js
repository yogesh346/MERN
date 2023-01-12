let a =()=>{
    return 100;
}
let b = ()=>{
    return 10;
}




var promise = new Promise(function(resolve, reject) { 
    const x = 34; 
    const y = 10+24;
    if(a() === b()) { 
      resolve(); 
    } else { 
      reject(); 
    } 
  }); 
      
  promise. 
      then(function () { 
          console.log('Success, You are a GEEK'); 
      }). 
      catch(function () { 
          console.log('Some error has occurred'); 
      });