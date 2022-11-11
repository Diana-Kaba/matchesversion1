function matches(count) {
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
    show(count);
    if (count <= 0) {
      alert("Your win!");
      break;
    }
    alert("My turn!");
    let random = Math.floor(Math.random() * 3) + 1;
    count -= random;
    show(count);
    if (count <= 0) {
      alert("I win!");
      break;
    }
  }
}

function show(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "| ";
  }
  alert(str);
}

matches(13);
