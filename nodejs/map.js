// map purani value ko change kar deta hai

let a=[{key:18},
    {key:20}];

    function one1() {
 a.forEach((item, index) => {
         console.log(item);
       });
      }
     one1();
function one() {
   a.map((item, index) => {
       item.key = 10
        console.log(item);
    });
  }
one();