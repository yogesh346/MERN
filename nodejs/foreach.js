const array = [
    {
      id: 1,
      name: "Dhanur",
    },
    {
      id: 2,
      name: "Rohit",
    },
  ];
  //array foreach syntax
  function one() {
    array.forEach((item, index) => {
      console.log(item.id, item.name);
    });
  }
  one();