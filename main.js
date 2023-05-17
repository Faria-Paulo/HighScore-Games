const nav = document.getElementById('nav');

window.addEventListener('scroll', () =>{
    if(window.scrollY >=100){
        nav.classList.add('nav_black');
    }else{
        nav.classList.remove('nav_black');
    }
})

function trocaBannerDoodleJump(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/doodle_jump2.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="doodle jump";
    document.querySelector('.banner_title').style.color="red";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Indie Flower";

    document.querySelector('.banner_discription').innerHTML="relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="red";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Indie Flower";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#game_history');
    a.href  = "doodle_jump/play/doodle_jump_play.html";
    b.href  = "doodle_jump/play/story/doodle_jump_history.html";//verificar
}

function trocaBannerFlappyBird(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/flappy_bird2.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="Flappy Bird";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="O famoso Flappy Bird, tão estressante quanto divertido!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="300";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#game_history');
    a.href  = "flappy_bird/play/flappy_bird_play.html";
    b.href  = "doodle_jump/play/story/doodle_jump_history.html";
}

function trocaBannerPong(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/pong2.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
}

function trocaBannerSnake(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/snake2.png)";
    document.querySelector('.banner_buttons').style.display="block";
}

function trocaBannerSpaceInvaders(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/space_invaders3.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
}

function trocaBannerTetris(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/tetris2.png)";
    document.querySelector('.banner_buttons').style.display="block";
}

function trocaBannerFruitNinja(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/fruit_ninja2.png)";
    document.querySelector('.banner_buttons').style.display="block";
}