// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
  if(c < a > b){
    return a;
  }else if(c < b > a){
    return b;
  }else{
    return c;
  }
}
