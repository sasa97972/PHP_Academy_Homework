window.addEventListener("load", initStart, false);

var colorButton = document.querySelectorAll(".colorButton button"),
	keyboardControll = 0,
	GameTime = 0,
	count = 0;
	element = undefined;

function initStart() {
    document.getElementById('startGame').addEventListener("click", startButton, false);
    document.getElementById('keyboard').addEventListener("click", keyboard, false);

    if(colorButton) {
        for(let i = 0; i < colorButton.length; i++) {
            colorButton[i].addEventListener("click", changeColor, false);
        }
        
    }

    return true;
}

function startButton() {
    this.innerHTML = "Сдаться";
    if (typeof element !== "undefined") {
        gameOver();
    } else {
        init();
    }
    return true;
}

function init() {
	element = document.getElementById('target');
    if (!element) {return false};

    moveButton = document.querySelectorAll(".moveButton button");
    if(moveButton) {
        for(let i = 0; i < moveButton.length; i++) {
            moveButton[i].addEventListener("click", movePosition, false);
        }
        
    }

    if(document.getElementById('random')) {removeRandom();}
    
    randDiv();

	GameTime = 5;
    document.getElementById('timerResult').innerHTML = GameTime;
    GameTimer = setInterval(timer, 1000);

    return true;
}

function changeColor() {
    var element = document.getElementById('target');
    element.style.backgroundColor = this.value;
    return true;
}

function movePosition(e) {
    var direction = this.value;
    var pos = 0;
    switch(direction){
        case("rigth"):
            pos = element.offsetLeft + 10;
            if (element.offsetLeft >= 480) {
                e.preventDefault();
                gameOver(); 
                return false;
            };
            element.style.left = pos + "px";
            break;
        case("left"):
            pos = element.offsetLeft - 10;
            if (element.offsetLeft <= 0) {
                e.preventDefault();
                gameOver(); 
                return false;
            };
            element.style.left = pos + "px";
            break;
        case("top"):
            pos = element.offsetTop - 10;
            if (element.offsetTop <= 10) {
                e.preventDefault();
                gameOver(); 
                return false;
            };
            element.style.top = pos + "px";
            break;
        case("bottom"):
            pos = element.offsetTop + 10;
            if (element.offsetTop >= 270) {
                e.preventDefault();
                gameOver(); 
                return false;
            };
            element.style.top = pos + "px";
            break;
    }
    checkPosition();
    return true;
}

function keyboard(e) {
      if (keyboardControll) {
        keyboardControll = 0;
        this.innerHTML = "Включить управление клавиатурой";
        document.getElementById('keyboardDescr').style.visibility = 'hidden';
        document.getElementById('main').onkeydown = function() {
            return false;
        }
      } else {
        this.innerHTML = "Выключить управление клавиатурой";
      keyboardControll = true;
      document.getElementById('keyboardDescr').style.visibility = 'visible';
      document.getElementById('main').onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: // влево
            e.preventDefault();
            if (element.offsetLeft <= 0) {
                gameOver(); 
                return false;
            };
            element.style.left = element.offsetLeft  - 10 + 'px';
            break;
        case 38: // вверх
            e.preventDefault();
            if (element.offsetTop <= 10) {
                gameOver(); 
                return false;
            };
            element.style.top = element.offsetTop - 10 + 'px';
            break;
        case 39: // вправо
            e.preventDefault();
            if (element.offsetLeft >= 480) {
                gameOver(); 
                return false;
            };
            element.style.left = element.offsetLeft + 10 + 'px';
            break;
        case 40: // вниз
            e.preventDefault();
            if (element.offsetTop >= 270) {
                gameOver(); 
                return false;
            };
            element.style.top = element.offsetTop + 10 + 'px';
            break;
        }
        checkPosition();
        return true;
    }
    }    
}

function randDiv() {
        var div = document.createElement("div");
        var parent = document.getElementsByClassName("field");
        div.setAttribute("id", "random");
        for(let i = 0; i < parent.length; i++) {
            parent[i].appendChild(div);
        }
        document.getElementById('random').style.left = getRandomInt(0, 480) + "px";
        document.getElementById('random').style.top = getRandomInt(10, 270) + "px";
        return true;
}

function removeRandom() {
    var random = document.getElementById('random');
    var parent = document.getElementsByClassName("field");
    for(let i = 0; i < parent.length; i++) {
        parent[i].removeChild(random);
    }
    return true;
}

function checkPosition() {
    var random = document.getElementById('random');
    var diffTop = element.offsetTop - random.offsetTop;
    var diffLeft = element.offsetLeft - random.offsetLeft;
    if ((diffTop >= -15 && diffTop <= 15) && (diffLeft >= -15 && diffLeft <= 15)) {
        removeRandom();
        randDiv();
        GameTime += 2;
        document.getElementById('timerResult').innerHTML = GameTime;
        document.getElementById('result').innerHTML = "Вы набрали: " + ++count + " points";
    }
    return true; 
}

function timer() {
    document.getElementById('timerResult').innerHTML = --GameTime;
    if (GameTime == 0) {gameOver()};
    return true;
}

function gameOver() {
    alert("К сожалению, вы проиграли. Вы набрали " + count + " points.");
    element.style.left = 0;
    element.style.top = "10px";
    count = 0;
    GameTime = 0;
    clearInterval(GameTimer);
    removeRandom();
    document.getElementById('result').innerHTML = "Вы набрали: 0 points";
    if (confirm("Вы хотите сыграть ещё раз ?")) {
        init();
        return true;
    } else {
        delete element;
        document.getElementById('startGame').innerHTML = "Старт";
        return false;
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




