<template>
  <div class="classe">
    <div class="classe-list">
      <select class="input" @click="handleClasse">
        <option value="">Choisisser la classe...</option>
        <option
          v-for="(classe, index) in classes"
          :key="index"
          :value="{ nom: classe.nom, filliere: classe.filliere }"
        >
          {{ classe.nom }} {{ classe.filliere }}
        </option>
      </select>
    </div>
    <div class="classe-main">
      <div class="eleve-list">
        <v-btn color="primary">Liste des eleves</v-btn>
        <ListEleve
          v-for="(eleve, index) in eleves"
          :key="index"
          :eleve="eleve"
          @onChooseStudent="handleChoose"
        />
      </div>

      <div class="main-form">
        <fieldset class="add-form">
          <legend>Remplir le formulaire: {{ fullName }}</legend>
          <form @submit.prevent="handleAddConsultation">
            <span>nom et prenom eleve</span>
            <br /><br />

            <fieldset>
              <legend>Otites fréquentes:</legend>
              <input
                type="radio"
                value="Oui"
                v-model="questionnaire.Otites_fréquentes"
              />
              <label for="oui">Oui</label><br />
              <input
                type="radio"
                value="Nom"
                v-model="questionnaire.Otites_fréquentes"
              />
              <label for="nom">Non</label>
              <br />
            </fieldset>

            <br />

            <fieldset>
              <legend>Angines fréquentes:</legend>
              <input
                type="radio"
                value="Oui"
                v-model="questionnaire.Angines_fréquentes"
              />
              <label for="oui">Oui</label><br />
              <input
                type="radio"
                value="Nom"
                v-model="questionnaire.Angines_fréquentes"
              />
              <label for="nom">Non</label>
              <br />
              <br />
            </fieldset>

            <br />

            <button>Ajouter</button>
          </form>
        </fieldset>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Listeleve from "~/components/ListEleve.vue";
export default {
  middleware: ["fetchEleves", "fetchClasses"],
  components: {
    Listeleve,
  },
  data() {
    return {
      questionnaire: {
        Otites_fréquentes: null,
        Angines_fréquentes: null,
      },
      eleve: {},
      classes: this.$store.getters["ecole/loadedClasses"],
      eleves: this.$store.getters["ecole/loadedEleves"],
    };
  },
  methods: {
    handleClasse() {},
    async handleAddConsultation() {
      const response = { ...this.questionnaire };
      if (
        this.eleve.id &&
        response.Angines_fréquentes &&
        response.Otites_fréquentes
      ) {
        const newConsultation = { response, id: this.eleve.id };
        console.log(process.env.baseUrl);
        await axios
          .post(process.env.baseUrl + "/addQuestionnaire/", newConsultation)
          .then((res) => {
            console.log(res.data);
            this.eleve = {};
            this.questionnaire = {};
          });
      }
    },
    handleChoose(eleve) {
      this.eleve = eleve;
    },
  },
  computed: {
    fullName() {
      if (this.eleve.nom) {
        return this.eleve.nom + " " + this.eleve.prenom;
      }
    },
  },
  created() {},
};
</script>

<style scoped>
.classe {
  display: flex;
  flex-direction: column;
}

.classe-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.classe-main {
  padding-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

button {
  color: white;
  background-color: blue;
  border-radius: 1px;
  font-weight: bolder;
  padding: 5px 10px;
}
.eleve-list {
  max-width: 45%;
  display: flex;
  flex-direction: column;
}
.main-form {
  padding-top: 10%;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.add-form {
  padding: 10px;
}

.input {
  border-bottom: 3px solid blue;
  width: 200px;
}
</style>