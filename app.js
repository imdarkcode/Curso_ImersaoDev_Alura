function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';
  
    // Itera sobre cada elemento do array 'dados'
    for (let dado of dados) {
      // Constrói o HTML para cada resultado, incluindo:
      // - Título com o elemento e a linguagem
      // - Descrição do elemento
      // - Link para mais informações
      resultados += `
        <div class="item-resultado">
          <h2>${dado.elemento} | ${dado.linguagem}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Descubra mais</a>
        </div>`;
    }
  
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }
