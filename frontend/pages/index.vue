<template>
  <div class="home">
    <div class="home__choose-profile">
      <v-btn depressed x-large color="primary" @click="enseignant"
        >Enseignant</v-btn
      >
      <v-btn depressed x-large color="teal" @click="enregistreur"
        >Enregistreur</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    enseignant() {
      this.$router.push("/ecole");
    },
    enregistreur() {
      this.$router.push("/consultation");
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  padding-top: 10%;
}

.home__choose-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>