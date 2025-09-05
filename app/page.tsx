'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

export default function Home() {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '50px 20px',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: 1.6,
    marginTop: '1rem',
    marginBottom: '2rem',
  };

  const canvasWrapperStyle: React.CSSProperties = {
    width: '100%',
    height: '400px',
    marginTop: '40px',
  };

  // Particles 컴포넌트
  function Particles() {
    const count = 2000;
    const positions = useMemo(() => {
      const arr = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        arr[i] = (Math.random() - 0.5) * 10;
      }
      return arr;
    }, [count]);

    return (
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00ffff"
          transparent
          opacity={0.8}
        />
      </points>
    );
  }

  return (
    <div>
      <main style={containerStyle}>
        <h1 className="text-3xl md:text-6xl font-bold">
            과천시 중소기업협의회에 오신 것을 환영합니다.
        </h1>
        <p style={subtitleStyle}>
            우리는 과천시 중소기업의 성장을 넘어 지역 사회의 공동체, 시민, 청년, 
            그리고 커뮤니티 발전을 함께 고민하며 실천합니다.
            <br />
            더불어 함께 성장하는 따뜻한 경제와 지속 가능한 미래를 만들어갑니다.
        </p>

        {/* 하단 인터랙티브 3D */}
        <div style={canvasWrapperStyle}>
            <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <Particles />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
      </main>
    </div>
  );
}
