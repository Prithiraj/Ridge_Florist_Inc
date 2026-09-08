const canvas = document.querySelector('#petal-canvas');
const hero = document.querySelector('.hero');

if (canvas && hero) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);
  const supportsWebGL = Boolean(window.WebGLRenderingContext || window.WebGL2RenderingContext);

  if (reduceMotion || saveData || !supportsWebGL) {
    canvas.remove();
  } else {
    import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js')
      .then((THREE) => {
        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: 'low-power'
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setClearColor(0x000000, 0);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
        camera.position.z = 11;

        const group = new THREE.Group();
        scene.add(group);

        const shape = new THREE.Shape();
        shape.moveTo(0, -0.9);
        shape.bezierCurveTo(0.8, -0.2, 0.85, 0.65, 0, 1.05);
        shape.bezierCurveTo(-0.85, 0.65, -0.8, -0.2, 0, -0.9);
        const geometry = new THREE.ShapeGeometry(shape, 12);

        const palette = [0xe96f5a, 0xba5966, 0xc4963d, 0xf3c4ba, 0xdce9df];
        const petals = [];
        const petalCount = window.innerWidth < 700 ? 10 : 17;

        for (let i = 0; i < petalCount; i += 1) {
          const material = new THREE.MeshBasicMaterial({
            color: palette[i % palette.length],
            transparent: true,
            opacity: 0.075 + (i % 4) * 0.016,
            side: THREE.DoubleSide,
            depthWrite: false
          });
          const petal = new THREE.Mesh(geometry, material);
          const scale = 0.16 + Math.random() * 0.32;
          petal.scale.set(scale * (0.65 + Math.random() * 0.45), scale, scale);
          petal.position.set(
            THREE.MathUtils.randFloatSpread(12),
            THREE.MathUtils.randFloatSpread(7.5),
            THREE.MathUtils.randFloat(-2.5, 1.5)
          );
          petal.rotation.set(
            THREE.MathUtils.randFloat(-0.8, 0.8),
            THREE.MathUtils.randFloat(-0.8, 0.8),
            Math.random() * Math.PI
          );
          petal.userData = {
            baseX: petal.position.x,
            baseY: petal.position.y,
            speed: 0.08 + Math.random() * 0.12,
            phase: Math.random() * Math.PI * 2,
            spin: THREE.MathUtils.randFloat(-0.08, 0.08)
          };
          petals.push(petal);
          group.add(petal);
        }

        const pointer = new THREE.Vector2(0, 0);
        let frameId = 0;

        const resize = () => {
          const rect = hero.getBoundingClientRect();
          const width = Math.max(1, rect.width);
          const height = Math.max(1, rect.height);
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };

        const onPointerMove = (event) => {
          const rect = hero.getBoundingClientRect();
          pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
        };

        const render = (time = 0) => {
          const t = time * 0.001;
          petals.forEach((petal) => {
            const { baseX, baseY, speed, phase, spin } = petal.userData;
            petal.position.x = baseX + Math.sin(t * speed + phase) * 0.28 + pointer.x * 0.08;
            petal.position.y = baseY + Math.cos(t * speed * 0.8 + phase) * 0.22 + pointer.y * 0.06;
            petal.rotation.z += spin * 0.004;
          });
          group.rotation.y += (pointer.x * 0.045 - group.rotation.y) * 0.025;
          group.rotation.x += (-pointer.y * 0.025 - group.rotation.x) * 0.025;
          renderer.render(scene, camera);
          frameId = requestAnimationFrame(render);
        };

        resize();
        frameId = requestAnimationFrame(render);

        window.addEventListener('resize', resize, { passive: true });
        hero.addEventListener('pointermove', onPointerMove, { passive: true });

        document.addEventListener('visibilitychange', () => {
          if (document.hidden) {
            cancelAnimationFrame(frameId);
          } else {
            frameId = requestAnimationFrame(render);
          }
        });
      })
      .catch(() => {
        // CSS/SVG hero background is the intentional static fallback.
        canvas.remove();
      });
  }
}
