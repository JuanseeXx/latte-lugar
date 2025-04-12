import add_icon_white from './add-White.png'
import add_icon_green from './add_green.png'
import remove_icon from './remove.png'
import searchIcon from './search.png'
import basketIcon from './bag.png'
import cross_icon from './close.png'
import rating_starts from './rating_starts.png'
import logo from './logo.png'
import Logo_Transparente from './logoTransparente.png'
import logoCabecera from './logoCabecera.png'
import fondoInicio from './fondoinicio.jpg'
import Espresso from './Espresso.jpg'
import Americano from './Americano.jpeg'
import Latte from './Latte.jpg'
import Mocha from './Mocha.jpg'
import Tinto from './Tinto.jpg'
import Macchiato from './Macchiato.jpg'
import Irlandes from './Irlandes.jpg'
import Arabe from './Arabe.jpeg'
import Cortado from './Cortado.jpg'
import Doble_Espresso from './Doble_Espresso.jpg'
import Filtrado from './Filtrado.jpg'
import Capuchino from './Capuchino.jpg'
import Flat_white from './Flat-white.jpg'
import Affogato from './Affogato.jpg'
import Bombon from './Bombon.jpg'
import Cold_brew from './cold-brew.jpg'
import Cafe_helado from './Cafe-helado.jpg'
import Latte_helado from './Latte-helado.jpeg'
import Frappuccino from './Frapuccino.jpg'
import Te_helado from './Te-helado.jpg'
import Te_verde from './Te-verde.jpg'
import Te_Chai_Latte from './Te-Chai.jpg'
import Infusion_Frutos_Rojos from './infusion-frutos-rojos.jpg'
import Infusion_Manzanilla from './manzanilla.jpg'
import Matcha_Iced_Latte from './Matcha-Iced-Latte.jpg'
import Croissant from './croissants.jpg'
import Brownie from './Brownie.jpg'
import Muffins from './muffins.jpg'
import Cheesecake from './Cheesecake.jpg'
import Pan_Banano from './pan-de-banano.jpg'
import Sandwiches from './Sandwiches.jpg'
import Tostada from './tostada-aguacate.jpg'
import Wraps from './wraps.jpg'
import Arepas_Rellenas from './arepas-rellenas.jpg'
import Bowl_Acai from './Acai-Bowl.jpg'
import Chocolate_Caliente from './chocolate-caliente.jpg'
import Malteadas from './malteadas.jpg'
import Bebida_Canela from './bebida-con-canela.jpg'
import Bebidas_Vegetales from './bebidas-vegetales.jpeg'
import Smoothies from './smoothies.jpg'
import facebook_icon from './facebook.png'
import twitter_icon from './twitter.png'
import linkedin_icon from './linkedin.png'
import play_store from './play-store.png'
import app_store from './app-store.png'


export const assets = {
    logo,
    Logo_Transparente,
    logoCabecera,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    play_store,
    app_store,
    fondoInicio,
    Espresso,
    Americano,
    Latte,
    Mocha,
    Tinto,
    Macchiato,
    Irlandes,
    Arabe,
    Cortado,
    Doble_Espresso,
    Filtrado,
    Capuchino,
    Flat_white,
    Affogato,
    Bombon,
    Cold_brew,
    Cafe_helado,
    Latte_helado,
    Frappuccino,
    Te_helado,
    Te_verde,
    Te_Chai_Latte,
    Infusion_Frutos_Rojos,
    Infusion_Manzanilla,
    Matcha_Iced_Latte,
    Croissant,
    Brownie,
    Muffins,
    Cheesecake,
    Pan_Banano,
    Sandwiches,
    Tostada,
    Wraps,
    Arepas_Rellenas,
    Bowl_Acai,
    Chocolate_Caliente,
    Malteadas,
    Bebida_Canela,
    Bebidas_Vegetales,
    Smoothies,
    searchIcon,
    basketIcon,
    rating_starts, 
    add_icon_green,
    add_icon_white,
    remove_icon,
    cross_icon
}

export const menu_list = [
    {
        menu_name: "Cafés Clásicos",
        menu_image: Espresso
    },
    {
        menu_name: "Cafés con Leche",
        menu_image: Capuchino
    },
    {
        menu_name: "Cafés Especiales",
        menu_image: Bombon
    },
    {
        menu_name: "Bebidas Frías",
        menu_image: Latte_helado
    },
    {
        menu_name: "Tés e Infusiones",
        menu_image: Infusion_Frutos_Rojos
    },
    {
        menu_name: "Repostería y Panadería",
        menu_image: Croissant
    },
    {
        menu_name: "Desayunos y Snacks",
        menu_image: Sandwiches
    },
    {
        menu_name: "Bebidas sin Café",
        menu_image: Smoothies
    }
]

