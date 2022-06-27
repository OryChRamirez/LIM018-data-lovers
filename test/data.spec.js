import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {orderAZ, orderZA, orderReciente, orderAntigua, newArrayPeople, peopleforMovie, SearchDirector, relatedDirector, filterByGender, filterBySpecie, locations, vehicles} from '../src/data.js';

const pruebas=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986",
    "title": "Castle in the Sky"},
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004",
    "title": "Howl's Moving Castle"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001",
    "title": "Spirited Away"},
  {
    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995",
    "title": "Whisper of the Heart"},

  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988",
    "title": "My Neighbor Totoro"},
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989",
    "title": "Kiki's Delivery Service"}];

const ordAZ=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986","title": "Castle in the Sky"},
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004","title": "Howl's Moving Castle"},
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989","title": "Kiki's Delivery Service"},
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988","title": "My Neighbor Totoro"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001","title": "Spirited Away"},
  {
    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995","title": "Whisper of the Heart"}];

const ordZA=[
  {
    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995","title": "Whisper of the Heart"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001","title": "Spirited Away"},
  {
   "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988","title": "My Neighbor Totoro"},
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989","title": "Kiki's Delivery Service"},
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004","title": "Howl's Moving Castle"},
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986","title": "Castle in the Sky"}];

const ordRec=[
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004","title": "Howl's Moving Castle"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001","title": "Spirited Away"},
    {
      "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995","title": "Whisper of the Heart"},  
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989","title": "Kiki's Delivery Service"},
  {
   "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988","title": "My Neighbor Totoro"},
   {
     "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986","title": "Castle in the Sky"}];

const ordAnt=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986","title": "Castle in the Sky"},
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988","title": "My Neighbor Totoro"},
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989","title": "Kiki's Delivery Service"},
    {
      "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995","title": "Whisper of the Heart"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001","title": "Spirited Away"},
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004","title": "Howl's Moving Castle"}];

describe('orderAZ()', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('returns `ordAZ`', () => {
    expect(orderAZ(pruebas)).toEqual(ordAZ);
  });
});

describe('orderReciente()', () => {
  it('is a function', () => {
    expect(typeof orderReciente).toBe('function');
  });

  it('returns `ordRec`', () => {
    expect(orderReciente(pruebas)).toEqual(ordRec);
  });
});

describe('orderZA()', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });

  it('returns `ordZA`', () => {
    expect(orderZA(pruebas)).toEqual(ordZA);
  });
});

describe('orderAntigua()', () => {
  it('is a function', () => {
    expect(typeof orderAntigua).toBe('function');
  });

  it('returns `ordAnt`', () => {
    expect(orderAntigua(pruebas)).toEqual(ordAnt);
  });
});

const pruebaPeople=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "unknow"}
      ]},
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe2",
    "title": "Castle in the Sky",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "unknow"}
      ]}];

const resultPeople=[
  {
    "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
    "name": "Pazu",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
    "gender": "Male",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Brown",
    "specie": "Human"
  },{
    "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
    "name": "Lusheeta Toel Ul Laputa",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
    "gender": "Female",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Black",
    "specie": "unknow"},
  {
      "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
    }, {
      "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "name": "Lusheeta Toel Ul Laputa",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
      "gender": "Female",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Black",
      "specie": "unknow"}
  ];

describe('newArrayPeople()', () => {
  it('is a function', () => {
    expect(typeof newArrayPeople).toBe('function');
  });

  it('returns `resultPeople`', () => {
    expect(newArrayPeople(pruebaPeople)).toEqual(resultPeople);
  });
});

const resultPeopleFilms2=[{
  "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
  "name": "Pazu",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
  "gender": "Male",
  "age": "13",
  "eye_color": "Black",
  "hair_color": "Brown",
  "specie": "Human"
},{
  "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
  "name": "Lusheeta Toel Ul Laputa",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
  "gender": "Female",
  "age": "13",
  "eye_color": "Black",
  "hair_color": "Black",
  "specie": "unknow"}];

describe('peopleforMovie()', () => {
  it('is a function', () => {
    expect(typeof peopleforMovie).toBe('function');
  });

  it('returns `resultPeopleFilms`', () => {
    expect(peopleforMovie(pruebaPeople,"2baf70d1-42bb-4437-b551-e5fed5a87abe2")).toEqual(resultPeopleFilms2);
})});

