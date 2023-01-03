function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let myNb = getRandomInt(100);
let userNb;


while(myNb !== userNb) {

    let userPropal = window.prompt("Devine le nombre !");
    userNb = parseInt(userPropal);

    if(myNb > userNb) {
        alert("C'est plus !");
    }
    else if(myNb < userNb) {
        alert("C'est moins !");
    }
    else {
        alert("C'est gagné ! :D")
    }
}

