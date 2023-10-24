<script setup>
import usePropiedades from "../composables/usePropiedades";
import PropiedadVue from "../components/Propiedad.vue";

const { propiedadesCollection } = usePropiedades();
</script>

<template>
  <h1 class="text-center">Nuestras Propiedades</h1>
  <v-card flat class="py-10">
    <v-row>
      <PropiedadVue
        v-for="propiedad in propiedadesCollection"
        :key="propiedad.id"
        :propiedad="propiedad"
      />
    </v-row>
  </v-card>
</template>
