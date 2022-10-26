let arr = [ 2,4,1,3,4,7,4,2,3,1,7,9,10,5,3,5,2,4,2,5];
let n = 2;


function occur(newArr,a,n){
  let count=1;
  let l=newArr.length;
  // console.log(l);
  for(let i =0;i<l;i++){
    if(a === newArr[i]){
      count++;
    }
  }
  return n >= count;
}
function result(arr,n){
  let r = arr.reduce((acc,crr,idx)=>{
    let o = occur(acc,crr,n)
    // console.log(o);
    if(o){
      acc.push(crr);
    }; 
    return acc;
  },[])
  console.log(arr);
  console.log(r);
}

result(arr,n);


// let arr = [12,12,45,54,12,12,54,45,4,1];
// let n= 3;
// let obj = {};

// for(let i in arr){
//   obj[arr[i]] = obj[arr[i]] + 1 || 1;
//   if(obj[arr[i]] > n ){
//     obj[arr[i]]--;
//   }
// }

// let str ='';
//  arr.forEach((item,j)=>{
//   if(obj[item] !== 0){
//     str = str + item +',';
//     obj[item] = obj[item]-1;
//   }
// })
// let a = str.split(',');
// for(let i in a){
//  a[i] = Number(a[i]);
// }
// console.log(a);
