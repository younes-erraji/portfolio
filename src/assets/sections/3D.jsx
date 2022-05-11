import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cube = ({ color, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x = 0.1;
    ref.current.rotation.y = 0.1;
  });
  return (
    <mesh
      ref={ref}
      scale={isHovered ? 1.5 : 1}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      {...props}
    >
      <pointLight />
      <boxBufferGeometry />
      <meshPhysicalMaterial color={color} />
    </mesh>
  );
};

export default Cube;
