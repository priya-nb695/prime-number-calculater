function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

document.getElementById("startBtn").onclick = () => {
  const n = Number(document.getElementById("number").value);
  document.getElementById("result").innerText = "Calculating...";

  // HEAVY LOOP 😈
  let found = false;
  for (let i = n; i < n + 100000000; i++) {
    if (isPrime(i)) {
      found = i;
      break;
    }
  }

  document.getElementById("result").innerText = "Prime: " + found;
};