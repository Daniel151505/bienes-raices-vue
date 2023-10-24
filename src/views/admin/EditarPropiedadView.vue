<script setup>
import { useRoute } from "vue-router";
import { useFirestore, useDocument } from "vuefire";
import { doc, updateDoc } from "firebase/firestore";

const route = useRoute();

//Obtener la propiedad a editar
const db = useFirestore();
const docRef = doc(db, "propiedades", route.params.id);
const propiedad = useDocument(docRef);
</script>

<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Editar Propiedad</h2>
</template>
