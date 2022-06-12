<template>
    <div class="container-blur-garrafa">
        <h1 class="Titulo-personalizacao">PERSONALIZE SUA GARRAFA:</h1>
        <div class="conteudo-garrafa">
            <div class="box-garrafa">
            <GarrafaPersonalizavel :galao="$route.params.id"/>
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
    components: {GarrafaPersonalizavel, Personalizacao},
    data(){
        return{
            possibleGaloes: ['galao1', 'galao2', 'galao3']
        }
    },
    mounted(){
        if (!this.$route.params.id) {
            this.$router.push({path: '/personalizacao/galao1'})
        } else{
            if(!(this.possibleGaloes.indexOf(this.$route.params.id) != -1)){
                this.$router.push({path: '/personalizacao/galao1'})
            }
        }
    }
}
</script>

<style>

</style>