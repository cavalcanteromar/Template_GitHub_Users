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

    linha.className = "col card box-shadow w-card p-0 m-0";
    div2.className = "card-body";
    p.className = "card-text";
    img.className = "card-img-top img_card";

    div2.appendChild(h2);
    div2.appendChild(p);
    linha.appendChild(img);
    linha.appendChild(div2);

    var input = document.getElementById('abcd').value;
    let card = document.getElementById("coluna");

    fetch(`https://api.github.com/users/${input}`).then((response) => {
        response.json().then(data => {
            if (data.message === 'Not Found' || data.message === 'undefined') {
                document.querySelector('#message2').style.display = "none";
                document.querySelector('#message3').style.display = "block";
            } else {
                card.appendChild(linha);
                h2.innerText = data.name;
                p.innerText = data.bio;
                img.src = data.avatar_url;
                document.querySelector('#message1').style.display = "none";
                document.querySelector('#message2').style.display = "block";
                document.querySelector('#message3').style.display = "none";
            }
        })
    });
}