const form = document.getElementById("form-treino");

let treinos = JSON.parse(localStorage.getItem("treinos")) || [];

let indexEditando = null;

// Renderizar cards
function renderizarTabela() {
  const lista = document.getElementById("lista-cards");
  lista.innerHTML = "";

  const mensagem = document.getElementById("mensagem-vazia");

  if (treinos.length === 0) {
    mensagem.style.display = "block";
    return;
  } else {
    mensagem.style.display = "none";
  }

  treinos.forEach((t, index) => {
    lista.innerHTML += `
      <div class="card">
        <p><strong>📅 Data:</strong> ${t.data}</p>
        <p><strong>🏃 Distância:</strong> ${t.distancia} km</p>
        <p><strong>⏱ Tempo:</strong> ${t.tempo} min</p>
        <p><strong>⚡ Pace:</strong> ${t.pace} min/km</p>

        <div class="card-buttons">
          <button onclick="excluirTreino(${index})">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button onclick="abrirModal(${index})">
            <i class="fa-solid fa-pen"></i>
          </button>
        </div>
      </div>
    `;
  });
}

// Adicionar treino
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = document.getElementById("data").value;
  const distancia = parseFloat(document.getElementById("distancia").value);
  const tempo = parseFloat(document.getElementById("tempo").value);

  if (!data || !distancia || !tempo) {
    alert("Preencha todos os campos!");
    return;
  }

  const pace = (tempo / distancia).toFixed(2);

  const treino = {
    data,
    distancia,
    tempo,
    pace,
  };

  treinos.push(treino);

  localStorage.setItem("treinos", JSON.stringify(treinos));

  renderizarTabela();

  form.reset();
});

// Excluir
function excluirTreino(index) {
  if (confirm("Tem certeza que deseja excluir?")) {
    treinos.splice(index, 1);
    localStorage.setItem("treinos", JSON.stringify(treinos));
    renderizarTabela();
  }
}

// Modal
function abrirModal(index) {
  const treino = treinos[index];

  indexEditando = index;

  document.getElementById("edit-data").value = treino.data;
  document.getElementById("edit-distancia").value = treino.distancia;
  document.getElementById("edit-tempo").value = treino.tempo;

  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Salvar edição
function salvarEdicao() {
  const data = document.getElementById("edit-data").value;
  const distancia = parseFloat(document.getElementById("edit-distancia").value);
  const tempo = parseFloat(document.getElementById("edit-tempo").value);

  const pace = (tempo / distancia).toFixed(2);

  treinos[indexEditando] = {
    data,
    distancia,
    tempo,
    pace
  };

  localStorage.setItem("treinos", JSON.stringify(treinos));

  fecharModal();
  renderizarTabela();
}

// Inicializar
renderizarTabela();