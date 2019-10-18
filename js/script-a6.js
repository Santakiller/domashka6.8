const maxAllowedChecks = 2; 

$(document).ready(init)

function init() {
  $("input[type=checkbox]").change(trackChecks);
  $("input[type=radio]").change(trackRadios);

  trackChecks();
  trackRadios();
 }

function trackChecks() {
  let checkCount = $("input[type=checkbox]:checked").length;
  if (checkCount >= maxAllowedChecks) {
    $("input[type=checkbox]:not(:checked)").prop("disabled", true);
    console.log("чекбоксы заблокированы");
  } 
  else {
    $("input[type=checkbox]:not(:checked)").prop("disabled", false);
    console.log("чекбоусы разблокированы");
  }
}

function trackRadios() {
  $("input[type=radio]").prop("disabled", true);
  console.log("радио заблокированы");
}

console.log("скрипт подгрузился 2");