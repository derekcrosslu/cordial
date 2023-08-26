/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 bar.glb
*/

import React, { useRef } from 'react'

import {
  useGLTF,
  PerspectiveCamera,
  ContactShadows,
  OrbitControls,
  OrthographicCamera,
  Environment,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const camera = useRef()
  const { nodes, materials } = useGLTF('/bar.glb')
  return (
    <group {...props} dispose={null}>
      <OrbitControls />
      <group scale={0.01}>
        {/* <group position={[757.1, 305.13, -4600.45]} scale={20}> */}{' '}
        <group scale={20}>
          <group position={[-59.34, -41.1, 247.31]}>
            <group position={[59.34, 41.1, -247.31]}>
              {/* <OrthographicCamera
                name="1"
                makeDefault={true}
                zoom={10}
                far={100000}
                near={0.01}
                position={[0, 0, -1000]}
                rotation={[0, 180, 0]}
              /> */}
              {/* <pointLight position={[10, 10, 5]} /> */}
              {/* <ambientLight /> */}
              {/* <Environment preset="city" /> */}
              <hemisphereLight
                name="Default Ambient Light"
                intensity={0.75}
                color="#798c9f"
              />
              {/* <ContactShadows
                color={'blue'}
                position={[0, -1.5, 0]}
                blur={3}
                opacity={0.75}
              /> */}
              <directionalLight
                name="Directional Light"
                castShadow
                intensity={1.59}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={-10000}
                shadow-camera-far={100000}
                shadow-camera-left={-1000}
                shadow-camera-right={1000}
                shadow-camera-top={1000}
                shadow-camera-bottom={-1000}
                color="#f9f2d6"
                // position={[520, 2834, 300]}
                position={[668.16, 693.8, -268.71]}
              />
              <mesh
                geometry={nodes.Cube027009.geometry}
                material={materials.Material_26}
              />
              <mesh
                geometry={nodes.Cube027_1009.geometry}
                material={materials.Material_27}
              />
            </group>
            <group position={[59.34, 41.1, -272.31]}>
              <mesh
                geometry={nodes.Cube027007.geometry}
                material={materials.Material_22}
              />
              <mesh
                geometry={nodes.Cube027_1007.geometry}
                material={materials.Material_23}
              />
            </group>
            <group position={[59.34, 41.1, -301.31]}>
              <mesh
                geometry={nodes.Cube027005.geometry}
                material={materials.Material_18}
              />
              <mesh
                geometry={nodes.Cube027_1005.geometry}
                material={materials.Material_19}
              />
            </group>
            <group position={[59.34, 41.1, -325.31]}>
              <mesh
                geometry={nodes.Cube027003.geometry}
                material={materials.Material_14}
              />
              <mesh
                geometry={nodes.Cube027_1003.geometry}
                material={materials.Material_15}
              />
            </group>
            <group position={[59.34, 41.1, -345.31]}>
              <mesh
                geometry={nodes.Cube027001.geometry}
                material={materials.Material_10}
              />
              <mesh
                geometry={nodes.Cube027_1001.geometry}
                material={materials.Material_11}
              />
            </group>
            <group position={[122.34, 41.1, -345.31]}>
              <mesh
                geometry={nodes.Cube027.geometry}
                material={materials.Material_8}
              />
              <mesh
                geometry={nodes.Cube027_1.geometry}
                material={materials.Material_9}
              />
            </group>
            <group position={[122.34, 41.1, -325.31]}>
              <mesh
                geometry={nodes.Cube027002.geometry}
                material={materials.Material_12}
              />
              <mesh
                geometry={nodes.Cube027_1002.geometry}
                material={materials.Material_13}
              />
            </group>
            <group position={[122.34, 41.1, -301.31]}>
              <mesh
                geometry={nodes.Cube027004.geometry}
                material={materials.Material_16}
              />
              <mesh
                geometry={nodes.Cube027_1004.geometry}
                material={materials.Material_17}
              />
            </group>
            <group position={[122.34, 41.1, -272.31]}>
              <mesh
                geometry={nodes.Cube027006.geometry}
                material={materials.Material_20}
              />
              <mesh
                geometry={nodes.Cube027_1006.geometry}
                material={materials.Material_21}
              />
            </group>
            <group position={[122.34, 41.1, -247.31]}>
              <mesh
                geometry={nodes.Cube027008.geometry}
                material={materials.Material_24}
              />
              <mesh
                geometry={nodes.Cube027_1008.geometry}
                material={materials.Material_25}
              />
            </group>
          </group>
          <group position={[-74.36, 16.53, 512.47]}>
            <mesh
              geometry={nodes.Cube001.geometry}
              material={materials.Material_35}
              position={[74.36, -16.53, -512.47]}
            />
            <mesh
              geometry={nodes.Cube002.geometry}
              material={materials.Material_36}
              position={[74.36, -16.53, -512.47]}
            />
            <mesh
              geometry={nodes.Cube004.geometry}
              material={materials.Material_34}
              position={[74.36, -16.53, -512.47]}
            />
            <mesh
              geometry={nodes.Cube005.geometry}
              material={materials.Material_37}
              position={[74.36, -16.53, -512.47]}
            />
            <mesh
              geometry={nodes.Cube007.geometry}
              material={materials.Material_38}
              position={[74.36, -16.53, -512.47]}
            />
            <mesh
              geometry={nodes.Cube010.geometry}
              material={materials.Material_39}
              position={[74.36, -16.53, -512.47]}
            />
            <mesh
              geometry={nodes.Cube011.geometry}
              material={materials.Material_40}
              position={[74.36, -16.53, -512.47]}
            />
            <mesh
              geometry={nodes.Cube012.geometry}
              material={materials.Material_41}
              position={[74.36, -16.53, -512.47]}
            />
            <mesh
              geometry={nodes.Cube014.geometry}
              material={materials.Material_42}
              position={[74.36, -16.53, -512.47]}
            />
            <mesh
              geometry={nodes.Cube015.geometry}
              material={materials.Material_43}
              position={[74.36, -16.53, -512.47]}
            />
          </group>
          <mesh
            geometry={nodes.Cube003.geometry}
            material={materials.Material_52}
          />
          <mesh
            geometry={nodes.Cube008.geometry}
            material={materials.Material_44}
          />
          <mesh
            geometry={nodes.Cube009.geometry}
            material={materials.Material_1}
          />
          <mesh
            geometry={nodes.Cube034.geometry}
            material={materials.Material_32}
          />
          <mesh
            geometry={nodes.Cube037.geometry}
            material={materials.Material_28}
          />
          <mesh
            geometry={nodes.Cube042.geometry}
            material={materials.Material_29}
          />
          <mesh
            geometry={nodes.Cube045.geometry}
            material={materials.Material_53}
          />
          <mesh
            geometry={nodes.Cube050.geometry}
            material={materials.Material_30}
          />
          <mesh
            geometry={nodes.NUEVO_PATIO001.geometry}
            material={materials.Material_45}
          />
          <mesh
            geometry={nodes.Plane.geometry}
            material={materials.Material_33}
          />
          <mesh
            geometry={nodes.ROOM.geometry}
            material={materials.Material_0}
          />
          {/* <mesh
            geometry={nodes.VIDRIO_DISCO.geometry}
            material={materials.Material_31}
          /> */}
          <mesh
            geometry={nodes.Cube023.geometry}
            material={materials.Material_2}
          />
          <mesh
            geometry={nodes.Cube023_1.geometry}
            material={materials.Material_3}
          />
          <mesh
            geometry={nodes.BezierCurve001_1.geometry}
            material={materials.Material_58}
          />
          <mesh
            geometry={nodes.BezierCurve001_2.geometry}
            material={materials.Material_59}
          />
          <mesh
            geometry={nodes.BezierCurve001_3.geometry}
            material={materials.Material_60}
          />
          <mesh
            geometry={nodes.Cube071.geometry}
            material={materials.Material_69}
          />
          <mesh
            geometry={nodes.Cube071_1.geometry}
            material={materials.Material_70}
          />
          <mesh
            geometry={nodes.Cube071_2.geometry}
            material={materials.Material_71}
          />
          <mesh
            geometry={nodes.Cube005_1.geometry}
            material={materials.Material_72}
          />
          <mesh
            geometry={nodes.Cube005_2.geometry}
            material={materials.Material_73}
          />
          <mesh
            geometry={nodes.Cube005_3.geometry}
            material={materials.Material_74}
          />
          <mesh
            geometry={nodes.Cube024.geometry}
            material={materials.Material_4}
          />
          <mesh
            geometry={nodes.Cube024_1.geometry}
            material={materials.Material_5}
          />
          <mesh
            geometry={nodes.Cube035_1.geometry}
            material={materials.Material_6}
          />
          <mesh
            geometry={nodes.Cube035_2.geometry}
            material={materials.Material_7}
          />
          <mesh
            geometry={nodes.Cube086.geometry}
            material={materials.Material_54}
          />
          <mesh
            geometry={nodes.Cube086_1.geometry}
            material={materials.Material_55}
          />
          <mesh
            geometry={nodes.Cube088.geometry}
            material={materials.Material_56}
          />
          <mesh
            geometry={nodes.Cube088_1.geometry}
            material={materials.Material_57}
          />
          <mesh
            geometry={nodes.Cylinder001.geometry}
            material={materials.Material_48}
          />
          <mesh
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.Material_49}
          />
          <mesh
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.Material_50}
          />
          <mesh
            geometry={nodes.Cylinder001_3.geometry}
            material={materials.Material_51}
          />
          <mesh
            geometry={nodes.DISCOS1_1.geometry}
            material={materials.Material_61}
            position={[0, 0, 629.93]}
          />
          <mesh
            geometry={nodes.DISCOS1_2.geometry}
            material={materials.Material_62}
          />
          <mesh
            geometry={nodes.DISCOS1_3.geometry}
            material={materials.Material_63}
          />
          <mesh
            geometry={nodes.DISCOS1_4.geometry}
            material={materials.Material_64}
            position={[0, 0, 629.93]}
          />
          <mesh
            geometry={nodes.DISCOS1_5.geometry}
            material={materials.Material_65}
          />
          <mesh
            geometry={nodes.DISCOS1_6.geometry}
            material={materials.Material_66}
            position={[0, 0, 629.93]}
          />
          <mesh
            geometry={nodes.DISCOS1_7.geometry}
            material={materials.Material_67}
          />
          <mesh
            geometry={nodes.DISCOS1_8.geometry}
            material={materials.Material_68}
          />
          <mesh
            geometry={nodes.Plane001.geometry}
            material={materials.Material_46}
          />
          <mesh
            geometry={nodes.Plane001_1.geometry}
            material={materials.Material_47}
          />
        </group>
        <group name="DISCOS1" position={[0, 0, 0]}>
          <mesh
            name="DISCOS1_1"
            geometry={nodes.DISCOS1_1.geometry}
            material={nodes.DISCOS1_1.material}
            castShadow
            receiveShadow
            position={[0, 0, 629.93]}
          />
          <mesh
            name="DISCOS1_2"
            geometry={nodes.DISCOS1_2.geometry}
            material={nodes.DISCOS1_2.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="DISCOS1_3"
            geometry={nodes.DISCOS1_3.geometry}
            material={nodes.DISCOS1_3.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="DISCOS1_4"
            geometry={nodes.DISCOS1_4.geometry}
            material={nodes.DISCOS1_4.material}
            castShadow
            receiveShadow
            position={[0, 0, 629.93]}
          />
          <mesh
            name="DISCOS1_5"
            geometry={nodes.DISCOS1_5.geometry}
            material={nodes.DISCOS1_5.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="DISCOS1_6"
            geometry={nodes.DISCOS1_6.geometry}
            material={nodes.DISCOS1_6.material}
            castShadow
            receiveShadow
            position={[0, 0, 629.93]}
          />
          <mesh
            name="DISCOS1_7"
            geometry={nodes.DISCOS1_7.geometry}
            material={nodes.DISCOS1_7.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="DISCOS1_8"
            geometry={nodes.DISCOS1_8.geometry}
            material={nodes.DISCOS1_8.material}
            castShadow
            receiveShadow
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bar.glb')