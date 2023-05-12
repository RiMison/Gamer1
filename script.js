alert("Olá Seja Bem-vindo") 

let pgt1=prompt("Digite Seu NOME: "); 

let pgt2=prompt("Digite seu SOBRENOME: "); 

let pgt3=prompt("Digite a sua IDADE: "); 

let pgt4=prompt("Digite a CIDADE que vive: "); 

let pgt5=prompt("Digite qual a sua plataforma preferida(PC, console, celular): ");

let pgt6=prompt("Digite seu genero de jogo preferido: "); 

let pgt7=prompt("Digite o seu jogo preferido: "); 

let pgt8=prompt("Digite se voce prefere jogar com seus amigos ou sozinho: "); 

let pgt9=prompt("Digite o seu lugar preferido para jogar: "); 

let pgt10=prompt("Digite seu nickname:  "); 



let msg= document.getElementById('msg')

msg.innerHTML =`<p>Olá ${pgt1} ${pgt2}, você tem ${pgt3} anos e mora em ${pgt4}. Você gosta de jogar no ${pgt5} jogos de ${pgt6} e seu jogo favorito é o/a  ${pgt7} e gosta de jogar ${pgt8} na/ em ${pgt9} e nesse universo gamer é conhecido como: ${pgt10}  </p>`;

