/*  Constantes e variáveis  */



/*  Escurecer o Nav  */
const nav = document.getElementById('nav');



/*  slider horizontal arrastar */
const slider = document.querySelector('.row_posters');
const slider2 = document.querySelector('.row_posters2');
const slider3 = document.querySelector('.row_posters3');
let isDown = false;
let startX;
let ScrollLeft;


/*  Funções  */



/*  Escurecer o Nav  */
window.addEventListener('scroll', () =>{
    if(window.scrollY >=100){
        nav.classList.add('nav_black');
    }else{
        nav.classList.remove('nav_black');
    }
})


/*  Slider horizontal arrastar (Primeira div) */
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX);
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x -startX) * 3; //caso esteja a rolagem esteja muito rápida, tirar o multiplicador 3
    slider.scrollLeft = scrollLeft - walk;
});


/*  Slider horizontal arrastar (Segunda div)  const slider2 e class row_posters2*/
slider2.addEventListener('mousedown', (e) => {
    isDown = true;
    slider2.classList.add('active');
    startX = e.pageX - slider2.offsetLeft;
    scrollLeft = slider2.scrollLeft;
    console.log(startX);
});

slider2.addEventListener('mouseleave', () => {
    isDown = false;
    slider2.classList.remove('active');
    
});

slider2.addEventListener('mouseup', () => {
    isDown = false;
    slider2.classList.remove('active');
});

slider2.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x -startX) * 3; //caso esteja a rolagem esteja muito rápida, tirar o multiplicador 3
    slider2.scrollLeft = scrollLeft - walk;
});

/*  Slider horizontal arrastar (Terceira div) const slider3 e class row_posters3  */
slider3.addEventListener('mousedown', (e) => {
    isDown = true;
    slider3.classList.add('active');
    startX = e.pageX - slider3.offsetLeft;
    scrollLeft = slider3.scrollLeft;
    console.log(startX);
});

slider3.addEventListener('mouseleave', () => {
    isDown = false;
    slider3.classList.remove('active');
    
});

slider3.addEventListener('mouseup', () => {
    isDown = false;
    slider3.classList.remove('active');
});

slider3.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider3.offsetLeft;
    const walk = (x -startX) * 3; //caso esteja a rolagem esteja muito rápida, tirar o multiplicador 3
    slider3.scrollLeft = scrollLeft - walk;
});





/*  Funções para troca de banner de destaque  */
function trocaBannerBlackJack(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/black_jack2.png)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "black_jack/index.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerDelta(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/delta4.jpeg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "delta_master/index.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerRaceMaster(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/outrun3.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "race_master/v4.final.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerRoadFighter(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/black_jack2.png)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "road_fighter/game.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerDoodleJump(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/doodle_jump2.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br>";
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";
    document.querySelector('.banner_title').style.fontFamily="Arial";

    document.querySelector('.banner_discription').innerHTML="<br>relemebre a nostalgia de 2014 de quando jogava doodle jump com seus amigos!";
    document.querySelector('.banner_discription').style.color="black";
    document.querySelector('.banner_discription').style.fontWeight="300";
    document.querySelector('.banner_discription').style.fontFamily="Arial";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "doodle_jump/play/doodle_jump_play.html";
    b.href  = "doodle_jump/story/story.html";
}

function trocaBannerFlappyBird(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/flappy_bird4.jpg)";
    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br><br>O famoso Flappy Bird, tão estressante quanto divertido!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "flappy_bird/play/flappy_bird_play.html";
    b.href  = "flappy_bird/story/story.html";
}

function trocaBannerPong(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/pong4.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Conhecido por ser o primeiro jogo eletrônico criado, jogue agora!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "pong/play/pong_play.html";
    b.href  = "pong/story/story.html";
}

function trocaBannerSnake(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/snake4.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Lembra do Nokia e seu jogo da cobrinha? Mate essa saudade!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "snake/play/snake.html";
    b.href  = "snake/story/story.html";
}

function trocaBannerSpaceInvaders(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/space_invaders3.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Quando se pensa em arcade, esse é o jogo que vem em mente!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "space_invaders/play/index.html";
    b.href  = "space_invaders/story/story.html";
}

function trocaBannerTetris(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/tetris6.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Divertidamente viciante, clássico dos clássicos!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "tetris/play/index.html";
    b.href  = "tetris/story/story.html";
}

function trocaBannerFruitNinja(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/fruit_ninja2.png)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>O vicio de todos que um dia tiveram um Galaxy Pocket!";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "fruit_ninja/play/index.html";
    b.href  = "fruit_ninja/story/story.html";
}

function trocaBannerPacMan(){
    document.getElementById('banner').style.backgroundImage="url(img/posters/pac_man3.jpg)";
    document.querySelector('.banner_buttons').style.display="block";

    document.querySelector('.banner_title').innerHTML="<br><br><br>";
    document.querySelector('.banner_title').style.fontFamily='arial';
    document.querySelector('.banner_title').style.color="white";
    document.querySelector('.banner_title').style.fontWeight="200";

    document.querySelector('.banner_discription').innerHTML="<br>Come-come";
    document.querySelector('.banner_discription').style.fontFamily="arial";
    document.querySelector('.banner_discription').style.color="white";
    document.querySelector('.banner_discription').style.fontWeight="600";

    const a = document.querySelector('#game_link');
    const b = document.querySelector('#history_link');
    a.href  = "pac-man/pacman/index.html";
    b.href  = "fruit_ninja/story/story.html";
}

/*  função clique e jogue  */

function jogarBlackJack(){
    window.open("black_jack/index.html");
}

function jogarDelta(){
    window.open("delta_master/index.html");
}

function jogarDoodleJump(){
    window.open("doodle_jump/play/doodle_jump_play.html");
}

function jogarFlappyBird(){
    window.open("flappy_bird/play/flappy_bird_play.html");
}

function jogarFruitNinja(){
    window.open("fruit_ninja/play/index.html");
}

function jogarPacMan(){
    window.open("pac-man/pacman/index.html");
}

function jogarPong(){
    window.open("pong/play/pong_play.html");
}

function jogarRaceMaster(){
    window.open("race_master/v4.final.html");
}

function jogarRoadFighter(){
    window.open("road_fighter/game.html");
}

function jogarSnake(){
    window.open("snake/play/snake.html");
}

function jogarSpaceInvaders(){
    window.open("space_invaders/play/index.html");
}

function jogarTetris(){
    window.open("tetris/play/index.html");
}
