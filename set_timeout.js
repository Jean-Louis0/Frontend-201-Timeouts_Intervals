console.log("WARNING! In exactly ten seconds something will explode");

function theExplosion() {
  console.log("BOOM!");
}

setTimeout(theExplosion, 10000);