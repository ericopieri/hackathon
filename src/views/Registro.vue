<template>
  <div class="container-endereco">
        <h1>ADICIONAR ENDEREÇO</h1>
        <div class="box-blur">
            <input class="input-registro input-Nome" placeholder="Nome Completo" type="text">
            <input class="input-registro input-CEP" type="text" placeholder="CEP" name="cep" id="cep" v-mask="'#####-###'" v-model="cep"/>
            <input class="input-registro input-Estado" placeholder="Estado" type="text">
            <input class="input-registro input-Cidade" placeholder="Cidade" type="text">
            <input class="input-registro input-Bairro" placeholder="Bairro" type="text">
            <input class="input-registro input-Rua/Avenida" placeholder="Rua/Avenida" type="text">
            <input class="input-registro input-Complemento" placeholder="Complemento" type="text">
            <input class="input-registro input-Telefone" v-mask="'(##) #####-####'" id="telefone" name="telefone" placeholder="Telefone" v-model="tel">
            <input class="input-registro input-Informacoes" placeholder="Informações Adicionais" type="text">
        </div>
        <div class="btn-confirmar">
            <p>Confirmar Compra</p>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: '',
      cep: ''
    }
  }
}
</script>

<style>

</style>