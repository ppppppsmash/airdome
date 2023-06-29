"use client"
import { useMediaQuery } from "react-responsive"
import { Canvas } from "@react-three/fiber";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader"
import { useLoader } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";

const Airdome = () => {
  const model = useLoader(ColladaLoader, "/models/model.dae");
  return (
    <>
      {/* <ambientLight /> */}
      {/* <pointLight position={[10, 10, 10]} />
      <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={true}>
        <group> */}
          <primitive
            object={model.scene}
          />
        {/* </group>
      </Stage> */}
      {/* <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={true} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} minDistance={50}  // カメラとモデルの最小距離を40に設定
          maxDistance={80} /> */}
    </>
  );
};

const ModelViewer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const zoom = isMobile ? 1 : 3;
  return (
    <Canvas
      className="w-full !md:h-[400px] !h-[300px]"
      shadows camera={{ position: [-80, 10, 50], fov: 15, zoom }}
    >
      <Airdome />
    </Canvas>
  );
};

export default ModelViewer;
