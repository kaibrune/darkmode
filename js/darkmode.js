window.onload = changeTheme();

function changeTheme() {
  const sunrisehour = 6; // describes the time where the light theme is displayed
  const sunsethour = 20; // describes the time where the dark theme is displayed

  var currenttime = new Date();
  var currenthour = (currenttime.getHours());
    if (currenthour >= sunrisehour && currenthour < sunsethour) {
      lightTheme();
    } else {
      darkTheme();
    }
}

// embed the stylesheets in <head>

function darkTheme() {
  var s1 = document.createElement("link");
  s1.type = "text/css";
  s1.rel = "stylesheet";
  s1.type = "text/css";
  s1.href = "css/style_dark.css"; // change your dark stylesheet
  document.getElementsByTagName('head')[0].appendChild(s1);
  console.log("darktheme");
}

function lightTheme() {
var s1 = document.createElement("link");
s1.type = "text/css";
s1.rel = "stylesheet";
s1.type = "text/css";
s1.href = "css/style.css"; // change your light stylesheet
document.getElementsByTagName('head')[0].appendChild(s1);
console.log("lighttheme");
}