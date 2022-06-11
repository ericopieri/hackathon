<template>
    <div class="container-blur-garrafa">
        <h1 class="Titulo-personalizacao">PERSONALIZE SUA GARRAFA:</h1>
        <div class="conteudo-garrafa">
            <div class="box-garrafa">
            <GarrafaPersonalizavel/>
            <div class="box-cores">
                <div class="box-cor-azul"></div>
                <div class="box-cor-rosa"></div>
                <div class="box-cor-verde"></div>
                <div class="box-cor-marrom"></div>
                <div class="box-cor-lilas"></div>
                <div class="box-cor-preto"></div>
            </div>  
            </div>
            <Personalizacao/>
        </div>
    </div>
</template>
<script>
import GarrafaPersonalizavel from '@/components/GarrafaPersonalizavel.vue'
import Personalizacao from '@/components/Personalizacao.vue'
export default {
    components: {GarrafaPersonalizavel, Personalizacao}
}
</script>

<style>

</style>