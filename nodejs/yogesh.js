//const input = require('./data.json')

const input = require ('./data.json')
const stu = () => {
    let output = {};
   input.forEach(x => {                        // 
       output[x.parentBstGuid] = [x.bstGuid];  //parent id or bst id ko hi comparigen kar raha hai
       if (x.parentBstGuid!== null) {          //parent id jo null hogi woh  woh ignor ho jyegi
           output[x.parentBstGuid].push(x);    //parent id ko push karwaya hai add kra hai
   }
   console.log(output);                         // printing statement 
});
}
stu();


        
