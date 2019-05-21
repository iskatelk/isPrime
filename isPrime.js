const isPrime = (n) => {
  if(n > 1) {
  for(let i =2; i < n; i++) {
    if(n % i === 0) return false;
  }
    return true;
  } else
  return false;
}