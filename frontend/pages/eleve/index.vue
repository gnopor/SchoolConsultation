<template>
  <div class="classe">
    <div class="classe-list">
      <select v-model="eleve.classe" class="input" @click="handleClasse">
        <option value="">Choisisser la classe...</option>
        <option
          v-for="(classe, index) in classes"
          :key="index"
          :value="{ id: classe.id, nom: classe.nom, filliere: classe.filliere }"
        >
          {{ classe.nom }} {{ classe.filliere }}
        </option>
      </select>
    </div>
    <div class="classe-main">
      <div class="eleve-list">
        <v-btn color="primary" v-on:click="sendEleves">Enregistrer</v-btn>
        <ListEleve
          v-for="(eleve, index) in eleves"
          :key="index"
          :eleve="eleve"
        />
      </div>

      <div class="main-form">
        <fieldset class="add-form">
          <legend>Ajouter un eleve</legend>
          <form @submit.prevent="handleAddStudent">
            <input
              class="input"
              type="text"
              placeholder="Nom"
              v-model="eleve.nom"
            />
            <input
              class="input"
              type="text"
              placeholder="Prenom"
              v-model="eleve.prenom"
            />
            <br /><br />

            <fieldset>
              <legend>Sexe:</legend>
              <input type="radio" id="m" value="M" v-model="eleve.sexe" />
              <label for="m">Masculin</label>
              <input type="radio" id="f" value="F" v-model="eleve.sexe" />
              <label for="f">Feminin</label>
              <br />
            </fieldset>

            <br /><br />

            <fieldset>
              <legend>Piece Jointe:</legend>
              <input type="file" id="avatar" />
              <label for="avatar">Avatar</label> <br />

              <input type="file" id="AN" />
              <label for="AN">Acter de naissance</label>
            </fieldset>
            <br />
            <button>Ajouter l'eleve</button>
          </form>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import Listeleve from "~/components/ListEleve.vue";
export default {
  middleware: ["fetchEleves", "fetchClasses"],
  components: {
    Listeleve,
  },
  data() {
    return {
      eleve: {
        nom: "",
        prenom: "",
        sexe: "",
        classe: "", //Reminder: classe is bind and will take its value from select's options up there
      },
      eleves: [...this.$store.getters["ecole/loadedEleves"]],
      classes: this.$store.getters["ecole/loadedClasses"],
    };
  },
  methods: {
    handleClasse() {},
    handleAddStudent() {
      if (
        this.eleve.nom &&
        this.eleve.prenom &&
        this.eleve.sexe &&
        this.eleve.classe.id
      ) {
        this.$store.dispatch("ecole/addEleve", this.eleve);
        this.eleve = {
          nom: "",
          prenom: "",
          sexe: "",
          classe: "",
          new: true,
        };
      }
    },

    sendEleves() {
      this.$store.dispatch("ecole/sendEleves");
    },
  },
  computed: {},
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