<template>
  <div class="container-Cadastro">
        <div class="box-login">
            <h2 class="texto-login">Cadastro</h2>
        </div>
        <input placeholder="Nome" class="input-login input-nome" type="text">
        <input placeholder="Sobrenome" class="input-login input-nome" type="text">
        <input placeholder="Email" class="input-login" type="email">
        <input placeholder="Senha" class="input-login" type="password">
        <input placeholder="Confirmar Senha" class="input-login" type="password">
        <input placeholder="Data de nascimento" class="input-login input-data" type="date">
        <div class="box-login">
            <a href="Login.html" class="texto-preto btn-login">
                <p>Cadastrar</p>
            </a>
        </div>
        <div>Já possui cadastro? <router-link to="/login" style="color: #1b98e0"> Entre </router-link></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>