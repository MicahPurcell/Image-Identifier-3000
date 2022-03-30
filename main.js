Webcam.set({
    width: 350, height: 300, image_format:'png', png_quality: 90
});

camera=document.getElementById('camera')
Webcam.attach(camera)

function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML="<img id='cam' src="+data_uri+">"
    })
}

console.log('ml5 version',ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cSSG-VcgI/model.json',modelLoaded)

function modelLoaded(){
    console.log('model is loaded')
}

function identify(){
    img=document.getElementById('cam')
    classifier.classify(img,gotResults)

}

function gotResults(error, results){
    if (error) {
      console.error(error)  
    } else {
        console.log(results)
        document.getElementById('objectName').innerHTML=results[0].label;
        document.getElementById('objectAccuracy').innerHTML=results[0].confidence;
    }
}
