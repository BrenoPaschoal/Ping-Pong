//variável botões
var xbotao1, ybotao1;
var xbotao2, ybotao2;
var xbotao3, ybotao3;
var xbotao4, ybotao4;


//variável cursor
var xcursor, ycursor;
var xcursor

//variável estado
var estado;

//variável jogador 1 (retângulo1)
var xrect1, yrec1, larg1, alt1;

//variável jogador 1 (retângulo1)
var xrect2, yrec2, larg2, alt2;

//variável jogador 1 fase 2 (retângulo3)
var xrect3, yrec3, larg3, alt3;

//variável jogador 1 fase 2 (retângulo4)
var xrect4, yrec4, larg4, alt4;

//bola
var xBall, yBall, diameter;
var xBallChange;
var yBallChange;

var xBall2, yBall2, diameter2;
var xBallChange2;
var yBallChange2;


//pontuação
var pontoJ1;
var pontoJ2;

var pontoJ3;
var pontoJ4;

//palavar chave
var palavra;
var letras = [];
var chute;


//palavra chave 2
var palavra2;
var letras2 = [];
var chute2;


//som bola
//var som;

function setup() {
  createCanvas(300, 350);
  //botões
  xbotao1 = 75;
  ybotao1 = 90;
  
  xbotao2 = 75;
  ybotao2 = 150;
  
  xbotao3 = 75;
  ybotao3 = 210;
  
  //cursor
  xcursor = 75;
  ycursor = 90;
  
  estado = 0;
  
  //jogadores
  xrect2 = 115;
  yrect2 = 20;
  larg2 = 75;
  alt2 = 2;
  
  xrect1 = 115;
  yrect1 = 330;
  larg1 = 75;
  alt1 = 2;
  
  //bola
  xBall = 150;
  yBall = 175;
  diameter = 15
  xBallChange = 7;
  yBallChange = 7;
  
  pontoJ1 = 0;
  pontoJ2 = 0;
  
  //jogadores fase 2
  xrect4 = 115;
  yrect4 = 20;
  larg4 = 75;
  alt4 = 2;
  
  xrect3 = 115;
  yrect3 = 330;
  larg3 = 75;
  alt3 = 2;
  
  //bola
  xBall2 = 150;
  yBall2 = 175;
  diameter2 = 15
  xBallChange2 = 9;
  yBallChange2 = 9;
  
  pontoJ3 = 0;
  pontoJ4 = 0;
  
  //palavra chave
  palavra = "bora";
  
  //palavra chave 2
  palavra2 = "menu";
  
}

//função som da bola
/*function preload(){
  soundFormats('ogg')
  som = loadSound('pingpongboard (1).ogg', playSound)
}
//som da colisão
function playSound(){
  som.play()
}
*/
//telas do jogo 
function draw() {
 if(estado==0){
    menu();
  }
  
  else if (estado==1){
    jogar();
  }
  
  else if (estado==2){
    comandos();
  }
  
  else if(estado==3){
    creditos();
  }
  
  else if(estado==4){
    gameover();
  }
  
  else if(estado==5){
    fase2();
  }
  
  else if(estado==6){
    gameover2();
  }
}

  //ações do cursor 
function keyPressed(){
  
  //para baixo
  if(keyCode==DOWN_ARROW){
      if(ycursor == ybotao1){
        ycursor = ybotao2;
      }else if(ycursor == ybotao2){
        ycursor = ybotao3;
      }else if(ycursor == ybotao3){
        ycursor = ybotao3;
      }
  }
  
  //para cima
  if(keyCode==UP_ARROW){
      if(ycursor == ybotao1){
        ycursor = ybotao1;
      }else if(ycursor == ybotao2){
        ycursor = ybotao1;
      }else if(ycursor == ybotao3){
        ycursor = ybotao2;
      }
  }
  //enter
  if(keyCode==ENTER){
    if(ycursor == ybotao1){
      estado = 1;
    }else if(ycursor == ybotao2){
      estado = 2;
    }else if (ycursor == ybotao3){
      estado = 3;
    }
    
    console.log("Entrar");
  }
  //voltar
  if(keyCode==ESCAPE){
    if(estado==1 || estado==2 || estado==3){
      estado=0;
    }
  }
}

