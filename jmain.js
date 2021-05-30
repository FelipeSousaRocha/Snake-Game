let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /* reenderiza o desenho do canvas, plano 2d*/ 
let box = 32; /* 32px */

function criarBG() { /* Funcao do canvas que vai desenhar */ 
    context.fillStyle = "lightgreen"; /* estilo do canvas */ 
    context.fillRect(0, 0, 16 * box, 16 * box); /* desenha nosso retangulo onde ocorre o jogo, 4 parametros, posicao de x e y, altura e largura*/ 
}
criarBG();