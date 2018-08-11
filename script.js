var lstm = ml5.LSTMGenerator("./models/aesop/", modelLoaded);
var lstmOver = ml5.LSTMGenerator("./models/aesop_overfit/", modelLoaded);

var $ = el => {
  var nodeList = document.querySelectorAll(el);
  if (nodeList.length === 1) return nodeList[0];
  return [...nodeList];
};

function modelLoaded() {
  $("#text").disabled = false;
  $("#status").classList.add("success");
  $("#status").classList.remove("warning");
  $("#status").innerText = "Model Loaded!";
}

function keyCapture(e) {
  if (e.keyCode === 13) return regen();
}

function updateStatus() {
  $("#storyStyle").innerText = (+$("#storyTemp").value * 100) + "%";
}
updateStatus();

function regen(customtext = null) {
  var inp = customtext || $("#text").value.toLowerCase();
  $("#status").classList.remove("success");
  $("#status").classList.remove("error");
  $("#status").classList.add("warning");
  $("#status").innerText = "Thinking...";
  var processThinking = function() {
    var data = {
      seed: inp,
      temperature: 0.5,
      length: +$("#storyLength").value
    };
    var cb = function(err, results) {
      if (err) {
        $("#status").classList.add("error");
        $("#status").classList.remove("warning");
        $("#status").innerText = err;
      } else {
        $("#status").classList.add("success");
        $("#status").classList.remove("warning");
        $("#status").innerText = "Model Ready!";
        $("#output").innerText = inp + results;
      }
    };
    ($("#overfitModel").checked ? lstmOver : lstm).generate(data, cb);
  };
  setTimeout(processThinking, 100);
}
