window.addEventListener("load", init, false);

function init() {
    document.getElementById('run').addEventListener("mouseover", changePosition, false);
    document.getElementById('run').addEventListener("mouseout", changePosition, false);
    document.getElementById('run').addEventListener("click", done, false);
    document.getElementById('surrender').addEventListener("mouseover", changePosition, false);
    document.getElementById('surrender').addEventListener("mouseout", changePosition, false);
    document.getElementById('surrender').addEventListener("click", final, false);
    givePosition();
    return true;
}

function changePosition() {
    var rand = getRandomInt(1,4);
    if(this.offsetTop < 148) {
        rand = 4;
    }
    if(this.offsetTop > 652) {
        rand = 2;
    }
    if(this.offsetLeft < 148) {
        rand = 3;
    }
    if (this.offsetLeft > 1252) {
        rand = 1;
    }
    switch (rand) {
        case 1: 
          this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
          break;
        case 2: 
          this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
          break;
        case 3: 
          this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
          break;
        case 4: 
          this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
          break;
    } 
    return true;
}

function done() {
    alert("Поздравляем, вам удалось получить скидку!");
   if (confirm("Попробовать ещё раз ?")) {
            givePosition();
            return true; 
    } else {
        final();
        return false;
    }
}


function givePosition() {
    document.getElementById('run').style.top = "500px"; 
    document.getElementById('run').style.left = "500px";
    document.getElementById('surrender').style.top = "10px";
    document.getElementById('surrender').style.left = "10px";
    return true;
}

function final() {
    document.getElementById('run').removeEventListener("mouseover", changePosition, false);
    document.getElementById('run').removeEventListener("mouseout", changePosition, false);
    document.getElementById('run').removeEventListener("click", done, false);
    document.getElementById('mood').innerHTML = ";(";
    document.getElementById('run').style.display = "none";
    document.getElementById('surrender').style.display = "none";
    return false;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




