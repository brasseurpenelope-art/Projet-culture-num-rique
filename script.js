// ===== PANORAMAS 360° =====
const viewer = pannellum.viewer('panorama', {
  default: {
    firstScene: 'scene1',
    sceneFadeDuration: 1000,
    hotSpotDebug: true
  },

  scenes: {

    scene1: {
      title: 'Montmartre',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Au_March%C3%A9_de_la_Butte%2C_Paris_April_2007.jpg/3840px-Au_March%C3%A9_de_la_Butte%2C_Paris_April_2007.jpg',
      hotSpots: [
        { pitch: 0, yaw: 60, type: 'scene', text: 'Aller à Notre-Dame', sceneId: 'scene2' },
  { pitch: 3.434393780401619, yaw: 139.04184947161286, type: 'info', text: 'Le Marché de la Butte' },
  { pitch: -5.8920259993462, yaw: 172.324300785559, type: 'info', text: 'Une rue pavée typique de Montmartre' },
  { pitch: 15, yaw: -100, type: 'info', text: 'Les immeubles haussmanniens' }
      ]
    },

    scene2: {
      title: 'Notre-Dame',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Panorama_Notre-Dame_de_Paris.jpg/3840px-Panorama_Notre-Dame_de_Paris.jpg',
      hotSpots: [
        { pitch: 0, yaw: 120, type: 'scene', text: 'Retour à Montmartre', sceneId: 'scene1' },
  { pitch: 3.434393780401619, yaw: 139.04184947161286, type: 'info', text: 'Le Marché de la Butte' },
  { pitch: -5.8920259993462, yaw: 172.324300785559, type: 'info', text: 'Une rue pavée typique de Montmartre' },
  { pitch: 15, yaw: -100, type: 'info', text: 'Les immeubles haussmanniens' }
      ]
    },

        scene3: {
      title: 'Porte Zhengyang',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Zhengyang_gate_%E2%80%93_Panorama_%28Greg_Zaal_via_Poly_Haven%29.jpg/3840px-Zhengyang_gate_%E2%80%93_Panorama_%28Greg_Zaal_via_Poly_Haven%29.jpg',
      hotSpots: [
        { pitch: 0, yaw: 90, type: 'scene', text: 'Aller à la résidence', sceneId: 'scene4' },
  { pitch: 3.434393780401619, yaw: 139.04184947161286, type: 'info', text: 'Le Marché de la Butte' },
  { pitch: -5.8920259993462, yaw: 172.324300785559, type: 'info', text: 'Une rue pavée typique de Montmartre' },
  { pitch: 15, yaw: -100, type: 'info', text: 'Les immeubles haussmanniens' }
      ]
    },

        scene4: {
      title: 'Résidence à Pékin',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Mapillary_%28Cicero101%29_2025-05-30_05H54M38S000_%281449859262820417_at_zkQX2YZKejwxLrhfET7Spm%29_taken_with_360camera_equirectangular.jpg/3840px-Mapillary_%28Cicero101%29_2025-05-30_05H54M38S000_%281449859262820417_at_zkQX2YZKejwxLrhfET7Spm%29_taken_with_360camera_equirectangular.jpg',
      hotSpots: [
        { pitch: 0, yaw: -90, type: 'scene', text: 'Retour à la porte Zhengyang', sceneId: 'scene3' },
  { pitch: 3.434393780401619, yaw: 139.04184947161286, type: 'info', text: 'Le Marché de la Butte' },
  { pitch: -5.8920259993462, yaw: 172.324300785559, type: 'info', text: 'Une rue pavée typique de Montmartre' },
  { pitch: 15, yaw: -100, type: 'info', text: 'Les immeubles haussmanniens' }
      ]
    }

  }
});

// ===== GLOBE 3D =====
const lieux = [
  { nom: 'Montmartre',        lat: 48.886, lng: 2.340,   scene: 'scene1' },
  { nom: 'Notre-Dame',        lat: 48.853, lng: 2.349,   scene: 'scene2' },
  { nom: 'Porte Zhengyang',   lat: 39.899, lng: 116.391, scene: 'scene3' },
  { nom: 'Quartier Chaoyang', lat: 39.950, lng: 116.440, scene: 'scene4' }
];

function ouvrirLieu(lieu) {
  document.getElementById('globe').style.display = 'none';
  document.getElementById('consigne').style.display = 'none';
  document.getElementById('retour').style.display = 'block';
  viewer.loadScene(lieu.scene);
}

const globe = Globe()(document.getElementById('globe'))
  .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')
  .bumpImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
  .atmosphereColor('#6ab7ff')
  .atmosphereAltitude(0.25)

  // petits points dorés (cliquables)
  .pointsData(lieux)
  .pointLat('lat')
  .pointLng('lng')
  .pointColor(() => 'red')
  .pointAltitude(0.02)
  .pointRadius(1)
  .pointLabel('nom')
  .onPointClick(ouvrirLieu)

  // ondes qui pulsent
  .ringsData(lieux)
  .ringLat('lat')
  .ringLng('lng')
  .ringColor(() => t => `rgba(255, 204, 0, ${1 - t})`)
  .ringMaxRadius(8)
  .ringPropagationSpeed(2)
  .ringRepeatPeriod(1200)

// Le globe démarre centré sur la France
globe.pointOfView({ lat: 48.8, lng: 2.3, altitude: 1.8 });

// Bouton pour revenir au globe
document.getElementById('retour').addEventListener('click', () => {
  document.getElementById('globe').style.display = 'block';
  document.getElementById('consigne').style.display = 'block';
  document.getElementById('retour').style.display = 'none';
});
