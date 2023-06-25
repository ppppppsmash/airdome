"use client"
// const ModelViewer = () => {
//   const { scene } = useLoader(ColladaLoader, "/models/model.dae" );

//   return (
//     <Canvas
//       frameloop="demand"
//       className="w-full md:h-[600px] h-[300px]"
//       shadows camera={{ position: [-80, 10, 50], fov: 15, zoom: 1.8 }}
//     >
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={true}>
//         <group>
//           <primitive object={scene} />
//         </group>
//       </Stage>
//       <ambientLight args={[0xffffff]} intensity={0.1} />
//       {/* <Grid renderOrder={-1} position={[0, 2, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} fadeDistance={30} /> */}
//       <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} minDistance={50}  // カメラとモデルの最小距離を40に設定
//       maxDistance={80} />
//       {/* <Environment background preset="sunset" blur={0.8} /> */}
//     </Canvas>
//   )
// }

// export default ModelViewer;


import { Canvas } from "@react-three/fiber";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader"
import { useLoader } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";

const Airdome = () => {
  const model = useLoader(ColladaLoader, "/models/model.dae");
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={true}>
        <group>
          <primitive
            object={model.scene}
          />
        </group>
      </Stage>
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} minDistance={50}  // カメラとモデルの最小距離を40に設定
          maxDistance={80} />
    </>
  );
};

const ModelViewer = () => {
  return (
    <Canvas
      className="w-full md:h-[600px] h-[300px]"
      shadows camera={{ position: [-80, 10, 50], fov: 15, zoom: 1.8 }}
    >
      <Airdome />
    </Canvas>
  );
};

export default ModelViewer;