const directores =[
  {
    "id":"dir1",
    "name": "Hayao Miyazaki",
    "description": "Es uno de los fundadores de Studio Ghibli, junto con Isao Takahada. Dentro de sus ocupaciones encontramos director de cine de animación, animador, ilustrador, mangaka y productor de anime japonés de renombre. <br> Dentro de sus filmes de animación más populares podemos encontrar El viaje de Chihiro, Mi Vecino Totoro,  La princesa Mononoke y otros más.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Hayao_Miyazaki.jpg"
  },
  {
    "id":"dir2",
    "name": "Isao Takahata",
    "description": "Fue un director, escritor, productor y guionista japones. Fue, junto a Hayao Miyazaki fundador de Studio Ghibli. El cuento de la princesa Kaguya (2013), fue su última película, y la misma estuvo nominada en la categoría de mejor película de animación en los 87.º Premios Óscar.",
    "img": "http://pm1.narvii.com/6365/aad8c69e3a811ccabf0439a2a2a0fae70ebaebac_00.jpg"
  }];
const resultdirec=[{
  "id":"dir1",
  "name": "Hayao Miyazaki",
  "description": "Es uno de los fundadores de Studio Ghibli, junto con Isao Takahada. Dentro de sus ocupaciones encontramos director de cine de animación, animador, ilustrador, mangaka y productor de anime japonés de renombre. <br> Dentro de sus filmes de animación más populares podemos encontrar El viaje de Chihiro, Mi Vecino Totoro,  La princesa Mononoke y otros más.",
  "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Hayao_Miyazaki.jpg"
}
];

describe('searchDirectores()',()=>{
  it('is a function',()=>{
    expect(typeof SearchDirector).toBe('function');
  });
  it('returns `resultdirec`',()=>{
    expect(SearchDirector(directores,"Hayao Miyazaki")).toEqual(resultdirec);
  })
});

