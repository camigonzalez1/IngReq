document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // Navegación por pestañas
    // ============================
    const tabButtons = document.querySelectorAll(".tabbtn");
    const panels = document.querySelectorAll(".panel");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {

            tabButtons.forEach(btn => btn.classList.remove("active"));
            panels.forEach(panel => panel.classList.remove("active"));

            button.classList.add("active");

            const target = document.getElementById(button.dataset.tab);

            if (target) {
                target.classList.add("active");
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    });

    // ============================
    // TP Integrador
    // ============================

    let tpVisible = false;

    const tpSwitch = document.getElementById("tp-switch");
    const tpLabel = document.getElementById("tp-toggle-label");
    const tpHidden = document.getElementById("tp-hidden");
    const tpContent = document.getElementById("tp-content");
    const tpToggle = document.getElementById("tp-toggle");

    function renderTP() {

        tpSwitch.classList.toggle("on", tpVisible);

        tpLabel.textContent = tpVisible
            ? "Sección visible"
            : "Sección oculta";

        tpHidden.style.display = tpVisible
            ? "none"
            : "block";

        tpContent.style.display = tpVisible
            ? "block"
            : "none";
    }

    if (tpToggle) {
        tpToggle.addEventListener("click", () => {
            tpVisible = !tpVisible;
            renderTP();
        });
    }

    renderTP();

});