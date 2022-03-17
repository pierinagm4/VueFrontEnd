

<template>
  <v-row >
    <v-spacer></v-spacer>
    <v-col cols="12" sm="6" md="2" class="mt-4">
      <v-select v-model="origin_select" :items="cities" menu-props="auto"
          label="Origin" hide-details prepend-icon="mdi-map" single-line></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="2" class="mt-4">
      <v-select v-model="destiny_select" :items="cities" menu-props="auto"
          label="Destiny" hide-details prepend-icon="mdi-map" single-line></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="2" class="mt-4">
      <v-menu v-model="menu2" :close-on-content-click="false"
        :nudge-right="40" transition="scale-transition" offset-y min-width="auto" >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field v-model="departure_date" label="Departure Date" 
            prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="departure_date" @input="menu2 = false" ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12" sm="6" md="2" class="mt-4">
      <v-menu v-model="menu1" :close-on-content-click="false"
        :nudge-right="40" transition="scale-transition" offset-y min-width="auto" >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field v-model="return_date" label="Return Date" 
            prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="return_date" @input="menu1 = false" ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12" sm="6" md="2" class="mt-4">
        <v-btn class="primary mt-4" small @click="searchFilter">Search</v-btn>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Tickets</v-card-title>
        <v-data-table :headers="headers" :items="tickets" disable-pagination 
            :hide-default-footer="true">
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="showDetails(item.id)">mdi-information-outline</v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DataService from "../services/DataService";
export default {
  name: "tickets-list",
  data() {
    return {
      tickets: [
            {
                "id": 1,
                "code": 149,
                "origin": "Guayaquil",
                "destiny": "Cuenca",
                "departure_date": "24/44/2023",
                "return_date": "15/26/2022"
            },
            {
                "id": 2,
                "code": 172,
                "origin": "Quito",
                "destiny": "Cuenca",
                "departure_date": "09/46/2023",
                "return_date": "30/35/2022"
            },
            {
                "id": 3,
                "code": 190,
                "origin": "Cuenca",
                "destiny": "Quito",
                "departure_date": "31/31/2022",
                "return_date": "01/16/2022"
            },
            {
                "id": 4,
                "code": 118,
                "origin": "Cuenca",
                "destiny": "Guayaquil",
                "departure_date": "01/01/2022",
                "return_date": "20/23/2022"
            },
            {
                "id": 5,
                "code": 149,
                "origin": "Quito",
                "destiny": "Guayaquil",
                "departure_date": "23/23/2022",
                "return_date": "01/44/2023"
            },
            {
                "id": 6,
                "code": 150,
                "origin": "Guayaquil",
                "destiny": "Cuenca",
                "departure_date": "24/44/2023",
                "return_date": "15/26/2022"
            },
            {
                "id": 7,
                "code": 173,
                "origin": "Quito",
                "destiny": "Cuenca",
                "departure_date": "09/46/2023",
                "return_date": "30/35/2022"
            },
            {
                "id": 8,
                "code": 191,
                "origin": "Cuenca",
                "destiny": "Quito",
                "departure_date": "31/31/2022",
                "return_date": "01/16/2022"
            },
            {
                "id": 9,
                "code": 119,
                "origin": "Cuenca",
                "destiny": "Guayaquil",
                "departure_date": "01/01/2022",
                "return_date": "20/23/2022"
            },
            {
                "id": 10,
                "code": 151,
                "origin": "Quito",
                "destiny": "Guayaquil",
                "departure_date": "23/23/2022",
                "return_date": "01/44/2023"
            }
      ],
      code: "",
      menu1: "",
      menu2: "",
      origin_select: "",
      destiny_select: "",
      departure_date: "",
      return_date: "",
      headers: [
        { text: "Code", align: "start", sortable: false, value: "code" },
        { text: "Origin", value: "origin", sortable: false },
        { text: "Destiny", value: "destiny", sortable: false },
        { text: "Departure Date", value: "departure_date", sortable: false },
        { text: "Return Date", value: "return_date", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
      cities: [
          'Guayaquil', 'Quito', 'Cuenca',
      ],
    };
  },
  methods: {
    retrieveTickets() {
      DataService.getAll()
        .then((response) => {
          this.ticket = response.data.map(this.getDisplayTickets);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTickets();
    },
    searchFilter() {
      this.$router.push({ name: "tickets-results"});
      DataService.findByFilters(this.origin_select,this.destiny_select,this.departure_date,this.return_date)
        .then((response) => {
          this.tickets = response.data.map(this.getDisplayTicket);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    showDetails(id) {
      this.$router.push({ name: "tickets-details", params: { id: id } });
    },
    getDisplayTicket(ticket) {
      return {
        id: ticket.id,
        code: ticket.code,
        origin: ticket.origin,
        destiny: ticket.destiny,
        departure_date: ticket.departure_date,
        return_date: ticket.return_date,
      };
    },
  },
  mounted() {
    this.retrieveTickets();
  },
};



</script>
<style>
.list {
  max-width: 750px;
}
</style>