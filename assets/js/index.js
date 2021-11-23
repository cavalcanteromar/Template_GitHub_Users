function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function main() {

    var linha = document.createElement('div');
    var div2 = document.createElement('div');
    var h2 = document.createElement('h2');
    var p = document.createElement('p');
    var img = document.createElement('img');
    var a = document.createElement('a');

    linha.className = "col card box-shadow w-card p-0 m-0";
    div2.className = "card-body";
    p.className = "card-text";
    img.className = "card-img-top img_card";
    a.className = "btn btn-primary w-100"

    div2.appendChild(h2);
    div2.appendChild(p);
    div2.appendChild(a);
    linha.appendChild(img);
    linha.appendChild(div2);

    a.innerHTML = "Ver perfil";

    var input = document.getElementById('abcd').value;
    let card = document.getElementById("coluna");

    fetch(`https://api.github.com/users/${input}`).then((response) => {
        response.json().then(data => {
            if (data.message === 'Not Found' || data.message === 'undefined') {
                document.querySelector('#message1').style.display = "none";
                document.querySelector('#message2').style.display = "none";
                document.querySelector('#message3').style.display = "block";

                document.getElementById("link-home").classList.add("active");
                document.getElementById("link-user").classList.remove("active");
            } else {
                card.appendChild(linha);
                h2.innerText = data.name;
                p.innerText = data.bio;
                a.href = data.html_url;
                img.src = data.avatar_url;
                document.querySelector('#message1').style.display = "none";
                document.querySelector('#message2').style.display = "block";
                document.querySelector('#message3').style.display = "none";

                document.getElementById("link-home").classList.remove("active");
                document.getElementById("link-user").classList.add("active");
            }
        })
    });
}

function addPerfilCard() {
    fetch(`https://api.github.com/users/AnaCarolinaM`).then((response) => {
        response.json().then(data => {
            document.getElementById('img-ana').src = data.avatar_url;
            document.getElementById('user-ana').innerText = data.name;
            document.getElementById('bio-ana').innerText = data.bio;
        })
    });
    fetch(`https://api.github.com/users/Raafaelrc`).then((response) => {
        response.json().then(data => {
            document.getElementById('img-rafa').src = data.avatar_url;
            document.getElementById('user-rafa').innerText = data.name;
            document.getElementById('bio-rafa').innerText = data.bio;
        })
    });
    fetch(`https://api.github.com/users/cavalcanteromar`).then((response) => {
        response.json().then(data => {
            document.getElementById('img-rom').src = data.avatar_url;
            document.getElementById('user-rom').innerText = data.name;
            document.getElementById('bio-rom').innerText = data.bio;
        })
    });
}

addPerfilCard();