
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//richiamo la funzione init()
init();

//funzione init()
function init() {

    //prendo il container tramite id
    const container = document.getElementById('container');

    //svuoto container
    container.innerHTML ='';

    
    //ciclo tutto l'array dei post
    posts.forEach((post) => {

        //richiamo la funzione che mi stampa i post in modo dinamico passando come vallore post
        stampPost(post);
    });
}

//funzione stampPost() mi stampa i post nell'HTML
function stampPost(post) {

    //salvo la data rovesciata in un array
    const arrayDate = dataReverse(post.created);

    //la trasformo in stringa
    const dateStr = dataString(arrayDate);

    //sostituisco le virgole con il trattino
    const date = dateStr.replace(/,/g,"-");

    //salvo in una variabile le iniziali richiamando la funzione
    let initials = genInitials(post.author.name);

    //salvo in element HTML da stampare in pagina
    let element = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.author.image}" alt="${initials}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="${post.media}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" id="${post.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>
        </div>
    `;

    container.innerHTML += element;

    const likeBtn = document.getElementsByClassName('js-like-button');
    
    //richiamo funzione like
    btnLike(likeBtn,post.likes);
}

function dataReverse(string) {
    const arrayData = string.split('-');
    return itaData = arrayData.reverse();
}

function dataString(string) {
    return date = string.toString();
}

function genInitials(name) {

    //splitto nome e cognome in due array
    const arrayFullName = name.split(' ');
    //prendo il primo array e lo splitto a sua volta
    const arrayName = arrayFullName[0].split('');
    //prendo il secondo array e lo splitto a sua volta
    const arraySurname = arrayFullName[1].split('');
    //salvo il le iniziali
    initials = arrayName[0] + arraySurname[0];
    //return di iniziali
    return initials;
}

//non incrementa il numero dei likes
function btnLike(likeBtn) {
    for (let i = 0; i < likeBtn.length; i++) {
        likeBtn[i].addEventListener("click", function(e,i) {
            e.preventDefault();
            const postId = this.getAttribute('id');
            console.log(postId);
            this.classList.toggle('like-button--liked');
            const like = document.getElementById('like-counter-'+ postId).innerText;

            if(this.classList.includes('like-button--liked')){
                like+= 1;
            }else{
                like-= 1;
            }
        });
    }
}


/*function getMonthDiff(todayDate,imgDate) {
    let months;
    months = (todayDate.getFullYear() - imgDate.getFullYear()) * 12;
    months -= todayDate.getMonth();
    months += imgDate.getMonth();
    return months <= 0 ? 0 : months
}*/
