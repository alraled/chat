var socket = new WebSocket("ws://localhost:54611/socket.ashx");
var usu;

socket.onopen = function(evt) {

        console.log(evt);
};

socket.onclose = function (evt) {
        alert("Conexión Finalizada");
}

socket.onerror = function (evt) {
        alert("Error");
        console.log(evt);
}

socket.onmessage=function(evt) {
    document.getElementById("ventanachat").innerHTML += evt.data;
    console.log(evt);
}

function usuario() {
    usu = document.getElementById("txtNom").value;
    document.getElementById("ventanachat").style.display = "block";
    document.getElementById("divNombre").style.display = "none";
}

function enviar() {
    var texto = document.getElementById("txt").value;
    var obj= {
        ask:[{text:texto, id:2}]
    }
}
document.getElementById("btnEnviar").addEventListener("click", enviar);
document.getElementById("btnNom").addEventListener("click", usuario);