
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props: any) {
  const ref = useRef<any>();
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingCube() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[2, 0, -5]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#0066ff" 
        transparent 
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

function FloatingSphere() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[-2, 0, -3]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial 
        color="#00ffff" 
        transparent 
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
}

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <FloatingCube />
      <FloatingSphere />
    </Canvas>
  );
};

export default ThreeScene;