//tela do menu
function menu(){
  background(700);
  fill(100,100,200);
  stroke(0);
  strokeWeight(3);
  rect(50,50,200,250,20);
  
  //botão 1
  fill(100,100,200);
  rect(xbotao1,ybotao1,150,50,20);
  textSize(20);
  fill(700);
  noStroke()
  text("JOGAR", 115,121);
  
  //botão 2
  fill(100,100,200);
  stroke(0);
  strokeWeight(3)
  rect(xbotao2,ybotao2,150,50,20);
  textSize(20);
  fill(700);
  noStroke()
  text("COMANDOS",92,181);
  
  //botão 3
  fill(100,100,200);
  stroke(0);
  strokeWeight(3)
  rect(xbotao3,ybotao3,150,50,20);
  textSize(20);
  fill(700);
  noStroke()
  text("CRÉDITOS",98,243);
  
  //cursor
  noFill();
  stroke(700);
  strokeWeight(3);
  rect(xcursor,ycursor,150,50,20);
  
}
//tela do jogo
function jogar(){
  background(100,100,200);
  stroke(700);
  noFill();
  rect(3,3,294,344);
  stroke(700);
  line(0,175,350,175);
  fill(700);
  
  //jogador 1
  rect( xrect1,yrect1,larg1,alt1);
  noStroke();
  textSize(12);
  text("JOGADOR 1",215,195);
  
  //jogador 2
  text("JOGADOR 2",215,165);
  stroke(700);
  rect( xrect2,yrect2,larg2,alt2);
  
  //bola
  circle(xBall,yBall,diameter);
  
   moverJogador();
  
  //movimento bola
  
  xBall += xBallChange;
  yBall += yBallChange;
  
  moverBola();
  
  //colisão bola jogador
  colisao();
  
  //pontuação
  ponto();
  
  marcador();
  
}

//movimentação dos jogadores
function moverJogador(){
  //jogador 1;
  if(keyIsDown(RIGHT_ARROW)){
    xrect1 = xrect1 + 5;
  }if(keyIsDown(LEFT_ARROW)){
    xrect1 = xrect1 - 5;
  }
  if(keyIsDown(65)){
    xrect2 = xrect2 - 5;
  }
  if(keyIsDown(68)){
    xrect2 = xrect2 + 5;
  }
}


//movimentação da bola/colisão parede 
function moverBola(){
  if (xBall < diameter/2 || 
      xBall > width - 0.5*diameter) {
  xBallChange *= -1;
  }
  if (yBall < diameter/2 || 
      yBall > height - diameter) {
  yBallChange *= -1;
  }
}

//colisão
function colisao(){
  //jogador1
  if ((xBall > xrect1 && xBall < xrect1 + larg1) && (yBall + (diameter/2) >= yrect1)) {
  xBallChange *= -1;
  yBallChange *= -1;
  //playSound()
  }
  //jogador2
  if((yBall < xrect2) && (yBall < yrect2 + alt2) &&  (xBall+(diameter/2)>=xrect2)){
    xBallChange *= -1;
    yBallChange *= -1;
    //playSound()
  }
  
}
//pontuação dos jogadores HUD
function ponto(){
  //ponto do jogador 2
  if(yBall>width + 35){
    console.log("ponto jogador 2")
    pontoJ2++;
    if(pontoJ2==10){
    estado = 4
    }
  }
  //ponto do jogador 1
  if(yBall<width - 290){
    console.log("ponto jogador 1")
    pontoJ1++;
    if(pontoJ1==10){
    estado = 4
    }
  }

}
function marcador(){
  noStroke();
  textSize(20);
  text(pontoJ1,15,195);
  text(pontoJ2,15,165);
  
}
//tela de comandos
function comandos(){
  background(100,100,200);
  stroke(700);
  noFill();
  rect(3,3,294,344);
  textSize(17);
  noStroke();
  fill(700);
  text("- BOTÃO AÇÃO: ENTER",20,30);
  text("- VOLTAR: ESC",20,60);
  text("- MOVIMENTAÇÃO JOGADOR 1:",20,110);
  text(" °ESQUERDA = SETA ESQUERDA",20,140);
  text(" °DIREITA = SETA DIREITA",20,170);
  text("- MOVIMENTAÇÃO JOGADOR 2:",20,220);
  text(" °ESQUERDA = BOTÃO 'A'",20,250);
  text(" °DIREITA = BOTÃO 'D'",20,280);
}
//tela dos créditos
function creditos(){
  background(100,100,200);
  noFill();
  stroke(700);
  rect(3,3,294,344);
  textSize(20);
  stroke(0);
  fill(700);
  noStroke()
  text("- Breno Henrique C. Paschoal",20,110);
  text("CRÉDITOS:",20, 50);
  text("°Aluno:",20,80)
  text("°Turma: 2D",20,160)
  text("°Professor:",20,210)
  text("- Rummenigge R. Dantas",20,240)
}

