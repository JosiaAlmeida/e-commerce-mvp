<script setup lang="ts">
const services = {
  particulares: [
    { name: "Instalação de pacote office", price: 5000 },
    { name: "Instalação de Softwares", price: 4000 },
    { name: "Inst. de Sistema Operativo Windows 10", price: 6000 },
    { name: "Inst. de Sistema Operativo Windows 11", price: 6000 },
    { name: "Inst. de Sistema Operativo Linux", price: 7000 },
  ],
  empresas: [
    { name: "Instalação de pacote office", price: 13000 },
    { name: "Instalação de Softwares", price: 12000 },
    { name: "Instalação de antivírus", price: 10000 },
    { name: "Inst. de Sistema Operativo Windows", price: 15000 },
    { name: "Inst. de Sistema Operativo Linux ", price: 16000 },
    { name: "Inst. de Sistema Operativo Chrome OS", price: 16000 },
  ],
};
</script>

<template>
  <div>
    <div>
      <div class="container">
        <div class="row py-5">
          <h1 class="col-12 ">4STRON4UTAS</h1>
          <h4 class="col-12 w-100">Prestações de Serviços Informáticos</h4>

          <!-- Seção para Particulares -->
          <h3 class="section-title col-12  mt-5 mb-4">Serviços para Particulares</h3>

          <div class="col-md-4 mb-3" v-for="(service, index) in services.particulares" :key="index">
            <ProductCard :name="service.name" :price="service.price" buttonLabel="Solicitar" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light">

      <div class="container">
        <div class="row">

          <!-- Seção para Empresas -->
          <h3 class="section-title mt-5 text-black mb-4 col-12">Serviços para Empresas</h3>

          <div class="col-md-4 mb-3" v-for="(service, index) in services.empresas" :key="index">

            <ProductCard :name="service.name" :price="service.price" buttonLabel="Solicitar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
