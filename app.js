// nav toggle

let links = document.querySelectorAll('.navbar__item_link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('navbar__item_link-active'));
        link.classList.add('navbar__item_link-active');
    })
})

// toggle navbar
const toggleBtn = document.querySelector('.navbar__button_toggle');
const ul = document.querySelector('.navbar__links_container');

toggleBtn.addEventListener('click',  () => {
    toggleBtn.classList.toggle('navbar__button_toggle-active');
    ul.classList.toggle('navbar__button_toggle-active');
})

// project cards open and close function

let projects = document.querySelectorAll('.project-card');

projects.forEach((card, index) => {

    let closeBtn = card.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        projects.forEach((item, i) => {
            item.classList.remove('blur');
        })
        card.classList.remove('active');
    })

    card.addEventListener('click', (e) => {
        if(e.srcElement != closeBtn) {
            projects.forEach((item, i) => {
                if(i != index) {
                    item.classList.add('blur');
                }
            })
            card.classList.add('active');
        }
    })
})

// project filter function

const tags = document.querySelectorAll('.project__filter .button');

tags.forEach(btn => {
    btn.addEventListener('click', () => {
        projects.forEach(card => {
            if(btn.innerHTML.toLowerCase() == 'all') {
                card.style.display = 'block';
            } else {
                if(card.getAttribute('data-tags').includes(btn.innerHTML.toLowerCase())) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        })

        tags.forEach(item => item.classList.remove('button__state_active'))
        btn.classList.add('button__state_active')
    })
})