<template>
    <div class="box-modelo">
        <h2 class="titulo-garrafa">ESCOLHA SEU MODELO DE GARRAFA:</h2>
        <div class="box-desc-garrafa">
            <div class="container-garrafa">
                <router-link :to="{path: '/personalizacao/galao1'}"  class="img-garrafa-1-3"></router-link>
                <h2 class="desc-img">GALÃO BODYBUILDING 1,3L</h2>
            </div>
            <div class="container-garrafa">
                <router-link :to="{path: '/personalizacao/galao2'}" class="img-garrafa-1-6"></router-link>
                <h2 class="desc-img">GALÃO BODYBUILDING 1,6L</h2>
            </div>
            <div class="container-garrafa">
                <router-link :to="{path: '/personalizacao/galao3'}" class="img-garrafa-dose"></router-link>
                <h2 class="desc-img">SHAKEIRA UMA DOSE</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>