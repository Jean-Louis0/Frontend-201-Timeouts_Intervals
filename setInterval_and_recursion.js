let times = 0;
function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

setInterval(heyYou, 1000);