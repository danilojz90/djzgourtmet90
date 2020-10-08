const settings = {
  "name": "frontend",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "gourmet90-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "2252.temp.domains/~wedootec/ggalati/orinoquia/backend/wp-json",
          "homepage": "/home",
          "params":{
            "per_page": 99
          },
          "postTypes": [
            {
              type: "restaurante",
              endpoint: "restaurante",
              archive: "/restaurantes"
            },
            {
              type: "page",
              endpoint: "tienda",
              page: "/tienda"
            },
            {
              type: "receta",
              endpoint: "receta",
              archive: "/recetas"
            }
          ],
          "taxonomies": [
            {
              taxonomy: "tipo",
              endpoint: "tipo",
              postTypeEndpoint: ["restaurante", "receta"],
              // params: {
              //   per_page: 5,
              //   _embed: true,
              // },
            },
            {
              taxonomy: "franquicia",
              endpoint: "franquicia",
              postTypeEndpoint: "restaurante",
              // params: {
              //   per_page: 5,
              //   _embed: true,
              // },
            },
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
