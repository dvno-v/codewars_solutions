function primeFactors(n){
    let primes = [], copy = n, res = "(";
    while(copy % 2 == 0){
      primes.push(2);
      copy = parseInt(copy / 2);
    }
    let i = 3
    while(copy && copy >= i){
      if(copy % i == 0){
        while(copy % i == 0){
          primes.push(i);
          copy = parseInt(copy / i)
        }
      }
      i++;
    }
    let count = 1;
    for(let index = 0; index < primes.length - 1; ++index){
      if(primes[index] === primes[index + 1]){
        count++;
      }
      else{
          if(count > 1){
              res += `${primes[index]}**${count})(`;
          }else{
            res += `${primes[index]})(`;
          }
        count = 1
      }
    }
    if(count > 1){
        res += `${primes[primes.length - 1]}**${count})`;
    }else{
      res += `${primes[primes.length - 1]})`;
    }

    return res;
}

console.log(primeFactors(7775460));