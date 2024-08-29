
function getProject(evt, proj) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display =  "none";
  }
  document.getElementById(proj).style.display = "block";
}


