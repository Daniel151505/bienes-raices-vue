<script setup>
import usePropiedades from "../composables/usePropiedades";
import PropiedadVue from "../components/Propiedad.vue";
import { propertyPrice } from "../helpers";

const { alberca, filteredItems } = usePropiedades();
</script>

<template outlined color="transparent">
  <h1 class="text-center">Nuestras Propiedades</h1>
  <v-card flat class="opacity py-10">
    <v-card-title class="text-h5">
      Búsqueda
      <span>
        <v-checkbox label="Alberca" v-model="alberca" />
      </span>
    </v-card-title>
    <v-row>
      <PropiedadVue
        v-for="propiedad in filteredItems"
        :key="propiedad.id"
        :propiedad="propiedad"
        :price="propertyPrice"
      />
    </v-row>
  </v-card>
</template>
