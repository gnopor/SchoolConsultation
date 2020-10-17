import axios from "axios";
const API_URL = process.env.baseUrl;

export const state = () => ({
  ecole: {
    titre: "",
    latitude: "",
    longitude: "",
    postal_code: null,
    city: null,
    country: null,
    valid: false
  },
  classes: [],
  eleves: []
});

export const mutations = {
  setEcole(state, ecole) {
    state.ecole = ecole;
  },
  setClasses(state, classes) {
    state.classes = classes;
  },
  setEleves(state, eleves) {
    state.eleves = eleves;
  },

  addClasse(state, classe) {
    state.classes.push(classe);
  },
  addEleve(state, eleve) {
    state.eleves.push(eleve);
  }
};

export const actions = {
  setEcole({ commit }, ecole) {
    commit("setEcole", ecole);
  },
  setClasses({ commit }, classes) {
    commit("setClasses", classes);
  },
  setEleves({ commit }, eleves) {
    commit("setEleves", eleves);
  },
  addEleve(vuexContext, eleve) {
    vuexContext.commit("addEleve", eleve);
  },
  addClasse(vuexContext, classe) {
    vuexContext.commit("addClasse", classe);
  },
  async sendClasses(vuexContext) {
    const newClasses = vuexContext.state.classes.filter(classe => !classe.id);
    const ecole = vuexContext.state.ecole;
    await axios
      .post(API_URL + "/createClasses/", {
        ecole: ecole,
        classes: newClasses
      })
      .then(res => {
        console.log(res.data);
      });
  },
  async sendEleves(vuexContext) {
    const newEleves = vuexContext.state.eleves.filter(eleve => !eleve.id);
    await axios
      .post(API_URL + "/createEleves/", {
        eleves: newEleves
      })
      .then(res => {
        console.log(res.data);
      });
  }
};

export const getters = {
  loadedEcole(state) {
    return state.ecole;
  },
  loadedClasses(state) {
    return state.classes;
  },
  loadedEleves(state) {
    return state.eleves;
  }
};
