
     
    var view  = document.querySelector('.fa-bars');
    var cancel = document.querySelector('.fa-times');
    var links = document.querySelector('.nav-links');
    view.addEventListener ('click', ()=> {
        links.classList.toggle('nav-active');


    });
    cancel.addEventListener ('click', ()=> {
        links.classList.toggle('nav-active');

    });