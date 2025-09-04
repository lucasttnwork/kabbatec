import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const Interactive3DChart = ({ data, type = 'bar' }) => {
  const canvasRef = useRef()

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })

    const glassMaterial = new THREE.MeshPhysicalMaterial({ color: 0x667eea, metalness: 0, roughness: 0.1, transparent: true, opacity: 0.7, envMapIntensity: 1 })

    const meshes = []
    data.forEach((item, index) => {
      const geometry = new THREE.BoxGeometry(1, Math.max(0.1, item.value / 10), 1)
      const mesh = new THREE.Mesh(geometry, glassMaterial)
      mesh.position.x = index * 2 - data.length
      mesh.position.y = (item.value / 10) / 2
      meshes.push(mesh)
      scene.add(mesh)
    })

    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(1, 1, 1)
    scene.add(ambientLight, directionalLight)

    camera.position.z = 10

    const onResize = () => {
      const w = window.innerWidth
      const h = 400
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    onResize()
    window.addEventListener('resize', onResize)

    let raf
    const animate = () => {
      scene.rotation.y += 0.005
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [data])

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="w-full h-96" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  )
}


