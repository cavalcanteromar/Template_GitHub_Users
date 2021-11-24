//- Retorna as sugestões conforme for digitando -----------------------------------------------------------

// const onkeyUp = (event) => { 
//     var input = document.getElementById('abcd').value;
//     const minimumChars = 3;

//     let array = [
//         "Romario",
//         "Rafael",
//         "Ana",
//         "Joaquim",
//         "João",
//         "antônio",
//         "Maria",
//         "Adalberto",
//         "Marcilane",
//     ]

//     if(event.target.value.length >= minimumChars) {
//         console.log(array);
//     }




//     fetch(`https://api.github.com/users/${input}`).then((response) => {
//         response.json().then(data => {


//             Object.keys(data).forEach(function (name) {
//                 const nomes = data[name].login;
//                 console.table(nomes);
//                 for (i in nomes) {
//                     console.log(nomes[i])

//                     if (nomes[i] == input.value) {
//                         console.table('id: ', nomes);
//                     }
//                 }
//             });

//         });
//     });
// };

// document.getElementById('abcd').addEventListener('keyup', onkeyUp);


//-----------------------------------------------------------------------




var button = document.getElementById('btn-confirmar');

button.addEventListener('click', function click() {

    // valor do campo de pesquisa
    var input = document.getElementById('abcd').value;

    // spinner ---
    let div = document.querySelector('.smaecer').style.display = "flex";

    //temporizador do spinner
    setTimeout(function () {
        document.querySelector('.smaecer').style.display = "none";
    }, 600);

    //------------

    // criando os elementos HTML
    var linha = document.createElement('div');
    var div2 = document.createElement('div');
    var h2 = document.createElement('h2');
    var p = document.createElement('p');
    var img = document.createElement('img');
    var a = document.createElement('a');

    //adicionando as classes aos elementos criados
    linha.className = "card box-shadow w-card p-0 m-0";
    div2.className = "card-body";
    p.className = "card-text";
    h2.id = "h2-name";
    img.className = "card-img-top";
    a.className = "btn btn-primary w-100"

    //inserindo os elementos em seus respectivos
    div2.appendChild(h2);
    div2.appendChild(p);
    div2.appendChild(a);
    linha.appendChild(img);
    linha.appendChild(div2);

    //inserindo valor no button 
    a.innerHTML = "Ver perfil";

    //pegando o id da area onde os cards serão inseridos
    let card = document.getElementById("coluna");


    //consultando a api do github
    fetch(`https://api.github.com/users/${input}`).then((response) => {

        //retornando com os dados e atribuindo a variavel data
        response.json().then(data => {

            //condicional caso não encontre o usuário
            if (data.message === 'Not Found' || data.message === 'undefined') {
                document.querySelector('#message1').style.display = "none";
                document.querySelector('#message2').style.display = "none";
                document.querySelector('#message3').style.display = "block";

                document.getElementById("link-home").classList.add("active");
                document.getElementById("link-user").classList.remove("active");
            }

            //condicional caso encontre o usuário 
            else {

                //verificando se o usuário já foi inserido para não repetir
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


//-----------------------------------------------------------------------

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

//audio cat


var cat = document.getElementById("cat");
var audio = document.getElementById("somcat");

cat.addEventListener('click', () => {
    audio.play();
})

