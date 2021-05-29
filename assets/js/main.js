function ajudar() {

    const div = document.querySelector(`.a2`);

    div.innerHTML = `
<h3 style="padding-bottom: 20px">Ajudante</h3>
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
            <input required type="text" name="Telefone" placeholder="Telefone*">
        </label>
        <label for="eMail">
            <input required type="text" name="eMail" placeholder="E-Mail*">
        </label>
        <label for="Senha">
            <input required type="password" name="Senha" placeholder="Senha*">
        </label>
        <a style="text-decoration: none" href="../../index.html"><button type="submit">Cadastrar</button></a>
    </form>
<p>Campos com asterisco (*)<br> são obrigatórios.</p>
<button onclick="voltar()">Voltar</button>`

}

function voluntariar() {

    const div = document.querySelector(`.a2`);

    div.innerHTML = `
<h3 style="padding-bottom: 20px">Voluntário</h3>
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
            <input required type="text" name="Telefone" placeholder="Telefone*">
        </label>
        <label for="eMail">
            <input required type="text" name="eMail" placeholder="E-Mail*">
        </label>
        <label for="Senha">
            <input required type="password" name="Senha" placeholder="Senha*">
        </label>
        <a style="text-decoration: none" href="../../index.html"><button type="submit">Cadastrar</button></a>
    </form>
<p>Campos com asterisco (*)<br> são obrigatórios.</p>
<button onclick="voltar()">Voltar</button>`

}

function logar() {

    const div = document.querySelector(`.a2`);

    div.innerHTML = `
    <h3 style="padding-bottom: 20px">Login</h3>
    <form method="post" action="#">
        <label for="login">
            <input type="text" name="nome" placeholder="CPF ou E-mail*">
        </label>
        <label for="Senha">
            <input type="password" name="Senha" placeholder="Senha*">
        </label>
    </form>
    <a style="text-decoration: none"><button onclick="escolher()">Entrar</button></a>
    <p>Campos com asterisco (*)<br> são obrigatórios.</p>
    <button onclick="voltar()">Voltar</button>`;
}

function voltar() {

    const div = document.querySelector(`.a2`);

    div.innerHTML = `<div>
    <p>Conhece pessoas em situções de emergência?
      Torne-se um ajudante e conecte profissionais
      e voluntários aos necessitados.</p><br>
      <p>Cadastre os hipossuficientes com suas respectivas
        nescessidades e os voluntários disponíveis em
        sua cidade entrarão em contato com você.</p>
    </div>
    <button onclick="ajudar()">Ajudar</button>
    <div>
    <p>Possui recursos ou
      capacitação profissional? Torne-se um
      voluntário disponível em sua cidade.</p>
    <button onclick="voluntariar()">Voluntariar-me</button>
    </div>
      <p>Já faz parte do nosso time?</p>
      <button onclick="logar()">Login</button>`
}

function escolher() {
    const escolha = window.confirm(`Entrar como ajudante - ok\nEntrar como voluntário - cancelar`);
    if (escolha) window.location = `listaA.html`; else window.location = `listaV.html`;
}
