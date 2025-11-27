'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo } from 'react';

const nodes = [
  { position: [-2, 0.8, 0], color: '#34d399' },
  { position: [-1, -0.6, 0], color: '#fbbf24' },
  { position: [0.5, 1, 0], color: '#60a5fa' },
  { position: [1.5, -0.4, 0], color: '#a78bfa' },
  { position: [2.5, 0.6, 0], color: '#f472b6' }
];

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 2],
  [1, 3]
];

function DataNode({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float floatIntensity={1} speed={2} rotationIntensity={0.6}>
      <mesh position={position}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function Connection({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const curvePoints = useMemo(() => {
    const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    midPoint.z += 0.6;
    return [start.toArray(), midPoint.toArray(), end.toArray()];
  }, [start, end]);

  return (
    <Line
      points={curvePoints as unknown as [number, number, number][]}
      color="#94a3b8"
      lineWidth={2}
      dashed={false}
      opacity={0.6}
      transparent
    />
  );
}

export default function DataFlowScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />
      {nodes.map((node, index) => (
        <DataNode key={index} position={node.position as [number, number, number]} color={node.color} />
      ))}
      {connections.map(([startIndex, endIndex], idx) => (
        <Connection
          key={idx}
          start={new THREE.Vector3(...nodes[startIndex].position)}
          end={new THREE.Vector3(...nodes[endIndex].position)}
        />
      ))}
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
