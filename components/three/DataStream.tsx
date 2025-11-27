'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function FlowLines() {
  const group = useRef<THREE.Group>(null);
  const flows = useMemo(() => {
    return Array.from({ length: 5 }).map((_, idx) => {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i < 60; i++) {
        const angle = (i / 20) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(angle + idx) * 1.2,
            (i / 20 - 1.5) * 0.6,
            Math.sin(angle + idx) * 1.2
          )
        );
      }
      return points;
    });
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {flows.map((points, idx) => (
        <Line
          key={idx}
          points={points}
          color={idx % 2 ? '#a855f7' : '#0ea5e9'}
          lineWidth={1.5}
          dashed={false}
        />
      ))}
    </group>
  );
}

function DataNodes() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!mesh.current) return;
    for (let i = 0; i < 80; i++) {
      const theta = (i / 80) * Math.PI * 2;
      const radius = 1 + 0.2 * Math.sin(state.clock.elapsedTime + i);
      dummy.position.set(Math.cos(theta) * radius, Math.sin(theta * 2) * 0.5, Math.sin(theta) * radius);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, 80]}>
      <sphereGeometry args={[0.04, 12, 12]} />
      <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.6} />
    </instancedMesh>
  );
}

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial
        color="#0f172a"
        metalness={0.8}
        roughness={0.2}
        emissive="#22d3ee"
        emissiveIntensity={0.4}
        wireframe
      />
    </mesh>
  );
}

export default function DataStream() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#a855f7" />
      <pointLight position={[-5, -3, -2]} intensity={0.7} color="#0ea5e9" />
      <FlowLines />
      <DataNodes />
      <Core />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}
