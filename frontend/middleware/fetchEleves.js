import axios from "axios";
export default async function(context) {
  const ecole_id = context.store.getters["ecole/loadedEcole"].id;
  if (!context.store.getters["ecole/loadedEleves"][0]) {
    await axios
      .get("http://localhost:8000/schoolResearch/listEleves/?ecole=" + ecole_id)
      .then(result => {
        console.log("[Middleware] Fetch eleve");
        context.store.dispatch("ecole/setEleves", result.data);
        //context.redirect(context.route.fullPath);
      });
  }
}
