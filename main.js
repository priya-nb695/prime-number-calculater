const worker = new Worker("worker.js");

document.getElementById("startBtn").onclick = () => {
  const n = Number(document.getElementById("number").value);
  document.getElementById("result").innerText = "Calculating...";

  worker.postMessage(n);
};

worker.onmessage = (e) => {
  document.getElementById("result").innerText = "Prime: " + e.data;
};