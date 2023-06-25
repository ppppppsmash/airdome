"use client"
import React from "react"
import { Stage, Grid, OrbitControls, Environment } from '@react-three/drei'
import { Canvas, useLoader } from "@react-three/fiber"
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader"


const ModelViewer = () => {
  const { scene } = useLoader(ColladaLoader, "/models/model.dae" );

  return (
    <Canvas
      className="w-full md:h-[600px] h-[300px]"
      shadows camera={{ position: [-80, 10, 50], fov: 30 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={true}>
        <group>
          <primitive object={scene} />
        </group>
      </Stage>
      <ambientLight args={[0xffffff]} intensity={0.1} />
      <Grid renderOrder={-1} position={[0, 2, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} fadeDistance={30} />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} minDistance={40}  // カメラとモデルの最小距離を40に設定
      maxDistance={50} />
      <Environment background preset="sunset" blur={0.8} />
    </Canvas>
  )
}

export default ModelViewer;
