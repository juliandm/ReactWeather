function addPromise(a, b){
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number'){
          resolve(a +b);
    }else{
          reject("not a number");
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('success', sum, sum*4);
}, function (err) {
  console.log("err", err);
});