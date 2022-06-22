<template>
  <div class="container-Cadastro container-Login">
        <div class="box-login">
            <h2 class="texto-login">Login</h2>
        </div>
        <input placeholder="Email" class="input-login logar" type="email">
        <input placeholder="Senha" class="input-login logar" type="password">
        <div class="box-login">
            <a href="#" class="texto-preto btn-login">
                <p>Logar</p>
            </a>
        </div>
        <div>Não possue login? <router-link to="/cadastro" style="color: #1b98e0"> Cadastre-se </router-link></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>