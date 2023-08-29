import React, { useRef } from 'react'

import { useGLTF, ContactShadows, OrbitControls, Select } from '@react-three/drei'
import { useFrame,  } from '@react-three/fiber'
import * as THREE from 'three'
import state from '../../store'
import { useSnapshot } from 'valtio'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/sala.glb')
  const vino = useGLTF('/vino.glb')
  const camera = useRef()
  const snap = useSnapshot(state)
  useFrame(({ clock, camera }) => {
    if (snap.reservacion) {
        // camera.rotateY(0.01)
      camera.rotateX(-0.1)
      // camera.rotateZ(0.16)
      console.log("Sala")
      // camera.lookAt(0, -3, -1)
      camera.position.y = 11.2
      camera.position.x = -1
      camera.position.z = 0.2

    } else {
    camera.position.x = Math.cos(clock.getElapsedTime() / 7)
    camera.position.z = Math.sin(clock.getElapsedTime() / 7)
    camera.lookAt(0, 0, 0)
}
  })

  const handleClick = (e) => {
    console.log('click', e.object.name, snap.click);
    if (e.object.name) {
      state.click[e.object.name] = !snap.click[e.object.name]
    }
    }
  const handleHover = (e) => {
    console.log('hover', e.object.name);
    state.hover = e.object.name
  }

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
            <Select  box onClick={e=>handleClick(e)} onPointerEnter={e=>handleHover(e)}>
        <group scale={20}>
          <group position={[25.64, -21.81, -16.96]}>
            <OrbitControls />
            <ContactShadows
              color={'blue'}
              position={[0, -1.5, 0]}
              blur={3}
              opacity={0.75}
            />
            <directionalLight

              castShadow
              intensity={0.75}
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
            <spotLight
      
              castShadow
              intensity={0.75}
              angle={Math.PI / 6}
              distance={2000}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-fov={119.99999999999999}
              shadow-camera-near={100}
              shadow-camera-far={100000}
              color="#fdfaeb"
              position={[235.06, 1143.24, 598.46]}
            />
            <hemisphereLight

              intensity={0.75}
              color="#798c9f"
            />
            <mesh
              geometry={nodes.Cube023.geometry}
              material={materials.Material_2}
              position={[-25.64, 21.81, 16.96]}
         
            />
            <mesh
              geometry={nodes.Cube070.geometry}
              material={materials.Material_1}
              position={[-25.64, 21.81, 16.96]}
   
            />
            <mesh
              geometry={nodes.Cylinder009.geometry}
              material={materials.Material_0}
              position={[-25.64, 21.81, 16.96]}
         
            />
          </group>
          <group position={[-3.74, 13.63, -18.13]}>
            <mesh
              geometry={nodes.Cube075.geometry}
              material={materials.Material_65}

            />
            <mesh
              geometry={nodes.Cube075_1.geometry}
              material={materials.Material_66}
  
            />
          </group>
          <group position={[-34.73, 1.69, -18.39]}>
            <group position={[34.73, -1.69, 18.39]}>
              <mesh
                geometry={nodes.Cube026_1.geometry}
                material={materials.Material_49}
       
              />
              <mesh
                geometry={nodes.Cube026_2.geometry}
                material={materials.Material_50}
   
              />
            </group>
            <group position={[34.73, -1.69, 18.39]}>
              <mesh
                geometry={nodes.Cube028_1.geometry}
                material={materials.Material_44}
            
              />
              <mesh
                geometry={nodes.Cube028_2.geometry}
                material={materials.Material_45}
                
              />
            </group>
            <group position={[34.73, -1.69, 18.39]}>
              <mesh
                geometry={nodes.Cube032_1.geometry}
                material={materials.Material_51}
                
              />
              <mesh
                geometry={nodes.Cube032_2.geometry}
                material={materials.Material_52}
                
              />
            </group>
            <mesh
              geometry={nodes.Cube043.geometry}
              material={materials.Material_56}
              position={[34.73, -1.69, 18.39]}
                         />
            <mesh
              geometry={nodes.Cube050.geometry}
              material={materials.Material_55}
              position={[34.73, -1.69, 18.39]}
                         />
            <mesh
              geometry={nodes.Cube051.geometry}
              material={materials.Material_54}
              position={[34.73, -1.69, 18.39]}
                         />
            <mesh
              geometry={nodes.Cube053.geometry}
              material={materials.Material_48}
              position={[34.73, -1.69, 18.39]}
                         />
            <mesh
              geometry={nodes.Cube056.geometry}
              material={materials.Material_47}
              position={[34.73, -1.69, 18.39]}
                         />
            <mesh
              geometry={nodes.Cube059.geometry}
              material={materials.Material_46}
              position={[34.73, -1.69, 18.39]}
                         />
            <mesh
              geometry={nodes.Cube069.geometry}
              material={materials.Material_53}
                position={[34.73, -1.69, 18.39]}
                         />
          </group>
          <group position={[16.33, -19.08, -18.3]}>
            <mesh
              geometry={nodes.Cube025.geometry}
              material={materials.Material_31}
                position={[-16.33, 19.08, 18.3]}
                         />
            <mesh
              geometry={nodes.Cube033.geometry}
              material={materials.Material_34}
                position={[-16.33, 19.08, 18.3]}
                         />
            <mesh
              geometry={nodes.Cube034.geometry}
              // material={materials.Material_35}
              material={snap.click['Mesa2']?materials.Material_20:snap.hover==='Mesa2'?nodes.Cube071.material:materials.Material_35}
                position={[-16.33, 19.08, 18.3]}
              name='Mesa2'
            />
            <mesh
              geometry={nodes.Cube035.geometry}
              material={materials.Material_36}
                position={[-16.33, 19.08, 18.3]}
                         />
            <mesh
              geometry={nodes.Cube036.geometry}
              // material={materials.Material_37}
                material={snap.click['Mesa1']?materials.Material_20:snap.hover==='Mesa1'?nodes.Cube071.material:materials.Material_35}
              position={[-16.33, 19.08, 18.3]}
              name='Mesa1'
            />
            <mesh
              geometry={nodes.Cube037.geometry}
              material={materials.Material_38}
                position={[-16.33, 19.08, 18.3]}
                         />
            <mesh
              geometry={nodes.Cube038.geometry}
              // material={materials.Material_39}
                material={snap.click['Mesa4']?materials.Material_20:snap.hover==='Mesa4'?nodes.Cube071.material:materials.Material_35}
                position={[-16.33, 19.08, 18.3]}
              name='Mesa4'
            />
            <mesh
              geometry={nodes.Cube039.geometry}
              material={materials.Material_40}
              position={[-16.33, 19.08, 18.3]}
            />
            <mesh
              geometry={nodes.Cube040.geometry}
              // material={materials.Material_41}
                material={snap.click['Mesa5']?materials.Material_20:snap.hover==='Mesa5'?nodes.Cube071.material:materials.Material_35}
              position={[-16.33, 19.08, 18.3]}
              name='Mesa5'
            />
            <mesh
              geometry={nodes.Cube041.geometry}
              material={materials.Material_42}
                position={[-16.33, 19.08, 18.3]}
                         />
            <mesh
              geometry={nodes.Cube042.geometry}
              // material={materials.Material_43}
                material={snap.click['Mesa6']?materials.Material_20:snap.hover==='Mesa6'?nodes.Cube071.material:materials.Material_35}
                position={[-16.33, 19.08, 18.3]}
              name='Mesa6'
            />
            <mesh
              geometry={nodes.Cube044.geometry}
              // material={materials.Material_33}
                material={snap.click['Mesa3']?materials.Material_20:snap.hover==='Mesa3'?nodes.Cube071.material:materials.Material_35}
                position={[-16.33, 19.08, 18.3]}
              name='Mesa3'
            />
            <mesh
              geometry={nodes.Cube047.geometry}
              material={materials.Material_32}
                position={[-16.33, 19.08, 18.3]}
                         />
          </group>
          <group position={[-38.88, 3.78, 17.53]}>
            <mesh
              geometry={nodes.Cube071.geometry}
              material={materials.Material_3}
                position={[38.88, -3.78, -17.53]}
                         />
          </group>
          <group position={[-4.09, 7.88, -2.71]}>
            <group position={[4.09, -7.88, 2.71]}>
              <mesh
                geometry={nodes.Cube069_1.geometry}
                  material={materials.Material_84}
                  
              />
              <mesh
                geometry={nodes.Cube069_2.geometry}
                  material={materials.Material_85}
                  
              />
            </group>
            <mesh
              geometry={nodes.COLUMNA_VENTANA.geometry}
              material={materials.Material_91}
                position={[4.09, -7.88, 2.71]}
             
            />
            <mesh
              geometry={nodes.Cube048.geometry}
              material={materials.Material_86}
                position={[4.09, -7.88, 2.71]}
                           />
            <mesh
              geometry={nodes.Cube072.geometry}
              material={materials.Material_87}
                position={[4.09, -7.88, 2.71]}
                           />
            <mesh
              geometry={nodes.MARCO_VENTANA.geometry}
              material={materials.Material_83}
              position={[4.09, -7.88, 2.71]}
           
            />
            <mesh
              geometry={nodes.PUERTA2002.geometry}
              material={materials.Material_90}
              position={[4.09, -7.88, 2.71]}
            />
            <mesh
              geometry={nodes.PUERTA2003.geometry}
              material={materials.Material_88}
              position={[4.09, -7.88, 2.71]}
            />
            <mesh
              geometry={nodes.PUERTA2004.geometry}
              material={materials.Material_89}
              position={[4.09, -7.88, 2.71]}
            />
          </group>
          <group position={[6.81, -18.85, 19.49]}>
            <group position={[-5.7, 0, -27.61]}>
              <mesh
                geometry={nodes.BezierCircle001.geometry}
                material={materials.Material_23}
                position={[-1.11, 18.85, 8.12]}
              />
              <mesh
                geometry={nodes.BezierCircle002.geometry}
                material={materials.Material_22}
                position={[-1.11, 18.85, 8.12]}
              />
              <mesh
                geometry={nodes.BezierCircle003.geometry}
                material={materials.Material_19}
                position={[-1.11, 18.85, 8.12]}
              />
              <mesh
                geometry={nodes.BezierCircle004.geometry}
                material={materials.Material_20}
                position={[-1.11, 18.85, 8.12]}
            
              />
              <mesh
                geometry={nodes.BezierCircle005.geometry}
                material={materials.Material_21}
                position={[-1.11, 18.85, 8.12]}
              />
              <mesh
                geometry={nodes.BezierCircle006.geometry}
                material={materials.Material_16}
                position={[-1.11, 18.85, 8.12]}
              />
              <mesh
                geometry={nodes.BezierCircle007.geometry}
                material={materials.Material_15}
                position={[-1.11, 18.85, 8.12]}
              />
              <mesh
                geometry={nodes.BezierCircle008.geometry}
                material={materials.Material_17}
                position={[-1.11, 18.85, 8.12]}
              />
              <mesh
                geometry={nodes.BezierCircle009.geometry}
                material={materials.Material_18}
                position={[-1.11, 18.85, 8.12]}
              />
            </group>
            <mesh
              geometry={nodes.Cube024.geometry}
              material={materials.Material_14}
                position={[-6.81, 18.85, -19.49]}
                         />
            <mesh
              geometry={nodes.Cube026.geometry}
              material={materials.Material_30}
                position={[-6.81, 18.85, -19.49]}
                         />
            <mesh
              geometry={nodes.Cube027.geometry}
              material={materials.Material_26}
                position={[-6.81, 18.85, -19.49]}
                         />
            <mesh
              geometry={nodes.Cube028.geometry}
              material={materials.Material_27}
              position={[-6.81, 18.85, -19.49]}
                         />
            <mesh
              geometry={nodes.Cube029.geometry}
              material={materials.Material_28}
                position={[-6.81, 18.85, -19.49]}
                         />
            <mesh
              geometry={nodes.Cube030.geometry}
              material={materials.Material_29}
                position={[-6.81, 18.85, -19.49]}
                         />
            <mesh
              geometry={nodes.Cube031.geometry}
              material={materials.Material_24}
                position={[-6.81, 18.85, -19.49]}
                         />
            <mesh
              geometry={nodes.Cube032.geometry}
              material={materials.Material_25}
                position={[-6.81, 18.85, -19.49]}
                         />
          </group>
          <mesh
            geometry={nodes.Cube049.geometry}
              material={materials.Material_12}
                       />
          <mesh
            geometry={nodes.Cube055.geometry}
              material={materials.Material_61}
                       />
          <mesh
            geometry={nodes.Cube057.geometry}
              material={materials.Material_62}
                       />
          <mesh
            geometry={nodes.Cube064.geometry}
              material={materials.Material_67}
                       />
          <mesh
            geometry={nodes.Cube065.geometry}
              material={materials.Material_68}
                       />
          <mesh
            geometry={nodes.Cube074.geometry}
              material={materials.Material_4}
                       />
          <mesh
            geometry={nodes.MARTINAT.geometry}
              material={materials.Material_13}
           
          />
          <mesh
            geometry={nodes.PISO_ARRIBA.geometry}
            material={materials.Material_10}
          />
          <mesh
            geometry={nodes.ROOM_SALA.geometry}
            material={materials.Material_8}
          />
          <mesh
            geometry={nodes.TECHO.geometry}
            material={materials.Material_9}
          />
          <mesh
            geometry={nodes.TECHO_SALA.geometry}
            material={materials.Material_11}
          />
          <mesh
            geometry={nodes.Cylinder001.geometry}
            material={materials.Material_57}
          />
          <mesh
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.Material_58}
          />
          <mesh
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.Material_59}
          />
          <mesh
            geometry={nodes.Cylinder001_3.geometry}
            material={materials.Material_60}
          />
          <mesh
            geometry={nodes.Cube085.geometry}
            material={materials.Material_76}
          />
          <mesh
            geometry={nodes.Cube085_1.geometry}
            material={materials.Material_77}
            
          />
          <mesh
            geometry={nodes.Cube086.geometry}
            material={materials.Material_78}
          />
          <mesh
            geometry={nodes.Cube086_1.geometry}
            material={materials.Material_79}
          />
          <mesh
            geometry={nodes.Cube074_1.geometry}
            material={materials.Material_63}
          />
          <mesh
            geometry={nodes.Cube074_2.geometry}
            material={materials.Material_64}
          />
          <mesh
            geometry={nodes.Cube078.geometry}
            material={materials.Material_72}
          />
          <mesh
            geometry={nodes.Cube078_1.geometry}
            material={materials.Material_73}
            
          />
          <mesh
            geometry={nodes.Cube079.geometry}
            material={materials.Material_74}
          />
          <mesh
            geometry={nodes.Cube079_1.geometry}
            material={materials.Material_75}
          />
          <mesh
            geometry={nodes.Cylinder011.geometry}
            material={materials.Material_69}
          />
          <mesh
            geometry={nodes.Cylinder011_1.geometry}
            material={materials.Material_70}
          />
          <mesh
            geometry={nodes.Cylinder011_2.geometry}
            material={materials.Material_71}
          />
          <mesh
            geometry={nodes.Cube062_1.geometry}
            material={materials.Material_80}
          />
          <mesh
            geometry={nodes.Cube062_2.geometry}
            material={materials.Material_81}
          />
          <mesh
            geometry={nodes.Cube062_3.geometry}
            material={materials.Material_82}
          />
          <mesh
            geometry={nodes.Cube002_1.geometry}
            material={materials.Material_5}
          />
          <mesh
            geometry={nodes.Cube002_2.geometry}
            material={materials.Material_6}
          />
          <mesh
            geometry={nodes.Cube002_3.geometry}
            material={materials.Material_7}
          />
        </group>
        </Select>
        <group position={[327.63, -177.01, -162.99]}>
          {/* <group position={[-327.63, 0, -13.68]} scale={0.32}>
            <mesh
              geometry={vino.nodes.body.geometry}
              material={materials.Material_94}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={vino.nodes.cap.geometry}
              material={materials.Material_92}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={vino.nodes.tag.geometry}
              material={materials.Material_93}
              position={[0, -36.73, 0]}
              rotation={[0, -1.57, 0]}
              scale={1.34}
            />
          </group> */}
          {/* <group position={[-353.32, 0, -528.49]} scale={0.32}>
            <mesh
              geometry={nodes.body004.geometry}
              material={materials.Material_94}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.cap004.geometry}
              material={materials.Material_92}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.tag004.geometry}
              material={materials.Material_93}
              position={[0, -36.73, 0]}
              rotation={[0, -1.57, 0]}
              scale={1.34}
            />
          </group> */}
          {/* <group position={[-19.25, 0, 528.49]} scale={0.32}>
            <mesh
              geometry={nodes.body003.geometry}
              material={materials.Material_94}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.cap003.geometry}
              material={materials.Material_92}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.tag003.geometry}
              material={materials.Material_93}
              position={[0, -36.73, 0]}
              rotation={[0, -1.57, 0]}
              scale={1.34}
            />
          </group> */}
          {/* <group position={[353.32, 0, 112.99]} scale={0.32}>
            <mesh
              geometry={nodes.body002.geometry}
              material={materials.Material_94}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.cap002.geometry}
              material={materials.Material_92}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.tag002.geometry}
              material={materials.Material_93}
              position={[0, -36.73, 0]}
              rotation={[0, -1.57, 0]}
              scale={1.34}
            />
          </group>
          <group position={[353.32, 0, -141.76]} scale={0.32}>
            <mesh
              geometry={nodes.body001.geometry}
              material={materials.Material_94}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.cap001.geometry}
              material={materials.Material_92}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.tag001.geometry}
              material={materials.Material_93}
              position={[0, -36.73, 0]}
              rotation={[0, -1.57, 0]}
              scale={1.34}
            />
          </group>
          <group position={[353.32, 0, -402.52]} scale={0.32}>
            <mesh
              geometry={nodes.body.geometry}
              material={materials.Material_94}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.cap.geometry}
              material={materials.Material_92}
              position={[0, -36.73, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.31}
            />
            <mesh
              geometry={nodes.tag.geometry}
              material={materials.Material_93}
              position={[0, -36.73, 0]}
              rotation={[0, -1.57, 0]}
              scale={1.34}
            />
          </group> */}
          
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('/sala.glb')
