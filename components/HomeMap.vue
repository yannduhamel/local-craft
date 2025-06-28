<template>
  <LMap
    style="height: 100svh"
    :zoom="6.5"
    :center="[48.166672, -2.75]"
    :use-global-leaflet="false"
    :options="{ zoomControl: false }"
    >
        <LTileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
        />
        <LControlZoom position="bottomright" />
    </LMap>
</template>