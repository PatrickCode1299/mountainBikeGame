<template>
  <div ref="sceneContainer" class="w-full h-screen"></div>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue'

const sceneContainer = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()

  renderer.setSize(window.innerWidth, window.innerHeight)
  sceneContainer.value.appendChild(renderer.domElement)

  // Add a simple cube to get started
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5

  const animate = function () {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  animate()
})
</script>

<style scoped>
/* Add any style if needed */
</style>
