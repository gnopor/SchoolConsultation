<template>
  <v-card class="mx-auto" max-width="344" outlined @click="chooseStudent">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ eleve.nom }} {{ eleve.prenom }}</div>
        <v-list-item-title class="headline mb-1">
          Sexe: {{ eleve.sexe === "M" ? "Masculin" : "Feminin" }}
        </v-list-item-title>
        <v-list-item-subtitle
          v-if="eleve.questionnaire && eleve.questionnaire.id"
        >
          Already passed
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "ListEleve",
  props: {
    eleve: {
      type: Object,
      required: true,
    },
  },
  methods: {
    chooseStudent() {
      this.$emit("onChooseStudent", this.eleve);
    },
  },
};
</script>

<style scoped>
</style>