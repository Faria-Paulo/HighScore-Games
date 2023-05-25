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
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "black_jack/index.html";
    
}

function trocaBannerDelta(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/delta4.jpeg)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "delta_master/index.html";
    
}

function trocaBannerRaceMaster(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/outrun3.jpg)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "race_master/v4.final.html";
    
}

function trocaBannerRoadFighter(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/outrun3.jpg)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "road_fighter/game.html";
    
}

function trocaBannerDoodleJump(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/doodle_jump2.jpg)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "doodle_jump/play/doodle_jump_play.html";
    
}

function trocaBannerFlappyBird(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/flappy_bird4.jpg)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "flappy_bird/play/flappy_bird_play.html";
    
}

function trocaBannerPong(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/pong4.png)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "pong/play/pong_play.html";
    
}

function trocaBannerSnake(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/snake4.png)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "snake/play/snake.html";
    
}

function trocaBannerSpaceInvaders(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/space_invaders3.png)";
    document.getElementById('banner').style.backgroundPosition="20% center";

    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "space_invaders/play/index.html";
    
}

function trocaBannerTetris(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/tetris5.jpg)";
    document.getElementById('banner').style.backgroundPosition="center, 20%";


    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "tetris/play/index.html";
    
}

function trocaBannerFruitNinja(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/fruit_ninja2.png)";
    document.getElementById('banner').style.backgroundPosition="20% center";


    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "fruit_ninja/play/index.html";
    
}

function trocaBannerPacMan(){

    document.getElementById('banner').style.backgroundImage="url(img/posters/pac_man3.jpg)";
    document.getElementById('banner').style.backgroundPosition="20% center";


    document.querySelector('.banner_buttons').style.display="block";
    document.querySelector('.banner_buttons').style.marginTop="-150px";

    document.querySelector('.banner_title').innerHTML="<br><br>";
    
    document.querySelector('.banner_discription').style.color="";
    document.querySelector('.banner_discription').style.fontSize="0.62rem";
    document.querySelector('.banner_discription').style.width="40vw";
    document.querySelector('.banner_discription').style.maxWidth="500px";
    document.querySelector('.banner_discription').style.lineHeight="1.8";
    document.querySelector('.banner_discription').innerHTML="<br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo repudiandae eveniet at ab dolor deleniti repellat consequuntur quidem a, explicabo, exercitationem laudantium. Cupiditate, quo, voluptatibus cum minima tenetur quibusdam deserunt omnis et perspiciatis amet ad odio, incidunt eius modi? Corrupti illum ipsa quo nihil iusto maiores, dicta voluptas quasi non!";

    document.querySelector('.banner_fade').style.marginTop="-400px";

    const a = document.querySelector('#game_link');
    a.href  = "pac-man/pacman/index.html";
    
}




/*  função clique e jogue  */

//possibilidade de criar uma única função com if ou switch

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
