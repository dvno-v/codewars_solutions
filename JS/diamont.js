function diamond(n){
    if(n === 1) return "*\n"
    if (n % 2 == 0 || n < 3) return null;
    
    let res = "", count = 1, passed = false;
    
    for(let i = 0; i < n; ++i){
      res += " ".repeat(parseInt((n - count) / 2)) + "*".repeat(count);
      res += '\n';
      if(count < n && !passed){
        count += 2;
      }else{
        passed = true;
        count -= 2;
      }
    }
    return res;
  }