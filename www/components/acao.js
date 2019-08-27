//alerta 1
$(document).on("click", "#alerta1", function (){
  navigator.notification.alert("Mensagem de alerta 1");
});

//alerta 2
$(document).on("click", "#alerta2", function (){
  function retorno(){ 
  }
  navigator.notification.alert("Mensagem de alerta 2", retorno, "aviso", "blz");
});

//alerta 3
$(document).on("click", "#alerta3", function (){
  function onConfirm(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert('Escolheu a opção sim!');
    } else {
       navigator.notification.alert('Escolheu a opção não!');
    }
  }
  navigator.notification.confirm("Escolha sim ou não",onConfirm, "Escolha", ['sim', 'não']);
});

//alerta 4
$(document).on("click", "#alerta4", function (){
  navigator.notification.beep(2);
});

//código de barra
$(document).on("click", "#codigoBarra", function (){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
         if(result.text == 888){
           $(location).attr("href", "pag2.html");
         }
      },
      function (error) {
          navigator.notification.alert("Falha na leitura: " + error);
      },
      {
          preferFrontCamera : false,
          showFlipCameraButton : true, 
          showTorchButton : true,
          torchOn: false, 
          saveHistory: true, 
          prompt : "Place a barcode inside the scan area",
          resultDisplayDuration: 500,
          formats : "QR_CODE,PDF_417,CODE_39", 
          orientation : "landscape",
          disableAnimations : true,
          disableSuccessBeep: false 
      }
   );
});

//camera
$(document).on("click", "#camera", function() {
navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation: true,
    saveToPhotoAlbum: true	 
});

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
}
function onFail(message) {
  navigator.notification.alert('Failed beacuse: ' + message);
    alert('Failed because: ' + message);
}
});

//local
$(document).on("click", "#local", function() {
var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});