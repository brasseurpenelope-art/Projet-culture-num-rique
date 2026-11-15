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
    //hotSpotDebug: true        // à supprimer quand tous tes points sont bien placés
  },

  scenes: {

    scene1: {
      title: 'Montmartre',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Au_March%C3%A9_de_la_Butte%2C_Paris_April_2007.jpg/3840px-Au_March%C3%A9_de_la_Butte%2C_Paris_April_2007.jpg',
      hotSpots: [
        { pitch: -0.05456934244984898, yaw: -77.70606441691376, type: 'scene', text: 'Aller à Notre-Dame', sceneId: 'scene2' },
        { pitch: -7.249138552204611, yaw: 16.617503965552913, type: 'scene', text: 'Aller au Métro', sceneId: 'scene7' },
    {
  pitch: 4.4495041969582765,
  yaw: 141.24671120776793,
  type: 'info',
  text: 'Sur la vie privée, et les libertés individuelles',
  clickHandlerFunc: afficherFiche,
  clickHandlerArgs: {
    titre: 'Sur la vie privée et les libertés individuelles',
    texte: 'La Chine et la France semblent présenter une hiérarchie différente du respect de la vie privée et de la sécurité. Les Chinois acceptent la vidéosurveillance car ils en reconnaissent les bienfaits, et son coût sur la vie privée semble inférieur à ses bénéfices. Cela ne signifie pas que la vie privée n’a pas d’importance pour eux, mais leur recul de plus d’une décennie sur le sujet les incite à accepter plus d’intrusion dans leur espace personnel en échange des avantages de cette technologie, comme le note Ariane Ollier-Malaterre dans son article. En revanche, les Français interrogés, même s’ils sont au départ favorables à cette technologie, y deviennent uniformément opposés dès qu’un élargissement aux technologies de reconnaissance faciale ou de fichage des comportements est mentionné. Ils assurent qu’ils ne l’accepteront jamais sans une consultation populaire, et se disent prêts à se mobiliser contre s’il le faut. Leur vie privée passe avant les avantages sécuritaires de la technologie. Nous constatons donc que la notion de vie privée, loin d’être universelle, est fortement dépendante du niveau d’avancement des politiques de surveillance et peut s’assouplir lorsqu’une amélioration liée à la technologie (comme la baisse des vols) est ressentie.'
  }
},
  {
  pitch: 32.48955934575597,
  yaw: -86.9054671767294,
  type: 'info',
  text: 'Sentiment de sécurité',
  clickHandlerFunc: afficherFiche,
  clickHandlerArgs: {
    titre: 'Sentiment de sécurité',
    texte: 'Les entretiens semblent montrer que la conscience d’être observé par un système de vidéosurveillance donne un sentiment de sécurité : « dans l’ensemble, c’est plutôt rassurant » (entretien adulte France), “Je me sens plus à l aise quand il y a des caméras dans le métro, par exemple, que dans des endroits où il n y en aurait pas” (entretien jeune France). Les personnes interrogées expliquent cette sensation de sécurité par la conviction que des personnes malintentionnées n’oseraient pas passer à l’acte en se sachant être surveillées, et par l’identification rendue plus facile des malfaiteurs. Ce sentiment de sécurité est un sentiment de sécurité physique : il a trait à la peur d’être agressé, volé. Tout cela est confirmé par l’article « Can Video Surveillance Systems Promote the Perception of Safety? », (Zhang, Guo, Deng, 2019), qui montre toutefois que le sentiment diffère selon les profils sociologiques : les femmes, les jeunes et les diplômés se sentent plus en sécurité que les autres groupes, et le revenu est corrélé négativement au sentiment de sécurité sauf dans les tranches les plus élevées ou l’attitude redevient positive. Il est intéressant de noter que ce sentiment n’est pas basé sur des études ou des preuves empiriques, ces dernières montrant que la vidéosurveillance a en réalité peu d’impact sur les chiffres de la délinquance (La vidéosurveillance fait-elle vraiment baisser la délinquance ?. Franceinfo, 24 février 2026). Ce sentiment peut néanmoins modifier certains comportements urbains, en permettant aux individus de faire des choses qu’ils n’auraient pas osé faire en ne se sachant pas surveillés: l’entretien avec Armand révèle que celui-ci aurait plus de mal à prendre certaines lignes de transports le soir si elles n’étaient pas vidéosurveillées.'
  }
},
      ]
    },

    scene2: {
      title: 'Notre-Dame',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Panorama_Notre-Dame_de_Paris.jpg/3840px-Panorama_Notre-Dame_de_Paris.jpg',
      hotSpots: [
        { pitch: 0, yaw: 120, type: 'scene', text: 'Aller à Montmartre', sceneId: 'scene1' },
        { pitch: 0.33979326899683887, yaw: -166.24096645487458, type: 'scene', text: 'Aller au Métro', sceneId: 'scene7' },
        {
  pitch: 5.95758788873421,
  yaw: -14.167768227582528,
  type: 'info',
  text: 'Inhibition limitée',
  clickHandlerFunc: afficherFiche,
  clickHandlerArgs: {
    titre: 'Inhibition limitée',
    texte: 'N’ayant pu interroger des personnes ayant des pratiques illégales, nous avons peu d’éléments empiriques sur la manière dont la vidéosurveillance affecte les comportements de ces individus. Nous pouvons néanmoins supposer avec une raisonnable certitude qu elle aurait un impact. Tout d’abord dans l’entretien avec un jeune en France ce dernier confie que s’il avait des activités illégales (il prend l’exemple de taguer des murs), il serait certainement moins enclin à le faire devant des caméras. Pour partir d’une autre source on peut analyser les comportements des manifestants, qui ressemblent aux personnes ayant des activités illégales en tant qu’ils ont un rapport conflictuel avec le gouvernement. Or l’article “Protesters’ Reactions to Video Surveillance of Demonstrations: Counter-Moves, Security Cultures, and the Spiral of Surveillance and Counter-Surveillance” (Surveillance & society. 1 janvier 2018) montre que même si les réponses et réactions sont très variées, les manifestants prennent presque toujours en compte le fait d’être filmé durant une manifestation et modifient leur comportement en fonction. Nous avons pu vérifier cela nous-mêmes lors des blocus récents à Sciences Po Paris où certains étudiants filmaient les forces de l’ordre pour se protéger d’éventuelles dérives (ce que les auteurs de l’article appellent la “contre-surveillance”). Ainsi si l’inhibition face aux caméras reste limitée pour une grande partie de la population française qui n’a pas de comportements illégaux, une fraction est cependant impactée par cette dernière et modifie ses modes d’actions en la prenant en compte.'
  }
},
      ]
    },

    scene3: {
      title: 'Porte Zhengyang',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Zhengyang_gate_%E2%80%93_Panorama_%28Greg_Zaal_via_Poly_Haven%29.jpg/3840px-Zhengyang_gate_%E2%80%93_Panorama_%28Greg_Zaal_via_Poly_Haven%29.jpg',
      hotSpots: [
        { pitch: 2.3708597096267208, yaw: -160.34486560248098, type: 'scene', text: 'Aller à une résidence à Pékin', sceneId: 'scene4' },
        { pitch: 3.1377413198464414, yaw: 14.687536536856133, type: 'scene', text: 'Aller à Ecole', sceneId: 'scene6' },
        {
          pitch: 3.5196340755480295,
          yaw: 102.83597354256159,
          type: 'info',
          text: 'Un ressenti neutre voire favorable des chinois vis-à-vis de la vidéo-surveillance',
          clickHandlerFunc: afficherFiche,
          clickHandlerArgs: {
            titre: 'Un ressenti neutre voire favorable des chinois vis-à-vis de la vidéo-surveillance',
            texte: 'Les deux interviewées chinoises sont plutôt favorables à la vidéosurveillance, notamment en raison du sentiment de sécurité lié à la présence des caméras de surveillance. Il y aurait beaucoup moins de vols, de crimes, et le vaste système de caméras en Chine permet de retrouver les criminels rapidement. “Par exemple, avant, à Pékin, il y avait des vélos, il y avait plein de voleurs qui volaient des vélos. Maintenant ce genre de situation est rare, parce que les caméras sont partout : dès qu il vole, il se fait très facilement repérer. En fait, le plus grand avantage des caméras, c est qu elles évitent que beaucoup de choses arrivent." (entretien avec Sophie) Cela crée un paradoxe avec la France où les gens pensent que la vidéosurveillance peut améliorer la sécurité, mais ne ressentent pas encore la baisse de criminalité. Caroline et Sophie mettent aussi en avant le fait qu elles se sentent beaucoup plus en sécurité en tant que femmes, notamment le soir dans les rues et autres espaces publics. C est ce que montre aussi l article de Zhang Guo Deng: le ressenti peut différer selon les profils, mais les femmes se sentent plus en sécurité, acceptent et soutiennent davantage les caméras, et ressentent moins de pression. Les deux interviewées mettent aussi en avant la commodité apportée par les caméras et les nouvelles technologies de surveillance. En les sachant présentes, elles ont moins peur de se faire voler leurs affaires, donc sont plus enclines à laisser leurs sacs, leurs téléphones “sans surveillance” dans les lieux publics sans être inquiétées de se les faire voler. Nous pouvons remarquer que lorsque Sophie aborde le sujet de la commodité, elle le relie directement aux technologies de paiements, de livraison, en insistant sur la modernité technologique de la chine comparée à l Europe. Nous retrouvons donc l idée du techno optimisme chinois.'
         }
          },
       {
          pitch: 4.527339405214842,
          yaw: -76.69729311354655,
          type: 'info',
          text: 'Le crédit social (paragraphe transversal)',
          clickHandlerFunc: afficherFiche,
          clickHandlerArgs: {
           titre: 'Le crédit social (paragraphe transversal)',
            texte: 'En France, le crédit social chinois (she hui xin yong ti xi) est fréquemment présenté par les médias comme un système de surveillance généralisée attribuant à chaque citoyen un score unique, susceptible d’augmenter ou de diminuer en fonction de son comportement et de déterminer son accès à certains droits ou services. Il est souvent critiqué et mis en avant comme étant une forme dystopique de la vidéosurveillance.Toutefois,lorsque nous interrogeons Caroline et Sophie, nous nous rendons compte que ce système de crédit n a pas du tout l importance que lui donnent les médias occidentaux. Ni Caroline ni Sophie n ont entendu parler d un score unique. En réalité, le crédit social existe bien en Chine, mais ce sont des notes distinctes selon les institutions, tels des points de réputation.  Ceux-ci peuvent, par exemple, vous apporter certains avantages lors d’achats en ligne ou pour louer une batterie externe, ou, à l’inverse, conduire à votre inscription sur une liste noire, par exemple pour une compagnie aérienne. La représentation française est donc faussée, si ce système existe en effet il n’est cependant pas étendu partout en Chine et il n’existe pas de note unique.'
        }
      }
      ]
    },

    scene4: {
      title: 'Résidence à Pékin',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Mapillary_%28Cicero101%29_2025-05-30_05H54M38S000_%281449859262820417_at_zkQX2YZKejwxLrhfET7Spm%29_taken_with_360camera_equirectangular.jpg/3840px-Mapillary_%28Cicero101%29_2025-05-30_05H54M38S000_%281449859262820417_at_zkQX2YZKejwxLrhfET7Spm%29_taken_with_360camera_equirectangular.jpg',
      hotSpots: [
        { pitch: 2.6797507049199707, yaw: -104.46139543030493, type: 'scene', text: 'Aller à la porte Zhengyang', sceneId: 'scene3' },
        { pitch: -1.6457746091826924, yaw: 156.26806201468162, type: 'scene', text: 'Aller à Ecole', sceneId: 'scene6' },
        {
          pitch: 0.22439414359129858,
          yaw: -5.606508606960057,
          type: 'info',
          text: 'Une adhésion ambivalente',
          clickHandlerFunc: afficherFiche,
          clickHandlerArgs: {
            titre: 'Une adhésion ambivalente',
            texte: 'Derrière ce discours a priori favorable à la vidéosurveillance, nous pouvons néanmoins remarquer des réticences, mais surtout des procédés qui leur permettent de prendre leur distance: ne pas voir les caméras, se dire pas assez important, se dire que les caméras ne sont pas là pour moi. Nous retrouvons ce même paradoxe à travers les entretiens avec Caroline et Sophie. Quand je les questionne sur l importance de la vie privée, s il est nécessaire de la protéger, elles me répondent toutes les deux oui, si elles avaient le choix de limiter l accès à leur vie privée elles le feraient. Cependant, quand j aborde le sujet des caméras comme menace sur la vie privée, elles semblent ne plus s en inquiéter. Ariane Ollier-Malaterre dans Vivre avec la surveillance numérique en Chine met ainsi en lumière le coût cognitif et émotionnel de ces ajustements psychologiques.  “Le citoyen doit sans cesse évaluer les limites à ne pas franchir et adapter son comportement en conséquence”, puisqu il doit apprendre à mesurer ce qui est possible de faire, à quel moment. Nous voyons donc qu’en Chine, la limite de la vidéosurveillance généralisée a déjà été franchie et les citoyens s’y sont déjà habitués, alors qu’en France, la surveillance généralisée (et notamment la reconnaissance faciale) est perçue comme la limite à ne pas franchir dans la protection de la vie privée. Caroline en me racontant que son frère n écoute pas vraiment le gouvernement, semblait être très sur ses gardes, semblait ne pas oser employer certains mots: “il n écoute pas trop, euh, voilà, tu sais.” L effort continu qu exige la surveillance nourrit ainsi une tension entre ce qui peut être dit et ce qui doit être tu. Cela révèle à quel point la surveillance est généralisée, mais surtout, intériorisée. Nous pouvons de plus noter que cette surveillance est justifiée et légitimée par trois facteurs en particulier: le discours techno-optimiste et technonationaliste qui présente la technologie avec fierté et comme une vitrine du rêve chinois de Xi : “En Europe, y a  personne qui livre, l essentiel c est que le moyen de paiement pose problème. Par exemple le paiement : nous, maintenant, on a Alipay, on a WeChat Pay ; vous, en Europe, vous n y arrivez pas, plein de gens n ont même pas de téléphone, comment tu fais Alipay, WeChat Pay, hein ?”  (Entretien avec Sophie). “Peut-être qu à l étranger, relativement, même s il y en a, beaucoup sont cassées. J ai l impression que beaucoup sont aussi vieilles, et qu on ne va pas trop les réparer régulièrement.” (Entretien avec Caroline) ; la mémoire du “siècle d humiliation” avec l invasion japonaise et l incendie du Palais d Été qui entretient un sentiment d insécurité ; le manque de valeur morale des Chinois, d où le besoin de règles et d encadrement technologique. “Alors je te le dis : si vraiment il y avait une politique comme ça, les Chinois seraient beaucoup plus respectueux.” (Entretien avec Caroline, quand elle parlait du crédit social)'
         },
          },
      ]
    },

    scene5: {
      title: 'Bibliographie',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Biblioteca_C%C3%A1novas_del_Castillo_-_Centro_Cultural_MVA_-_M%C3%A1laga.jpg/3840px-Biblioteca_C%C3%A1novas_del_Castillo_-_Centro_Cultural_MVA_-_M%C3%A1laga.jpg',
      hotSpots: [
        { pitch: -33.785344149167926, yaw: -47.14810969773471, type: 'info', text: 'Entretien Caroline (Pékin)', URL: 'https://docs.google.com/document/d/1yK5ZNIeyGXxhFCrR2f-HqhcYwMIujuXj/edit' },
        { pitch: -31.827268917729686, yaw: -68.03221301779048, type: 'info', text: 'Entretien Sophie (Pékin)', URL: 'https://docs.google.com/document/d/1PByLN2cVO_IdtKssJTwbe7267EnbjvoI/edit' },
        { pitch: -25.86292855472096, yaw: -86.60890348292513, type: 'info', text: 'Entretien avec un adulte (France)', URL: 'https://docs.google.com/document/d/1WXz3Z8E9AOZuux3jxtIoTfxAMvb-CZWggTQ2ccZjawI/edit?tab=t.0' },
        { pitch: -21.510333721337503, yaw: -96.98034842788091, type: 'info', text: 'Entretien avec un jeune (France)', URL: 'https://docs.google.com/document/d/18m9cuzkYgpbRmZgRbwcHqeJU3M-Ul0U8GQ8W0-rrhf0/edit?tab=t.0' },
        { pitch: -17.99786402823041, yaw: 23.29426134328807, type: 'info', text: '« La loi "jeux olympiques" : l arbre de l expérimentation algorithmique » (Antonin Guillard et Vincent Louis, 2023) ', URL: 'https://journals.openedition.org/revdh/18490' },
        { pitch: -9.380175588244446, yaw: -7.819689601943331, type: 'info', text: '« Qu est-ce que la vidéosurveillance algorithmique ? » (La Quadrature du Net, 2022)', URL: ' https://www.laquadrature.net/2022/03/23/quest-ce-que-la-videosurveillance-algorithmique/' },
        { pitch: -6.828875455412743, yaw: -15.063573648717508, type: 'info', text: 'Rapport d information du Sénat n° 374 : « Après les JOP, jouons les prolongations » (Février 2025)', URL: 'https://www.senat.fr/rap/r24-374/r24-374_mono.html' },
        { pitch: -4.572589987197345, yaw: -20.031143367655197, type: 'info', text: 'Décisions de la CNIL et du Conseil d État (Jurisprudence début 2026)', URL: 'https://www.conseil-etat.fr/fr/arianeweb/CE/decision/2026-01-30/506370' },
        { pitch: -7.016730465356097, yaw: 33.10946820906803, type: 'info', text: 'franceinfo. (2026, 24 février). La vidéosurveillance fait-elle vraiment baisser la délinquance ? [Vidéo]', URL: 'https://www.franceinfo.fr/elections/insecurite-les-cameras-de-videosurveillance-font-elles-vraiment-baisser-la-delinquance-dans-les-communes_7825253.html' },
        { pitch: -5.259094823018204, yaw: 15.176972644836793, type: 'info', text: '« Souveraineté numérique : quelles stratégies pour la France et l Europe » (Revue Cahiers français, 2020)', URL: ' https://shs.cairn.info/magazine-cahiers-francais-2020-2-page-30?lang=fr' },
        { pitch: -3.9457116741274216, yaw: 3.1573703840715552, type: 'info', text: '« Les angles morts de la vidéosurveillance algorithmique » (Revue Socialter, 2024)', URL: 'https://www.socialter.fr/article/jo-2024-videosurveillance-algorithme-securite-derive' },
        { pitch: -13.158871365600012, yaw: 5.219820357214388, type: 'info', text: '« Panoptique pour tous » (La Vie des idées, mars 2025)', URL: 'https://laviedesidees.fr/Felix-Treguer-Technopolice' },
        { pitch: -4.533037607141842, yaw: 57.00671170134557, type: 'info', text: 'Ullrich, Peter et Philipp Knopp. « Protesters’ Reactions to Video Surveillance of Demonstrations: Counter-Moves, Security Cultures, and the Spiral of Surveillance and Counter-Surveillance », Surveillance & society. 1 janvier 2018, vol.16 no 2. p. 183‑202.', URL: 'https://ojs.library.queensu.ca/index.php/surveillance-and-society/article/view/6823' },
        { pitch: -6.159098218987934, yaw: 84.07261061493642, type: 'info', text: 'Zhang, Guo, Deng (2019), « Can Video Surveillance Systems Promote the Perception of Safety? », Sustainability', URL: 'https://www.mdpi.com/2071-1050/11/6/1595' },
        { pitch: -20.398489681846435, yaw: -40.45120323797925, type: 'info', text: 'Ariane Ollier-Malaterre, Vivre avec la surveillance numérique en Chine, CNRS éditions, 2026', URL: 'https://www.franceinfo.fr/replay-radio/livre-actu/vivre-avec-la-surveillance-numerique-en-chine-d-ariane-ollier-malaterre-aux-editions-du-cnrs_8020748.html' },
        { pitch: -18.29735912271135, yaw: -62.78578145368761, type: 'info', text: 'Big brother: the effects of surveillance on fundamental aspects of social life vision. Kiley Seymour , Jarrod McNicoll , Roger Koenig-Robert Author Notes - Neuroscience of Consciousness, December 10th 2024', URL: 'https://academic.oup.com/nc/article/2024/1/niae039/7920510?login=false' },
        { pitch: -14.896824419894157, yaw: -81.68593811510209, type: 'info', text: 'Watching eyes on potential litter can reduce littering: Evidence from two field experiments. (Bateson, M., Robinson, R., Abayomi-Cole, T., Greenlees, J., O Connor, A., & Nettle, D., 2015)', URL: 'https://peerj.com/articles/1443/' }
      ]
    },

        scene6: {
      title: 'Ecole',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/-arya-MAN_2_Kota_Cirebon_panorama_360-2019.jpg/3840px--arya-MAN_2_Kota_Cirebon_panorama_360-2019.jpg',
      hotSpots: [
        { pitch: -1.3156886698329335, yaw: 152.36396043276972, type: 'scene', text: 'Aller à une résidence à', sceneId: 'scene4' },
        { pitch: -1.3083128717256094, yaw: 81.59461206269779, type: 'scene', text: 'Aller à la porte Zhengyang', sceneId: 'scene3' },
        {
          pitch: 3.317920361635076,
          yaw: -113.98656391242264,
          type: 'info',
          text: 'Les Pékinois ne remarquent pas les caméras à l école',
          clickHandlerFunc: afficherFiche,
          clickHandlerArgs: {
            titre: 'Les Pékinois ne remarquent pas les caméras à l école',
            texte: 'Les Pékinois ne font pas attention aux caméras de manière quotidienne. “Emilie : Alors la première question, c est-à-dire : chaque jour, sur ton trajet, est-ce que tu remarques les caméras? Et puis, euh, est-ce que tu penses souvent à elles ? Caroline : Non, pas du tout, pas du tout du tout.” Ils se sont habitués à leur présence. Les caméras dérangent et sont remarquées seulement par les criminels, ou lorsque certaines personnes veulent faire quelque chose d interdit. Par exemple, Caroline fait attention aux caméras de sa classe seulement quand elle veut utiliser son téléphone, ce qui est interdit. “oui, ou par exemple quand tu veux faire une sieste, ou pendant un examen tu veux tricher, tu fais attention. Mais par exemple si tu ne fais rien, tu es juste assise là à ne rien faire, moi en tout cas je n y prête aucune attention, je ne m en occupe pas trop.” (Entretien avec Caroline). La vidéosurveillance, ou même la surveillance en ligne, est prise en compte seulement lorsque nous faisons quelque chose d interdit, d illégal. Nous pouvons penser à la période de la pandémie du Covid 19, pendant laquelle les Pékinois devaient effectuer des tests PCR tous les deux jours pour maintenir un code QR valide pour pouvoir se déplacer dans les espaces. Des technologies de contrôle de température comme des caméras thermiques dans les gares ou les centres commerciaux étaient aussi mises en place et reliées à des systèmes de surveillance. Nous remarquons que durant cette période les citoyens, notamment Sophie, ressentaient une certaine aversion à leur égard, ou du moins une plus grande prise de conscience de leur présence et adaptait ainsi ses comportements à la situation: “ j ai conscience d être surveillée à tout moment, donc où aller, quoi faire, je n ose pas trop faire n importe comment, il y avait beaucoup d endroits où je n osais plus aller. Parce que tant que tu as ton téléphone sur toi, tu es surveillée à tout moment.”'
          }
        }
      ]
    },

    scene7: {
      title: 'Station de métro',
      type: 'equirectangular',
      panorama: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Metro_Belomorskaya_opening_day_360_%2844582205620%29.jpg/3840px-Metro_Belomorskaya_opening_day_360_%2844582205620%29.jpg',
      hotSpots: [
        { pitch: 8.736067685189198, yaw: -165.3171897782381, type: 'scene', text: 'Aller à Notre Dame', sceneId: 'scene2' },
        { pitch: 0.9223712347411096, yaw: 11.431821570651891, type: 'scene', text: 'Aller à Montmartre', sceneId: 'scene1' },
    {
  pitch: 19.552720736744135,
  yaw: -48.42273330869227,
  type: 'info',
  text: 'Méfiance vis-à-vis de la surveillance',
  clickHandlerFunc: afficherFiche,
  clickHandlerArgs: {
    titre: 'Méfiance vis-à-vis de la surveillance',
    texte: 'Les deux entretiens réalisés avec des Français mettent en avant une certaine méfiance vis-à-vis de la vidéosurveillance et de ses dérives possibles, notamment autoritaires. On remarque que les deux interrogés sont contre l’installation de systèmes de reconnaissance faciale : “Ça, objectivement, je suis contre, (...) je suis heureux qu il y ait des garanties très fortes actuellement en Europe pour limiter ces possibilités.” (Entretien adulte France), expliquant leur opinion par la crainte des dérives autoritaires et sécuritaires rendues possibles par ces nouvelles technologies. Il est intéressant de noter que les deux interrogés désignent l’identification comme le stade à partir duquel la vidéosurveillance est considérée comme intrusive. Avant cela, la vidéosurveillance ou la détection de comportements anormaux sont plutôt vus d’un œil positif, la protection de l’anonymat est donc vue comme un garde-fou face aux dérives que pourrait exploiter un gouvernement malveillant. Le rapport à la vidéosurveillance en France est donc ambivalent, elle est vue à la fois comme sécurisante et potentiellement menaçante. Ceci nous aide à comprendre la manière dont elle peut modifier les comportements urbains: selon sa perception, elle facilitera certains comportements, faisant office de regard protecteur, ou au contraire en limitera d’autres avec sa posture autoritaire menaçante.'
  }
},
{
  pitch: 3.1647299689578885,
  yaw: -2.999052307087311,
  type: 'info',
  text: 'Conscience limitée de la vidéo surveillance aux transports',
  clickHandlerFunc: afficherFiche,
  clickHandlerArgs: {
    titre: 'Conscience limitée de la vidéo surveillance aux transports',
    texte: 'En France, la conscience d’être observée par des caméras reste assez limitée, et les Français semblent souvent ignorer l’étendue de leur déploiement. Ainsi, les deux interrogés expliquent ne pas voir les caméras présentes dans la rue à Paris, et ne sont pas au courant des zones où elles sont installées. Les transports sont une exception, car les interrogés remarquent facilement les caméras dans le métro ou le RER, et disent y faire attention et se sentir plus en sécurité. “Elles sont dans les transports. Je remarque très rarement les caméras dans la rue.” (entretien adulte France) “Oui, surtout dans le métro, il y a des caméras à toutes les stations de métro. Après, dans la rue, je les remarque moins” (entretien jeune France) L’un d’eux précise également mieux remarquer les caméras dans les rues de Nice, car elles y sont disposées de manière visible. Il dit ainsi se sentir plus à l’aise avec la vidéosurveillance lorsqu’il sait qu’il est filmé. Nous constatons donc que la visibilité des caméras renforce à la fois le sentiment de sécurité et la confiance des citoyens dans le système de surveillance en France. La simple disposition des caméras ne suffit pas à expliquer la conscience peu développée des Français sur ce sujet. Les politiques publiques de vidéosurveillance sont souvent floues et peu médiatisées, ce qui explique que de nombreux citoyens les ignorent ou manquent d informations sur leur ampleur. Un interrogé dit d’ailleurs devoir se renseigner sur la surveillance en France par lui-même, tout en remarquant que nombre de ses amis et collègues sont moins au courant, il y a donc selon lui un manque d’intérêt des médias traditionnels pour ce sujet.  “La télévision parle régulièrement, mais sous l angle un peu anecdotique. Il est probable qu il faudrait plus éduquer la population à ce que c est en réalité. les avantages, les risques et les limites à placer. Je pense que les gens sont assez peu informés dans l ensemble.” (entretien adulte France)'
  }
},
      ]
    }

  }
});

// ===== GLOBE 3D =====
const lieux = [
  { nom: 'Montmartre',        lat: 48.886, lng: 2.340,   scene: 'scene1' },
  { nom: 'Notre-Dame',        lat: 48.853, lng: 2.349,   scene: 'scene2' },
  { nom: 'Porte Zhengyang',   lat: 39.899, lng: 116.391, scene: 'scene3' },
  { nom: 'Résidence à Pékin', lat: 39.950, lng: 116.440, scene: 'scene4' },
  { nom: 'Bibliographie',     lat: 31.21,  lng: 29.91,   scene: 'scene5' },
  { nom: 'Ecole',           lat: 40,     lng: 116.5,   scene: 'scene6' },
  { nom: 'Station de métro',             lat: 48.850, lng: 2.355,   scene: 'scene7' }
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