const filmsDirector=[
{
  "id": "90b72513-afd4-4570-84de-a56c312fdf81",
  "title": "The Cat Returns",
  "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
  "director": "Hiroyuki Morita",
  "producer": "Toshio Suzuki",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
  "release_date": "2002",
  "rt_score": "89",
  "people": [
    {
      "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
      "name": "Renaldo Moon aka Moon aka Muta",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Muta.png",
      "gender": "Male",
      "age": "NA",
      "eye_color": "White",
      "hair_color": "Beige",
      "specie": "Cat"
    },
    {
      "id": "3042818d-a8bb-4cba-8180-c19249822d57",
      "name": "Cat King",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/The_Cat_King.jpg",
      "gender": "Male",
      "age": "87",
      "eye_color": "Emerald",
      "hair_color": "Grey",
      "specie": "Cat"
    },
    {
      "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
      "name": "Yuki",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG",
      "gender": "Female",
      "age": "NA",
      "eye_color": "Blue",
      "hair_color": "White",
      "specie": "Cat"
    },
    {
      "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
      "name": "Haru Yoshioka",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg",
      "gender": "Female",
      "age": "17",
      "eye_color": "Brown",
      "hair_color": "Brown",
      "specie": "Human"
    },
    {
      "id": "466bc926-2024-4653-ac63-fe52f2dc8c7b",
      "name": "Natori",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg",
      "gender": "Male",
      "age": "NA",
      "eye_color": "Blue",
      "hair_color": "Grey",
      "specie": "Cat"
    },
    {
      "id": "269dcd81-8037-45bb-892b-1c86c9696222",
      "name": "Toto",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8d/Toto.png",
      "gender": "Male",
      "age": "NA",
      "eye_color": "Black",
      "hair_color": "Dark Blue",
      "specie": "Bird"
    },
    {
      "id": "5b2a28f6-91d4-4382-aedc-b27094e763b0",
      "name": "Prince Lune",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/90/Prince_Lune.jpg",
      "gender": "Male",
      "age": "Adult",
      "eye_color": "Dark brown",
      "hair_color": "Russian blue",
      "specie": "Cat"
    },
    {
      "id": "17aca709-3049-48fc-95a6-e802c01125a2",
      "name": "Hiromi",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Hiromi.png",
      "gender": "Female",
      "age": "17",
      "eye_color": "Brown",
      "hair_color": "Light brown",
      "specie": "Human"
    },
    {
      "id": "911d38e2-ada4-4481-89a2-ba414422d4e4",
      "name": "Naoko Yoshioka",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Naoko_Yoshioka.jpg",
      "gender": "Female",
      "age": "Adult",
      "eye_color": "Light Brown",
      "hair_color": "Light brown",
      "specie": "Human"
    }
  ],
  "locations": [
    {
      "id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576",
      "name": "The Cat Kingdom",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Baron022.jpg",
      "climate": "Continental",
      "terrain": "Plain",
      "surface_water": "30",
      "residents": [
        {
          "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
          "name": "Renaldo Moon aka Moon aka Muta"
        },
        {
          "id": "3042818d-a8bb-4cba-8180-c19249822d57",
          "name": "Cat King"
        },
        {
          "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
          "name": "Yuki"
        },
        {
          "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
          "name": "Haru"
        }
      ]
    }
  ],
  "vehicles": []
},
{
  "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
  "title": "Howl's Moving Castle",
  "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
  "director": "Hayao Miyazaki",
  "producer": "Toshio Suzuki",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
  "release_date": "2004",
  "rt_score": "87",
  "people": [
    {
      "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
      "name": "Howl Jenkins Pendragon",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
      "gender": "Male",
      "age": "27",
      "eye_color": "Bright blue",
      "hair_color": "Bright blue",
      "specie": "Wizard"
    },
    {
      "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
      "name": "Sophie Hatter",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
      "gender": "Female",
      "age": "18",
      "eye_color": "Brown",
      "hair_color": "White",
      "specie": "Human"
    },
    {
      "id": "1287b275-6c32-4113-947f-519316d4a6be",
      "name": "Witch of the Waste",
      "img": "https://i.pinimg.com/736x/ad/d0/21/add0215f72901bb0981417f73ca568e8--plus-size-cosplay-wicked-witch.jpg",
      "gender": "Female",
      "age": "59",
      "eye_color": "Brown",
      "hair_color": "White",
      "specie": "Witch/Human"
    },
    {
      "id": "b73f58ab-454a-42d6-9812-63e8f235a388",
      "name": "Calcifer",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2a/Calcifer.png",
      "gender": "Male",
      "age": "NA",
      "eye_color": "Dark Brown",
      "hair_color": "Orange-yellow",
      "specie": "Demon"
    },
    {
      "id": "d03ca1e2-16ab-45d1-9b81-c2b0f7b35de1",
      "name": "Markl",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Markl.jpg",
      "gender": "Male",
      "age": "10",
      "eye_color": "Dark Brown",
      "hair_color": "Brown",
      "specie": "Human"
    },
    {
      "id": "45237428-93bf-4dd6-97ce-f10647300429",
      "name": "Prince Justin or Turnip Head",
      "img": "https://i.pinimg.com/736x/b7/49/e7/b749e7f75bda8804009de0b00e82a1b9.jpg",
      "gender": "Male",
      "age": "20-30",
      "eye_color": "Grey",
      "hair_color": "Blonde",
      "specie": "Human/Scarecrow"
    },
    {
      "id": "8f66024e-c84f-445a-9ab5-0b31a6ae354d",
      "name": "Madame Suliman",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Madame_Suliman.png",
      "gender": "Female",
      "age": "50",
      "eye_color": "Grey",
      "hair_color": "White",
      "specie": "Human"
    },
    {
      "id": "ccc705e4-aa2a-4929-b0dc-4b8a09fd290d",
      "name": "Heen",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Heen.png",
      "gender": "Male",
      "age": "NA",
      "eye_color": "Brown",
      "hair_color": "Beige-white",
      "specie": "Dog"
    },
    {
      "id": "3148150f-6ccb-4383-8af5-0c40f03c825e",
      "name": "Lettie Hatter",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Lettie_Hatter.png",
      "gender": "Female",
      "age": "16",
      "eye_color": "Blue",
      "hair_color": "Blonde",
      "specie": "Human"
    },
    {
      "id": "06610030-0560-47ac-bc18-be80d85c4dad",
      "name": "Fanny Hatter/Honey",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Honey.png",
      "gender": "Female",
      "age": "Adult",
      "eye_color": "Grey",
      "hair_color": "Blonde",
      "specie": "Human"
    }
  ],
  "locations": [
    {
      "id": "b6bac992-a858-4d57-8477-9652d73caaa1",
      "name": "Ingary",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Ingary.png",
      "climate": "Mild",
      "terrain": "Hill",
      "surface_water": "30",
      "residents": [
        "TODO"
      ]
    }
  ],
  "vehicles": [
    {
      "id": "2354305f-dccd-4c44-a79e-cc60ba7376e6",
      "name": "Howl's castle",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e6/Howls_Castle.jpg",
      "description": "Wizard Howl's home. It's scale changes from scene to scene.",
      "vehicle_class": "Moving castle",
      "length": "unknown",
      "pilot": {
        "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
        "name": "Howl Jenkins Pendragon"
      }
    }
  ]
}
];
  
