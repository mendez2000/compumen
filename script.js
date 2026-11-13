
// ======================================
// COMPUMEN - JAVASCRIPT
// ======================================


// ESPERAR A QUE CARGUE EL DOCUMENTO

document.addEventListener("DOMContentLoaded", () => {


    // ======================================
    // MENÚ DE NAVEGACIÓN RESPONSIVE
    // ======================================

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Función para abrir y cerrar el menú

    function toggleMenu(forceClose = false) {

        if (!menuToggle || !navMenu) return;

        if (forceClose) {
            navMenu.classList.remove("active");
        } else {
            navMenu.classList.toggle("active");
        }

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

        // Cambiar icono del botón

        menuToggle.textContent = isOpen ? "✕" : "☰";

    }


    // Abrir o cerrar al presionar el botón

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            toggleMenu();
        });


        // Cerrar al seleccionar una sección

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {
                toggleMenu(true);
            });

        });


        // Cerrar al hacer clic fuera del menú

        document.addEventListener("click", (event) => {

            const clickInsideMenu = navMenu.contains(event.target);
            const clickOnButton = menuToggle.contains(event.target);

            if (!clickInsideMenu && !clickOnButton) {
                toggleMenu(true);
            }

        });


        // Cerrar con la tecla ESC

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                toggleMenu(true);
                menuToggle.focus();
            }

        });


        // Cerrar menú al cambiar a pantalla grande

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {
                toggleMenu(true);
            }

        });

    }


    // ======================================
    // AÑO AUTOMÁTICO DEL PIE DE PÁGINA
    // ======================================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


  
 

});
