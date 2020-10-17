<template>
  <div>
    <l-map
      style="height: 70vh; width: 100vh"
      :zoom="zoom"
      :center="center"
      :options="{ zoomControl: false }"
    >
      <l-marker :lat-lng="{ lat: center[0], lng: center[1] }" />
      <l-tile-layer :url="url" />
    </l-map>
  </div>
</template>
<script>
export default {
  name: "MjMap",
  props: {
    center: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 10,
    };
  },
};
</script>