// Função para mostrar animação e modal
function mostrarAnimacao(idLivro) {
  const livro = document.getElementById(idLivro);
  
  livro.classList.add("virar");

  setTimeout(mostrarModal, 1500);
}

function mostrarModal() {
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";

  document.querySelectorAll('.livro').forEach(livro => livro.classList.remove("virar"));
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
      fecharModal();
  }
}

document.querySelectorAll(".livro").forEach((livro, index) => {
  livro.addEventListener("click", () => mostrarAnimacao(`livro${index + 1}`));
});
