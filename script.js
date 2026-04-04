// 1. Efeito de Digitação (Typewriter)
const txtElement = document.getElementById('typing-effect');
const words = "Desenvolvedor Web";
let charIndex = 0;

function type() {
    if (charIndex < words.length) {
        txtElement.textContent += words.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Velocidade da digitação
    }
}

// 2. Revelação ao Rolar (Scroll Reveal)
// Esse Observer detecta quando os cards aparecem na tela
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Adiciona estilos para fazer o card aparecer suavemente
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1 // O efeito inicia quando 10% do card está visível
});

// Inicialização de tudo
document.addEventListener('DOMContentLoaded', () => {
    // Inicia a digitação
    type();

    // Aplica o observador em cada card
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        revealObserver.observe(card);
    });
});