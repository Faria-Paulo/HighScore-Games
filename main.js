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
}

function trocaBannerFlappyBird(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/flappy_bird2.jpg)";
}

function trocaBannerPong(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/pong2.jpg)";
}

function trocaBannerSnake(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/snake2.png)";
}

function trocaBannerSpaceInvaders(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/space_invaders3.jpg)";
}

function trocaBannerTetris(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/tetris2.png)";
}

function trocaBannerFruitNinja(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/fruit_ninja2.png)";
}