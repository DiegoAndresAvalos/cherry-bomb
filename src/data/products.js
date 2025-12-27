const products = {
  chicas: {
    jeans: [
      { id: 1, name: "Jean licrado bordado armador", price: 37, size: "32", image: "/Jean-licrado-1.jpg", inStock: true },
      { id: 2, name: "Jean licrado bordado armador", price: 38, size: "34", image: "/Jean-licrado-2.jpg", inStock: true },
      { id: 3, name: "Jean con rasgas bordadas", price: 35, size: "32", image: "/Jeans-con-rasgas-bordadas.jpg", inStock: true },
      { id: 4, name: "Jean con ruedo de perlas", price: 36, size: "30", image: "/Jean-con-ruedo-de-perlas.jpg", inStock: true },
      { id: 5, name: "Jean licrado diseño esfumado", price: 34, size: "30", image: "/Jean-licrado-con-diseño-esfumado-negro.jpg", inStock: true },
      { id: 6, name: "Jean licrado negro bordado", price: 35, size: "M", image: "/Jean-licrado-negro-bordado.jpg", inStock: true },
      { id: 7, name: "Jean negro licrado", price: 33, size: "M", image: "/Jeans-negro-licrado-1.jpg", inStock: true },
      { id: 8, name: "Jean negro licrado", price: 30, size: "32", image: "/Jean-negro-licrado-2.jpg", inStock: true },
      { id: 9, name: "Jean negro licrado", price: 35, size: "30", image: "/Jean-negro-licrado-3.jpg", inStock: true }
    ],

    faldasYShorts: [
      { id: 10, name: "Falda overol", price: 30, size: "M", image: "/Faldaoverol.jpg", inStock: true },
      { id: 11, name: "Faldita azulada", price: 31, size: "32", image: "/Faldita-azulada-completa.jpg", inStock: true },
      { id: 12, name: "Short azulado", price: 32, size: "32", image: "/Short-azulado.jpg", inStock: true }
    ],

    pantalones: [
      { id: 13, name: "Buzo palazo con bolsillos", price: 29, size: "L", image: "/Buzo-estilo-palazo-con-bolsillos-a-los-costados.jpg", inStock: true },
      { id: 14, name: "Pantalón con cachaco", price: 29, size: "34", image: "/Pantalón-diseño-con-cachaco-pegado.jpg", inStock: true }
    ],

    blusas: [
      { id: 15, name: "Top blanco con cadenita", price: 24, size: "S", image: "/Top-blanco-con-tiras-de-cadenita-dorada.jpg", inStock: true },
      { id: 16, name: "Blusita amarilla bolero", price: 33, size: "M", image: "/Blusita-amarilla-con-manguita-bolero.jpg", inStock: true },
      { id: 17, name: "Blusita manga larga verde", price: 32, size: "M", image: "/Blusita-manga-larga-verde-de-material-algodón.jpg", inStock: true },
      { id: 18, name: "Blusita roja licrada", price: 30, size: "Estándar", image: "/Blusita-roja-licrada-con-diseño-de-pelusilla.jpg", inStock: true },
      { id: 19, name: "Blusita con diseño algodón", price: 27, size: "M", image: "/Blusita-con-diseño-material-algodón.jpg", inStock: true },
      { id: 20, name: "Blusita abierta manga larga", price: 23, size: "S", image: "/Blusita-con-diseño-abierto-en-la-parte-delantera-con-manga-larga.jpg", inStock: true },
      { id: 21, name: "Malla negra manga larga", price: 28, size: "S", image: "/Malla-superior-negra-completa-y-manga-larga.jpg", inStock: true },
      { id: 22, name: "Blusita corta con diseño", price: 20, size: "M", image: "/Blusita-corta-con-diseño.jpg", inStock: true },
      { id: 23, name: "Blusita floreada bolero", price: 30, size: "M", image: "/Blusita-con-diseño-floreado.jpg", inStock: true }
    ],

    casacasYPoleras: [
      { id: 24, name: "Polera lila con diseño", price: 33, size: "L", image: "/Polera-color-lila-y-con-diseño.jpg", inStock: true },
      { id: 25, name: "Polera amarilla con diseño", price: 30, size: "M", image: "/Polera-amarilla-con-diseño.jpg", inStock: true }
    ]
  },

  niñas: {
    polerasYCasacas: [
      { id: 26, name: "Casaca roja", price: 43, size: "S", image: "/Casaca-roja.jpg", inStock: true },
      { id: 27, name: "Chompita blanca algodón", price: 32, size: "S / M", image: "/Chompita-blanca-de-material-algodón-en-color.jpg", inStock: true },
      { id: 28, name: "Polera palo rosa", price: 35, size: "S", image: "/Polera-palorosa-con-diseño.jpg", inStock: true }
    ],

    jeans: [
      { id: 29, name: "Jean bordado flores", price: 35, size: "26", image: "/Jean-bordado-de-flores.jpg", inStock: true },
      { id: 30, name: "Jean con faja bordado", price: 38, size: "28", image: "/Jean-con-faja-en-la-parte-superior.jpg", inStock: true },
      { id: 31, name: "Jean floreado niña", price: 32, size: "14", image: "/Jean-con-bordes-floreado-para-niñas.jpg", inStock: false },
      { id: 32, name: "Jean con perlitas", price: 29, size: "16", image: "/Jean-con-diseño-de-perlitas-para-niñas.jpg", inStock: true },
      { id: 33, name: "Jean bordado pegado", price: 33, size: "28", image: "/Jean-bordado-y-pegado.jpg", inStock: true },
      { id: 34, name: "Jean niña clásico", price: 33, size: "16", image: "/Jean-para-niñas.jpg", inStock: true },
      { id: 35, name: "Jean azul efecto pintura", price: 36, size: "28", image: "/Jean-azul-con-diseño-efecto-pintura-y-es-rasgado.jpg", inStock: true },
      { id: 36, name: "Jean perlitas niña", price: 37, size: "16", image: "/Jean-bordado-y-con-perlitas-para-niñas.jpg", inStock: true },
      { id: 37, name: "Jean moñito bordado", price: 34, size: "26", image: "/Jean-con-diseño-de-moñito-en-la-parte-inferior-bordadito.jpg", inStock: true }
    ],

    conjuntos: [
      { id: 38, name: "Conjunto palo rosa", price: 70, size: "30", image: "/Conjunto-palo-rosa-para-niñas.jpg", inStock: true }
    ]
  },

  deportiva: {
    blusas: [
      { id: 39, name: "Blusa Adidas deportiva", price: 34, size: "L", image: "/Blusa-Adidas-deportiva.jpg", inStock: true },
      { id: 40, name: "Blusita Adidas negra", price: 34, size: "L", image: "/Blusita-deportiva-Adidas-negra.jpg", inStock: true },
      { id: 41, name: "Blusita Adidas", price: 34, size: "L", image: "/Blusita-deportiva-Adidas.jpg", inStock: true },
      { id: 42, name: "Malla deportiva palo rosa", price: 20, size: "M", image: "/Malla-deportiva-palorosa-manga-corta.jpg", inStock: true }
    ],

    pantalonesYPantalonetas: [
      { id: 43, name: "Pantalón Adidas", price: 33, size: "L", image: "/Pantalón-Adidas.jpg", inStock: true },
      { id: 44, name: "Leggins Danzclub Basic", price: 48, size: "M", image: "/DANZCLUB-LEGGINS-BASIC-NAUTICO.jpg", inStock: true },
      { id: 45, name: "Leggins Danzclub Evolution", price: 48, size: "M", image: "/DANZCLUB-LEGGINS-EVOLUTION-SCARLET.jpg", inStock: true },
      { id: 46, name: "Pantaloneta fucsia", price: 32, size: "L", image: "/Pantaloneta-fucsia-con-diseño.jpg", inStock: true }
    ]
  },

  novedades: {
    peluches: [
      { id: 47, name: "Peluchita rosita", price: 12, image: "/Peluchita-rosita-bebé.jpg", inStock: false },
      { id: 48, name: "Peluchito amarillo mediano", price: 13.50, image: "/Peluchito-mediano-amarillito.jpg", inStock: true },
      { id: 49, name: "Peluchita rosita bebé", price: 12, image: "/Peluchita-rosita-bebé-2.jpg", inStock: true },
      { id: 51, name: "Muñequita naranja con mochila", price: 15, image: "/Muñequita-naranjita-con-mochilita.jpg", inStock: true },
      { id: 52, name: "Muñequita naranja", price: 12, image: "/Muñequita-naranjita.jpg", inStock: true },
      { id: 53, name: "La Monchi naranja", price: 13, image: "/La-Monchi-naranja.jpg", inStock: true }
    ],

    llaveros: [
      { id: 54, name: "Llavero Hello Kitty rosita", price: 7, image: "/Llavero-Hello-Kitty-rosita.jpg", inStock: true },
      { id: 55, name: "Llavero Hello Kitty rojita", price: 7, image: "/Llavero-Hello-Kitty-rojita.jpg", inStock: true },
      { id: 56, name: "Llavero Snoopy rosita", price: 7, image: "/Llavero-Snoopy-rosita.jpg", inStock: true },
      { id: 57, name: "Llavero Hello Kitty turquesa", price: 7, image: "/Llavero-Hello-Kitty-turquesa.jpg", inStock: true }
    ]
  },

  maquillaje: [
    { id: 58, name: "Polvo suelto translúcido", price: 11, image: "/Polvo-suelto-translúcido.jpg", inStock: true },
    { id: 60, name: "Labial tipo gloss", price: 5, image: "/Labial-tipo-gloss.jpg", inStock: true },
    { id: 61, name: "Labial matte en barra", price: 9.5, image: "/Labial-con-acabado-matte-en-barra.jpg", inStock: true },
    { id: 62, name: "Lip gloss shiny", price: 8, image: "/Lip-gloss-shiny.jpg", inStock: true },
    { id: 63, name: "Lip Oil gloss invierno", price: 8.5, image: "/Lip-Oil-gloss-beso-invierno.jpg", inStock: true },
    { id: 64, name: "Rubor en barra", price: 10, image: "/Rubor-en-barra.jpg", inStock: true },
    { id: 65, name: "Rubor compacto", price: 10, image: "/Rubor-en-polvo-compacto.jpg", inStock: true },
    { id: 66, name: "Borla triangular", price: 2, image: "/Borla-triangular.jpg", inStock: true },
    { id: 67, name: "Beauty blender", price: 4, image: "/Beauty-blender.jpg", inStock: true },
    { id: 68, name: "Base líquida matte Poker Queen", price: 13, image: "/Base-líquida-matte.jpg", inStock: true },
    { id: 69, name: "Corrector líquido True Skin", price: 9.5, image: "/Corretor-líquido-True-skin.jpg", inStock: true }
  ],

  perfumes: [
    { id: 70, name: "Perfume Grace Fantasy", price: 35, image: "/Perfume-Natural-Spray-Grace-Fantasy.jpg", inStock: true },
    { id: 71, name: "Perfume Gentle Bear", price: 32, image: "/Perfume-Natural-Spray-Gentle-Bear.jpg", inStock: true }
  ]
};

export default products;