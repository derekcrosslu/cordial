import {
  OrthographicCamera,
  useGLTF,
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Plane,
  Select,
} from '@react-three/drei'

import {
  useFrame,
  useLoader,
  useThree,
  Canvas,
  extend,
addEffect
} from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { useSnapshot } from 'valtio'

import state from '../../store'
import { add } from 'date-fns';

// extend({ planeBufferGeometry })

const Floor = () => {
  const materialRef = React.useRef()
  const { scene } = useLoader(GLTFLoader, 'bar.glb')

  // Find the texture map in the loaded GLB scene
  const textureMap = scene.children.find((child) => child.isMesh)?.material?.map

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-60, -82.5, 500]}
        scale={[30, 30, 30]}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          ref={materialRef}
          map={textureMap}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

const Floor2 = () => {
  const materialRef = React.useRef()
  const { nodes } = useGLTF('/bar.glb')
  const floorMap = nodes.ROOM.material.map
  const { size } = useThree()

  // Set the UV coordinates to pick a section of the texture map
  const uvs = [
    new THREE.Vector2(10, 0),
    // new THREE.Vector2(0, 1),
    // new THREE.Vector2(1, 1),
    // new THREE.Vector2(1, 0),
  ]

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Plane
        // args={[10, 10]}
        // rotation={[-Math.PI / 2, 0, 0]}
        // position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[-199, -82.5, 550]}
        scale={[550, 550, 550]}
      >
        <meshStandardMaterial
          // ref={materialRef}
          map={floorMap}
          // side={THREE.TwoPassDoubleSide}
        />
        {/* <geometry attach="geometry"> */}
        {/* <planeGeometry args={[20, 20]} /> */}
        {/* <bufferAttribute
          // attachObject={['attributes', 'uv']}
          count={4}
          array={uvs.flatMap((v) => [v.x, v.y])}
          itemSize={2}
        /> */}
        {/* </geometry> */}
      </Plane>
    </>
  )
}

