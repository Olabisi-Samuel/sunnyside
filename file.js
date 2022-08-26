function navToggle() {
  let topnavToggle = document.getElementById("topnav-nav");
  if (topnavToggle.className === "topnav") {
    topnavToggle.className += " responsive";
  } else {
    topnavToggle = "topnav";
  }
}
