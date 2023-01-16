fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.text())
      .then(json => console.log(json))
      .catch(error=>console.error(error))