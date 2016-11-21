// In MM-DD format
var birthdate = "11-21";
var birthdayMessage = "It's this site's birthday! Yay!";

// Configuration
var backgroundColor = "#6A7EFC";
var bannerColor = "#DDD";
var zIndex = "999999";

// Returns today's date in MM-DD format
function todaysDate () {
  return (new Date).toJSON().slice(5,10);
}

// Build banner
if (todaysDate() === birthdate) {
  var body = document.getElementsByTagName("body")[0];
  var banner = document.createElement("div");

  Object.assign(banner.style, {
    position: "absolute",
    right: "-100px",
    top: "60px",
    zIndex: zIndex,
    transform: "rotate(30deg)",
    color: bannerColor,
    backgroundColor: backgroundColor,
    paddingLeft: "120px",
    paddingRight: "120px",
    width: "250px",
    textAlign: "center"
  });

  banner.innerHTML = "<p>" + birthdayMessage + "</p>";
  body.appendChild(banner);
}
