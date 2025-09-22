<script>
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
</script>

<T.PerspectiveCamera makeDefault position={[4, 3, 4]} fov={45}>
  <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.4} />
<T.DirectionalLight 
  position={[3, 4, -3]} 
  intensity={1.2} 
  castShadow
  shadow.mapSize.width={2048}
  shadow.mapSize.height={2048}
  shadow.camera.near={0.5}
  shadow.camera.far={50}
  shadow.camera.left={-10}
  shadow.camera.right={10}
  shadow.camera.top={10}
  shadow.camera.bottom={-10}
/>

<T.Group>
  <T.Mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <T.PlaneGeometry args={[4, 4]} />
    <T.ShadowMaterial 
      opacity={0.4}
      color={0x000000}
      transparent={true}
    />
  </T.Mesh>
</T.Group>

<T.Mesh position={[0, 0.5, 0]} castShadow>
  <T.BoxGeometry args={[1, 1, 1]} />
  <T.MeshLambertMaterial color={"#F5F3F0"} />
</T.Mesh>
