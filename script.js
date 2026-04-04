document.addEventListener("DOMContentLoaded", () => {

    // ===== TEXTO DIGITANDO =====
    const txtElement = document.getElementById('typing-effect');
    const words = "Desenvolvedor Web";
    let charIndex = 0;

    function type() {
        if (charIndex < words.length) {
            txtElement.textContent += words.charAt(charIndex);
            charIndex++;
            setTimeout(type, 80);
        }
    }

    type();

    // ===== ANIMAÇÃO DOS CARDS =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.card').forEach(card => observer.observe(card));

    // ===== MODAL FOTO =====
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const fotoPerfil = document.querySelector(".foto-perfil");
    const closeBtn = document.querySelector(".close");

    if (fotoPerfil && modal && modalImg && closeBtn) {

        // abrir
        fotoPerfil.addEventListener("click", () => {
            modal.classList.add("active");
            modalImg.src = fotoPerfil.src;
        });

        // fechar botão
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });

        // fechar clicando fora
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }

});