function Cifrar (t){
    var textarea = document.getElementById('texto1').value;
    var t = textarea.replaceAll("a","ai").replaceAll("e", "enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("u","ufat");
    
    document.getElementById('texto2').innerHTML =t;
    document.getElementById('izquierda').reset();
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('referencia1').style.display = 'none';
    document.getElementById('referencia2').style.display = 'none';
    document.getElementById('copia').style.display = 'block';
    
    



}


function Descifrar (t){
    var textarea = document.getElementById('texto1').value;
    var t = textarea.replaceAll("aimes","a").replaceAll("enter", "e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    document.getElementById('texto2').innerHTML =t;
    document.getElementById('izquierda').reset();
    document.getElementById('imagen').style.display = 'block';
    document.getElementById('mensaje').style.display = 'block';
    document.getElementById('copia').style.display = 'none';
}
function myFunction() {
    // Get the text field
   
    var copyText = document.getElementById('texto2');
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Texto copiado exitosamente: " + copyText.value);
  }
