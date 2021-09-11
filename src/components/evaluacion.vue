<template>
  <v-container fluid class="background-contenido height">
    <v-row no-gutters>
      <v-row class="mr-5">
        <v-col align="center">
          <v-btn
            :to="{ name: 'evalu1' }"
            color="pink"
            class="btn_background mx-5"
            block
            outlined
            dark
            rounded
            x-large
          >
            <h1>Evaluación</h1>
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
    <v-row no-gutters>
      <v-col align="center">
        <v-main style="padding: 10px 0px 0px">
          <transition name="bounce">
            <router-view></router-view>
          </transition>
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.btn_background {
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom:4px solid rgb(235, 219, 219) ;
}
</style>

<script>
export default {
  name: "evaluacion",
  data: () => ({
    //
  }),

  beforeDestroy() {},
};
</script>