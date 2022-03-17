<template>
   <v-row class="mt-3 ml-2 mr-2">
    <v-col v-for="ticket in filteredTickets" :key="ticket.airline" class="d-flex flex-row col-12 col-sm-6 col-md-4 col-lg-3">
      <v-card class="d-flex flex-column" hover width="100%">
        <v-list-item-content >
          <div class="text-overline mb-4 text-right">{{ticket.price}}</div>
          <v-list-item-title class="text-h5 mb-1">{{ticket.airline}}</v-list-item-title>
          <v-list-item-subtitle class="text-subtitle-1">{{ticket.stops}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ticket.duration}}</v-list-item-subtitle>
        </v-list-item-content>
         <v-card-text class="pa-0">
          <v-col class="text-right">
            <v-btn class="green accent-4 white--text">                  
              <span class="">Select</span>                  
            </v-btn>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        filteredTickets: [
          {
            airline: 'Tame',
            price: '$125',
            stops: 'Sin escalas',
            duration: '45 minutos',
          },
          {
            airline: 'LATAM',
            price: '$135',
            stops: '2 escalas',
            duration: '1 hora',
          },
          {
            airline: 'UIO',
            price: '$164',
            stops: '1 escala',
            duration: '50 minutos',
          },{
            airline: 'Tame',
            price: '$125',
            stops: 'Sin escalas',
            duration: '45 minutos',
          },
          {
            airline: 'LATAM',
            price: '$135',
            stops: '2 escalas',
            duration: '1 hora',
          },
          {
            airline: 'UIO',
            price: '$164',
            stops: '1 escala',
            duration: '50 minutos',
          }
        ]
      }
    },
  }
</script>