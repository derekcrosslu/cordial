/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 terraza1.glb
*/

import React, { useEffect, useRef, useTransition, Suspense } from 'react'

import {
  useGLTF,
  PerspectiveCamera,
  ContactShadows,
  OrbitControls,
  OrthographicCamera,
  Html,
  Select,
  useSelect
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'

import state from '../../store'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/terraza.glb')
  // const mesaNode  = useGLTF('/mesa.glb')
  
  const [isPending, startTransition] = useTransition()
const snap = useSnapshot(state)
  state.modelLoading = isPending
  // useEffect(() => {
  //   startTransition(() => {
  //     console.log('startTransition')
  //     state.videoLoading = false
  //   })
  // }, [])

    useFrame(({ clock, camera }) => {
    if (snap.reservacion) {
      // camera.lookAt(1, 0.05, 1)
      // camera.rotateY(0.01)
      // camera.rotateX(-0.3)
      // camera.rotateZ(6)
      // camera.rotateOnAxis(new THREE.Vector3(0, 0, 0), -0.01)
      // camera.rotateOnWorldAxis(new THREE.Vector3(0, 0, 0), -0.1)

      // camera.position.set(3, 20,   10)
      camera.position.set(-0, 9, 2)
      camera.rotateY(0.5)
      camera.rotateX(-0.4)
      camera.rotateZ(1.5)
      // camera.lookAt(3, 20 10)
    } else {
      console.log('reservacion', snap.reservacion);
    // camera.position.x = Math.cos(clock.getElapsedTime() / 7)
    // camera.position.z = Math.sin(clock.getElapsedTime() / 7)
camera.position.set(-11, 3,   10)
//       camera.rotateY(0.1)
//       camera.rotateX(-0.4)
//       camera.rotateZ(0.55)

    }
  })

    const handleClick = (e) => {
      console.log('click', e.object.name, snap.click);
      console.log('MESAS', nodes.MESAS);


function twice(num) {
  let numString = String(num);
  let halfLength = numString.length / 2;
  let firstHalf = numString.slice(0, halfLength);
  let secondHalf = numString.slice(halfLength);

  if (firstHalf === secondHalf) {
    return num;
  } else {
    return num * 2;
  }
}
      if (e.object.name) {
      state.click[e.object.name] = !snap.click[e.object.name]
    }
    }
  const handleHover = (e) => {
    // console.log('hover', e.object.name);
    state.hover = e.object.name
  }
  

  // useFrame(({ clock, camera }) => {

  //   if (snap.girar) {
  //         camera.position.x = Math.cos(clock.getElapsedTime() / 7)
  //   camera.position.z = Math.sin(clock.getElapsedTime() / 7)
  //   camera.lookAt(0, 0, 0)
  //   }
  // })
//   useSelect((state) => {
//     console.log("state.selected: ", state.selected);
// return    state.selected;
//   })
//   console.log("useSelect(): ", useSelect());

  return (
    <group {...props} dispose={null}>
      <OrbitControls />
      <group scale={0.01}>
        {/* <group scale={10}>
          <group position={[-40.26, 27.17, -10.25]}> */}
        
        <group scale={20}>
                    <Select  box onClick={e=>handleClick(e)} onPointerEnter={e=>handleHover(e)}>
          
           
            <ContactShadows
              color={'blue'}
              position={[0, -1.5, 0]}
              blur={3}
              opacity={0.75}
            />
            {/* <PerspectiveCamera
              name="Desde la Barra"
              makeDefault={true}
              fov={45}
              far={100000}
              near={1}
              zoom={0.25}
              // position={[0, 154, 2002]}
              position={[60, 10, 10]}
              rotation={[-8, -9, -1]}
            /> */}
            {/* <OrthographicCamera
              name="Camera"
              makeDefault={true}
              zoom={10}
              far={100000}
              near={-100000}
              position={[668.16, 693.8, -268.71]}
              rotation={[-1.94, 0.73, 2.1]}
              scale={1}
            /> */}
            <directionalLight
         
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
            <hemisphereLight
     
              intensity={0.75}
              color="#798c9f"
            />
<group position={[0, 0, 0]}>
            <mesh
              geometry={nodes.sub01.geometry}
              material={materials.Material_59}
              // position={[10, 10, 20]}
        
          
            />
            <mesh
              geometry={nodes.sub01001.geometry}
              material={materials.Material_61}
                // position={[10, 10, 20]}
              
            />
            <mesh
              geometry={nodes.sub02.geometry}
              material={materials.Material_60}
                // position={[10, 10, 20]}
  
            />
          </group>
  
         <group position={[3.47, 9.45, 0.47]}>
            <mesh
              geometry={nodes.Grass_20001.geometry}
              material={materials.Material_47}
                position={[-3.47, -9.45, -0.47]}
       
            />
            <mesh
              geometry={nodes.Grass_20002.geometry}
              material={materials.Material_48}
                position={[-3.47, -9.45, -0.47]}
     
            />
            <mesh
              geometry={nodes.Grass_20003.geometry}
              material={materials.Material_49}
                position={[-3.47, -9.45, -0.47]}
          
            />
            <mesh
              geometry={nodes.Grass_20004.geometry}
              material={materials.Material_50}
                position={[-3.47, -9.45, -0.47]}
             
            />
            <mesh
              geometry={nodes.Grass_20005.geometry}
              material={materials.Material_51}
                position={[-3.47, -9.45, -0.47]}
    
            />
            <mesh
              geometry={nodes.Grass_20006.geometry}
              material={materials.Material_52}
                position={[-3.47, -9.45, -0.47]}
   
            />
            <mesh
              geometry={nodes.Grass_20007.geometry}
              material={materials.Material_53}
                position={[-3.47, -9.45, -0.47]}
           
            />
            <mesh
              geometry={nodes.Grass_20008.geometry}
              material={materials.Material_54}
                position={[-3.47, -9.45, -0.47]}
     
            />
            <mesh
              geometry={nodes.Grass_20009.geometry}
              material={materials.Material_55}
                position={[-3.47, -9.45, -0.47]}
   
            />
            <mesh
              geometry={nodes.Grass_20010.geometry}
              material={materials.Material_56}
                position={[-3.47, -9.45, -0.47]}
             
            />
            <mesh
              geometry={nodes.Grass_20012.geometry}
              material={materials.Material_57}
                position={[-3.47, -9.45, -0.47]}
       
            />
          </group>
          <group position={[-22.37, -13.94, 6.44]}>
            <mesh
              geometry={nodes.Cube005.geometry}
            //  material={materials.Material_9}
                material={snap.click['Mesa1']?materials.Material_10:snap.hover==='Mesa1'?materials.Material_19:materials.Material_12}
                position={[22.37, 13.94, -6.44]}
                name='Mesa1'
              />
               <mesh 
              geometry={nodes.Cube005.geometry}
              // material={materials.Material_12}
              // material={materials.Material_9}
                material={snap.click['Mesa2']?materials.Material_10:snap.hover==='Mesa2'?materials.Material_19:materials.Material_12}
                position={[39.37, 13.94, -6.44]}
                name='Mesa2'
              />

              
                    <mesh
              geometry={nodes.Cube005.geometry}
                // material={materials.Material_9}
                  material={snap.click['Mesa3']?materials.Material_10:snap.hover==='Mesa3'?materials.Material_19:materials.Material_12}
                position={[50, 13.94, -35]}
             name='Mesa3'
            />
            <mesh
              geometry={nodes.Cube051.geometry}
                // geometry={nodes.Cube048.geometry}
              material={materials.Material_6}
              
                position={[22.37, 13.94, -6.44]}
     
            />
           
        
            <mesh
              geometry={nodes.Cube047.geometry}
              material={materials.Material_7}
                position={[22.37, 13.94, -6.44]}
           
            />
            <mesh
              geometry={nodes.Cube049.geometry}
              material={materials.Material_7}
                position={[22.37, 13.94, -6.44]}
               
            />
      
            
          </group>

          {/* <mesh
            geometry={nodes.Cube023.geometry}
              material={materials.Material_28}
            
          /> */}
          {/* <mesh
            geometry={nodes.Cube027.geometry}
              material={materials.Material_31}
 
          /> */}
          {/* <mesh
            geometry={nodes.Cube028.geometry}
              material={materials.Material_58}
           
          /> */}
          <mesh
            geometry={nodes.Cube040.geometry}
              material={materials.Material_42}
           
          />
          <mesh
            geometry={nodes.Cube041.geometry}
              material={materials.Material_43}
              
          />
          <mesh
            geometry={nodes.Cube043.geometry}
              material={materials.Material_44}
   

          />
          <mesh
            geometry={nodes.NUEVO_PATIO.geometry}
              material={materials.Material_62}
          />
 {/* <primitive object={nodes.PATIO2}  /> */}
{/* <primitive object={nodes.MESAS}  /> */}
          <mesh
            geometry={nodes.Plane007.geometry}
              material={materials.Material_0}
    
          />
          <mesh
            geometry={nodes.Plane017.geometry}
              material={materials.Material_1}
       
          />
          <mesh
            geometry={nodes.PLATO.geometry}
      
                      color={[0, 0.5, 1]}
                intensity={0.1}
          >
            <mesh
              geometry={nodes.Circle001.geometry}
                material={materials.Material_19}
         
            />
            <mesh
              geometry={nodes.Plane002.geometry}       
                material={materials.Material_20}
              
              />

                  <meshStandardMaterial color={snap.plato ? 'hotpink' : 'white'} />
          </mesh>
          <mesh
            geometry={nodes.potted_plant_04001.geometry}
              material={materials.Material_63}
    
          />
          <mesh
            geometry={nodes.potted_plant_04002.geometry}
              material={materials.Material_64}
       
          />
          <mesh
            geometry={nodes.potted_plant_04003.geometry}
              material={materials.Material_65}
             
          />
          <mesh
            geometry={nodes.SILLAS.geometry}
              material={materials.Material_10}
        
            >
               <meshStandardMaterial color={snap.sillas ? 'hotpink' : 'white'} />
            {/* <mesh 
               geometry={nodes.COJINSILLA.geometry}
                 material={materials.Material_13}
         
            /> */}
            <mesh
              geometry={nodes.Cube001.geometry}
                material={materials.Material_12}
              
            />
            <mesh
              geometry={nodes.Cube002.geometry}
                material={materials.Material_11}
           
            />
            <mesh
              geometry={nodes.Cube004.geometry}
                material={materials.Material_17}
    
            />
            <mesh
              geometry={nodes.Cube011.geometry}
                material={materials.Material_14}
             
            />
            <mesh
              geometry={nodes.Cube012.geometry}
                material={materials.Material_15}
         
            />
            <mesh
              geometry={nodes.Cube014.geometry}
                material={materials.Material_16}
          
            />
          </mesh>
          <mesh
            geometry={nodes.Cube063.geometry}
              material={materials.Material_21}
         
          />
          <mesh
            geometry={nodes.Cube063_1.geometry}
              material={materials.Material_22}
           
          />
          <mesh
            geometry={nodes.Cube064.geometry}
              material={materials.Material_23}
 
          />
          <mesh
            geometry={nodes.Cube065.geometry}
              material={materials.Material_24}
              
          />
          <mesh
            geometry={nodes.Cube065_1.geometry}
              material={materials.Material_25}
            
          />
          <mesh
            geometry={nodes.Cube067.geometry}
              material={materials.Material_26}
            
          />
          <mesh
            geometry={nodes.Cube067_1.geometry}
              material={materials.Material_27}
           
          />
          <mesh
            geometry={nodes.Cube068.geometry}
              material={materials.Material_29}
          
          />
          <mesh
            geometry={nodes.Cube068_1.geometry}
              material={materials.Material_30}
          
          />
          <mesh
            geometry={nodes.Cube037.geometry}
              material={materials.Material_32}
      
          />
          <mesh
            geometry={nodes.Cube037_1.geometry}
              material={materials.Material_33}
           
          />
          <mesh
            geometry={nodes.Cube048_1.geometry}
              material={materials.Material_34}

          />
          <mesh
            geometry={nodes.Cube048_2.geometry}
              material={materials.Material_35}
     
          />
          <mesh
            geometry={nodes.Cube049_1.geometry}
              material={materials.Material_36}
              
          />
          <mesh
            geometry={nodes.Cube049_2.geometry}
              material={materials.Material_37}
            
          />
          <mesh
            geometry={nodes.Cube055.geometry}
              material={materials.Material_38}
       
          />
          <mesh
            geometry={nodes.Cube055_1.geometry}
              material={materials.Material_39}
       
          />
          <mesh
            geometry={nodes.Cube043_1.geometry}
              material={materials.Material_40}
            
          />
          <mesh
            geometry={nodes.Cube043_2.geometry}
              material={materials.Material_41}
          
          />
          <mesh
            geometry={nodes.Cube062.geometry}
              material={materials.Material_45}
   
          />
          <mesh
            geometry={nodes.Cube062_1.geometry}
              material={materials.Material_46}
          
          />
          <mesh
            geometry={nodes.Plane006.geometry}
              material={materials.Material_2}
         
          />
          <mesh
            geometry={nodes.Plane006_1.geometry}
              material={materials.Material_3}
    
            
            /> 
            </Select>
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('/terraza.glb')
