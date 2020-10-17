import axios from "axios";

export const actions = {
  async nuxtServerInit({ dispatch, state }) {
    await axios.get("http://localhost:8000/schoolResearch/ecole").then(res => {
      // This is just for test
      if (res.data[0]) {
        dispatch("ecole/setEcole", { ...res.data[0], valid: true });
      }
    });
  }
};
