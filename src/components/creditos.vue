<template>
  <v-card class="mx-auto" max-width="700">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: "José Antonio Hoyos", src: "https://i.ibb.co/2gg3Hhf/jose1.png", flex: 6 },
      {
        title: "Evony Ballesteros Arteaga",
        src: "https://i.ibb.co/9nmmK5h/evonny.png",
        flex: 6,
      },
      {
        title: "Carlos Julián Ramos González",
        src: "https://i.ibb.co/824HvXW/jose.png",
        flex: 6,
      },
      {
        title: "Jose Carlos Negrete Hoyos",
        src: "https://i.ibb.co/30VpPRt/jose-negrete.png",
        flex: 6,
      },
    ],
  }),
};
</script>