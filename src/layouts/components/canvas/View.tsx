'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef, ReactNode } from 'react';
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei';

export const Common = ({ color }: {color: string}) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color='blue' />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

// const View = forwardRef(({ children, orbit, className, ...props }: ViewProps, ref) => {
//   const localRef = useRef<HTMLDivElement>(null);
//   useImperativeHandle(ref, () => localRef.current as HTMLElement);

//   return (
//     <>
//       <div ref={localRef} className={className} {...props} />
//       <Three>
//         <ViewImpl track={localRef.current as HTMLDivElement}>
//           {children}
//           {orbit && <OrbitControls />}
//         </ViewImpl>
//       </Three>
//     </>
//   );
// });
// View.displayName = 'View';


// export { View };
