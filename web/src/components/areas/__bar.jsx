import {
  OrthographicCamera,
  useGLTF,
  OrbitControls,
  Environment,
  PerspectiveCamera,
  ContactShadows,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Scene({ ...props }) {
  const { nodes, materials } = useGLTF('/bar.glb')
  const camera = React.useRef()
  // useFrame(({ clock, camera }) => {
  //   camera.position.x = Math.cos(clock.getElapsedTime() / 7)
  //   camera.position.z = Math.sin(clock.getElapsedTime() / 7)
  //   // camera.lookAt(0, 0, 0)
  // })
  return (
    <>
      {/* <color attach="background" args={['#000000']} /> */}
      <group>
        <OrbitControls />
        {/* <pointLight position={[10, 10, 5]} /> */}
        {/* <ambientLight /> */}
        {/* <Environment preset="city" /> */}
        {/* <ContactShadows
          color={'blue'}
          position={[0, -1.5, 0]}
          blur={3}
          opacity={0.75}
        /> */}
        {/* <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.5}
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
        /> */}
        {/* <spotLight
          name="Spot Light"
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
        /> */}
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.5}
          color="#798c9f"
        />
        <group
          name="BAR"
          position={[757.1, 305.13, -4600.45]}
          scale={10}
          rotation={[0, 0, 0]}
        >
          <mesh
            name="ROOM"
            geometry={nodes.ROOM.geometry}
            material={nodes.ROOM.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Cube009"
            geometry={nodes.Cube009.geometry}
            material={nodes.Cube009.material}
            castShadow
            receiveShadow
          />
          <group name="BARRA">
            <mesh
              name="Cube023"
              geometry={nodes.Cube023.geometry}
              material={nodes.Cube023.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube023_1"
              geometry={nodes.Cube023_1.geometry}
              material={nodes.Cube023_1.material}
              castShadow
              receiveShadow
            />
          </group>
          <group name="Cube016">
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
          </group>
          <group name="Cube017">
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
          </group>
          <group name="BANCAS" position={[-59.34, -41.1, 247.31]}>
            <group name="BANCA 6" position={[122.34, 41.1, -345.31]}>
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
            </group>
            <group name="BANCA 5" position={[59.34, 41.1, -345.31]}>
              <mesh
                name="Cube027001"
                geometry={nodes.Cube027001.geometry}
                material={nodes.Cube027001.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Cube027_1001"
                geometry={nodes.Cube027_1001.geometry}
                material={nodes.Cube027_1001.material}
                castShadow
                receiveShadow
              />
            </group>
            <group name="BANCA 61" position={[122.34, 41.1, -325.31]}>
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
            </group>
            <group name="BANCA 4" position={[59.34, 41.1, -325.31]}>
              <mesh
                name="Cube027003"
                geometry={nodes.Cube027003.geometry}
                material={nodes.Cube027003.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Cube027_1003"
                geometry={nodes.Cube027_1003.geometry}
                material={nodes.Cube027_1003.material}
                castShadow
                receiveShadow
              />
            </group>
            <group name="BANCA 62" position={[122.34, 41.1, -301.31]}>
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
            </group>
            <group name="BANCA 3" position={[59.34, 41.1, -301.31]}>
              <mesh
                name="Cube027005"
                geometry={nodes.Cube027005.geometry}
                material={nodes.Cube027005.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Cube027_1005"
                geometry={nodes.Cube027_1005.geometry}
                material={nodes.Cube027_1005.material}
                castShadow
                receiveShadow
              />
            </group>
            <group name="BANCA 63" position={[122.34, 41.1, -272.31]}>
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
            </group>
            <group name="BANCA 2" position={[59.34, 41.1, -272.31]}>
              <mesh
                name="Cube027007"
                geometry={nodes.Cube027007.geometry}
                material={nodes.Cube027007.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Cube027_1007"
                geometry={nodes.Cube027_1007.geometry}
                material={nodes.Cube027_1007.material}
                castShadow
                receiveShadow
              />
            </group>
            <group name="BANCA 64" position={[122.34, 41.1, -247.31]}>
              <mesh
                name="Cube027008"
                geometry={nodes.Cube027008.geometry}
                material={nodes.Cube027008.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Cube027_1008"
                geometry={nodes.Cube027_1008.geometry}
                material={nodes.Cube027_1008.material}
                castShadow
                receiveShadow
              />
            </group>
            <group name="BANCA" position={[59.34, 41.1, -247.31]}>
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
            </group>
          </group>
          <mesh
            name="Cube037"
            geometry={nodes.Cube037.geometry}
            material={nodes.Cube037.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Cube04002"
            geometry={nodes.Cube042.geometry}
            material={nodes.Cube042.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Cube05000"
            geometry={nodes.Cube050.geometry}
            material={nodes.Cube050.material}
            castShadow
            receiveShadow
          />
          {/* <mesh
            name="VIDRIO DISCO"
            geometry={nodes['VIDRIO_DISCO'].geometry}
            material={nodes['VIDRIO_DISCO'].material}
            castShadow
            receiveShadow
          /> */}
          <mesh
            name="Cube034"
            geometry={nodes.Cube034.geometry}
            material={nodes.Cube034.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
            castShadow
            receiveShadow
          />
          <group name="LUCES NEON" position={[-74.36, 16.53, 512.47]}>
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
          </group>
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
          <group name="Plane004">
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
          </group>
          <group name="Cylinder002">
            <mesh
              name="Cylinder001"
              geometry={nodes.Cylinder001.geometry}
              material={nodes.Cylinder001.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cylinder001_1"
              geometry={nodes.Cylinder001_1.geometry}
              material={nodes.Cylinder001_1.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cylinder001_2"
              geometry={nodes.Cylinder001_2.geometry}
              material={nodes.Cylinder001_2.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cylinder001_3"
              geometry={nodes.Cylinder001_3.geometry}
              material={nodes.Cylinder001_3.material}
              castShadow
              receiveShadow
            />
          </group>
          <mesh
            name="Cube003"
            geometry={nodes.Cube003.geometry}
            material={nodes.Cube003.material}
            castShadow
            receiveShadow
          />
          <mesh
            name="Cube045"
            geometry={nodes.Cube045.geometry}
            material={nodes.Cube045.material}
            castShadow
            receiveShadow
          />
          <group name="Cube046">
            <mesh
              name="Cube086"
              geometry={nodes.Cube086.geometry}
              material={nodes.Cube086.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube086_1"
              geometry={nodes.Cube086_1.geometry}
              material={nodes.Cube086_1.material}
              castShadow
              receiveShadow
            />
          </group>
          <group name="Cube053">
            <mesh
              name="Cube088"
              geometry={nodes.Cube088.geometry}
              material={nodes.Cube088.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube088_1"
              geometry={nodes.Cube088_1.geometry}
              material={nodes.Cube088_1.material}
              castShadow
              receiveShadow
            />
          </group>
          <group name="BezierCurve001">
            <mesh
              name="BezierCurve001_1"
              geometry={nodes.BezierCurve001_1.geometry}
              material={nodes.BezierCurve001_1.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="BezierCurve001_2"
              geometry={nodes.BezierCurve001_2.geometry}
              material={nodes.BezierCurve001_2.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="BezierCurve001_3"
              geometry={nodes.BezierCurve001_3.geometry}
              material={nodes.BezierCurve001_3.material}
              castShadow
              receiveShadow
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
          <group name="Cube006">
            <mesh
              name="Cube071"
              geometry={nodes.Cube071.geometry}
              material={nodes.Cube071.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube071_1"
              geometry={nodes.Cube071_1.geometry}
              material={nodes.Cube071_1.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube071_2"
              geometry={nodes.Cube071_2.geometry}
              material={nodes.Cube071_2.material}
              castShadow
              receiveShadow
            />
          </group>
          <group name="Cube013">
            <mesh
              name="Cube005_1"
              geometry={nodes.Cube005_1.geometry}
              material={nodes.Cube005_1.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube005_2"
              geometry={nodes.Cube005_2.geometry}
              material={nodes.Cube005_2.material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Cube005_3"
              geometry={nodes.Cube005_3.geometry}
              material={nodes.Cube005_3.material}
              castShadow
              receiveShadow
            />
          </group>
        </group>
        <group name="LUCES" position={[75.58, 492.2, -466.62]}>
          <spotLight
            name="Spot Light 3"
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
            name="Spot Light 2"
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
            name="Spot Light 4"
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
            name="Spot Light"
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
    </>
  )
}
// useGLTF.preload('/bar.glb')
