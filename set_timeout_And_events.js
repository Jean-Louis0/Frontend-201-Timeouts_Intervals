function theWarning(){
    alert("GET READY FOR THE BOOM EFFECT IN 5 seconds!");
}

function theExplosion() {
    alert("BOOM!");
  }

  const button = document.createElement("button");
  button.textContent = "WARNING";
  button.addEventListener("click", () => {
    // this will delay the event by 5 seconds
    theWarning();
    setTimeout(theExplosion, 5000);
  });
  document.body.appendChild(button);