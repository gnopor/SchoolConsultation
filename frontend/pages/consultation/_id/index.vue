<template>
  <div>
    <input type="radio" value="One" v-model="questionnaire.Otites_fréquentes" />
    <label for="one">One</label>
    <br />
    <input type="radio" value="Two" v-model="questionnaire.Otites_fréquentes" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ questionnaire }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionnaire: {
        Otites_fréquentes: "sdafasfdsf",
        Angines_fréquentes: "dsfd",
      },
    };
  },
};
</script>

<style scoped>
</style>