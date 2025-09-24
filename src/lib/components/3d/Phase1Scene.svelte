<script lang="ts">
  import { T } from '@threlte/core'
  import { GLTF, OrbitControls } from '@threlte/extras'
  import { Mesh } from 'three'

  let gltfScene: any

  // Function to enable shadows when scene is available
  $: if (gltfScene) {
    gltfScene.traverse((child: any) => {
      if (child instanceof Mesh) {
        child.castShadow = true
        child.receiveShadow = false  // Prevent self-shadowing artifacts
      }
    })
  }
</script>

<T.PerspectiveCamera makeDefault position={[4, 6, 4]} fov={35}>
  <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} target={[0, 1, 0]} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.5} />
<T.DirectionalLight
  position={[5, 8, -5]}
  intensity={1.0}
  castShadow
  shadow.mapSize.width={2048}
  shadow.mapSize.height={2048}
  shadow.camera.near={0.5}
  shadow.camera.far={50}
  shadow.camera.left={-15}
  shadow.camera.right={15}
  shadow.camera.top={15}
  shadow.camera.bottom={-15}
  shadow.bias={-0.001}
  shadow.normalBias={0.05}
/>

<T.Group>
  <T.Mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <T.PlaneGeometry args={[6, 6]} />
    <T.ShadowMaterial
      opacity={0.5}
      color={0x000000}
      transparent={true}
    />
  </T.Mesh>
</T.Group>

<GLTF url="/models/phase1.gltf" position={[0, 1, 0]} bind:scene={gltfScene} />
