import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarryBackground() {
  return (
    <div className="fixed inset-0 z-[-10] bg-black">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Stars
          radius={100}        
          depth={100}          
          count={2500}        
          factor={3}       
          saturation={0} 
          fade                
          speed={1}            
        />
      </Canvas>
    </div>
  );
}
