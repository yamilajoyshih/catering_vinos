document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el elemento del carousel
    var carouselElement = document.querySelector('#wineCarousel');
    
    // Verificar si el elemento del carousel se encuentra
    if (carouselElement) {
        console.log('Carousel element found');

        // Crear una instancia de Bootstrap Carousel
        var carousel = new bootstrap.Carousel(carouselElement);

        // Función para pasar al siguiente slide
        function goToNextSlide() {
            console.log('Next slide');
            carousel.next();
        }

        // Función para volver al slide anterior
        function goToPrevSlide() {
            console.log('Previous slide');
            carousel.prev();
        }

        // Agregar eventos a los botones de control
        var nextButton = document.querySelector('.carousel-control-next');
        var prevButton = document.querySelector('.carousel-control-prev');

        if (nextButton) {
            nextButton.addEventListener('click', goToNextSlide);
        }

        if (prevButton) {
            prevButton.addEventListener('click', goToPrevSlide);
        }

        // Agregar eventos a los enlaces del menú desplegable
        var dropdownItems = document.querySelectorAll('.dropdown-item');

        dropdownItems.forEach(function(item) {
            item.addEventListener('click', function(event) {
                event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

                // Obtener el ID de destino desde el atributo href
                var targetId = item.getAttribute('href').substring(1);

                // Encontrar el índice del slide correspondiente
                var targetSlide = document.getElementById(targetId);
                var targetIndex = Array.from(carouselElement.querySelectorAll('.carousel-item')).indexOf(targetSlide);

                if (targetIndex !== -1) {
                    // Mover el carrusel al slide correspondiente
                    carousel.to(targetIndex);
                }
            });
        });

    } else {
        console.error('Carousel element not found');
    }
});
