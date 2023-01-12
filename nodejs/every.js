let a=[18,45,66];
function one() {
    a.every((item, index) => {
        if (item == 18) {
            console.log(true);
        }
        else{
            console.log(false);
        }
    });
  }
  one();