const resultfilmsDirector=[
  {
    "id": "90b72513-afd4-4570-84de-a56c312fdf81",
    "title": "The Cat Returns",
    "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
    "director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
    "release_date": "2002",
    "rt_score": "89",
    "people": [
      {
        "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
        "name": "Renaldo Moon aka Moon aka Muta",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Muta.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "White",
        "hair_color": "Beige",
        "specie": "Cat"
      },
      {
        "id": "3042818d-a8bb-4cba-8180-c19249822d57",
        "name": "Cat King",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/The_Cat_King.jpg",
        "gender": "Male",
        "age": "87",
        "eye_color": "Emerald",
        "hair_color": "Grey",
        "specie": "Cat"
      },
      {
        "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
        "name": "Yuki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG",
        "gender": "Female",
        "age": "NA",
        "eye_color": "Blue",
        "hair_color": "White",
        "specie": "Cat"
      },
      {
        "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
        "name": "Haru Yoshioka",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg",
        "gender": "Female",
        "age": "17",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "466bc926-2024-4653-ac63-fe52f2dc8c7b",
        "name": "Natori",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Blue",
        "hair_color": "Grey",
        "specie": "Cat"
      },
      {
        "id": "269dcd81-8037-45bb-892b-1c86c9696222",
        "name": "Toto",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8d/Toto.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Black",
        "hair_color": "Dark Blue",
        "specie": "Bird"
      },
      {
        "id": "5b2a28f6-91d4-4382-aedc-b27094e763b0",
        "name": "Prince Lune",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/90/Prince_Lune.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Dark brown",
        "hair_color": "Russian blue",
        "specie": "Cat"
      },
      {
        "id": "17aca709-3049-48fc-95a6-e802c01125a2",
        "name": "Hiromi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Hiromi.png",
        "gender": "Female",
        "age": "17",
        "eye_color": "Brown",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "911d38e2-ada4-4481-89a2-ba414422d4e4",
        "name": "Naoko Yoshioka",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Naoko_Yoshioka.jpg",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Light Brown",
        "hair_color": "Light brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576",
        "name": "The Cat Kingdom",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Baron022.jpg",
        "climate": "Continental",
        "terrain": "Plain",
        "surface_water": "30",
        "residents": [
          {
            "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
            "name": "Renaldo Moon aka Moon aka Muta"
          },
          {
            "id": "3042818d-a8bb-4cba-8180-c19249822d57",
            "name": "Cat King"
          },
          {
            "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
            "name": "Yuki"
          },
          {
            "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
            "name": "Haru"
          }
        ]
      }
    ],
    "vehicles": []
  }
];

describe('relatedDirector()',()=>{
  it('is a function',()=>{
    expect(typeof relatedDirector).toBe('function');
  });
  it('returns `resultFilmsDirector`',()=>{
    expect(relatedDirector(filmsDirector,"Hiroyuki Morita")).toEqual(resultfilmsDirector);
  });
});

const peopleforfilters=[{
  "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
  "name": "Pazu",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
  "gender": "Male",
  "age": "13",
  "eye_color": "Black",
  "hair_color": "Brown",
  "specie": "Human"
},{
  "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
  "name": "Lusheeta Toel Ul Laputa",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
  "gender": "Female",
  "age": "13",
  "eye_color": "Black",
  "hair_color": "Black",
  "specie": "unknow"}];
const peopleGender=[{
  "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
  "name": "Pazu",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
  "gender": "Male",
  "age": "13",
  "eye_color": "Black",
  "hair_color": "Brown",
  "specie": "Human"
}];
describe('filterByGender()', () =>{
  it('is a function',()=>{
    expect(typeof filterByGender).toBe('function');
  });
  it('returns a object with gender',()=>{
    expect(filterByGender(peopleforfilters,"Male")).toEqual(peopleGender);
  });
});

describe('filterBySpecie()', () =>{
  it('is a function',()=>{
    expect(typeof filterBySpecie).toBe('function');
  });
  it('returns a object with specie',()=>{
    expect(filterBySpecie(peopleforfilters,"Human")).toEqual(peopleGender);
  });
});

