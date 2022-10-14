function matches(count) {
  count = 13;
  while (count > 0) {
    alert("Your turn!");
    let m = prompt("Get the matches!");
    if (isNaN(m)) {
      alert("Not a Number");
      continue;
    } else if (m < 0 || m > 3) {
      continue;
    }
    count -= m;
    alert(show());
    if (count <= 0) {
      alert("Your win!");
      break;
    }
    alert("My turn!");
    let random = Math.floor(Math.random() * 3) + 1;
    count -= random;
    let j = prompt("Got the matches!");
    random -= j;
    alert(show());
    if (j <= 0) {
      alert("I win!");
      break;
    }
  }
}

function show(n) {
  n = "| | | | | | | | | | | | |";
  alert(n);
}

matches();
