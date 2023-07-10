<script>
    const BClouthes = [];
    exibirDados(BClouthes);
    function cadastrar() {
      const inputNome = document.querySelector("#inputNome");
      const inputCategoria = document.querySelector("#inputCategoria");
      const dados = {
        nome: inputNome.value,
        categoria: inputCategoria.value
      }
      BClouthes.push(dados);
      //Limpar dados
      inputNome.value = "";
      inputCategoria.value = "";
      //Fechar janela
      const m = document.querySelector("#exampleModal");
      const modal = bootstrap.Modal.getInstance(m);
      modal.hide();
      exibirDados(BClouthes);
    }

    function exibirDados(BClouthes) {
      const tbody = document.querySelector("#dadosBClouthes");

      let linhas = "";
      agenda.forEach((dado, index) => {
        linhas += `<tr>
            <td>${index + 1}</td>
            <td>${dado.nome}</td>
            <td>${dado.categoria}</td>
            <td><i class="bi bi-pencil-square" style="cursor: pointer" onclick="editarDados(${index})"></i></td>
            <td><i class="bi bi-trash" style="cursor: pointer" onclick="removerDados(${index})"></i></td>
          </tr>`;
      });

      if (linhas == "") {
        linhas = `
          <tr>
            <td colspan="5" style="text-align:center">Não há dados cadastrados</td>
          </tr>
        `;
      }

      tbody.innerHTML = linhas;
    }
    function buscarDados() {
      const filtro = document.querySelector("#search");

      const busca = BClouthes.filter(dado => dado.nome.indexOf(filtro.value) > -1 || dado.categoria.indexOf(filtro.value) > -1);

      if (filtro.value == "")
        exibirDados(BClouthes);
      else
        exibirDados(busca);

    }

    function removerDados(index) {
      const modalRemover = new bootstrap.Modal('#modalRemover');
      modalRemover.show();
      const btnRemover = document.querySelector("#remover");
      btnRemover.addEventListener("click", () => {
        BClouthes.splice(index, 1);
        modalRemover.hide();
        exibirDados(BClouthes);
      });
    }

    function editarDados(index) {
      const editNome = document.querySelector("#editNome");
      const editCategoria = document.querySelector("#editCategoria");
      editNome.value = BClouthes[index].nome;
      editCategoria.value = BClouthes[index].categoria;
      const modalEditar = new bootstrap.Modal('#editModal');
      modalEditar.show();
      const editar = document.querySelector("#editar");
      editar.addEventListener("click", () => {
        const dado = {
          nome: editNome.value,
          categoria: editCategoria.value
        };
        BClouthes[index] = dado;
        exibirDados(BClouthes);
        modalEditar.hide();
      })
    }
    const minhaPromise = new promise((resolve, reject) => {
            setTimeout (() => {
                if (sucesso) {
                    resolve("operação concluida com sucesso");
                }else {
                    reject(new error("ocorreu um erro na operação"));
                }
            }, 2000);
        });

         Promise
        .then(resultado => {
            console.log(resultado);
        })
        .catch(erro => {
            console.error(erro);
        })
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
    crossorigin="anonymous"></script>
</body>

</html>
