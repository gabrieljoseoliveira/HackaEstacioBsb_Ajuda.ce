function addHipo() {

    const div = document.querySelector(`.a3`);

    div.innerHTML = `
<h3 style="padding-bottom: 20px">Cadastrar hipossuficiente</h3>
    <form>
        <label for="nome">
            <input required type="text" name="nome" placeholder="Nome*">
        </label>
        <label for="CPF">
            <input required type="text" name="CPF" placeholder="CPF*">
        </label>
        <label for="CEP">
            <input required type="text" name="CEP" placeholder="CEP*">
        </label>
        <label for="Telefone">
            <input required type="text" name="Telefone" placeholder="Telefone">
        </label>
        <label for="eMail">
            <input required type="text" name="eMail" placeholder="E-Mail">
        </label>
        <a style="text-decoration: none" href="index.html"><button type="submit">Cadastrar</button></a>
    </form>
<p>Campos com asterisco (*)<br> são obrigatórios.</p>
<button onclick="voltar()">Voltar</button>`;

}