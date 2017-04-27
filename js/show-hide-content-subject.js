function showContent(numberSubject) {
  document.querySelector("#fasc-box-subject-and-quizzes-"+numberSubject).removeAttribute("hidden");
  document.querySelector("#fasc-subject-name-"+numberSubject+" .arrow-collapse").setAttribute("class","arrow-collapse fa fa-caret-square-o-right");
  document.querySelector("#fasc-subject-name-"+numberSubject+" .arrow-collapse").setAttribute("onclick","hideContent("+numberSubject+")");
}
function hideContent(numberSubject) {
  document.querySelector("#fasc-box-subject-and-quizzes-"+numberSubject).setAttribute("hidden","true");
  document.querySelector("#fasc-subject-name-"+numberSubject+" .arrow-collapse").setAttribute("class","arrow-collapse fa fa-caret-square-o-down");
  document.querySelector("#fasc-subject-name-"+numberSubject+" .arrow-collapse").setAttribute("onclick","showContent("+numberSubject+")");
}
