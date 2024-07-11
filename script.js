document.querySelectorAll('.carousel-button').forEach(button => {
    button.addEventListener('click', function() {
        const offset = button.classList.contains('right') ? 1 : -1;
        const carousel = button.parentElement.querySelector('.project-carousel, .certifications-carousel');
        const activeElements = carousel.querySelectorAll('.active');
        
        let newIndex;
        if (activeElements.length > 0) {
            const currentIndex = [...carousel.children].indexOf(activeElements[0]);
            newIndex = currentIndex + offset;
            if (newIndex < 0) newIndex = carousel.children.length - 1;
            if (newIndex >= carousel.children.length) newIndex = 0;
        } else {
            newIndex = offset > 0 ? 0 : carousel.children.length - 1;
        }

        activeElements.forEach(element => element.classList.remove('active'));
        carousel.children[newIndex].classList.add('active');
    });
});

const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");

document.querySelectorAll('.project-card, .certification-card').forEach(card => {
    card.addEventListener('click', function() {
        modal.style.display = "block";
        // Aqui você pode atualizar o conteúdo do modal com as informações do card clicado
    });
});

closeButton.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


