/***************/
/*PAINTS SCRIPT*/
/***************/

/* this code is so loquacious :(  but i can't write a better solution yet*/
let paintDescriptions = document.getElementsByClassName('paint-description');

let red = document.getElementById('p-red');
let dred = document.getElementById("d-red");
red.onclick = function() {
	for (let i = 0; i < 8; i++) {
		paintDescriptions[i].style.display = "none";
	}
    dred.style.display = "block";
    dred.style.animationName = 'fadeIn';
    dred.style.animationDuration = '0.5s';
};
dred.onclick = function(){
    dred.style.animationName = 'fadeOut';
    dred.style.animationDuration = '0.5s';
    dred.style.animationFillMode = 'forwards'
};

let black = document.getElementById('p-black');
let dblack = document.getElementById("d-black");
black.onclick = function() {
	for (let i = 0; i < 8; i++) {
		paintDescriptions[i].style.display = "none";
	}
    dblack.style.display = "block";
    dblack.style.animationName = 'fadeIn';
    dblack.style.animationDuration = '0.5s';
};
dblack.onclick = function(){
    dblack.style.animationName = 'fadeOut';
    dblack.style.animationDuration = '0.5s';
    dblack.style.animationFillMode = 'forwards'
};


let brown = document.getElementById('p-brown');
let dbrown = document.getElementById("d-brown");
brown.onclick = function() {
	for (let i = 0; i < 8; i++) {
		paintDescriptions[i].style.display = "none";
	}
    dbrown.style.display = "block";
    dbrown.style.animationName = 'fadeIn';
    dbrown.style.animationDuration = '0.5s';
};
dbrown.onclick = function(){
    dbrown.style.animationName = 'fadeOut';
    dbrown.style.animationDuration = '0.5s';
    dbrown.style.animationFillMode = 'forwards'
};


let yellow = document.getElementById('p-yellow');
let dyellow = document.getElementById("d-yellow");
yellow.onclick = function() {
	for (let i = 0; i < 8; i++) {
		paintDescriptions[i].style.display = "none";
	}
    dyellow.style.display = "block";
    dyellow.style.animationName = 'fadeIn';
    dyellow.style.animationDuration = '0.5s';
};
dyellow.onclick = function(){
    dyellow.style.animationName = 'fadeOut';
    dyellow.style.animationDuration = '0.5s';
    dyellow.style.animationFillMode = 'forwards'
};


let purple = document.getElementById('p-purple');
let dpurple = document.getElementById("d-purple");
purple.onclick = function() {
	for (let i = 0; i < 8; i++) {
		paintDescriptions[i].style.display = "none";
	}
    dpurple.style.display = "block";
    dpurple.style.animationName = 'fadeIn';
    dpurple.style.animationDuration = '0.5s';
};
dpurple.onclick = function(){
    dpurple.style.animationName = 'fadeOut';
    dpurple.style.animationDuration = '0.5s';
    dpurple.style.animationFillMode = 'forwards'
};


let blue = document.getElementById('p-blue');
let dblue = document.getElementById("d-blue");
blue.onclick = function() {
	for (let i = 0; i < 8; i++) {
		paintDescriptions[i].style.display = "none";
	}
    dblue.style.display = "block";
    dblue.style.animationName = 'fadeIn';
    dblue.style.animationDuration = '0.5s';
};
dblue.onclick = function(){
    dblue.style.animationName = 'fadeOut';
    dblue.style.animationDuration = '0.5s';
    dblue.style.animationFillMode = 'forwards'
};


let green = document.getElementById('p-green');
let dgreen = document.getElementById("d-green");
green.onclick = function() {
	for (let i = 0; i < 8; i++) {
		paintDescriptions[i].style.display = "none";
	}
    dgreen.style.display = "block";
    dgreen.style.animationName = 'fadeIn';
    dgreen.style.animationDuration = '0.5s';
};
dgreen.onclick = function(){
    dgreen.style.animationName = 'fadeOut';
    dgreen.style.animationDuration = '0.5s';
    dgreen.style.animationFillMode = 'forwards'
};


let white = document.getElementById('p-white');
let dwhite = document.getElementById("d-white");
white.onclick = function() {
	for (let i = 0; i < 8; i++) {
		paintDescriptions[i].style.display = "none";
    }
    dwhite.style.display = "block";
    dwhite.style.animationName = 'fadeIn';
    dwhite.style.animationDuration = '0.5s';
};
dwhite.onclick = function(){
    dwhite.style.animationName = 'fadeOut';
    dwhite.style.animationDuration = '0.5s';
    dwhite.style.animationFillMode = 'forwards'
};



/***************/
/*BRUSHES SCRIPT*/
/***************/

/*maybe figure this out later*/

let b1 = document.getElementById('b1')
let d1 = document.getElementById('d1');
b1.onclick = function(){
    b1.classList.toggle('moveup');
    d1.classList.toggle('appear');
};

let b2 = document.getElementById('b2')
let d2 = document.getElementById('d2');
b2.onclick = function(){
    b2.classList.toggle('moveup');
    d2.classList.toggle('appear')
};

let b3 = document.getElementById('b3')
let d3 = document.getElementById('d3');
b3.onclick = function(){
    b3.classList.toggle('moveup');
    d3.classList.toggle('appear')
};

let b4 = document.getElementById('b4')
let d4 = document.getElementById('d4');
b4.onclick = function(){
    b4.classList.toggle('moveup');
    d4.classList.toggle('appear')
};

let b5 = document.getElementById('b5')
let d5 = document.getElementById('d5');
b5.onclick = function(){
    b5.classList.toggle('moveup');
    d5.classList.toggle('appear')
};

let b6 = document.getElementById('b6')
let d6 = document.getElementById('d6');
b6.onclick = function(){
    b6.classList.toggle('moveup');
    d6.classList.toggle('appear')
};

let b7 = document.getElementById('b7')
let d7 = document.getElementById('d7');
b7.onclick = function(){
    b7.classList.toggle('moveup');
    d7.classList.toggle('appear')
};



/***************/
/*HOME SCRIPT*/
/***************/

/*got this from stackoverflow https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click/18071231*/
$(".one").click(function() {
     $('html,body').animate({
        scrollTop: $("#brushes").offset().top},
        'slow');
});
$(".two").click(function() {
    $('html,body').animate({
       scrollTop: $("#paints").offset().top},
       'slow');
});
$(".three").click(function() {
    $('html,body').animate({
       scrollTop: $("#techniques").offset().top},
       'slow');
});
$("h2").click(function() {
    $('html,body').animate({
       scrollTop: $("#home").offset().top},
       'slow');
});
$(".nav-home").click(function() {
    $('html,body').animate({
       scrollTop: $("#home").offset().top},
       'slow');
});
$(".nav-brushes").click(function() {
    $('html,body').animate({
       scrollTop: $("#brushes").offset().top},
       'slow');
});
$(".nav-paints").click(function() {
    $('html,body').animate({
       scrollTop: $("#paints").offset().top},
       'slow');
});
$(".nav-techniques").click(function() {
    $('html,body').animate({
       scrollTop: $("#techniques").offset().top},
       'slow');
});



/***************/
/*TECHNIQUES SCRIPT*/
/***************/
$(".outer-card").flip();