// ===== FICHE D'INFORMATION (placée en haut pour exister avant d'être utilisée) =====
function afficherFiche(evt, args) {
  document.getElementById('fiche-titre').textContent = args.titre;
  document.getElementById('fiche-texte').textContent = args.texte;
  document.getElementById('fiche').style.display = 'block';
}

// ===== PANORAMAS 360° =====
const viewer = pannellum.viewer('panorama', {
  default: {
    firstScene: 'scene1',
    sceneFadeDuration: 1000,
    hotSpotDebug: true        // à supprimer quand tous tes points sont bien placés
  },

  scenes: {

    scene1: {
      title: 'Montmartre',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Au_March%C3%A9_de_la_Butte%2C_Paris_April_2007.jpg/3840px-Au_March%C3%A9_de_la_Butte%2C_Paris_April_2007.jpg',
      hotSpots: [
        { pitch: 0, yaw: 60, type: 'scene', text: 'Aller à Notre-Dame', sceneId: 'scene2' },
        { pitch: 3.43, yaw: 139.04, type: 'info', text: 'Le Marché de la Butte (lien vers Montmartre)', URL: 'https://fr.wikipedia.org/wiki/Montmartre' },
        { pitch: -5.8920259993462, yaw: 172.324300785559, type: 'info', text: 'Une rue pavée typique de Montmartre' },
        { pitch: 15, yaw: -100, type: 'info', text: 'Les immeubles haussmanniens' },
        { pitch: 0, yaw: 50, type: 'scene', text: 'Aller au Métro', sceneId: 'scene7' }
      ]
    },

    scene2: {
      title: 'Notre-Dame',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Panorama_Notre-Dame_de_Paris.jpg/3840px-Panorama_Notre-Dame_de_Paris.jpg',
      hotSpots: [
        { pitch: 0, yaw: 120, type: 'scene', text: 'Aller à Montmartre', sceneId: 'scene1' },
        { pitch: 0, yaw: 60, type: 'scene', text: 'Aller au Métro', sceneId: 'scene7' }
      ]
    },

    scene3: {
      title: 'Porte Zhengyang',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Zhengyang_gate_%E2%80%93_Panorama_%28Greg_Zaal_via_Poly_Haven%29.jpg/3840px-Zhengyang_gate_%E2%80%93_Panorama_%28Greg_Zaal_via_Poly_Haven%29.jpg',
      hotSpots: [
        { pitch: 0, yaw: 90, type: 'scene', text: 'Aller à la résidence', sceneId: 'scene4' },
        { pitch: 0, yaw: 60, type: 'scene', text: 'Aller à Ecole 2', sceneId: 'scene6' }
      ]
    },

    scene4: {
      title: 'Résidence à Pékin',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Mapillary_%28Cicero101%29_2025-05-30_05H54M38S000_%281449859262820417_at_zkQX2YZKejwxLrhfET7Spm%29_taken_with_360camera_equirectangular.jpg/3840px-Mapillary_%28Cicero101%29_2025-05-30_05H54M38S000_%281449859262820417_at_zkQX2YZKejwxLrhfET7Spm%29_taken_with_360camera_equirectangular.jpg',
      hotSpots: [
        { pitch: 0, yaw: -90, type: 'scene', text: 'Aller à la porte Zhengyang', sceneId: 'scene3' },
        { pitch: 0, yaw: 60, type: 'scene', text: 'Aller à Ecole 2', sceneId: 'scene6' }
      ]
    },

    scene5: {
      title: 'Bibliographie',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Biblioteca_C%C3%A1novas_del_Castillo_-_Centro_Cultural_MVA_-_M%C3%A1laga.jpg/3840px-Biblioteca_C%C3%A1novas_del_Castillo_-_Centro_Cultural_MVA_-_M%C3%A1laga.jpg',
      hotSpots: [
        { pitch: 10, yaw: -40, type: 'info', text: 'Entretien Caroline (Pékin)', URL: 'https://docs.google.com/document/d/1yK5ZNIeyGXxhFCrR2f-HqhcYwMIujuXj/edit' },
        { pitch: 10, yaw: -50, type: 'info', text: 'Entretien Sophie (Pékin)', URL: 'https://docs.google.com/document/d/1PByLN2cVO_IdtKssJTwbe7267EnbjvoI/edit' },
        { pitch: 10, yaw: -60, type: 'info', text: 'Entretien avec un adulte (France)', URL: 'https://docs.google.com/document/d/1WXz3Z8E9AOZuux3jxtIoTfxAMvb-CZWggTQ2ccZjawI/edit?tab=t.0' },
        { pitch: 10, yaw: -70, type: 'info', text: 'Entretien avec un jeune (France)', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -40.360046549384094, type: 'info', text: '« La loi "jeux olympiques" : l arbre de l expérimentation algorithmique » (Antonin Guillard et Vincent Louis, 2023) ', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -44.360046549384094, type: 'info', text: '« Qu est-ce que la vidéosurveillance algorithmique ? » (La Quadrature du Net, 2022)', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -48.360046549384094, type: 'info', text: 'Rapport d information du Sénat n° 374 : « Après les JOP, jouons les prolongations » (Février 2025)', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -52.360046549384094, type: 'info', text: 'Décisions de la CNIL et du Conseil d État (Jurisprudence début 2026)', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -56.360046549384094, type: 'info', text: 'franceinfo. (2026, 24 février). La vidéosurveillance fait-elle vraiment baisser la délinquance ? [Vidéo]', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -60.360046549384094, type: 'info', text: '« Souveraineté numérique : quelles stratégies pour la France et l Europe » (Revue Cahiers français, 2020)', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -64.360046549384094, type: 'info', text: '« Les angles morts de la vidéosurveillance algorithmique » (Revue Socialter, 2024)', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -68.360046549384094, type: 'info', text: '« Panoptique pour tous » (La Vie des idées, mars 2025)', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -72.360046549384094, type: 'info', text: 'Ullrich, Peter et Philipp Knopp. « Protesters’ Reactions to Video Surveillance of Demonstrations: Counter-Moves, Security Cultures, and the Spiral of Surveillance and Counter-Surveillance », Surveillance & society. 1 janvier 2018, vol.16 no 2. p. 183‑202.', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -76.360046549384094, type: 'info', text: 'Zhang, Guo, Deng (2019), « Can Video Surveillance Systems Promote the Perception of Safety? », Sustainability', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -80.360046549384094, type: 'info', text: 'Ariane Ollier-Malaterre, Vivre avec la surveillance numérique en Chine, CNRS éditions, 2026', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -84.360046549384094, type: 'info', text: 'Big brother: the effects of surveillance on fundamental aspects of social life vision. Kiley Seymour , Jarrod McNicoll , Roger Koenig-Robert Author Notes - Neuroscience of Consciousness, December 10th 2024', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -21.507758920107264, yaw: -88.360046549384094, type: 'info', text: 'Watching eyes on potential litter can reduce littering: Evidence from two field experiments. (Bateson, M., Robinson, R., Abayomi-Cole, T., Greenlees, J., O Connor, A., & Nettle, D., 2015)', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' }
      ]
    },

        scene6: {
      title: 'Ecole 2',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/-arya-MAN_2_Kota_Cirebon_panorama_360-2019.jpg/3840px--arya-MAN_2_Kota_Cirebon_panorama_360-2019.jpg',
      hotSpots: [
        { pitch: 0, yaw: 0, type: 'scene', text: 'Aller à la résidence', sceneId: 'scene4' },
        { pitch: 0, yaw: 60, type: 'scene', text: 'Aller à la porte Zhengyang', sceneId: 'scene3' },
        {
          pitch: 10,
          yaw: -40,
          type: 'info',
          text: 'Un ressenti neutre voire favorable des chinois vis-à-vis de la vidéo-surveillance',
          clickHandlerFunc: afficherFiche,
          clickHandlerArgs: {
            titre: 'Un ressenti neutre voire favorable des chinois vis-à-vis de la vidéo-surveillance',
            texte: 'Les deux interviewées chinoises sont plutôt favorables à la vidéosurveillance, notamment en raison du sentiment de sécurité lié à la présence des caméras de surveillance. Il y aurait beaucoup moins de vols, de crimes, et le vaste système de caméras en Chine permet de retrouver les criminels rapidement. “Par exemple, avant, à Pékin, il y avait des vélos, il y avait plein de voleurs qui volaient des vélos. Maintenant ce genre de situation est rare, parce que les caméras sont partout : dès qu il vole, il se fait très facilement repérer. En fait, le plus grand avantage des caméras, c est qu elles évitent que beaucoup de choses arrivent. (entretien avec Sophie) Caroline et Sophie mettent aussi en avant le fait qu elles se sentent beaucoup plus en sécurité en tant que femmes, notamment le soir dans les rues et autres espaces publics. C est ce que montre aussi l article de Zhang Guo Deng: le ressenti peut différer selon les profils, mais les femmes se sentent plus en sécurité, acceptent et soutiennent davantage les caméras, et ressentent moins de pression.'
          }
        },
        {
          pitch: 10,
          yaw: -50,
          type: 'info',
          text: 'Les Pékinois ne remarquent pas les caméras à l école?',
          clickHandlerFunc: afficherFiche,
          clickHandlerArgs: {
            titre: 'Les Pékinois ne remarquent pas les caméras à l école?',
            texte: 'Les Pékinois ne font pas attention aux caméras de manière quotidienne. “Emilie : Alors la première question, c est-à-dire : chaque jour, sur ton trajet, est-ce que tu remarques les caméras? Et puis, euh, est-ce que tu penses souvent à elles ? Caroline : Non, pas du tout, pas du tout du tout.” Ils se sont habitués à leur présence. Les caméras dérangent et sont remarquées seulement par les criminels, ou lorsque certaines personnes veulent faire quelque chose d interdit. Par exemple, Caroline fait attention aux caméras de sa classe seulement quand elle veut utiliser son téléphone, ce qui est interdit. “oui, ou par exemple quand tu veux faire une sieste, ou pendant un examen tu veux tricher, tu fais attention. Mais par exemple si tu ne fais rien, tu es juste assise là à ne rien faire, moi en tout cas je n y prête aucune attention, je ne m en occupe pas trop.” (Entretien avec Caroline)'
          }
        }
      ]
    },

    scene7: {
      title: 'Station de métro',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Metro_Belomorskaya_opening_day_360_%2844582205620%29.jpg/3840px-Metro_Belomorskaya_opening_day_360_%2844582205620%29.jpg',
      hotSpots: [
        { pitch: 0, yaw: 0, type: 'scene', text: 'Aller à Notre Dame', sceneId: 'scene2' },
        { pitch: 0, yaw: 60, type: 'scene', text: 'Aller à Montmartre', sceneId: 'scene1' }
      ]
    }

  }
});

// ===== GLOBE 3D =====
const lieux = [
  { nom: 'Montmartre',        lat: 48.886, lng: 2.340,   scene: 'scene1' },
  { nom: 'Notre-Dame',        lat: 48.853, lng: 2.349,   scene: 'scene2' },
  { nom: 'Porte Zhengyang',   lat: 39.899, lng: 116.391, scene: 'scene3' },
  { nom: 'Quartier Chaoyang', lat: 39.950, lng: 116.440, scene: 'scene4' },
  { nom: 'Bibliographie',     lat: 31.21,  lng: 29.91,   scene: 'scene5' },
  { nom: 'Ecole 2',           lat: 40,     lng: 116.5,   scene: 'scene6' },
  { nom: 'Métro',             lat: 48.850, lng: 2.355,   scene: 'scene7' }
];

function ouvrirLieu(lieu) {
  document.getElementById('globe').style.display = 'none';
  document.getElementById('consigne').style.display = 'none';
  document.getElementById('retour').style.display = 'block';
  viewer.loadScene(lieu.scene);
}

const globe = Globe()(document.getElementById('globe'))
  // Terre de jour
  .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')
  .bumpImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
  .atmosphereColor('#ff3b3b')
  .atmosphereAltitude(0.25)

  // points rouges (cliquables)
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
  .ringRepeatPeriod(1200);

// Le globe tourne tout seul (mets true pour l'activer)
globe.controls().autoRotate = false;
globe.controls().autoRotateSpeed = 0.5;

// Le globe démarre centré sur la France (altitude plus grande = globe plus petit)
globe.pointOfView({ lat: 48.8, lng: 2.3, altitude: 1.8 });

// ----- Satellites en orbite -----
const ALTITUDE_ORBITE = 0.2;
const ZONE_FONDU = 0.1;   // plus grand = disparition plus progressive

// Calcule la position (lat, lng) d'un point sur une orbite inclinée
function positionOrbite(angleDeg, inclinaisonDeg, decalageDeg) {
  const t = angleDeg * Math.PI / 180;
  const inc = inclinaisonDeg * Math.PI / 180;
  const om = decalageDeg * Math.PI / 180;

  const x = Math.cos(t);
  const y = Math.sin(t) * Math.cos(inc);
  const z = Math.sin(t) * Math.sin(inc);
  const X = x * Math.cos(om) - y * Math.sin(om);
  const Y = x * Math.sin(om) + y * Math.cos(om);

  return {
    lat: Math.asin(z) * 180 / Math.PI,
    lng: Math.atan2(Y, X) * 180 / Math.PI
  };
}

const satellites = [];
for (let i = 0; i < 6; i++) {
  satellites.push({
    angle: Math.random() * 360,
    inclinaison: 20 + Math.random() * 60,
    decalage: Math.random() * 360,
    vitesse: 0.2 + Math.random() * 0.3,
    lat: 0,
    lng: 0,
    el: null
  });
}

// Clignotement de la petite lumière rouge
const styleSat = document.createElement('style');
styleSat.textContent = `
  @keyframes clignote { 0%, 100% { opacity: 1; } 50% { opacity: 0.1; } }
  .lumiere-sat { animation: clignote 1.2s infinite; }
`;
document.head.appendChild(styleSat);

// Dessin du satellite
const SVG_SATELLITE = `
<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
  <rect x="2"  y="16" width="14" height="12" fill="#2a6fd6" stroke="#9cc4ff" stroke-width="1"/>
  <rect x="28" y="16" width="14" height="12" fill="#2a6fd6" stroke="#9cc4ff" stroke-width="1"/>
  <line x1="16" y1="22" x2="28" y2="22" stroke="#cccccc" stroke-width="2"/>
  <rect x="16" y="14" width="12" height="16" rx="2" fill="#d9d9d9" stroke="#ffffff" stroke-width="1"/>
  <line x1="22" y1="14" x2="22" y2="6" stroke="#cccccc" stroke-width="1.5"/>
  <circle cx="22" cy="5" r="2.5" fill="#ff3b3b" class="lumiere-sat"/>
</svg>`;

// Lignes d'orbite (tracé fin autour de la Terre)
const orbites = satellites.map(s => {
  const points = [];
  for (let a = 0; a <= 360; a += 5) {
    const p = positionOrbite(a, s.inclinaison, s.decalage);
    points.push([p.lat, p.lng, ALTITUDE_ORBITE]);
  }
  return points;
});

globe
  .pathsData(orbites)
  .pathPointLat(p => p[0])
  .pathPointLng(p => p[1])
  .pathPointAlt(p => p[2])
  .pathColor(() => 'rgba(255, 255, 255, 0.25)')
  .pathTransitionDuration(0);

// Satellites
globe
  .htmlElementsData(satellites)
  .htmlLat('lat')
  .htmlLng('lng')
  .htmlAltitude(ALTITUDE_ORBITE)
  .htmlTransitionDuration(0)
  // on désactive la disparition brutale : le fondu est géré plus bas
  .htmlElementVisibilityModifier(() => {})
  .htmlElement(s => {
    const el = document.createElement('div');
    el.innerHTML = SVG_SATELLITE;
    el.style.pointerEvents = 'none';
    el.style.filter = 'drop-shadow(0 0 6px rgba(120, 180, 255, 0.9))';
    s.el = el;   // on garde l'élément pour régler son opacité
    return el;
  });

// Opacité d'un satellite : 1 s'il est visible, 0 s'il est bien caché derrière la Terre
function opaciteSatellite(s) {
  const R = globe.getGlobeRadius();
  const C = globe.camera().position;
  const P = globe.getCoords(s.lat, s.lng, ALTITUDE_ORBITE);

  const dx = P.x - C.x, dy = P.y - C.y, dz = P.z - C.z;
  const d2 = dx * dx + dy * dy + dz * dz;
  const t = -(C.x * dx + C.y * dy + C.z * dz) / d2;

  // le satellite est devant la Terre ou à côté : visible
  if (t <= 0 || t >= 1) return 1;

  // distance entre le centre de la Terre et la ligne de vue
  const cx = C.x + t * dx, cy = C.y + t * dy, cz = C.z + t * dz;
  const dist = Math.sqrt(cx * cx + cy * cy + cz * cz);

  const opacite = (dist - (1 - ZONE_FONDU) * R) / (ZONE_FONDU * R);
  return Math.max(0, Math.min(1, opacite));
}

function majSatellites() {
  satellites.forEach(s => {
    s.angle = (s.angle + s.vitesse) % 360;
    const p = positionOrbite(s.angle, s.inclinaison, s.decalage);
    s.lat = p.lat;
    s.lng = p.lng;
    if (s.el) s.el.style.opacity = opaciteSatellite(s);
  });
  globe.htmlElementsData(satellites);
}

setInterval(majSatellites, 50);

// ===== BOUTONS =====

// Bouton pour revenir au globe
document.getElementById('retour').addEventListener('click', () => {
  document.getElementById('globe').style.display = 'block';
  document.getElementById('consigne').style.display = 'block';
  document.getElementById('retour').style.display = 'none';
});

// Fermer l'introduction
document.getElementById('commencer').addEventListener('click', () => {
  document.getElementById('intro').style.display = 'none';
});

// Fermer la fiche d'information
document.getElementById('fermer-fiche').addEventListener('click', () => {
  document.getElementById('fiche').style.display = 'none';
});
