function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || (bounce <= 0 && bounce >= 1) || window >= h || window <= 0 ) return -1;
    let bounces = -1;
    while(h >= window){
      bounces += 2;
      h *= bounce;
    }
    return bounces;
  }

console.log(bouncingBall(30.0, 0.66, 1.5))