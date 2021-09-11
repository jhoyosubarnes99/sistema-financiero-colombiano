<template>
  <div class="fondo">
    <v-parallax
      dark
      src="http://cristianleandroc.com/media/blogs/economia/quick-uploads/p951/bbva-banca-tarjetas.jpg?mtime=1573585604"
      height="800"
      class="fondo1"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-container
            responsive
            style="height: 30%; max-width: 930px; width: 720%"
          >
            <v-row>
              <v-col>
                <p>SISTEMA FINANCIERO COLOMBIANO</p>
                <div class="text-center">
                  <router-link
                    :to="{ name: 'principal' }"
                    style="text-decoration: none; color: inherit"
                  >
                    <v-btn
                      class="letraB"
                      width="180"
                      rounded
                      color="#2196F3"
                      dark
                      ><b>Ingresar</b></v-btn
                    >
                  </router-link>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<!--script -->
<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<!-- estilos -->
<style>
p {
  font-size: 50px;
  color: transparent;
  font-family: "Lobster", cursive;
  background: linear-gradient(yellow, red);
  -webkit-background-clip: text;
  position: relative;
}

p::after {
  content: "SISTEMA FINANCIERO COLOMBIANO";
  position: absolute;
  width: 100%;
  top: 3px;
  left: 3px;
  color: #000;
  z-index: -1;
}
</style>