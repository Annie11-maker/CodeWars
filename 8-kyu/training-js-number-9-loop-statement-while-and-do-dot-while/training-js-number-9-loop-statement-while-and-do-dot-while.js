function padIt(str,n){
  let num = 1;
  do {
    if (num%2 !==0){
      str = '*' + str;
    } else {
      str = str + '*';
    }
    num ++;
  } while (num <= n)
  return str;
  //coding here
}