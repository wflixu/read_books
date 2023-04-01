<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';


const box = ref<HTMLElement>(null);


const init = () => {

  // init
  console.log(THREE.REVISION);
  const { width, height } = box.value.getBoundingClientRect();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  box.value.appendChild(renderer.domElement);
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);
  const scene = new THREE.Scene();


  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line( geometry, material );

  scene.add( line ); 
  renderer.render( scene, camera );
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
  