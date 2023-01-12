let a =()=>{
    return 10;
}
let b = ()=>{
    return 10;
}

async function fn() {
  return new Promise(function (resolve, reject) {
    const x = 34;
    const y = 10 + 24;
    if (a() === b()) {
      resolve();
    } else {
      reject();
    }
  })
    .then(function () {
      console.log("hello1");
    })
    .catch(function () {
      console.log("biztecno");
    });
}

fn()
