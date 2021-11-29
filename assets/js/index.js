var button = document.getElementById('btn-confirmar');

button.addEventListener('click', function click() {
    var input = document.getElementById('abcd').value;
    let div = document.querySelector('.smaecer').style.display = "flex";

    setTimeout(function () {
        document.querySelector('.smaecer').style.display = "none";
    }, 600);

    document.querySelector("#link-home").classList.remove("active");
    document.querySelector("#link-user").classList.add("active");    
    

    var linha = document.createElement('div');
    var div2 = document.createElement('div');
    var h2 = document.createElement('h2');
    var p = document.createElement('p');
    var img = document.createElement('img');
    var a = document.createElement('a');

    linha.className = "card box-shadow w-card p-0 m-0";
    div2.className = "card-body";
    p.className = "card-text";
    h2.id = "h2-name";
    img.className = "card-img-top";
    a.className = "btn btn-primary w-100"

    div2.appendChild(h2);
    div2.appendChild(p);
    div2.appendChild(a);
    linha.appendChild(img);
    linha.appendChild(div2);

    a.innerHTML = "Ver perfil";
    let card = document.getElementById("coluna");


    fetch(`https://api.github.com/users/${input}`).then((response) => {

        response.json().then(data => {

            if (data.message === 'Not Found' || data.message === 'undefined') {
                document.querySelector('#message1').style.display = "none";
                document.querySelector('#message2').style.display = "none";
                document.querySelector('#message3').style.display = "block";

                document.getElementById("link-home").classList.add("active");
                document.getElementById("link-user").classList.remove("active");
            }

            else {

                if (data.name != document.getElementById('h2-name')) {
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
            }

        })
    });
});


function addPerfilCard() {
    fetch(`https://api.github.com/users/AnaCarolinaM`).then((response) => {
        response.json().then(data => {
            document.getElementById('img-ana').src = data.avatar_url;
            document.getElementById('user-ana').innerText = data.name;
            var bio = document.getElementById('bio-ana');
            if (!data.bio) {
                bio.innerText = "Sem Biografia";
            } else if (data.bio) {
                bio.innerText = data.bio;
            }
        })
    });
    fetch(`https://api.github.com/users/Raafaelrc`).then((response) => {
        response.json().then(data => {
            document.getElementById('img-rafa').src = data.avatar_url;
            document.getElementById('user-rafa').innerText = data.name;
            var bio = document.getElementById('bio-rafa');
            if (!data.bio) {
                bio.innerText = "Sem Biografia";
            } else if (data.bio) {
                bio.innerText = data.bio;
            }
        })
    });
    fetch(`https://api.github.com/users/cavalcanteromar`).then((response) => {
        response.json().then(data => {
            document.getElementById('img-rom').src = data.avatar_url;
            document.getElementById('user-rom').innerText = data.name;
            var bio = document.getElementById('bio-rom');
            if (!data.bio) {
                bio.innerText = "Sem Biografia";
            } else if (data.bio) {
                bio.innerText = data.bio;
            }
        })
    });
}

addPerfilCard();

