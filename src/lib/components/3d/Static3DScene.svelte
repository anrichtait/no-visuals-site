<script>
  import { Canvas } from '@threlte/core'
  
  export let width = '100%'
  export let height = '100%'
</script>

<div class="threlte-container" style="width: {width}; height: {height};">
  <Canvas>
    <slot />
  </Canvas>
</div>

<style>
  .threlte-container {
    min-height: 200px;
    border-radius: 8px;
    overflow: hidden;
  }
</style>
