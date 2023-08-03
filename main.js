function startRecording()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_hvrGXmZ8/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}