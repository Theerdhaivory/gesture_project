Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
})

  camera = document.getElementById("camera");

  Webcam.attach('#camera');

  function take_snapshot()
  {
    Webcam.snap(function(data_uri) {
        document.getElementById("snap").innerHTML = '<img id="captured_image" src = "'+data_uri+'"/> ';
    });
  }

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OYHz1vwmx/model.json',loaded);

  console.log('ml5 version:',ml5.version);

  function loaded() {
    console.log('Model Loaded!');
    }

    function speak(){
        var synth = window.speechSynthesis;
        speak_data = "The prediction is " + prediction_1;
        var utterThis = new SpeechSynthesisUtterance (speak_data_);
        synth.speak(utterThis);
        }