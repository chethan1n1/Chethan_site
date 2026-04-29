import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

function InteractiveCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { viewport, size } = useThree();
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / size.width) * 2 - 1,
        y: -(e.clientY / size.height) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const targetX = (mouse.x * viewport.width) / 2;
    const targetY = (mouse.y * viewport.height) / 2;
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    
    const scrollY = window.scrollY;
    const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    meshRef.current.scale.setScalar(0.6 + scrollProgress * 0.4);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.8, 4]} />
      <MeshDistortMaterial color={theme === 'dark' ? "#007AFF" : "#0051D7"} emissive={theme === 'dark' ? "#001A33" : "#E0E0E0"} speed={3} distort={0.4} radius={1} transparent opacity={0.6} />
    </mesh>
  );
}

function MinimalLaptop() {
  const group = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = -0.5 + Math.sin(t * 0.5) * 0.1;
    group.current.position.y = Math.sin(t * 0.7) * 0.1 - 1.5;
    
    const scrollY = window.scrollY;
    group.current.position.z = -2 + (scrollY * 0.001);
  });

  return (
    <group ref={group} position={[3, -1.5, -2]} rotation={[0.1, -0.5, 0]} scale={0.7}>
      {/* Base */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[2.5, 0.1, 1.8]} />
        <meshStandardMaterial color={theme === 'dark' ? "#1A1A1A" : "#E0E0E0"} metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Screen */}
      <group position={[0, 0, -0.9]} rotation={[-Math.PI / 2.3, 0, 0]}>
        <mesh position={[0, 0.9, 0.05]}>
          <boxGeometry args={[2.5, 1.8, 0.05]} />
          <meshStandardMaterial color={theme === 'dark' ? "#0A0A0A" : "#F5F5F7"} metalness={1} roughness={0} />
        </mesh>
        {/* Glowing Display */}
        <mesh position={[0, 0.9, 0.08]}>
          <planeGeometry args={[2.4, 1.7]} />
          <meshStandardMaterial color="#007AFF" emissive="#007AFF" emissiveIntensity={theme === 'dark' ? 1.5 : 0.8} transparent opacity={0.7} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingTechIcons() {
  const { theme } = useTheme();
  const iconData = useMemo(() => [
    { pos: [-5, 3, -3], color: '#61DAFB' }, // React
    { pos: [5, 4, -4], color: '#FFD43B' },  // Python
    { pos: [-3, -3, -2], color: '#3178C6' }, // TS
    { pos: [4, -2, -3], color: '#007AFF' }, // Data
  ], []);

  return (
    <group>
      {iconData.map((data, i) => (
        <Float key={i} speed={2} rotationIntensity={1.5} floatIntensity={1.5} position={data.pos}>
          <mesh>
            <octahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial color={data.color} emissive={data.color} emissiveIntensity={theme === 'dark' ? 1 : 0.5} wireframe />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(3000 * 3);
    const cols = new Float32Array(3000 * 3);
    const color = new THREE.Color(theme === 'dark' ? '#007AFF' : '#1D1D1F');
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return [pos, cols];
  }, [theme]);

  useFrame((state) => {
    if (!ref.current) return;
    const scrollY = window.scrollY;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.05 + scrollY * 0.001;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.03 + scrollY * 0.0005;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial transparent vertexColors size={0.015} sizeAttenuation depthWrite={false} blending={theme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending} opacity={theme === 'dark' ? 0.4 : 0.2} />
    </Points>
  );
}

function MovingGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);
  const { theme } = useTheme();
  useFrame((state) => {
    if (!gridRef.current) return;
    const scrollY = window.scrollY;
    gridRef.current.position.z = (scrollY * 0.01) % 1;
  });
  const gridColor = theme === 'dark' ? '#1F2833' : '#E0E0E0';
  return <gridHelper ref={gridRef} args={[40, 40, gridColor, gridColor]} position={[0, -4, 0]} rotation={[Math.PI / 2, 0, 0]} />;
}

const Scene3D = () => {
  const { theme } = useTheme();
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none transition-colors duration-1000 ${theme === 'dark' ? 'bg-[#020205]' : 'bg-[#FAFAFA]'}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={1} gl={{ antialias: false }}>
        <ambientLight intensity={theme === 'dark' ? 0.5 : 1} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1.5 : 0.8} color="#007AFF" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#007AFF" />
        
        <ParticleField />
        <InteractiveCore />
        <MinimalLaptop />
        <FloatingTechIcons />
        <MovingGrid />
        
        <fog attach="fog" args={[theme === 'dark' ? '#020205' : '#FAFAFA', 0, 15]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
