function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Seleciona o input onde será digitado os valores para pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Parar de executar o script caso o input for vazio ou for apenas um espaço
    if (!campoPesquisa || campoPesquisa == " ") {
      section.innerHTML = "Nada foi digitado do campo de busca";
      return;
    }

    // Deixando a variável com letra minúscula
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa e os elementos dos objetos
    let resultados = "";
    let linguagem = "";
    let elemento = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento do array "dados"
    for (let dado of dados) {

      // Deixando as variáveis com letra minúscula
      linguagem = dado.linguagem.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      elemento = dado.elemento.toLowerCase();
      tags = dado.tags.toLowerCase();
      
      // Condição para só executar caso tenha a palavra digitada dentro do objeto
      if (elemento.includes(campoPesquisa) || linguagem.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

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
    }

    // Codição caso não encontre nenhum resultado
    if (!resultados) {
      resultados = "Nada foi encontrado na base de dados";
    }
  
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }
