let s= '({})({}{})';
 s='{{{([[[(())()()(){{{}}}]]])}}}'
// console.log(s.split(''));
function checkBracket(s){
let obj = {
  '}':'{',
  ']':'[',
  ')':'('
};


let arr=s.split('');
let stack = [];

for(var i=0;i<arr.length;i++){
  if(arr[i] === '{' || arr[i] === '(' || arr[i] == '['){
    stack.push(arr[i]);
  }else if( stack[stack.length-1] === obj[arr[i]]){
    stack.pop();
  }else{
    return false;
  }
}
  return stack.length?false:true;
}

console.log(checkBracket(s) );