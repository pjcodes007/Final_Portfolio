import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Shaders
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  varying vec2 vUv;
  uniform float u_time;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
  }

  void main() {
    vec2 st = vUv * 3.0;
    float n = noise(st + vec2(u_time * 0.05, u_time * 0.02));
    vec3 color = vec3(n * 0.1 +0.05);

    gl_FragColor = vec4(color, 1.0);
  }
`;


function Noise() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ u_time: { value: 0 } }}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}


export default function NoiseBackground() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Noise />
      </Canvas>
    </div>
  );
}
