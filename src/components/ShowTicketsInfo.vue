<template>
  <div v-if="currentTicket" class="edit-form py-3">
    <p class="headline">Edit Ticket</p>
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="currentTicket.code"
        :rules="[(v) => !!v || 'Code is required']"
        label="Code"
        required
      ></v-text-field>
      <v-text-field
        v-model="currentTicket.origin"
        :rules="[(v) => !!v || 'Origin is required']"
        label="Origin"
        required
      ></v-text-field>
      <v-text-field
        v-model="currentTicket.destiny"
        :rules="[(v) => !!v || 'Destiny is required']"
        label="Destiny"
        required
      ></v-text-field>
      <v-text-field
        v-model="currentTicket.departure_date"
        :rules="[(v) => !!v || 'Departure date is required']"
        label="Departure date"
        required
      ></v-text-field>
      <v-text-field
        v-model="currentTicket.return_date"
        :rules="[(v) => !!v || 'Return date is required']"
        label="Return date"
        required
      ></v-text-field>
      <v-divider class="my-5"></v-divider>
      <v-btn color="primary" small @click="backtoList">
        Back
      </v-btn>
    </v-form>
    <p class="mt-3">{{ message }}</p>
  </div>
  <div v-else>
    <p>Please click on a Ticket...</p>
  </div>
</template>
<script>
import DataService from "../services/DataService";
export default {
  name: "current-ticket",
  data() {
    return {
      currentTicket: null,
      message: "",
    };
  },
  methods: {
    getTicket(id) {
      DataService.get(id)
        .then((response) => {
          this.currentTicket = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    backtoList() {
       console.log("redirect");
       this.$router.push({ name: "tickets" });
    },
  },
  mounted() {
    this.message = "";
    this.getTicket(this.$route.params.id);
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>