<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" v-if="sidebar" app>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link :to="item.path" tag="span" style="cursor: pointer">
                {{ item.title }}
              </nuxt-link></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>

      <v-toolbar-title>
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          depressed
          v-for="item in items"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      appTitle: "School consultation",
      sidebar: false,
      items: [
        { title: "Acceuil", path: "/", icon: "mdi-home" },
        { title: "Ecole", path: "/ecole", icon: "" },
        { title: "Eleve", path: "/eleve", icon: "" },
        { title: "Consultation", path: "/consultation", icon: "" },
      ],
    };
  },
};
</script>
<style>
</style>

