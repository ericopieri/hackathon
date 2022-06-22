<template>
    <nav class="nav">
        <div class="logo-nav">
            <div class="logo"></div>
            <router-link to="/"><mdicon class="icone-logo" name="HomeOutline"></mdicon></router-link>
        </div>
        <div class="box-icon-nav">
            <router-link to="/historico" class="icone-nav"><mdicon size="large" title="Histórico" name="clock-time-two-outline"></mdicon></router-link>
            <router-link to="/carrinho" class="icone-nav"><mdicon size="large" title="Carrinho" name="cart-outline"></mdicon></router-link>
            <router-link to="/login" class="icone-nav"><mdicon size="large" title="Perfil" name="account-circle-outline"></mdicon></router-link>
        </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style>

</style>