const filmslocations=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "name": "Dola",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
        "gender": "Female",
        "age": "60",
        "eye_color": "Black",
        "hair_color": "Peach",
        "specie": "Human"
      },
      {
        "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
        "name": "Romska Palo Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
        "gender": "Male",
        "age": "33",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "e08880d0-6938-44f3-b179-81947e7873fc",
        "name": "Uncle Pom",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
        "gender": "Male",
        "age": "Unspecified/Elderly",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
        "name": "General Muoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Black",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
        "name": "Duffi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
        "name": "Louis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
        "gender": "Male",
        "age": "30",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
        "name": "Charles",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
        "name": "Henri",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Reddish brown",
        "specie": "Human"
      },
      {
        "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
        "name": "Motro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
        "name": "Okami",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
        "gender": "Female",
        "age": "50",
        "eye_color": "Dark brown",
        "hair_color": "Orange",
        "specie": "Human"
      },
      {
        "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
        "name": "Colonel Muska",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
        "gender": "Male",
        "age": "33",
        "eye_color": "Grey",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
        "name": "Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
        "climate": "Continental",
        "terrain": "City",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
        "name": "Tedis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
        "name": "Air Destroyer Goliath",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
        "description": "A military airship utilized by the government to access Laputa",
        "vehicle_class": "Airship",
        "length": "1,000",
        "pilot": {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska"
        }
      }
    ]
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
    "people": [
      {
        "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
        "name": "Satsuki Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
        "gender": "Female",
        "age": "11",
        "eye_color": "Dark Brown/Black",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
        "name": "Mei Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
        "gender": "Female",
        "age": "4",
        "eye_color": "Brown",
        "hair_color": "Light Brown",
        "specie": "Human"
      },
      {
        "id": "3031caa8-eb1a-41c6-ab93-dd091b541e11",
        "name": "Tatsuo Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d6/Tatsuo_Kusakabe.jpg",
        "gender": "Male",
        "age": "37",
        "eye_color": "Brown",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "87b68b97-3774-495b-bf80-495a5f3e672d",
        "name": "Yasuko Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
        "gender": "Female",
        "age": "36",
        "eye_color": "Brown",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "08ffbce4-7f94-476a-95bc-76d3c3969c19",
        "name": "Granny",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
        "gender": "Female",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      },
      {
        "id": "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
        "name": "Kanta Ogaki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg",
        "gender": "Male",
        "age": "11",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "d39deecb-2bd0-4770-8b45-485f26e1381f",
        "name": "Totoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png",
        "gender": "Male",
        "age": "1300",
        "eye_color": "Grey",
        "hair_color": "Grey",
        "specie": "Totoro"
      },
      {
        "id": "591524bc-04fe-4e60-8d61-2425e42ffb2a",
        "name": "Chu Totoro",
        "img": "https://www.ghibli.jp/gallery/thumb-totoro019.png",
        "gender": "NA",
        "age": "",
        "eye_color": "Black",
        "hair_color": "Blue",
        "specie": "Totoro"
      },
      {
        "id": "c491755a-407d-4d6e-b58a-240ec78b5061",
        "name": "Chibi Totoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Little_Totoro_spirit_moving.gif",
        "gender": "NA",
        "age": "",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Totoro"
      },
      {
        "id": "f467e18e-3694-409f-bdb3-be891ade1106",
        "name": "Catbus",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Yellow",
        "hair_color": "Brown",
        "specie": "Cat"
      }
    ],
    "locations": [
      {
        "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
        "name": "Kusakabe's House",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
        "climate": "Mild",
        "terrain": "River",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
        "name": "Matsugo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
        "climate": "Continental",
        "terrain": "River",
        "surface_water": "60",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  }];

const resultlocations=[
  {
  "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
  "name": "Laputa",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
  "climate": "Continental",
  "terrain": "City",
  "surface_water": "40",
  "residents": [
    "TODO"
  ]
},
{
  "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
  "name": "Tedis",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
  "climate": "Continental",
  "terrain": "Hill",
  "surface_water": "30",
  "residents": [
    "TODO"
  ]
},
{
  "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
  "name": "Kusakabe's House",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
  "climate": "Mild",
  "terrain": "River",
  "surface_water": "40",
  "residents": [
    "TODO"
  ]
},
{
  "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
  "name": "Matsugo",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
  "climate": "Continental",
  "terrain": "River",
  "surface_water": "60",
  "residents": [
    "TODO"
  ]
}];

describe('locations()', () =>{
  it('is a function',()=>{
    expect(typeof locations).toBe('function');
  });
  it('returns a object locations',()=>{
    expect(locations(filmslocations)).toEqual(resultlocations);
  });
});

const resultVehicles =[{
    "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
    "name": "Air Destroyer Goliath",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
    "description": "A military airship utilized by the government to access Laputa",
    "vehicle_class": "Airship",
    "length": "1,000",
    "pilot": {
      "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
      "name": "Colonel Muska"
    }
  }
];

describe('vehicles()', () =>{
  it('is a function',()=>{
    expect(typeof vehicles).toBe('function');
  });
  it('returns a object vehicles',()=>{
    expect(vehicles(filmslocations)).toEqual(resultVehicles);
  });
});