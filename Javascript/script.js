// function du thème
// menu burger

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');
    

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    })
}

menuMobile();

/* Portfolio */

function tabsFilters(){
 const tabs = document.querySelectorAll('.portfolio-filter a');
 const projets = document.querySelectorAll('.portfolio .card');

 const resetActiveLinks = () => {
    tabs.forEach(elem => {
        elem.classList.remove('active');
    })
 }

 const showProjects = (elem) => {
    projets.forEach(projet => {
        let filter = projet.getAttribute('data-category');

        if (elem === 'all') {
            projet.parentNode.classList.remove('hide');
            return;
        }

    filter !== elem ? projet.parentNode.classList.add('hide') :  projet.parentNode.classList.remove('hide'); 
    });
 }
 tabs.forEach(elem => {
    elem.addEventListener('click',(event) =>{
        event.preventDefault();
        let filter = elem.getAttribute('data-filter');
        showProjects(filter)
        resetActiveLinks();
        elem.classList.add('active');
    })
 })

}

tabsFilters();

function showProjectDetails (){
    const links = document.querySelectorAll('.card_link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal_close');
    
    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    links.forEach(elem => {
        elem.addEventListener('click', (event) =>{
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');

            
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (event) =>{
           hideModals();

            
        });
    });
}
showProjectDetails();

/* Formulaire via methode AJAX, utiliser la variable result et l'integrer dans une div pour pouvoir l'afficher dans le HTML

async function PhpResponse() {
    

     let form = document.querySelector('.form');

    form.addEventListener('submit' , (event) =>{
    event.preventDefault();

    let fullForm = new FormData(form);

    const response = await fetch("contact.php", {
        method: "POST",
        body: fullForm
    });

    let result = await response.text();
    console.log(result);

     });

    }
     */