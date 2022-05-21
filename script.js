function consultaEndereco() {
    let cep = document.querySelector('#cep').value;

    //Validando qtd de digitos do cep
    if (cep.length !== 8) {
        alert('CEP Inválido!');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(mostrarEndereco)
    });

    function mostrarEndereco(dados) {
        let resultado = document.querySelector('#resultado');

        if (dados.erro) {
            resultado.innerHTML ="Não foi possível localizar endereço!";
        }else{
            resultado.innerHTML =  `<p>Endereco: ${dados.logradouro}</p>
                                    <p>Complemento: ${dados.complemento}</p>
                                    <p>Bairro: ${dados.bairro}</p>
                                    <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
        }
    }
}