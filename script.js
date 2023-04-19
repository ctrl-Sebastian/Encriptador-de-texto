var input = document.getElementById('input');
var output = document.getElementById('output');
var imageToAlter = document.getElementById('no-output')

function onlyContainsLowercase(str) {
    return /^[a-z]+$/.test(str);
}

function DisplayNone(element){
    document.querySelector(element).style.display = "none";
}

function DisplayBlock(element){
    document.querySelector(element).style.display = "block";
}

function Encriptar(){
    if(onlyContainsLowercase(input.value)){
        const chars = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat',
        };
    
        var textoEncriptado = input.value.replace(/[eiaou]/g, m => chars[m])
    
        output.textContent = textoEncriptado;
    } else {
        alert("Estás usando un tipo de letra inaceptado")
    }
}

function Desencriptar(){
    if(onlyContainsLowercase(input.value)){
        const chars = {
            'enter' : 'e',
            'imes' : 'i',
            'ai' : 'a',
            'ober' : 'o',
            'ufat' : 'u',
        };
    
        var textoDesencriptado = input.value.replace(/enter|imes|ai|ober|ufat/g, m => chars[m])
    
        output.textContent = textoDesencriptado;
    } else{
        alert("Estás usando un tipo de letra inaceptado")
    }

}

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(() => {
        console.log("Se ha copiado al portapapeles: " + newClip)
    }, () => {
        alert("No se pudo copiar al portapapeles")
    });
}

function Copiar(){
    updateClipboard(output.innerHTML);
}