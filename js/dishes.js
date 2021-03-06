const dishes = [
    {
        name: `Chicken Burger`,
        type: "burger",
        price: 30,
        ingredients: 'bułka, ser, kurczak, pomidor, ogórek, sos',
        img: "chicken"
    },
    {
        name: `Cheese Burger`,
        type: "burger",
        price: 32,
        ingredients: 'bułka, podwójny ser, burger wołowy, pomidor, ogórek, sos',
        img: "cheeseburger"
    },
    {
        name: `Bacon Burger`,
        type: "burger",
        price: 34,
        ingredients: 'bułka, ser, burger wołowy, bekon, papryka, sos',
        img: "bacon"
    },
    {
        name: `Double Burger`,
        type: "burger",
        price: 41,
        ingredients: 'bułka, podwójny burger wołowy, podwójny ser, pomidor, ogórek, sos',
        img: "double"
    },

    {
        name: `Salami`,
        type: "pizza",
        price: 32,
        ingredients: 'ser, salami, jalapeno',
        img: "salami"
    },
    {name: `Capriciosa`, type: "pizza", price: 34, ingredients: 'Ser, pieczarki, szynka', img: "capriciosa"},
    {name: `Hawajska`, type: "pizza", price: 37, ingredients: 'Ser, kurczak, ananas, kukurydza', img: "hawajska"},
    {name: `Margerita`, type: "pizza", price: 29, ingredients: 'ser, pomidory, bazylia', img: "margerita"},
    {
        name: `4 Sery`,
        type: "pizza",
        price: 38,
        ingredients: 'sos, ser feta, gorgonzola, ser pleśniowy, cheddar',
        img: "quattro"
    },

    {name: `Sałatka grecka`, type: "salad", price: 27, ingredients: 'ser, salami, jalapeno', img: "grece"},
    {name: `Sałatka Cesar`, type: "salad", price: 28, ingredients: 'Ser, pieczarki, szynka', img: "cezar"},
    {
        name: `Sałatka z tuńczykiem`,
        type: "salad",
        price: 26,
        ingredients: 'Ser, kurczak, ananas, kukurydza',
        img: "tuna"
    },
    {name: `Sałatka z brokułem `, type: "salad", price: 24, ingredients: 'ser, pomidory, bazylia', img: "broccoli"},

    {name: `Carbonara`, type: "pasta", price: 31, ingredients: 'makaron, boczek, jajko', img: "carbonara"},
    {
        name: `Spaghetti Bolognese`,
        type: "pasta",
        price: 29,
        ingredients: 'makargon, mięso, sos pomidorowy, parmezan',
        img: "bolognese"
    },
    {
        name: `Gnocchi serowe`,
        type: "pasta",
        price: 36,
        ingredients: 'kluseczki, parmezan, sos serowy, bazylia',
        img: "gnocchi"
    },
    {name: `Aglio olio`, type: "pasta", price: 27, ingredients: 'ser, czosnek, oliwa', img: "aglio"},

    {name: `Homar`, type: "seafood", price: 81, ingredients: 'Sos, pomidorki koktajlowe, cytryna', img: "lobster"},
    {name: `Krab`, type: "seafood", price: 69, ingredients: 'Sos, cytryna, przyparwy', img: "crab"},
    {
        name: `Krewetki`,
        type: "seafood",
        price: 56,
        ingredients: 'Krewetki, parmezan, sos serowy, bazylia',
        img: "shrimps"
    },
    {name: `Małże`, type: "seafood", price: 53, ingredients: 'Małże, czosnek, oliwa', img: "mussels"},

    {name: `Aglio olio`, type: "vege", price: 27, ingredients: 'ser, czosnek, oliwa', img: "aglio"},
    {name: `Sałatka z brokułem `, type: "vege", price: 24, ingredients: 'ser, pomidory, bazylia', img: "broccoli"},
    {
        name: `Vege Burger`, type: "vege", price: 28,
        ingredients: 'bułka, ser wegański, burger z ciecierzycy, sałata, ogórek, pomidor', img: "vegan"
    },

    {name: `Kawa`, type: "drinks", price: 10, img: "coffee"},
    {name: `Herbata`, type: "drinks", price: 12, img: "tea"},
    {name: `Piwo`, type: "drinks", price: 13, img: "beer"},
    {name: `Gorąca czekolada`, type: "drinks", price: 12, img: "chocolate"},
    {name: `Woda `, type: "drinks", price: 7, img: "water"},
    {name: `Koktajl `, type: "drinks", price: 31, img: "cocktail"},

    {
        name: `Beza Pavlova `, type: "cake",
        ingredients: "beza, owoce, krem śmietanowy", price: 21, img: "pavlova"
    },
    {
        name: `Tort czekoladowy `,
        type: "cake",
        ingredients: "biszkopt, krem czekoladowy, czekolada, wiśnie ",
        price: 21,
        img: "chocolate-cake"
    },
    {
        name: `Szarlotka `,
        type: "cake",
        ingredients: "biszkopt, jabłko, cukier puder",
        price: 22,
        img: "apple-pie"
    },
    {
        name: `Sernik `,
        type: "cake",
        ingredients: "ciasto, ser, sos z marakui",
        price: 23,
        img: "cheesecake"
    },
    {
        name: `Tort owocowy `,
        type: "cake",
        ingredients: "ciasto, krem, truskawka, borówka, banan",
        price: 27,
        img: "fruits-cake"
    },

];
