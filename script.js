// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll("nav ul li a");

// Adiciona um manipulador de eventos de clique a cada link do menu
menuLinks.forEach(link => {
  link.addEventListener("click", event => {
    // Remove a classe "active" de todos os itens do menu
    menuLinks.forEach(link => {
      link.parentElement.classList.remove("active");
    });
    // Adiciona a classe "active" ao item do menu clicado
    event.target.parentElement.classList.add("active");
  });
});
function openPopup() {
  // Seleciona o elemento do pop-up
  const popup = document.getElementById("popup");
  
  // Define a opacidade inicial como zero
  popup.style.opacity = "0";
  
  // Define o estilo de exibição do pop-up como flexível
  popup.style.display = "flex";
  
  // Define uma animação de transição para o efeito de aparecimento
  popup.style.transition = "opacity 0.5s ease-in-out";
  
  // Define a opacidade final como 1
  popup.style.opacity = "1";
}
