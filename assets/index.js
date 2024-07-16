window.sr = ScrollReveal();
//crea eventos de tipo scroll 

/*
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 2000 });

*/
sr.reveal('.navini', {
    delay: 1000,
    origin: 'right',
    distance: '-400px',
});

sr.reveal('.navnav', {
    duration: 3000,
    origin: 'left',
    distance: '-400px'
});

sr.reveal('.welcome', {
    duration: 3000,
    origin: 'bottom',
    distance: '-400px'
});

sr.reveal('.card', {
    duration: 2000,
    origin: '',
    distance: '-400px'
});
sr.reveal('.card-textP',{
    duration: 3000,
    origin: 'left',
    distance: '-400px'
});

sr.reveal('.card-textH',{
    duration: 3000,
    origin: 'left',
    distance: '-400px'
});
//
sr.reveal('.title-two', {
    delay: 1400,
});

sr.reveal('#d-one',{
    duration: 2500,
    origin:'left',
    distance: '-300px'
});
sr.reveal('#d-two',{
    duration: 2500,
    origin:'bottom',
    distance: '-300px'
});
sr.reveal('#d-three',{
    duration: 2500,
    origin:'right',
    distance: '-210px'
});
sr.reveal('.sec-four',{
    duration: 3500,
    origin:'bottom',
    distance: '-210px'
});
sr.reveal('.infoGroup',{
    duration: 1000,
    distance: '-70px'
});