<template>
  <div class="ecole">
    <div class="ecole__head">
      <FormEcole
        :ecole="ecole"
        @submit="handleAddEcole"
        @submitClasse="handleAddClasse"
      />
    </div>
    <div class="ecole__main">
      <div class="class-list">
        <v-card v-for="(classe, index) in classes" :key="index">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ classe.nom }} {{ classe.filliere }}
              </v-list-item-title>
              <v-list-item-subtitle
                >Nombre d'eleve: {{ classe.nbEleve }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>

      <div class="map-container">
        <div class="map">
          <MjMap v-if="center" :center="center" />
        </div>
        <div class="adresse">
          <p
            v-if="
              this.ecole.latitude && this.ecole.longitude && this.ecole.titre
            "
          >
            Nom ecole: {{ this.ecole.titre }}, Latitude:{{
              this.ecole.latitude
            }}, Longitude:{{ this.ecole.longitude }}, Postal Code:{{
              this.ecole.postal_code
            }}, City :{{ this.ecole.city }}
          </p>
          <v-btn color="primary" v-if="classes[0]" v-on:click="sendClasses"
            >Enregistrer</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MjMap from "~/components/Map.vue";
import FormEcole from "~/components/FormEcole.vue";

export default {
  middleware: ["fetchClasses"],
  components: {
    MjMap,
  },
  data() {
    return {
      ecole: { ...this.$store.getters["ecole/loadedEcole"] },

      classes: [...this.$store.getters["ecole/loadedClasses"]],
    };
  },
  methods: {
    handleAddEcole(newShool) {
      this.$store.dispatch("ecole/setEcole", this.ecole);
    },

    handleAddClasse(classe) {
      this.$store.dispatch("ecole/addClasse", classe);
      this.classes = [...this.$store.getters["ecole/loadedClasses"]];
    },
    sendClasses() {
      this.$store.dispatch("ecole/sendClasses");
    },
  },
  computed: {
    center() {
      if (this.ecole.latitude && this.ecole.longitude) {
        return [this.ecole.latitude, this.ecole.longitude];
      }
    },
  },
};
</script>

<style scoped>
.ecole {
  display: flex;
  flex-direction: column;
}

.ecole__head {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.ecole__main {
  padding-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.input {
  border-bottom: 3px solid blue;
  width: 200px;
}
button {
  color: white;
  background-color: blue;
  border-radius: 1px;
  font-weight: bolder;
  padding: 5px 10px;
}
.class-list {
  max-width: 15%;
  display: flex;
  flex-direction: column;
}
.map-container {
  min-width: 79%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.adresse {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>