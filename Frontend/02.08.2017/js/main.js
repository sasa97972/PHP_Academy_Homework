window.addEventListener("load", init, false);
function init() {
    window.obj = new Create();
}

function Create() {
    var self = this;
    document.getElementById("start").onclick = function() {
        var request = new XMLHttpRequest();
        request.open('GET', 'json/progers.json');
        request.send();
        request.onload = function () {
            if (request.status != 200) {
                alert(request.status + ': ' + request.statusText);
            } else {
                console.log(JSON.parse(request.responseText));
                self.renderPage(JSON.parse(request.responseText));
            }
        }
        this.style.display = "none";
    };
    this.renderPage = function(data) {
        var parent = document.getElementById("parent");
        for (let i = 0; i < data.length; i++) {

            var div = document.createElement("div");
            div.className = ("card animated rubberBand");

            var h2 = document.createElement("h2");
            h2.className = ("card__name");
            h2.innerHTML = data[i].firstname + " " + data[i].secondname;

            var h3 = document.createElement("h3");
            h3.className = ("card__jobtitle");
            h3.innerHTML = data[i].jobtitle;

            var pSpecial = document.createElement("p");
            pSpecial.className = ("card__specialization");
            pSpecial.innerHTML = "Secialization: " + data[i].specialization;

            var pSkills = document.createElement("p");
            pSkills.className = ("card__skills");
            pSkills.innerHTML = "Skills: ";

            var divStrongSkill = document.createElement("div");
            divStrongSkill.className = ("card__strong-skills");
            divStrongSkill.innerHTML = "strong: ";
            var ulStrongSkill = document.createElement("ul");
            for(let j = 0; j < data[i].skills.strong.length; j++) {
                let li = document.createElement("li");
                li.innerHTML = data[i].skills.strong[j];
                ulStrongSkill.appendChild(li);
            }
            divStrongSkill.appendChild(ulStrongSkill);

            var divBasicSkill = document.createElement("div");
            divBasicSkill.className = ("card__basic-skills");
            divBasicSkill.innerHTML = "basic: ";
            var ulBasicSkill = document.createElement("ul");
            for(let j = 0; j < data[i].skills.basic.length; j++) {
                let li = document.createElement("li");
                li.innerHTML = data[i].skills.basic[j];
                ulBasicSkill.appendChild(li);
            }
            divBasicSkill.appendChild(ulBasicSkill);

            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(pSpecial);
            div.appendChild(pSkills);
            div.appendChild(divStrongSkill);
            div.appendChild(divBasicSkill);
            parent.appendChild(div)
        }
    }
}