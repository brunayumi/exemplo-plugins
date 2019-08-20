$(document).on("click", "#alerta1", function (){
  navigator.notification.alert("Mensagem de alerta 1");
});

$(document).on("click", "#alerta2", function (){
  function retorno(){ 

  }
  navigator.notification.alert("Mensagem de alerta 2", retorno, "aviso", "blz");
});

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

$(document).on("click", "#alerta4", function (){
  navigator.notification.beep(2);
});

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


