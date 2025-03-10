function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {
      let output = '';
      
      if (i % 3 === 0) {
        output += 'Fizz';
      }
      
      if (i % 5 === 0) {
        output += 'Buzz';
      }
      
      // Si output est vide (pas de "Fizz" ni "Buzz"), affichez le nombre
      if (output === '') {
        console.log(i);
      } else {
        console.log(output);
      }
    }
  }
  
  fizzbuzz();
  