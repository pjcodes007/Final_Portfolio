import { Canvas } from "@react-three/fiber";
import NoiseBackground from "./NoiseBackground";

const Background = () =>{
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <NoiseBackground />
      </Canvas>
    </div>
  );
}

export default Background;
