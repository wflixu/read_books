<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

const box = ref<HTMLElement>(null);


const init = () => {

  // init
  console.log(THREE.REVISION);
  const { width, height } = box.value.getBoundingClientRect();

  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
  camera.position.z = 1;

  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshNormalMaterial();

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  function animation(time) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render(scene, camera);

  }

  
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setAnimationLoop(animation);
  box.value.appendChild(renderer.domElement);
}




onMounted(() => {
  console.log(box.value)
  init();
})


</script>

<template>
  <div ref="box" class="container">

  </div>
</template>

<style scoped>
.container {
  height: 90vh;
}
</style>
