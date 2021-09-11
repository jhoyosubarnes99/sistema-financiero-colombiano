<template>
  <div class="contenedor">
    <div
      justific="center"
      aling="left"
      class="pantalla embed-container"
      border="20px"
    >
      <iframe
        width="985"
        height="450"
        src="https://www.youtube.com/embed/q7r07X70-2E"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.degrade {
  background: radial-gradient(200px top, ellipse, white, #1162ac, black);
}

.pantalla {
  overflow: hidden;
  height: 500px;
  width: auto;
  display: flex;
  align-items: center;
  margin-left: 40px;
}
</style>