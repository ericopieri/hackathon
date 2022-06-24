<template>
  <div class="container-blur-garrafa">
    <h1 class="Titulo-personalizacao">PERSONALIZE SUA GARRAFA:</h1>
    <div class="conteudo-garrafa">
      <div class="box-garrafa">
        <GarrafaPersonalizavel />
        <BoxCores />
      </div>
      <Personalizacao />
    </div>
  </div>
</template>
<script>
import GarrafaPersonalizavel from "@/components/GarrafaPersonalizavel.vue";
import Personalizacao from "@/components/Personalizacao.vue";
import BoxCores from "@/components/BoxCores.vue";
export default {
  components: { GarrafaPersonalizavel, Personalizacao, BoxCores },
  data() {
    return {
      possibleGaloes: ["galao1", "galao2", "galao3"],
    };
  },
  mounted() {
    this.verificaRota();
  },
  methods: {
    verificaRota() {
      if (!this.$route.params.id) {
        this.redirecionarGalao();
      } else {
        if (!(this.possibleGaloes.indexOf(this.$route.params.id) != -1)) {
          this.redirecionarGalao();
        }
      }
    },
    redirecionarGalao(rota = "/personalizacao/galao1") {
      this.$router.push({ path: rota });
    },
  },
};
</script>

<style></style>
