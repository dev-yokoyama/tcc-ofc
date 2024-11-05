const produtos = [
    { imagem: "../img/produto8-removebg-preview.png", titulo: "Canetinha da tilibra", item: "Canetinha" },
    { imagem: "../img/produto15-removebg-preview.png", titulo: "Marcador Acrilex", item: "Marcador" },
    { imagem: "../img/produto13-removebg-preview.png", titulo: "Caderno Cambrige", item: "Caderno" },
    { imagem: "../img/produto11-removebg-preview.png", titulo: "Lapiseira", item: "Lapiseira" },
    { imagem: "../img/produto8-removebg-preview.png", titulo: "Canetinha da tilibra", item: "Canetinha" },
    { imagem: "../img/produto15-removebg-preview.png", titulo: "Marcador Acrilex", item: "Marcador" },
    { imagem: "../img/produto13-removebg-preview.png", titulo: "Caderno Cambrige", item: "Caderno" },
    { imagem: "../img/produto11-removebg-preview.png", titulo: "Lapiseira", item: "Lapiseira" },
    { imagem: "../img/produto8-removebg-preview.png", titulo: "Canetinha da tilibra", item: "Canetinha" },
    { imagem: "../img/produto15-removebg-preview.png", titulo: "Marcador Acrilex", item: "Marcador" },
    { imagem: "../img/produto13-removebg-preview.png", titulo: "Caderno Cambrige", item: "Caderno" },
    { imagem: "../img/produto11-removebg-preview.png", titulo: "Lapiseira", item: "Lapiseira" }, 

    { imagem: "../img/produto8-removebg-preview.png", titulo: "Canetinha da tilibra", item: "Canetinha" },
    { imagem: "../img/produto15-removebg-preview.png", titulo: "Marcador Acrilex", item: "Marcador" },
    { imagem: "../img/produto13-removebg-preview.png", titulo: "Caderno Cambrige", item: "Caderno" },
    { imagem: "../img/produto11-removebg-preview.png", titulo: "Lapiseira", item: "Lapiseir1" },
  ];
  
  const itensPorPagina = 12; 
  let paginaAtual = 1;
  
  function renderizarProdutos() {
    const cardLista = document.getElementById('card-lista');
    cardLista.innerHTML = ''; 
  
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const produtosPagina = produtos.slice(inicio, fim);
  
    produtosPagina.forEach(produto => {
      const li = document.createElement('li');
      li.className = 'card-item';
      li.innerHTML = `
        <a class="card-link" href="#">
          <img class="card-imagem" src="${produto.imagem}" alt="${produto.titulo}">
          <p class="item">${produto.item}</p>
          <h2 class="card-titulo">${produto.titulo}</h2>
          <button class="card-button"><i class="bi bi-arrow-right"></i></button>
        </a>
      `;
      cardLista.appendChild(li);
    });
  
    atualizarBotoesPaginacao();
  }
  
  function atualizarBotoesPaginacao() {
    const totalPaginas = Math.ceil(produtos.length / itensPorPagina);
  
    document.getElementById('anterior').disabled = paginaAtual === 1;
    document.getElementById('proxima').disabled = paginaAtual === totalPaginas;
  }
  
  function paginaAnterior() {
    if (paginaAtual > 1) {
      paginaAtual--;
      renderizarProdutos();
    }
  }
  
  function proximaPagina() {
    const totalPaginas = Math.ceil(produtos.length / itensPorPagina);
    if (paginaAtual < totalPaginas) {
      paginaAtual++;
      renderizarProdutos();
    }
  }
  
  renderizarProdutos();
  