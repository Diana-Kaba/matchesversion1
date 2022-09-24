let n = 13;
while (n > 0) {
  alert("Your turn!");
  let m = prompt("Get the matches!");
  if (isNaN(m)) {
    alert("Not a Number");
    continue;
  } else if (m < 0 || m > 3) {
    continue;
  }
  n -= m;
  alert(n);
  if (n <= 0) {
    alert("Your win!");
    break;
  }
  alert("My turn!");
  let random = Math.floor(Math.random() * 3) + 1;
  n -= random;
  let j = prompt("Got the matches!");
  random -= j;
  if (j <= 0) {
    alert("I win!");
    break;
  }
}
