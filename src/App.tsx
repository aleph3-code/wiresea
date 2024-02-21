import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function RotatingBox() {
  const boxMesh = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (boxMesh.current) {
      boxMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
      boxMesh.current.rotation.y = Math.cos(clock.getElapsedTime());
    }
  });

  return (
    <mesh ref={boxMesh}>
      <boxGeometry />
      {/* Wireframe */}
      <meshBasicMaterial wireframe />
    </mesh>
  );
}

function App() {
  return (
    <div id="canvas-container" style={{width: "100%"}}>
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight color="blue" position={[0, 0, 5]} />
        <RotatingBox />
      </Canvas>
    </div>
  );
}

export default App;
