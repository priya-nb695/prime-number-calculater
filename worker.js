// self.onmessage = function (e) {
//   const n = e.data;

//   function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }

//   let found = false;
//   for (let i = n; i < n + 100000000; i++) {
//     if (isPrime(i)) {
//       found = i;
//       break;
//     }
//   }

//   self.postMessage(found);
// };