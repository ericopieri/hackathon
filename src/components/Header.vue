<template>
    <nav class="nav">
        <div class="logo-nav">
            <router-link to="/" class="logo"></router-link>
        </div>
        <div class="box-icon-nav">
            <router-link to="/historico" class="icone-nav"><mdicon size="large" title="Histórico" name="clock-time-two-outline"></mdicon></router-link>
            <router-link to="/carrinho" class="icone-nav"><mdicon size="large" title="Carrinho" name="cart-outline"></mdicon></router-link>
            <router-link style="max-width: 100px" to="/login" class="icone-nav"><mdicon size="large" title="Perfil" name="account-circle-outline"></mdicon></router-link>
        </div>
    </nav>
</template>

<script>
import * as firebase from '../plugins/firebase.js'

export default {
    data(){
        return{
            isLogged: false
        }
    },
    mounted(){
        this.isLogged = (firebase.auth.currentUser) ? true : false 
    }
}
</script>

<style>

</style>