import axios from "axios";
export default async function(context) {
  const ecole_id = context.store.getters["ecole/loadedEcole"].id;
  if (!context.store.getters["ecole/loadedClasses"][0]) {
    await axios
      .get(process.env.baseUrl + "/listClasses/?ecole=" + ecole_id)
      .then(result => {
        console.log("[Middleware] Fetch Classes");
        context.store.dispatch("ecole/setClasses", result.data);
        //context.redirect(context.route.fullPath);
      });
  }
}