export const coffe_list = [
    {
        _id: "1",
        name: "Espresso",
        image: Espresso,
        price: 5500,
        description: "Un clásico italiano: café intenso y concentrado, con cuerpo y aroma profundos. Ideal para los amantes del sabor fuerte.",
        category: "Cafés Clásicos"
    },
    {
        _id: "2",
        name: "Café Americano",
        image: Americano,
        price: 8500,
        description: "Espresso rebajado con agua caliente, más suave pero igual de aromático. Perfecto para quienes prefieren un café ligero sin perder carácter.",
        category: "Cafés Clásicos"
    },
    {
        _id: "3",
        name: "Latte",
        image: Latte,
        price: 11500,
        description: "Suave mezcla de espresso con abundante leche al vapor y una fina capa de espuma. Cremoso, equilibrado y reconfortante.",
        category: "Cafés con Leche"
    },
    {
        _id: "4",
        name: "Mocha",
        image: Mocha,
        price: 15900,
        description: "La fusión perfecta entre café, chocolate y leche. Una delicia dulce y energética, coronada con crema batida o espuma.",
        category: "Cafés Especiales"
    },
    {
        _id: "5",
        name: "Tinto",
        image: Tinto,
        price: 2000,
        description: "Café negro tradicional colombiano, servido largo y suave. Ideal para cualquier momento del día.",
        category: "Cafés Clásicos"
    },
    {
        _id: "6",
        name: "Macchiato",
        image: Macchiato,
        price: 8000,
        description: "Espresso con un toque de espuma de leche. El balance justo entre lo intenso y lo cremoso.",
        category: "Cafés con Leche"
    },
    {
        _id: "7",
        name: "Café Irlandés",
        image: Irlandes,
        price: 14900,
        description: "Café fuerte con whisky irlandés, azúcar y crema espesa. Una bebida cálida y audaz para ocasiones especiales.",
        category: "Cafés Especiales"
    },
    {
        _id: "8",
        name: "Café Árabe",
        image: Arabe,
        price: 16900,
        description: "Aromático y especiado, preparado con cardamomo y a veces otras especias. Un viaje de sabor al Medio Oriente.",
        category: "Cafés Especiales"
    },
    {
        _id: "9",
        name: "Café Cortado",
        image: Cortado,
        price: 10900,
        description: "Espresso suavizado con un chorrito de leche caliente. Menos lácteo que un latte, pero más suave que un espresso solo.",
        category: "Cafés con Leche"
    },
    {
        _id: "10",
        name: "Doble Espresso",
        image: Doble_Espresso,
        price: 4500,
        description: "Una carga intensa de sabor: dos shots de espresso con cuerpo, aroma profundo y carácter robusto. Perfecto para quienes disfrutan del café fuerte y sin rodeos.",
        category: "Cafés Clásicos"
    },
    {
        _id: "11",
        name: "Café Filtrado",
        image: Filtrado,
        price: 4000,
        description: "Extracción lenta y suave que resalta los matices naturales del grano. Un café limpio, ligero y aromático, ideal para quienes aprecian la sutileza en cada sorbo.",
        category: "Cafés Clásicos"
    },
    {
        _id: "12",
        name: "Capuchino",
        image: Capuchino,
        price: 8000,
        description: "Equilibrio perfecto entre espresso intenso, leche cremosa y una generosa capa de espuma. Un clásico con textura aterciopelada y sabor reconfortante en cada sorbo.",
        category: "Cafés con Leche"
    },
    {
        _id: "13",
        name: "Flat White",
        image: Flat_white,
        price: 7000,
        description: "Espresso con leche vaporizada en una textura sedosa y fina, que resalta el sabor del café con un toque suave y cremoso. Elegancia en una taza para los amantes del equilibrio.",
        category: "Cafés con Leche"
    },
    {
        _id: "14",
        name: "Affogato",
        image: Affogato,
        price: 9000,
        description: "Un irresistible postre italiano donde lo caliente se encuentra con lo frío: espresso vertido sobre una bola de helado de vainilla. Simple, elegante y delicioso.",
        category: "Cafés Especiales"
    },
    {
        _id: "15",
        name: "Café con Leche Condensada",
        image: Bombon,
        price: 11000,
        description: "Una mezcla dulce y cremosa que conquista desde el primer sorbo: café fuerte servido sobre una base de leche condensada. Sabor intenso con un final suave y caramelizado.",
        category: "Cafés Especiales"
    },
    {
        _id: "16",
        name: "Cold Brew",
        image: Cold_brew,
        price: 10000,
        description: "Café infusionado en frío por varias horas, lo que da como resultado una bebida suave, menos ácida y con un sabor naturalmente dulce. Refrescante, elegante y cargado de energía.",
        category: "Bebidas Frías"
    },
    {
        _id: "17",
        name: "Café helado",
        image: Cafe_helado,
        price: 9000,
        description: "La versión más refrescante del café: espresso servido sobre hielo, con un toque de agua o leche según tu gusto. Ligero, energizante y perfecto para días calurosos.",
        category: "Bebidas Frías"
    },
    {
        _id: "18",
        name: "Latte Helado",
        image: Latte_helado,
        price: 7500,
        description: "Espresso suave mezclado con leche fría y servido con hielo. Cremoso, refrescante y con el equilibrio perfecto entre intensidad y suavidad. Ideal para disfrutar en cualquier momento del día.",
        category: "Bebidas Frías"
    },
    {
        _id: "19",
        name: "Frappuccino",
        image: Frappuccino,
        price: 8500,
        description: "Bebida fría, cremosa y llena de sabor. Una mezcla de café, hielo y leche batida, con opciones irresistibles como caramelo, vainilla o chocolate. Perfecto para consentirte y refrescarte al mismo tiempo.",
        category: "Bebidas Frías"
    },
    {
        _id: "20",
        name: "Té Helado con Café",
        image: Te_helado,
        price: 5500,
        description: "Una fusión sorprendente y refrescante: té infusionado combinado con café frío. Una bebida ligera pero con carácter, ideal para quienes buscan una experiencia diferente y energizante.",
        category: "Bebidas Frías"
    },
    {
        _id: "21",
        name: "Té Verde",
        image: Te_verde,
        price: 3500,
        description: "Infusión suave y natural con un toque herbal. Conocido por sus propiedades antioxidantes y su sabor delicado, es perfecto para quienes buscan una bebida ligera y revitalizante.",
        category: "Tés e Infusiones"
    },
    {
        _id: "22",
        name: "Té Chai Latte",
        image: Te_Chai_Latte,
        price: 3500,
        description: "Una mezcla exótica y reconfortante de té negro con especias como canela, clavo, jengibre y cardamomo, combinada con leche vaporizada. Aromático, cálido y lleno de sabor.",
        category: "Tés e Infusiones"
    },
    {
        _id: "23",
        name: "Infusión de Frutos Rojos",
        image: Infusion_Frutos_Rojos,
        price: 3500,
        description: "Bebida sin cafeína, vibrante y naturalmente dulce, elaborada con una mezcla de frutos como fresa, mora y arándano. Ideal para relajarte con un sabor frutal y aromático.",
        category: "Tés e Infusiones"
    },
    {
        _id: "24",
        name: "Infusión de Manzanilla",
        image: Infusion_Manzanilla,
        price: 3500,
        description: "Clásica y calmante, esta infusión de flores de manzanilla es perfecta para relajarse. Suave, aromática y naturalmente libre de cafeína, ideal para acompañar un momento de tranquilidad.",
        category: "Tés e Infusiones"
    },
    {
        _id: "25",
        name: "Matcha Latte",
        image: Matcha_Iced_Latte,
        price: 5500,
        description: "Una bebida suave y energizante hecha con té verde matcha en polvo y leche cremosa. De sabor herbal y ligeramente dulce, es perfecta para quienes buscan una alternativa al café con múltiples beneficios antioxidantes.",
        category: "Tés e Infusiones"
    },
    {
        _id: "26",
        name: "Croissant",
        image: Croissant,
        price: 2500,
        description: "Clásico pan francés de masa hojaldrada, dorado y crujiente por fuera, suave y mantequilloso por dentro. Perfecto para acompañar tu bebida favorita o disfrutar solo.",
        category: "Repostería y Panadería"
    },
    {
        _id: "27",
        name: "Brownie",
        image: Brownie,
        price: 3200,
        description: "Clásico pan francés de masa hojaldrada, dorado y crujiente por fuera, suave y mantequilloso por dentro. Perfecto para acompañar tu bebida favorita o disfrutar solo.",
        category: "Repostería y Panadería"
    },
    {
        _id: "28",
        name: "Muffins",
        image: Muffins,
        price: 2000,
        description: "Bizcochitos esponjosos y llenos de sabor, horneados con ingredientes frescos. Disponibles en variedades como arándanos, chocolate o zanahoria. Ideales para acompañar tu café o como un antojo dulce en cualquier momento.",
        category: "Repostería y Panadería"
    },
    {
        _id: "29",
        name: "Cheesecake",
        image: Cheesecake,
        price: 3500,
        description: "Tarta cremosa de queso sobre una base crujiente de galleta. Suave, delicado y con un toque dulce perfecto, ideal para quienes disfrutan los postres clásicos con estilo.",
        category: "Repostería y Panadería"
    },
    {
        _id: "30",
        name: "Pan de Banano",
        image: Pan_Banano,
        price: 3000,
        description: "Húmedo, esponjoso y lleno de sabor natural a banano maduro. Un clásico reconfortante, perfecto para acompañar tu bebida favorita en cualquier momento del día.",
        category: "Repostería y Panadería"
    },
    {
        _id: "31",
        name: "Sándwiches",
        image: Sandwiches,
        price: 10000,
        description: "Pan fresco relleno de combinaciones irresistibles: jamón y queso, pollo, vegetales, huevo o atún. Preparados al momento, perfectos para un desayuno completo, un almuerzo ligero o un snack delicioso.",
        category: "Desayunos y Snacks"
    },
    {
        _id: "32",
        name: "Tostadas con Aguacate",
        image: Tostada,
        price: 8000,
        description: "Crujientes rebanadas de pan artesanal cubiertas con aguacate fresco y huevo al gusto (pochado, revuelto o frito). Una combinación deliciosa, nutritiva y perfecta para comenzar el día con energía.",
        category: "Desayunos y Snacks"
    },
    {
        _id: "33",
        name: "Wraps",
        image: Wraps,
        price: 12000,
        description: "Tortilla suave rellena de ingredientes frescos como pollo, vegetales, queso y salsas especiales. Ligeros, sabrosos y perfectos para una comida rápida pero saludable.",
        category: "Desayunos y Snacks"
    },
    {
        _id: "34",
        name: "Arepas Rellenas",
        image: Arepas_Rellenas,
        price: 11000,
        description: "Deliciosas arepas doradas por fuera y suaves por dentro, rellenas con opciones como queso, jamón, pollo, carne desmechada o huevo. Un clásico latino lleno de sabor, ideal para cualquier momento del día.",
        category: "Desayunos y Snacks"
    },
    {
        _id: "35",
        name: "Bowl de Açaí",
        image: Bowl_Acai,
        price: 7500,
        description: "Una base fría y cremosa de açaí combinada con frutas frescas, granola y un toque de miel. Refrescante, nutritivo y lleno de antioxidantes. El desayuno perfecto o un snack saludable para cualquier hora del día.",
        category: "Desayunos y Snacks"
    },
    {
        _id: "36",
        name: "Chocolate Caliente",
        image: Chocolate_Caliente,
        price: 3500,
        description: "Bebida espesa, cremosa y reconfortante, elaborada con auténtico chocolate derretido y leche caliente. Perfecta para disfrutar en días fríos o como un dulce abrazo en taza.",
        category: "Bebidas sin Café"
    },
    {
        _id: "37",
        name: "Malteada",
        image: Malteadas,
        price: 5500,
        description: "Cremosas, dulces y refrescantes. Preparadas con helado, leche y tus sabores favoritos como vainilla, chocolate, fresa o cookies & cream. Un clásico irresistible para darte un gusto en cualquier momento.",
        category: "Bebidas sin Café"
    },
    {
        _id: "38",
        name: "Bebida de Avena con Canela",
        image: Bebida_Canela,
        price: 4500,
        description: "Natural, reconfortante y ligeramente dulce. Preparada con avena cocida, leche y un toque de canela. Ideal para disfrutar caliente o fría, como una opción nutritiva y deliciosa en cualquier momento del día.",
        category: "Bebidas sin Café"
    },
    {
        _id: "39",
        name: "Bebidas Vegetales",
        image: Bebidas_Vegetales,
        price: 5000,
        description: "Leche de almendras, soya o coco servida caliente, ideal para quienes buscan una opción ligera, sin lactosa y reconfortante. Suaves, cremosas y con un sabor natural que acompaña perfectamente tus momentos de calma.",
        category: "Bebidas sin Café"
    },
    {
        _id: "40",
        name: "Smoothies de Frutas Naturales",
        image: Smoothies,
        price: 5000,
        description: "Refrescantes, nutritivos y llenos de sabor. Preparados con frutas 100% naturales como mango, fresa, piña o frutos rojos, mezclados con hielo o base vegetal. Una explosión de frescura ideal para cualquier momento del día.",
        category: "Bebidas sin Café"
    }
]