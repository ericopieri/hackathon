<template>
  <div class="box-cores">
        <div class="box-hover box-cor-azul" @click="mudarFill('#565bbe')"></div>
        <div class="box-hover box-cor-rosa" @click="mudarFill('#ff57ee')"></div>
        <div class="box-hover box-cor-verde" @click="mudarFill('#a3e263')"></div>
        <div class="box-hover box-cor-marrom" @click="mudarFill('#d9754b')"></div>
        <div class="box-hover box-cor-lilas" @click="mudarFill('#EDA3E1')"></div>
        <div class="box-hover box-cor-preto" @click="mudarFill('#292929')"></div>
    </div> 
</template>

<script>
export default {
    methods: {
        mudarFill(cor){
            var svgGarrafa = document.querySelectorAll('.cls-1')
            svgGarrafa.forEach(element => {
                element.style.fill = cor
            });
        }
    }
}
</script>

<style>
.box-hover:hover{
    cursor: pointer;
}
</style>