//tela de game over
function gameover(){
  background(100,100,200);
  stroke(700)
  noFill()
  rect(3,3,294,344);
  noStroke()
  fill(700)
  textSize(20);
  text("GAME OVER!",80,25);
  textSize(15);
  text("Isso quer dizer que alguém marcou",30,65)
  text("10 ponto! Parabéns para você!",28,85);
  text("Para você que perdeu os 10 pontos,",30,105);
  text("boa sorte na próxima vez!",30,125);
  text("Para ir a próxima fase digite",30,170);
  text("a palavra 'bora' nas caixas abaixo.",30,190);
  text("Se preparem, a próxima fase não será", 30,300);
  text("moleza!",30,320);
  

   for(i=0;i<4;i++){
    letras[i] = palavra.charAt(i)
  }
  


  for(i=0;i<4;i++){
  fill('white')
  square(80+(35*i),228.5,25)
  //fill('black')
  //text(letras[i],88+(35*i),245)
  }
  
  for(i=0;i<4;i++){
    if(letras[i]==chute){
      fill('black')
      text(letras[i],88+(35*i),245)
      estado = 5
    }
  }
  
} 
  function keyTyped(){
  chute = key
}


//segunda fase
function fase2(){
  background(100,100,200)

  stroke(700);
  noFill();
  rect(3,3,294,344);
  stroke(700);
  line(0,175,350,175);
  fill(700);
  
  //jogador 1
  rect( xrect3,yrect3,larg3,alt3);
  noStroke();
  textSize(12);
  text("JOGADOR 1",215,195);
  
  //jogador 2
  text("JOGADOR 2",215,165);
  stroke(700);
  rect( xrect4,yrect4,larg4,alt4);
  
  //bola
  circle(xBall2,yBall2,diameter2);
  
   moverJogador2();
  
  //movimento bola
  xBall2 += xBallChange2;
  yBall2 += yBallChange2;
  
  moverBola2();
  
  //colisão bola jogador
  colisao2();
  
  //pontuação
  ponto2();
  
  marcador2();
  
}

//movimentação dos jogadores
function moverJogador2(){
  //jogador 1;
  if(keyIsDown(RIGHT_ARROW)){
    xrect3 = xrect3 + 5;
  }if(keyIsDown(LEFT_ARROW)){
    xrect3 = xrect3 - 5;
  }
  if(keyIsDown(65)){
    xrect4 = xrect4 - 5;
  }
  if(keyIsDown(68)){
    xrect4 = xrect4 + 5;
  }
}

//movimentação da bola
function moverBola2(){
  if (xBall2 < diameter2/2 || 
      xBall2 > width - 0.5*diameter2) {
  xBallChange2 *= -1;
  }
  if (yBall2 < diameter2/2 || 
     yBall2 > height - diameter2) {
  yBallChange2 *= -1;
  }
}

//colisão
function colisao2(){
  //jogador1
  if ((xBall2 > xrect3 && xBall2 < xrect3 + larg3) && (yBall2 + (diameter2/2) >= yrect3)) {
  xBallChange2 *= -1;
  yBallChange2 *= -1;
    //playSound()
  }
  //jogador2
  if((yBall2 < xrect4) && (yBall2 < yrect4 + alt4) &&  (xBall2+(diameter2/2)>=xrect4)){
    xBallChange2 *= -1;
    yBallChange2 *= -1;
    //playSound()
  }
  
}
//pontuação dos jogadores HUD
function ponto2(){
  //ponto do jogador 2
  if(yBall2>width + 35){
    console.log("ponto jogador 2")
    pontoJ4++;
    if(pontoJ4==10){
      estado=6;
    }
    
  }
  //ponto do jogador 1
  if(yBall2<width - 290){
    console.log("ponto jogador 1")
    pontoJ3++;
    if(pontoJ3==10){
      estado=6;
    }
  }
}
function marcador2(){
  noStroke();
  textSize(20);
  text(pontoJ3,15,195);
  text(pontoJ4,15,165);
  
}

//game over 2
function gameover2(){
   background(100,100,200);
  stroke(700)
  noFill()
  rect(3,3,294,344);
  noStroke()
  fill(700)
  textSize(20);
  text("GAME OVER!",80,25);
  textSize(15);
  text("Isso quer dizer que alguém marcou",30,65)
  text("10 ponto! Parabéns para você!",28,85);
  text("Para você que perdeu os 10 pontos,",30,105);
  text("boa sorte na próxima vez!",30,125);
  text("Para ir ao menu digite",30,170);
  text("a palavra 'menu' nas caixas abaixo.",30,190);
  
  for(i=0;i<4;i++){
    letras2[i] = palavra2.charAt(i)
  }
  
  
  for(i=0;i<4;i++){
  fill('white')
  square(80+(35*i),228.5,25)
  //fill('black')
  //text(letras2[i],88+(35*i),245)
  }
  
  for(i=0;i<4;i++){
    if(letras2[i]==chute2){
      fill('black')
      text(letras2[i],88+(35*i),245)
      estado = 0
    }

  }
  
}
function keyReleased(){
 chute2 = key 
}


  

