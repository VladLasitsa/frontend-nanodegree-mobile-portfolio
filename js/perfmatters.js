function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}
window.addEventListener("load", function(event) {
  logCRP();
  var link = document.createElement('link');
  link.href = "css/fonts.css";
  link.rel = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(link);
});