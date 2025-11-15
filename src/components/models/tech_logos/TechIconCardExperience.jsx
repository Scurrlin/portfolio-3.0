import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }

    // Apply bright material to ThreeJS model
    if (model.name === "ThreeJS") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          // Create a bright, slightly metallic material
          const material = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,  // Pure white
            metalness: 0.2,   // Slight metallic look
            roughness: 0.1,   // Very smooth surface
            emissive: 0xFFFFFF, // Add some self-illumination
            emissiveIntensity: 0.2 // Control the glow intensity
          });
          child.material = material;
        }
      });
    }

    // Apply gradient material to NodeJS model
    if (model.name === "NodeJS") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          // Create a custom gradient shader material with brighter colors
          const gradientMaterial = new THREE.ShaderMaterial({
            uniforms: {
              color1: { value: new THREE.Color("#4285f4") },  // Brighter blue
              color2: { value: new THREE.Color("#d242f4") },  // Brighter purple
            },
            vertexShader: `
              varying vec3 vPosition;
              
              void main() {
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform vec3 color1;
              uniform vec3 color2;
              
              varying vec3 vPosition;
              
              void main() {
                float gradientFactor = pow((vPosition.y + 1.0) * 0.5, 1.2);
                vec3 finalColor = mix(color2, color1, gradientFactor);
                gl_FragColor = vec4(finalColor * 1.4, 1.0);  // Increased overall brightness even more
              }
            `,
          });
          child.material = gradientMaterial;
        }
      });
    }

    // 4-color diamond grid pattern for CI/CD model
    if (model.name === "CI/CD") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          // Custom shader material with 4 colors in a rotated grid
          const diamondGridMaterial = new THREE.ShaderMaterial({
            uniforms: {
              colorBlue: { value: new THREE.Color("#7FB3E8") },    // Light blue
              colorPink: { value: new THREE.Color("#F5A1A1") },    // Pink/Red
              colorGreen: { value: new THREE.Color("#A8E08C") },   // Light green
              colorYellow: { value: new THREE.Color("#F5E88C") },  // Light yellow
            },
            vertexShader: `
              varying vec3 vPosition;
              varying vec3 vNormal;
              
              void main() {
                vPosition = position;
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform vec3 colorBlue;
              uniform vec3 colorPink;
              uniform vec3 colorGreen;
              uniform vec3 colorYellow;
              
              varying vec3 vPosition;
              varying vec3 vNormal;
              
              void main() {
                // Center the position based on the model's bounds
                // Git model bounds: x: [-0.5 to 92.4], y: [-0.4 to 92.5]
                vec3 pos = vPosition;
                vec2 centered = vec2(
                  pos.x - 46.0,  // Center X (roughly middle of model)
                  pos.y - 46.0   // Center Y (roughly middle of model)
                );
                
                // Rotate coordinates by 45 degrees around Z axis
                float angle = 3.14159265 / 4.0; // 45 degrees in radians
                float cosA = cos(angle);
                float sinA = sin(angle);
                vec2 rotated = vec2(
                  centered.x * cosA - centered.y * sinA,
                  centered.x * sinA + centered.y * cosA
                );
                
                // Determine quadrant relationships
                bool isLeft = rotated.x < 0.0;
                bool isBottom = rotated.y < 0.0;
                
                // Select color based on quadrant
                vec3 finalColor;
                if (!isLeft && !isBottom) {
                  finalColor = colorGreen;  // Top-right
                } else if (isLeft && !isBottom) {
                  finalColor = colorYellow; // Top-left
                } else if (isLeft && isBottom) {
                  finalColor = colorBlue;   // Bottom-left
                } else {
                  finalColor = colorPink;   // Bottom-right
                }
                
                // Lighting
                vec3 lightDir = normalize(vec3(5.0, 5.0, 5.0)); // Directional light position
                float diffuse = max(dot(vNormal, lightDir), 0.0);
                float ambient = 0.3; // Ambient light intensity
                float lighting = ambient + diffuse * 1.0; // (1.0 => directional light intensity)
                finalColor *= lighting;
                
                gl_FragColor = vec4(finalColor, 1.0);
              }
            `,
          });
          child.material = diamondGridMaterial;
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      {/* 
        The Float component from @react-three/drei is used to 
        create a simple animation of the model floating in space.
        The rotationIntensity and floatIntensity props control the
        speed of the rotation and float animations respectively.

        The group component is used to scale and rotate the model.
        The rotation is set to the value of the model.rotation property,
        which is an array of three values representing the rotation in
        degrees around the x, y and z axes respectively.

        The primitive component is used to render the 3D model.
        The object prop is set to the scene object returned by the
        useGLTF hook, which is an instance of THREE.Group. The
        THREE.Group object contains all the objects (meshes, lights, etc)
        that make up the 3D model.
      */}
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group 
          scale={model.scale} 
          rotation={model.rotation}
          position={model.position || [0, 0, 0]}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;