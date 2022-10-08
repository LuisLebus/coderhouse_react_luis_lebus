const characters = [
  {
    id: 1,
    name: "Seiya",
    category: "Bronce",
    price: "34",
    count: "9",
    detail:
      'Seiya (星矢, Seiya) es el personaje principal de la serie de manga y anime Saint Seiya y el Saint de Pegasus durante las Guerras Santas en el siglo XX hasta antes de los eventos ocurridos en Next Dimension. Es la reencarnación del pasado Bronze Saint de Pegasus Tenma y del "Primer Pegasus", el primer humano en herir al dios Hades desde la era mitológica.',
    img: "seiya.png",
  },
  {
    id: 2,
    name: "Shiryū",
    category: "Bronce",
    price: "13",
    count: "10",
    detail:
      "Shiryū (紫龍, Shiryū) es el Santo de Bronce de Dragón durante las Guerras Santas en el Siglo XX (1990). Shiryū es considerado como el más prudente y sabio de los Santos de Bronce - siendo que fue discípulo del gran anciano maestro Dohko de Libra - y es uno de los personajes principales de la serie del manga y anime Saint Seiya, conocido como Los Caballeros del Zodiaco.",
    img: "shiryu.png",
  },
  {
    id: 3,
    name: "Hyōga",
    category: "Bronce",
    price: "26",
    count: "5",
    detail:
      "Hyōga (氷河, Hyōga) es el Santo de Bronce de Cygnus, y fue discípulo de Camus de Aquarius y del Crystal Saint.",
    img: "hyoga.png",
  },
  {
    id: 4,
    name: "Shun",
    category: "Bronce",
    price: "46",
    count: "8",
    detail:
      "Shun (瞬, Shun) es el Bronze Saint de la constelación de Andromeda y uno de los protagonistas de la serie. Se caracteriza por su personalidad pacifista, su carácter delicado y porque no le gusta herir a las demás personas. Tiene un gran poder, pero su gentil disposición y naturaleza amable tienden a detenerlo de usarlo del todo, hasta que se ve obligado a hacerlo. Es el hermano menor de Ikki, el Santo de Fénix. Shun es el humano que posee el alma más pura, y es por eso que Hades le escoge como su huésped.",
    img: "shun.png",
  },
  {
    id: 5,
    name: "Ikki",
    category: "Bronce",
    price: "1200",
    count: "11",
    detail:
      "Ikki (一輝, Ikki) es el Saint de la constelación de Phoenix. Es uno de los protagonistas en Saint Seiya y en Saint Seiya: Next Dimension. Se caracteriza por tener el cosmos más agresivo y violento entre los Saints. Acostumbra andar separado del resto de los Bronze Saints, sin embargo siempre aparece oportunamente en los momentos de necesidad. Se considera a sí mismo un lobo solitario que no le interesa andar en grupos. A pesar de que se introdujo más tarde que los otros cuatro Bronze Saints principales, el rol de Ikki en la historia es bastante significativo. Además, actúa como el primer antagonista de la serie que los demás Saints deben derrotar, así como un poderoso aliado más adelante en la serie.",
    img: "ikki.png",
  },
  {
    id: 6,
    name: "Jabu",
    category: "Bronce",
    price: "120",
    count: "34",
    detail:
      "Jabu (邪武, Jabu) (o Jabú en Latinoamérica) es el Bronze Saint de Unicorn en Saint Seiya. Realizó su entrenamiento de Saint en Oran, Argelia. Su papel es secundario y de soporte en la historia y combatió con Shun en la Galaxian Wars. Más tarde volvería para ayudar a Athena salvándola del ataque de los soldados del Papa del Santuario junto con sus compañeros secundarios de bronce.",
    img: "jabu.jpg",
  },
  {
    id: 7,
    name: "Geki",
    category: "Bronce",
    price: "120",
    count: "43",
    detail:
      "Geki (檄, Geki) es el Santo de Bronce de la constelación de Ursa Major, uno de los 88 Saints de Athena, Diosa de la Guerra y la Inteligencia.",
    img: "geki.png",
  },
  {
    id: 8,
    name: "Ban",
    category: "Bronce",
    price: "50",
    count: "45",
    detail:
      "Ban (蛮, Ban) es el Santo de Bronce de León Menor en Saint Seiya. Es uno de los huérfanos acogidos por la Fundación Graude (Fundación Kido) y que fue entrenado para ser uno de los Santos junto con otros cien huérfanos, de los cuales solo conseguirían regresar diez. En un sorteo realizado fue enviado a Tanzania, donde realizaría un entrenamiento. Su mayor participación fue en el Torneo Galáctico, donde perdió ante Jabu de Unicorn.",
    img: "ban.jpg",
  },
  {
    id: 9,
    name: "Ichi",
    category: "Bronce",
    price: "45",
    count: "10",
    detail:
      "Ichi (市（イチ）, Ichi) es el Santo de Hidra, fue un Santo de Bronce desde el comienzo de la historia, se encontró en el grupo de los santos de bronce que protegen a Athena fuera del santuario. Se encuadra dentro de un grupo de personajes secundarios que son derrotados durante el Torneo Galáctico, y vuelven a sus lugares de entrenamiento para perfeccionar su técnica. Tras los enfrentamientos de sus compañeros los cinco Bronze Saints protagónicos contra los enviados del Papa del Santuario y elevar su Cosmo hasta despertar el Séptimo Sentido, regresa junto con Jabu y los demás para proteger a Athena a las afueras de la Casa de Aries, hasta el final de la batalla contra Saga de Gemini.",
    img: "ichi.jpg",
  },
  {
    id: 10,
    name: "June",
    category: "Bronce",
    price: "65",
    count: "19",
    detail:
      "June (ジュネ, June), es la Saint Femenino de Chamaeleon. Es alumna de Daidalos de Cepheus en la Isla de Andromeda, allí comparte enseñanzas con Shun, su amigo, por el cual siente un cariño especial. En Knights of the Zodiac, su compañera de entrenamiento es Shaun. En el anime de 1986, su maestro es Albiore de Cepheus y tiene más compañeros de entrenamiento, destacándose entre ellos Reda y Spica.",
    img: "june.jpg",
  },
  {
    id: 11,
    name: "Nachi",
    category: "Bronce",
    price: "23",
    count: "11",
    detail:
      "Nachi (那智, Nachi) es el Santo de Bronce de Lobo de Saint Seiya. Poco se sabe de su pasado, excepto que quedó huérfano y que fue mandado a Liberia a entrenar para conseguir el Cloth de Bronce del Lobo.",
    img: "nachi.jpg",
  },
  {
    id: 12,
    name: "Marin",
    category: "Plata",
    price: "57",
    count: "12",
    detail:
      "Marin (魔鈴, Marin) es uno de los dos personajes femeninos secundarios de mayor relevancia en la historia junto con Shaina. Es la Santa de Plata de Eagle en el siglo XX. Como Santa, debe renunciar a su feminidad ocultando su rostro bajo una máscara. Entrenó a Seiya hasta que éste se convirtió en un Santo de Bronce al obtener la Cloth de Pegasus.",
    img: "marin.jpg",
  },
  {
    id: 13,
    name: "Shaina",
    category: "Plata",
    price: "12",
    count: "21",
    detail:
      "Shaina (シャイナ, Shaina) es uno de los dos personajes femeninos secundarios de mayor relevancia en la historia de Saint Seiya Clásico junto con Marin. Además, es la Santo femenino de Ophiuchus durante la Guerra entre Athena y Poseidon, Athena y Hades en el Siglo XX y posteriormente también maestra de Kōga de Pegasus en las guerras santas entre Athena y Marte y entre Athena y Pallas del Siglo XXI, narrada en el Spin-Off Saint Seiya Ω y es de las pocas mujeres que existen dentro del Ejército de Athena, pero para serlo, tuvo que renunciar a su feminidad ocultando su rostro bajo una máscara. A pesar de ser tan joven, ella fue la Maestra de Cassios, quien disputó con Seiya la Cloth de Pegasus.",
    img: "shaina.jpg",
  },
  {
    id: 14,
    name: "Misty",
    category: "Plata",
    price: "79",
    count: "18",
    detail:
      "Misty (ミスティ, Misuti) es el Santo de Plata de Lizard durante la Guerra entre el Santuario y los Titanes y posteriormente en la guerra por el Santuario que estaba bajo el control de Saga de Gemini, es el primer Santo de Plata que se presenta oficialmente con este título tanto en el anime como en el manga; enviado por el Patriarca, para acabar con los Bronze Saints. Es un personaje narcisista y bastante confiado con sus habilidades.",
    img: "misty.jpg",
  },
  {
    id: 15,
    name: "Dio",
    category: "Plata",
    price: "13",
    count: "38",
    detail:
      "Dio (ディオ, Dio) es el Silver Saint de la constelación de Musca al servicio de Athena y del Santuario durante el siglo XX. En la historia tuvo una breve participación luchando junto a Algethi y Sirius contra Seiya.",
    img: "dio.jpg",
  },
  {
    id: 16,
    name: "Jamian",
    category: "Plata",
    price: "57",
    count: "27",
    detail:
      "Jamian (ジャミアン, jamian) fue un Silver Saint protegido por la Constelación de Corvus.",
    img: "jamian.png",
  },
  {
    id: 17,
    name: "Algethi",
    category: "Plata",
    price: "19",
    count: "22",
    detail:
      "Algethi (アルゲティ, Arugeti) es el Silver Saint de la constelación de Hercules (Heracles) al servicio de Athena y del Santuario durante el siglo XX. En la historia tuvo una breve participación luchando junto a Dio y Sirius contra Seiya.",
    img: "algethi.jpg",
  },
  {
    id: 18,
    name: "Mū",
    category: "Oro",
    price: "45",
    count: "13",
    detail:
      "Mū (ムウ, Mū) fue el Santo de Aries durante el siglo XX en el manga y anime Saint Seiya. Es el heredero en el arte en la restauración de las Cloths, aparece como el herrero de la torre en la región montañosa de Jamir quien repara y revive las Cloths de Bronce de Pegaso y Dragón en la guerra contra los Santos Negros, y nuevamente los cuatro Cloths en la Batalla de las Doce Casas. Como siempre desconfiaba del Papa, dio su espalda al Santuario. Sin embargo deseando purificar el lugar, mantiene sus obligaciones como Santo de Oro.",
    img: "mu.jpg",
  },
  {
    id: 19,
    name: "Aldebaran",
    category: "Oro",
    price: "60",
    count: "15",
    detail:
      "Aldebaran (アルデバラン, Arudebaran) fue el Gold Saint de Taurus hasta su muerte a manos de Niobe de Deep. Después fue revivido por el cosmos de Athena, y se sacrificó con los demás Gold Saints en el Muro de los Lamentos.",
    img: "aldebaran.jpg",
  },
  {
    id: 20,
    name: "Saga",
    category: "Oro",
    price: "88",
    count: "32",
    detail:
      "Saga (サガ, Saga) fue el Gold Saint de Géminis y principal antagonista desde la Saga de los Santos Negros hasta la Batalla de los doce templos, justamente por ser el usurpador del Papa del Santuario, con el fin de dominar el mundo y acabar con Saori y sus Santos al manipular al Ejército de Athena. Saga es considerado el santo de oro más poderoso de su generación. Además, antes de corromperse, Saga era considerado como un dios, por ser un Santo justo y bondadoso con todos los cercanos al Santuario, siendo admirado y respetado por propios y extraños, sin embargo sus proezas solo han sido vistas frente a santos de bronce que fueron capaces de superar o igualar a otros Santos de Oro. (manga clásico)",
    img: "saga.jpg",
  },
  {
    id: 21,
    name: "Deathmask",
    category: "Oro",
    price: "12",
    count: "47",
    detail:
      "Deathmask (デスマスク, Desumasuku), comúnmente llamado Máscara de la Muerte o Máscara Mortal en los doblajes para países de habla hispana, fue el Saint de Cáncer que protegía el Templo del Gran Cangrejo.",
    img: "deathmask.jpg",
  },
  {
    id: 22,
    name: "Aiolia",
    category: "Oro",
    price: "78",
    count: "34",
    detail:
      'Aiolia (アイオリア, Aioria) fue el Santo de Oro de Leo en la generación del Siglo XX hasta la Guerra contra Hades en 1990. Aiolia es un personaje del manga y anime Saint Seiya conocido como Los Caballeros del Zodiaco y protagonista de los Spin-offs Episode.G y Soul of Gold. Es el hermano menor de Aiolos, a pesar de su personalidad algo explosiva, tiene un corazón puro que identifica rápidamente la justicia, es por eso que fue uno de los primeros santos en reconocer la autoridad de Athena. Como su hermano Aiolos fue tachado como traidor, Aiolia sentía una obligación de limpiar el nombre de la familia jurando fidelidad al Papa e incluso participando voluntariamente en el exterminio de los Bronze Saints "rebeldes".',
    img: "aiolia.png",
  },
  {
    id: 23,
    name: "Shaka",
    category: "Oro",
    price: "24",
    count: "21",
    detail:
      "Shaka (シャカ, Shaka) es el Santo de Oro de Virgo en la obra Saint Seiya y protege la Casa de la Virgen en el Santuario. Es considerado por sus aliados como la reencarnación de Buda, pero realmente Buda es su mentor. Posee un poder de observación que le permite conocer la verdad escondida entre las apariencias.",
    img: "shaka.jpg",
  },
  {
    id: 24,
    name: "Dohko",
    category: "Oro",
    price: "98",
    count: "27",
    detail:
      "Dohko (童虎, Dōko), también conocido como el Viejo Maestro (老師, Rōshi) fue junto a Shion un Bronze Saint [16] de constelación desconocida durante el siglo XVIII que posteriormente seria promovido a Santo de Libra[16], cargo que ostentaría también hasta 1990 (siglo XX). Dohko fue el primer Gold Saint (en el anime) en ser presentado al comienzo de la historia a pesar de que su verdadero rango no se daría a conocer sino hasta mucho tiempo después.",
    img: "dohko.png",
  },
  {
    id: 25,
    name: "Milo",
    category: "Oro",
    price: "45",
    count: "26",
    detail:
      "Milo (ミロ, Miro) fue el Santo de Oro de Scorpius del siglo XX en el anime y manga Saint Seiya. Es el Santo de Oro que protege la Casa de Escorpio. Aprecia mucho la amistad, y por eso vela por Hyōga, después de la muerte de Camus de Aquarius. Se siente orgulloso de ser un Gold Saint y se vuelve implacable frente a los enemigos.",
    img: "milo.png",
  },
  {
    id: 26,
    name: "Aiolos",
    category: "Oro",
    price: "37",
    count: "13",
    detail:
      "Aiolos (アイオロス, Aiorosu) fue el Santo de Sagittarius, fiel protector de la Diosa Athena, a la que sigue con todo su corazón, para defender la paz sobre la Tierra y quien se ponía en primera línea arriesgando su vida en combate. Cuando Aiolos comabte para proteger a alguien se vuelve invencible. Incluso después de su muerte, su Cosmos seguiría existiendo en la Tierra. Fue candidato a sucesor de Papa, hasta su heroica muerte debido tras eludir al corrompido Saga de Gemini y sus posteriores y sangrientos enfrentamientos con Shura de Capricorn, Deathmask de Cancer y Aphrodite de Pisces.",
    img: "aiolos.png",
  },
  {
    id: 27,
    name: "Shura",
    category: "Oro",
    price: "82",
    count: "125",
    detail:
      "Shura (シュラ, Shura) es el Gold Saint de Capricorn, quien causó las heridas mortales a Aiolos de Sagittarius. Tras su muerte, depositó su alma en Shiryū.",
    img: "shura.jpg",
  },
  {
    id: 28,
    name: "Camus",
    category: "Oro",
    price: "17",
    count: "13",
    detail:
      'Camus (カミュ, Kamyu) fue el Gold Saint de Aquarius, conocido como el "Mago del agua y el hielo", y participando desde muy joven dentro del Ejército de Athena. Este rol lo cumplió a cabalidad hasta su muerte a manos de Hyōga de Cygnus, en una batalla entre maestro y alumno. Luego fue revivido por Hades siendo muerto en el Castillo Heinstein junto a sus compañeros Saga de Gemini y Shura de Capricorn, al expirar sus doce horas de vida, y luego apareció brevemente su espíritu animado por Athena alcanzando así el octavo sentido y muriendo en el Muro de los Lamentos al lado de los demás Gold Saints.',
    img: "camus.png",
  },
  {
    id: 29,
    name: "Aphrodite",
    category: "Oro",
    price: "49",
    count: "14",
    detail:
      "Aphrodite (アフロディーテ, Afurodīte) fue el Gold Saint de Pisces hasta su muerte a manos de Shun de Andromeda. Posteriormente fue revivido por Ker siendo muerto junto a Deathmask de Cancer a manos de Rhadamanthys. Su Cosmos reanimado por Athena haría que apareciese nuevamente ante el Muro de los Lamentos y reviviría temporalmente una vez más por Odín como Einherjer para derrotar al falso dios Loki en Saint Seiya: Soul of Gold.",
    img: "aphrodite.png",
  },
];

export function getAllCharacters() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(characters), 2000);
  });
}

export function getCharacter(id) {
  return new Promise((resolve) => {
    let retCharacter = characters.find((element) => {
      return element.id === Number(id);
    });

    setTimeout(() => resolve(retCharacter), 2000);
  });
}

export function getCharactersByCategory(category) {
  return new Promise((resolve) => {
    let retCategory = characters.filter((element) => {
      return element.category === category;
    });

    setTimeout(() => resolve(retCategory), 2000);
  });
}
