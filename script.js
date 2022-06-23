


 
    

var image = ["img_1.jpg", "download.jpg", "download_2.jpg"]
var texto = ["Maria", "José", "Carlos"]
var indice = 1
function imagem(){
    document.getElementById("nome").src=image[indice]
    document.getElementById("texto").innerHTML=texto[indice]
    indice = indice+1
    if (indice>2){
        indice = 0
    }
}
    