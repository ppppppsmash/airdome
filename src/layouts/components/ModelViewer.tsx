"use client"
import React, { useRef } from "react"
import { Stage, Grid, OrbitControls, Environment } from '@react-three/drei'
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader"
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { easing } from 'maath'


const ModelViewer = (props: any) => {
  const group = useRef();
  const { scene } = useLoader(ColladaLoader, "/models/model.dae", );

  return (
    // <Canvas
    //   style={{width: "800px", height: "600px"}}
    // >
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
    //   <primitive object={model.scene} />
    // </Canvas>
    // <Canvas
    //   style={{width: "100%", height: "600px"}}
    //   shadows camera={{ position: [-20, 100, 100], fov: 15 }}>
    // {/* // <Canvas
    // //   style={{width: "100%", height: "600px"}}
    // //   shadows camera={{ position: [-15, 10, 15], fov: 25 }}> */}

    <Canvas 
      style={{width: "100%", height: "600px"}}
      shadows camera={{ position: [0, 0, 40], fov: 60, near: 0.1, far: 1000 }}>
      <color attach="background" args={['white']} />
      <ambientLight args={[0xffffff]} intensity={0.2} />
      <fog attach="fog" args={['black', 15, 21.5]} />
      <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={true}>
        <primitive
          object={scene}
        />
      </Stage>
      <Grid renderOrder={-1} position={[0, 2, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} fadeDistance={30} />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} minDistance={35}  // カメラとモデルの最小距離を5に設定
  maxDistance={50} />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur />
      </EffectComposer>
      <Environment background preset="sunset" blur={0.8} />
      <directionalLight position={[0.5, 0.5, 0.5]} intensity={0.8} />
    </Canvas>
  )
}

export default ModelViewer;
