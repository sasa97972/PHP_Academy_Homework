window.addEventListener("load", init, false);

function init() {
    document.getElementById('run').addEventListener("mouseover", changePosition, false);
    document.getElementById('surrender').addEventListener("mouseover", changePosition, false);
    givePosition();
    return true;
}

function changePosition() {
    var parent = document.getElementById('wrapper');
    var rand = getRandomInt(1,4);
    if(this.offsetTop > parent.offsetHeight - this.offsetHeight) {
       rand = 2; 
    } 
    if(this.offsetTop < this.offsetHeight) {
        rand = 4;
    }
    if (this.offsetLeft > parent.offsetWidth - this.offsetWidth) {
        rand = 1;
    }
    if (this.offsetLeft < this.offsetWidth) {
        rand = 3;
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

function givePosition() {
    document.getElementById('run').style.top = "500px"; 
    document.getElementById('run').style.left = "500px";
    document.getElementById('surrender').style.top = "10px";
    document.getElementById('surrender').style.left = "10px";
    return true;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}