export default function Scene({ ...props }) {
  const { nodes, materials } = useGLTF('/bar.glb')
  const texture = useLoader(THREE.TextureLoader, '/black-stone-texture.jpg')
  const camera = React.useRef()
  const snap = useSnapshot(state)
  // useFrame(({ clock, camera }) => {
  //   camera.position.y = 15

  //   // camera.fov = 75
  //   // camera.near = 0.1
  //   // camera.far = 1000
  //   // camera.background = new THREE.Color(0x000000)
  //   camera.position.x = Math.cos(clock.getElapsedTime() / 7)
  //   camera.position.z = Math.sin(clock.getElapsedTime() / 7)
  //   camera.lookAt(10, 15, 10)
  // })
    const handleClick = (e) => {
    console.log('click', e.object.name);
    state.click[e.object.name] = !snap.click[e.object.name]
    
    }
  const handleHover = (e) => {
    console.log('hover', e.object.name);
    state.hover = e.object.name
  }

  // const ref = useUpdate(
  //   (camera) => {
  //     console.log('camera', camera);
  //     camera.position.set(0, 0, 0)
  //     camera.lookAt(0, 0, 0)
  //   },
  //   [snap.handleCamera]
  // )

  // addEffect(() => {
  //   camera.lookAt(10, 15, 10)
  // },[])

  useFrame(({ clock, camera }) => {
    if (snap.reservacion) {
      // camera.lookAt(1, 0.05, 1)
      // camera.rotateY(0.01)
      camera.rotateX(-0.15)
      camera.rotateZ(0.16)
      // camera.rotateOnAxis(new THREE.Vector3(0, 0, 0), -0.01)
      // camera.rotateOnWorldAxis(new THREE.Vector3(0, 0, 0), -0.1)

      camera.position.set(75.1, 825, -48)
    } else {
      console.log('reservacion', snap.reservacion);
    //       camera.position.y = 15

    // camera.fov = 75
    // camera.near = 0.1
    // camera.far = 1000
    // camera.background = new THREE.Color(0x000000)
    // camera.position.x = Math.cos(clock.getElapsedTime() / 7)
    // camera.position.z = Math.sin(clock.getElapsedTime() / 7)
    // camera.lookAt(10, 15, 10)
    }
  })
  

  console.log('hover', snap.hover);
  console.log('click', snap.click);
  
  const floorMap = nodes.ROOM.material.map
  return (
    <group {...props} dispose={null}>
      {/* <color attach="background" args={['red']} /> */}
      <OrbitControls />
      <pointLight position={[10, 10, 5]} />
      <ambientLight />
      {/* <Environment background={true} map={texture} /> */}
      {/* // load texture map to enviroment */}
      <group
        
        position={[757.1, 825.13, -4800.45]}
        // position={[25.64, -21.81, -16.96]}
        scale={9}
       
        rotation={[0.1, 0.02, 0.08]}
      >
            <directionalLight
              name="Directional Light"
              castShadow
              intensity={5}
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
              position={[0.16, 6930.8, -8.71]}
          // position={[0, 0, 0]}
            />
  

                    <PerspectiveCamera
              name="Desde la Barra"
              makeDefault={true}
              fov={45}
              far={100000}
              near={1}
              zoom={2.5}
              // position={[0, 154, 2002]}
              position={[10, 200, -10]}
              // rotation={[-8, -9, -1]}
            />

        <Floor2 />
        <Plane
          // args={[10, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-390, -70.5, 700]}
          scale={[300, 900, 300]}
        >
          <meshBasicMaterial color={'black'} />
        </Plane>
        <Plane
          // args={[10, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-80, -70.5, 750]}
          scale={[320, 150, 50]}
        >
          <meshBasicMaterial color={'black'} />
        </Plane>
         <Select  box onClick={e=>handleClick(e)} onPointerEnter={e=>handleHover(e)}>

        <group >
          <mesh
            
            geometry={nodes.Cube023.geometry}
            material={nodes.Cube023.material}
            castShadow
            receiveShadow
          />
          <mesh
            
            geometry={nodes.Cube023_1.geometry}
            material={nodes.Cube023_1.material}
            castShadow
            receiveShadow
          />
        </group>
        {/* <group name="Cube016">
          <mesh
            name="Cube024"
            geometry={nodes.Cube024.geometry}
            material={nodes.Cube024.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Cube024_1"
            geometry={nodes.Cube024_1.geometry}
            material={nodes.Cube024_1.material}
            castShadow
            receiveShadow
          />
        </group> */}
        {/* <group name="Cube017">
          <mesh
            name="Cube035_1"
            geometry={nodes.Cube035_1.geometry}
            material={nodes.Cube035_1.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Cube035_2"
            geometry={nodes.Cube035_2.geometry}
            material={nodes.Cube035_2.material}
            castShadow
            receiveShadow
          />
        </group> */}
          <group name="BANCAS" position={[-59.34, -41.1, 247.31]}>
             <group name="Banca1" position={[9.34, 41.1, -247.31]}>
            <mesh
            
              geometry={nodes.Cube027005.geometry}
              material={nodes.Cube027005.material}
              castShadow
              receiveShadow
            />
            <mesh
             name="Banca1"
              geometry={nodes.Cube027_1005.geometry}
              // material={snap.hover==='Banca1'?nodes.Cube071.material:snap.click['Banca1']?nodes.Cube027005.material:nodes.Cube027_1005.material}
                material={snap.click['Banca1']?nodes.Cube027005.material:snap.hover==='Banca1'?nodes.Cube071.material:nodes.Cube027_1005.material}
              castShadow
              receiveShadow
              >
                
            </mesh>
            </group>
      <group name="Banca2" position={[9.34, 41.1, -272.31]}>
            <mesh
            
              geometry={nodes.Cube027005.geometry}
              material={nodes.Cube027005.material}
              castShadow
              receiveShadow
            />
            <mesh
             name="Banca2"
              geometry={nodes.Cube027_1005.geometry}
              // material={snap.hover!=='Banca2'?nodes.Cube027_1005.material:nodes.Cube071.material}
                     material={snap.click['Banca2']?nodes.Cube027005.material:snap.hover==='Banca2'?nodes.Cube071.material:nodes.Cube027_1005.material}
              castShadow
              receiveShadow
            />
            </group>
       <group name="Banca3" position={[9.34, 41.1, -302]}>
            <mesh
            
              geometry={nodes.Cube027005.geometry}
              material={nodes.Cube027005.material}
              castShadow
              receiveShadow
            />
            <mesh
             name="Banca3"
              geometry={nodes.Cube027_1005.geometry}
              // material={snap.hover!=='Banca3'?nodes.Cube027_1005.material:nodes.Cube071.material}
                     material={snap.click['Banca3']?nodes.Cube027005.material:snap.hover==='Banca3'?nodes.Cube071.material:nodes.Cube027_1005.material}
              castShadow
              receiveShadow
            />
            </group>

      <group name="Banca4" position={[9.34, 41.1, -326]}>
            <mesh
            
              geometry={nodes.Cube027005.geometry}
              material={nodes.Cube027005.material}
              castShadow
              receiveShadow
            />
            <mesh
             name="Banca4"
              geometry={nodes.Cube027_1005.geometry}
              // material={snap.hover!=='Banca4'?nodes.Cube027_1005.material:nodes.Cube071.material}
                     material={snap.click['Banca4']?nodes.Cube027005.material:snap.hover==='Banca4'?nodes.Cube071.material:nodes.Cube027_1005.material}
              castShadow
              receiveShadow
            />
            </group>
    <group name="Banca5" position={[9.34, 41.1, -346]}>
            <mesh
            
              geometry={nodes.Cube027005.geometry}
              material={nodes.Cube027005.material}
              castShadow
              receiveShadow
            />
            <mesh
             name="Banca5"
              geometry={nodes.Cube027_1005.geometry}
              // material={snap.hover!=='Banca5'?nodes.Cube027_1005.material:nodes.Cube071.material}
             material={snap.click['Banca5']?nodes.Cube027005.material:snap.hover==='Banca5'?nodes.Cube071.material:nodes.Cube027_1005.material}
              castShadow
              receiveShadow
            />
            </group>
<group name="BANCA6" position={[65, 41.1, -345.31]}>
            <mesh
            
              geometry={nodes.Cube027001.geometry}
              material={nodes.Cube027001.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca6"
              geometry={nodes.Cube027_1001.geometry}
              // material={snap.hover!=='Banca6'?nodes.Cube027_1005.material:nodes.Cube071.material}
              material={snap.click['Banca6']?nodes.Cube027001.material:snap.hover==='Banca6'?nodes.Cube071.material:nodes.Cube027_1001.material}
              castShadow
              receiveShadow
            />
            </group>
<group name="BANCA 7" position={[65, 41.1, -325.31]}>
            <mesh
            
              geometry={nodes.Cube027003.geometry}
              material={nodes.Cube027003.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca7"
              geometry={nodes.Cube027_1003.geometry}
              // material={snap.hover!=='Banca7'?nodes.Cube027_1005.material:nodes.Cube071.material}
              material={snap.click['Banca7']?nodes.Cube027003.material:snap.hover==='Banca7'?nodes.Cube071.material:nodes.Cube027_1003.material}
              castShadow
              receiveShadow
            />
            </group>
<group name="BANCA 8" position={[65, 41.1, -301.31]}>
            <mesh
            
              geometry={nodes.Cube027005.geometry}
              material={nodes.Cube027005.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca8"
              geometry={nodes.Cube027_1005.geometry}
              // material={snap.hover!=='Banca8'?nodes.Cube027_1005.material:nodes.Cube071.material}
              material={snap.click['Banca8']?nodes.Cube027005.material:snap.hover==='Banca8'?nodes.Cube071.material:nodes.Cube027_1005.material}
              castShadow
              receiveShadow
            />
            </group>
                <group name="BANCA 9" position={[65, 41.1, -272.31]}>
            <mesh
            
              geometry={nodes.Cube027007.geometry}
              material={nodes.Cube027007.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca9"
              geometry={nodes.Cube027_1007.geometry}
              // material={snap.hover!=='Banca9'?nodes.Cube027_1005.material:nodes.Cube071.material}
              material={snap.click['Banca9']?nodes.Cube027007.material:snap.hover==='Banca9'?nodes.Cube071.material:nodes.Cube027_1007.material}
              castShadow
              receiveShadow
            />
          </group>
    <group name="BANCA 10" position={[65, 41.1, -247.31]}>
            <mesh
            
              geometry={nodes.Cube027005.geometry}
              material={nodes.Cube027005.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca10"
              geometry={nodes.Cube027_1005.geometry}
              // material={snap.hover!=='Banca10'?nodes.Cube027_1005.material:nodes.Cube071.material}
              material={snap.click['Banca10']?nodes.Cube027005.material:snap.hover==='Banca10'?nodes.Cube071.material:nodes.Cube027_1005.material}
              castShadow
              receiveShadow
            />
            </group>
    <group name="BANCA 11" position={[118, 41.1, -247.31]}>
            <mesh
            
              geometry={nodes.Cube027008.geometry}
              material={nodes.Cube027008.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca11"
              geometry={nodes.Cube027_1008.geometry}
              // material={snap.hover!=='Banca11'?nodes.Cube027_1005.material:nodes.Cube071.material}
              material={snap.click['Banca11']?nodes.Cube027008.material:snap.hover==='Banca11'?nodes.Cube071.material:nodes.Cube027_1008.material}
              castShadow
              receiveShadow
            />
            </group>
    <group name="BANCA 12" position={[118, 41.1, -272.31]}>
            <mesh
            
              geometry={nodes.Cube027008.geometry}
              material={nodes.Cube027008.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca12"
              geometry={nodes.Cube027_1008.geometry}
              // material={nodes.Cube027_1008.material}
              material={snap.click['Banca12']?nodes.Cube027008.material:snap.hover==='Banca12'?nodes.Cube071.material:nodes.Cube027_1008.material}
              castShadow
              receiveShadow
            />
            </group>
    <group name="BANCA 13" position={[118, 41.1, -301.31]}>
            <mesh
            
              geometry={nodes.Cube027008.geometry}
              material={nodes.Cube027008.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca13"
              geometry={nodes.Cube027_1008.geometry}
              // material={nodes.Cube027_1008.material}
              material={snap.click['Banca13']?nodes.Cube027008.material:snap.hover==='Banca13'?nodes.Cube071.material:nodes.Cube027_1008.material}
              castShadow
              receiveShadow
            />
            </group>
    <group name="BANCA 14" position={[118, 41.1, -325.31]}>
            <mesh
            
              geometry={nodes.Cube027008.geometry}
              material={nodes.Cube027008.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca14"
              geometry={nodes.Cube027_1008.geometry}
              // material={nodes.Cube027_1008.material}
              material={snap.click['Banca14']?nodes.Cube027008.material:snap.hover==='Banca14'?nodes.Cube071.material:nodes.Cube027_1008.material}
              castShadow
              receiveShadow
            />
            </group>
    <group name="BANCA 15" position={[118, 41.1, -345.31]}>
            <mesh
            
              geometry={nodes.Cube027008.geometry}
              material={nodes.Cube027008.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca15"
              geometry={nodes.Cube027_1008.geometry}
              // material={nodes.Cube027_1008.material}
              material={snap.click['Banca15']?nodes.Cube027008.material:snap.hover==='Banca15'?nodes.Cube071.material:nodes.Cube027_1008.material}
              castShadow
              receiveShadow
            />
            </group>
    <group name="BANCA 16" position={[172.34, 41.1, -345.31]}>
            <mesh
            
              geometry={nodes.Cube027008.geometry}
              material={nodes.Cube027008.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca16"
              geometry={nodes.Cube027_1008.geometry}
              // material={nodes.Cube027_1008.material}
              material={snap.click['Banca16']?nodes.Cube027008.material:snap.hover==='Banca16'?nodes.Cube071.material:nodes.Cube027_1008.material}
              castShadow
              receiveShadow
            />
            </group>
    <group name="BANCA 17" position={[172.34, 41.1, -324.31]}>
            <mesh
            
              geometry={nodes.Cube027008.geometry}
              material={nodes.Cube027008.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca17"
              geometry={nodes.Cube027_1008.geometry}
              // material={nodes.Cube027_1008.material}
              material={snap.click['Banca17']?nodes.Cube027008.material:snap.hover==='Banca17'?nodes.Cube071.material:nodes.Cube027_1008.material}
              castShadow
              receiveShadow
            />
            </group>
    <group name="BANCA 18" position={[172.34, 41.1, -301]}>
            <mesh
            
              geometry={nodes.Cube027008.geometry}
              material={nodes.Cube027008.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca18"
              geometry={nodes.Cube027_1008.geometry}
              // material={nodes.Cube027_1008.material}
              material={snap.click['Banca18']?nodes.Cube027008.material:snap.hover==='Banca18'?nodes.Cube071.material:nodes.Cube027_1008.material}
              castShadow
              receiveShadow
            />
            </group>
      <group name="BANCA 18" position={[172.34, 41.1, -270]}>
            <mesh
            
              geometry={nodes.Cube027008.geometry}
              material={nodes.Cube027008.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Banca19"
              geometry={nodes.Cube027_1008.geometry}
              // material={nodes.Cube027_1008.material}
              material={snap.click['Banca19']?nodes.Cube027008.material:snap.hover==='Banca19'?nodes.Cube071.material:nodes.Cube027_1008.material}
              castShadow
              receiveShadow
            />
            </group>
      <group name="BANCA 20" position={[172.34, 41.1, -247.31]}>
              <mesh
              
                geometry={nodes.Cube027008.geometry}
                material={nodes.Cube027008.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Banca20"
                geometry={nodes.Cube027_1008.geometry}
                // material={nodes.Cube027_1008.material}
                material={snap.click['Banca20']?nodes.Cube027008.material:snap.hover==='Banca20'?nodes.Cube071.material:nodes.Cube027_1008.material}
                castShadow
                receiveShadow
              />
            </group>

      
          {/* <group name="BANCA 14" position={[122.34, 41.1, -345.31]}>
            <mesh
              name="Cube027"
              geometry={nodes.Cube027.geometry}
              material={nodes.Cube027.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube027_1"
              geometry={nodes.Cube027_1.geometry}
              material={nodes.Cube027_1.material}
              castShadow
              receiveShadow
            />
          </group> */}
{/* 
          <group name="BANCA 13" position={[122.34, 41.1, -325.31]}>
            <mesh
              name="Cube027002"
              geometry={nodes.Cube027002.geometry}
              material={nodes.Cube027002.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube027_1002"
              geometry={nodes.Cube027_1002.geometry}
              material={nodes.Cube027_1002.material}
              castShadow
              receiveShadow
            />
          </group> */}

          {/* <group name="BANCA 12" position={[122.34, 41.1, -301.31]}>
            <mesh
              name="Cube027004"
              geometry={nodes.Cube027004.geometry}
              material={nodes.Cube027004.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube027_1004"
              geometry={nodes.Cube027_1004.geometry}
              material={nodes.Cube027_1004.material}
              castShadow
              receiveShadow
            />
            </group> */}
     

 
          {/* <group name="BANCA 63" position={[122.34, 41.1, -272.31]}>
            <mesh
              name="Cube027006"
              geometry={nodes.Cube027006.geometry}
              material={nodes.Cube027006.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube027_1006"
              geometry={nodes.Cube027_1006.geometry}
              material={nodes.Cube027_1006.material}
              castShadow
              receiveShadow
            />
          </group> */}


          {/* <group name="BANCA" position={[59.34, 41.1, -247.31]}>
            <mesh
              name="Cube027009"
              geometry={nodes.Cube027009.geometry}
              material={nodes.Cube027009.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube027_1009"
              geometry={nodes.Cube027_1009.geometry}
              material={nodes.Cube027_1009.material}
              castShadow
              receiveShadow
            />
          </group> */}
        </group>
        <mesh
         
          geometry={nodes.Cube037.geometry}
          material={nodes.Cube037.material}
          castShadow
          receiveShadow
        />
        <mesh
       
          geometry={nodes.Cube042.geometry}
          material={nodes.Cube042.material}
          castShadow
          receiveShadow
        />
        {/* <mesh
          name="Cube05000"
          geometry={nodes.Cube050.geometry}
          material={nodes.Cube050.material}
          castShadow
          receiveShadow
        /> */}
        {/* <mesh
            name="VIDRIO DISCO"
            geometry={nodes['VIDRIO_DISCO'].geometry}
            material={nodes['VIDRIO_DISCO'].material}
            castShadow
            receiveShadow
          /> */}
        {/* <mesh
          name="Cube034"
          geometry={nodes.Cube034.geometry}
          material={nodes.Cube034.material}
          castShadow
          receiveShadow
        /> */}
        <mesh
       
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          castShadow
          receiveShadow
        />
        {/* <group name="LUCES NEON" position={[-74.36, 16.53, 512.47]}>
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={nodes.Cube004.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={nodes.Cube001.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
          <mesh
            name="Cube005"
            geometry={nodes.Cube005.geometry}
            material={nodes.Cube005.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
          <mesh
            name="Cube007"
            geometry={nodes.Cube007.geometry}
            material={nodes.Cube007.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
          <mesh
            name="Cube010"
            geometry={nodes.Cube010.geometry}
            material={nodes.Cube010.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
          <mesh
            name="Cube011"
            geometry={nodes.Cube011.geometry}
            material={nodes.Cube011.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
          <mesh
            name="Cube012"
            geometry={nodes.Cube012.geometry}
            material={nodes.Cube012.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
          <mesh
            name="Cube014"
            geometry={nodes.Cube014.geometry}
            material={nodes.Cube014.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
          <mesh
            name="Cube015"
            geometry={nodes.Cube015.geometry}
            material={nodes.Cube015.material}
            castShadow
            receiveShadow
            position={[74.36, -16.53, -512.47]}
          />
        </group> */}
        <mesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          castShadow
          receiveShadow
        />
        <mesh
          name="NUEVO_PATIO001"
          geometry={nodes.NUEVO_PATIO001.geometry}
          material={nodes.NUEVO_PATIO001.material}
          castShadow
          receiveShadow
        />
        {/* <group name="Plane004">
          <mesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={nodes.Plane001.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Plane001_1"
            geometry={nodes.Plane001_1.geometry}
            material={nodes.Plane001_1.material}
            castShadow
            receiveShadow
          />
        </group> */}
        <group >
          <mesh           geometry={nodes.Cylinder001.geometry}
            material={nodes.Cylinder001.material}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cylinder001_1.geometry}
            material={nodes.Cylinder001_1.material}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cylinder001_2.geometry}
            material={nodes.Cylinder001_2.material}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cylinder001_3.geometry}
            material={nodes.Cylinder001_3.material}
            castShadow
            receiveShadow
          />
        </group>
        {/* <m     geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          castShadow
          receiveShadow
        /> */}
        <mesh
 
          geometry={nodes.Cube045.geometry}
          material={nodes.Cube045.material}
          castShadow
          receiveShadow
        />
        <group >
          <mesh
      
            geometry={nodes.Cube086.geometry}
            material={nodes.Cube086.material}
            castShadow
            receiveShadow
          />
          <mesh

            geometry={nodes.Cube086_1.geometry}
            material={nodes.Cube086_1.material}
            castShadow
            receiveShadow
          />
        </group>
        <group >
          <mesh
      
            geometry={nodes.Cube088.geometry}
            material={nodes.Cube088.material}
            castShadow
            receiveShadow
          />
          <mesh

            geometry={nodes.Cube088_1.geometry}
            material={nodes.Cube088_1.material}
            castShadow
            receiveShadow
          />
        </group>
        <group >
          <mesh
        
            geometry={nodes.BezierCurve001_1.geometry}
            material={nodes.BezierCurve001_1.material}
            castShadow
            receiveShadow
          />
          <mesh
   
            geometry={nodes.BezierCurve001_2.geometry}
            material={nodes.BezierCurve001_2.material}
            castShadow
            receiveShadow
          />
          <mesh
   
            geometry={nodes.BezierCurve001_3.geometry}
            material={nodes.BezierCurve001_3.material}
            castShadow
            receiveShadow
          />
        </group>
        <group >
          <mesh

            geometry={nodes.DISCOS1_1.geometry}
            material={materials['Material_61']}
            castShadow
            receiveShadow
            position={[0, 0, 629.93]}
          />
          <mesh

            geometry={nodes.DISCOS1_2.geometry}
            material={materials['Material_62']}
            castShadow
            receiveShadow
          />
          <mesh

            geometry={nodes.DISCOS1_3.geometry}
            material={nodes.DISCOS1_3.material}
            castShadow
            receiveShadow
          />
          <mesh

            geometry={nodes.DISCOS1_4.geometry}
            material={nodes.DISCOS1_4.material}
            castShadow
            receiveShadow
            position={[0, 0, 629.93]}
          />
          <mesh
            
            geometry={nodes.DISCOS1_5.geometry}
            material={nodes.DISCOS1_5.material}
            castShadow
            receiveShadow
          />
          <mesh
            
            geometry={nodes.DISCOS1_6.geometry}
            material={nodes.DISCOS1_6.material}
            castShadow
            receiveShadow
            position={[0, 0, 629.93]}
          />
          <mesh
            
            geometry={nodes['DISCOS1_7'].geometry}
            material={materials['Material_67']}
            castShadow
            receiveShadow
          />
          <mesh
  
            geometry={nodes.DISCOS1_8.geometry}
            material={nodes.DISCOS1_8.material}
            castShadow
            receiveShadow
          />
        </group>
        <group >
          <mesh
    
            geometry={nodes.Cube071.geometry}
            material={nodes.Cube005_1.material}
            castShadow
            receiveShadow
          />
          <mesh
     
            geometry={nodes.Cube071_1.geometry}
            material={nodes.Cube071_1.material}
            castShadow
            receiveShadow
          />
          <mesh
   
            geometry={nodes.Cube071_2.geometry}
            material={nodes.Cube071_2.material}
            castShadow
            receiveShadow
          />
        </group>
        <group>
          <mesh
        
            geometry={nodes.Cube005_1.geometry}
            material={nodes.Cube005_1.material}
            castShadow
            receiveShadow
          />
          <mesh

            geometry={nodes.Cube005_2.geometry}
            material={nodes.Cube005_2.material}
            castShadow
            receiveShadow
          />
          <mesh
 
            geometry={nodes.Cube005_3.geometry}
            material={nodes.Cube005_3.material}
            castShadow
            receiveShadow
          />
          </group>
          </Select>
      </group>
      <group  position={[75.58, 492.2, -466.62]}>
        <spotLight
     
          castShadow
          intensity={3.82}
          angle={0.77}
          penumbra={0.2}
          distance={1829}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-fov={119.99999999999999}
          shadow-camera-near={100}
          shadow-camera-far={100000}
          color="#fef6db"
          position={[-902.06, -923.47, 2034.76]}
          rotation={[0, 0, -Math.PI]}
        />
        <spotLight
 
          castShadow
          intensity={3.82}
          angle={0.77}
          penumbra={0.2}
          distance={1829}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-fov={119.99999999999999}
          shadow-camera-near={100}
          shadow-camera-far={100000}
          color="#fef6db"
          position={[785.33, -923.47, 2034.76]}
          rotation={[0, 0, -Math.PI]}
        />
        <spotLight
      
          castShadow
          intensity={5.25}
          angle={0.84}
          penumbra={0.2}
          distance={1855}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-fov={119.99999999999999}
          shadow-camera-near={100}
          shadow-camera-far={100000}
          color="#0081fe"
          position={[-626.84, 0, 0]}
        />
        <spotLight

          castShadow
          intensity={2.55}
          angle={0.84}
          penumbra={0.2}
          distance={1855}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-fov={119.99999999999999}
          shadow-camera-near={100}
          shadow-camera-far={100000}
          color="#f23535"
          position={[382.09, 0, 0]}
        />
      </group>
      {/* <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.25}
          far={100000}
          near={-100000}
          position={[0, 0, -1000]}
          rotation={[0, 180, 0]}
        /> */}
      {/* <PerspectiveCamera
        name="Desde la Barra"
        makeDefault={true}
        fov={45}
        far={100000}
        near={0.1}
        zoom={0.8}
        position={[0, 154, 2002]}
        rotation={[-8, -9, -1]}
      /> */}
      {/* <PerspectiveCamera
          name="Desde Entrada"
          makeDefault={true}
          fov={45}
          far={10000}
          near={0.01}
          zoom={0.25}
          position={[369, 218, -784]}
          rotation={[-132, 13, 180]}
        /> */}
      {/* <PerspectiveCamera
          name="Rotativa"
          makeDefault={true}
          fov={45}
          far={10000}
          near={0.01}
          zoom={1}
          position={[295, 22, -501]}
          rotation={[-169.2, 30.28, 177]}
        /> */}
      
    </group>
  )
}
// useGLTF.preload('/bar.glb')
