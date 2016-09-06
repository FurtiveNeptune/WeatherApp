//if (typeof someNumber === 'number') {
//
//}

//Challenge Area
function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
    resolve(a + b);
  } else {
    reject('One, or both, of the parameters are not a number.');
   }
 });
}


addPromise(5, 6).then(function (sum) {
  console.log('It works brah!', sum);
}, function (err) {
  console.log('It dont work brah.', err);
})

addPromise('Sean', 6).then(function (sum) {
  console.log('It works brah!', sum);
}, function (err) {
  console.log('It dont work brah.', err);
})
