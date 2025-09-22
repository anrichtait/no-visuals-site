
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

<!-- Ground -->
<T.Group>
  <T.Mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <T.PlaneGeometry args={[8, 6]} />
    <T.ShadowMaterial opacity={0.25} />
  </T.Mesh>
</T.Group>

<!-- Building shapes only -->
<T.Group position={[0, 0, 0]}>
  <!-- Foundation slab -->
  <T.Mesh position={[0, 0.05, 0]} castShadow>
    <T.BoxGeometry args={[2.4, 0.1, 1.8]} />
    <T.MeshLambertMaterial color={"#F5F3F0"} />
  </T.Mesh>

  <!-- Main house box -->
  <T.Mesh position={[0, 0.45, 0]} castShadow>
    <T.BoxGeometry args={[2.0, 1.0, 1.4]} />
    <T.MeshLambertMaterial color={"#F5F3F0"} />
  </T.Mesh>

  <!-- Roof slab -->
  <T.Mesh position={[0, 0.96, 0]} castShadow>
    <T.BoxGeometry args={[2.2, 0.08, 1.6]} />
    <T.MeshLambertMaterial color={"#F5F3F0"} />
  </T.Mesh>

  <!-- Sunroof raised section -->
  <T.Mesh position={[0.3, 1.16, 0.2]} castShadow>
    <T.BoxGeometry args={[0.8, 0.06, 0.6]} />
    <T.MeshLambertMaterial color={"#F5F3F0"} />
  </T.Mesh>

  <!-- 3 tall columns -->
  <T.Mesh position={[-1.0, 1.0, -0.9]} castShadow>
    <T.BoxGeometry args={[0.3, 2.0, 0.3]} />
    <T.MeshLambertMaterial color={"#F5F3F0"} />
  </T.Mesh>

  <T.Mesh position={[1.0, 1.0, -0.6]} castShadow>
    <T.BoxGeometry args={[0.3, 2.2, 0.3]} />
    <T.MeshLambertMaterial color={"#F5F3F0"} />
  </T.Mesh>

  <T.Mesh position={[0.9, 1.0, 0.8]} castShadow>
    <T.BoxGeometry args={[0.3, 2.1, 0.3]} />
    <T.MeshLambertMaterial color={"#F5F3F0"} />
  </T.Mesh>
</T.Group>
