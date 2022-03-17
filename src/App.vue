<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2 pr-2">
        Pierina Galvez
      </div>
      <v-btn to="/tickets" text>
        Tickets
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "app",
};
</script>