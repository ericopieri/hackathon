<template>
  <div v-if="galao" class="garrafa-personalizavel" id="garrafaPersonalizavelId1" ref="garrafa">
  </div>
</template>

<script>
export default {
  props:['galao'],
  data(){
    return{
      currentId: ''
    }
  },
  mounted(){
    this.verificaGalao()
  },
  methods:{
    mudaIdDiv(novoId){
      this.$refs.garrafa.id = novoId
      this.currentId = novoId
    },
    verificaGalao(){
      switch (this.galao){
        case 'galao1':
          this.mudaIdDiv('garrafaPersonalizavelId1')
          break
        case 'galao2':
          this.mudaIdDiv('garrafaPersonalizavelId2')
          break
        case 'galao3':
          this.mudaIdDiv('garrafaPersonalizavelId3')
          break
      }
    }
  }
}
</script>

<style>

</style>