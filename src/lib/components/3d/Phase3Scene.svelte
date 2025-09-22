<script>
  import { T } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
</script>

<T.PerspectiveCamera makeDefault position={[6, 5, 6]} fov={45}>
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
  shadow.camera.left={-15}
  shadow.camera.right={15}
  shadow.camera.top={15}
  shadow.camera.bottom={-15}
/>

<T.Group>
  <T.Mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <T.PlaneGeometry args={[8, 8]} />
    <T.ShadowMaterial 
      opacity={0.4}
      color={0x000000}
      transparent={true}
    />
  </T.Mesh>
</T.Group>

<!-- Modern House Concept (same as Phase 2) -->
<T.Group position={[0, 0, 0]}>
  <!-- Main house body (larger cube) -->
  <T.Mesh position={[0, 0.8, 0]} castShadow>
    <T.BoxGeometry args={[1.6, 1.6, 1.2]} />
    <T.MeshLambertMaterial color={"#E8E6E3"} />
  </T.Mesh>
  
  <!-- Upper level (smaller cube) -->
  <T.Mesh position={[0.3, 1.9, 0.1]} castShadow>
    <T.BoxGeometry args={[1.0, 0.8, 0.8]} />
    <T.MeshLambertMaterial color={"#D4D2CF"} />
  </T.Mesh>
  
  <!-- Entrance extension (small cube) -->
  <T.Mesh position={[-0.4, 0.3, 0.8]} castShadow>
    <T.BoxGeometry args={[0.6, 0.6, 0.4]} />
    <T.MeshLambertMaterial color={"#C8C6C3"} />
  </T.Mesh>
  
  <!-- Flat roof detail -->
  <T.Mesh position={[0, 1.7, 0]} castShadow>
    <T.BoxGeometry args={[1.8, 0.1, 1.4]} />
    <T.MeshLambertMaterial color={"#B8B6B3"} />
  </T.Mesh>
</T.Group>

<!-- Trees around the house -->
<!-- Tree 1 - Front left -->
<T.Group position={[-2.5, 0, 1.8]}>
  <T.Mesh position={[0, 0.4, 0]} castShadow>
    <T.CylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
    <T.MeshLambertMaterial color={"#8B4513"} />
  </T.Mesh>
  <T.Mesh position={[0, 1.2, 0]} castShadow>
    <T.SphereGeometry args={[0.6, 8, 6]} />
    <T.MeshLambertMaterial color={"#228B22"} />
  </T.Mesh>
</T.Group>

<!-- Tree 2 - Front right -->
<T.Group position={[2.8, 0, 2.2]}>
  <T.Mesh position={[0, 0.5, 0]} castShadow>
    <T.CylinderGeometry args={[0.12, 0.12, 1.0, 8]} />
    <T.MeshLambertMaterial color={"#8B4513"} />
  </T.Mesh>
  <T.Mesh position={[0, 1.4, 0]} castShadow>
    <T.SphereGeometry args={[0.7, 8, 6]} />
    <T.MeshLambertMaterial color={"#32CD32"} />
  </T.Mesh>
</T.Group>

<!-- Tree 3 - Back left -->
<T.Group position={[-2.2, 0, -2.5]}>
  <T.Mesh position={[0, 0.35, 0]} castShadow>
    <T.CylinderGeometry args={[0.08, 0.08, 0.7, 8]} />
    <T.MeshLambertMaterial color={"#8B4513"} />
  </T.Mesh>
  <T.Mesh position={[0, 1.0, 0]} castShadow>
    <T.SphereGeometry args={[0.5, 8, 6]} />
    <T.MeshLambertMaterial color={"#228B22"} />
  </T.Mesh>
</T.Group>

<!-- Tree 4 - Back right -->
<T.Group position={[2.5, 0, -2.8]}>
  <T.Mesh position={[0, 0.45, 0]} castShadow>
    <T.CylinderGeometry args={[0.11, 0.11, 0.9, 8]} />
    <T.MeshLambertMaterial color={"#8B4513"} />
  </T.Mesh>
  <T.Mesh position={[0, 1.3, 0]} castShadow>
    <T.SphereGeometry args={[0.65, 8, 6]} />
    <T.MeshLambertMaterial color={"#32CD32"} />
  </T.Mesh>
</T.Group>

<!-- Tree 5 - Side left -->
<T.Group position={[-3.0, 0, -0.5]}>
  <T.Mesh position={[0, 0.3, 0]} castShadow>
    <T.CylinderGeometry args={[0.09, 0.09, 0.6, 8]} />
    <T.MeshLambertMaterial color={"#8B4513"} />
  </T.Mesh>
  <T.Mesh position={[0, 0.9, 0]} castShadow>
    <T.SphereGeometry args={[0.45, 8, 6]} />
    <T.MeshLambertMaterial color={"#228B22"} />
  </T.Mesh>
</T.Group>

<!-- Tree 6 - Side right -->
<T.Group position={[3.2, 0, 0.2]}>
  <T.Mesh position={[0, 0.4, 0]} castShadow>
    <T.CylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
    <T.MeshLambertMaterial color={"#8B4513"} />
  </T.Mesh>
  <T.Mesh position={[0, 1.1, 0]} castShadow>
    <T.SphereGeometry args={[0.55, 8, 6]} />
    <T.MeshLambertMaterial color={"#32CD32"} />
  </T.Mesh>
</T.Group>
