const products = [
    {id: "1", title:"Sea Tshirt", price:17500, category:"Remeras", img:"https://i.pinimg.com/564x/3f/5f/ee/3f5fee952d0d6969c051d4a5f92cebbb.jpg", stock: 9, description:"Esta remera de mangas cortas presenta un diseño enérgico que captura la poderosa fuerza del mar con olas imponentes. Las olas, representadas en un estilo dinámico y majestuoso, evocan un sentido de movimiento y vigor. La presencia de garzas en vuelo añade una sensación de libertad y gracia, aportando un contraste interesante con la intensidad del mar. Además, la inclusión de caracteres japoneses agrega un toque cultural y artístico, complementando la escena marina con un significado profundo. Esta remera fusiona la energía del océano con elementos naturales y culturales, ofreciendo un estilo distintivo y poderoso para aquellos que buscan prendas que reflejen la fuerza y la belleza del entorno marino."},
    {id: "2", title:"Kraken Tshirt", price:16300, category:"Remeras", img:"https://i.pinimg.com/564x/3b/20/80/3b20807b779907968c6107b6f3804eef.jpg", stock: 11, description:"Esta remera de mangas cortas presenta una impresión del legendario kraken, criatura marina de la mitología que suele asociarse con la profundidad y el misterio del océano. El diseño del kraken, con sus tentáculos imponentes y detalles vívidos, aporta un aire de intriga y fascinación. La representación del kraken en la remera evoca una sensación de poder y fuerza, mientras que su conexión con el mar añade una dimensión de aventura y fantasía. Esta estampa ofrece un aspecto audaz y distintivo para aquellos que buscan un estilo que inspire curiosidad y emoción."},
    {id: "3", title:"Koi Fish Tshirt", price:15000, category:"Remeras", img:"https://i.pinimg.com/564x/96/34/2e/96342e4505ef3ef1baf564ddfe0fda05.jpg", stock: 21, description:"Esta remera de mangas cortas presenta una estampa de un pez Koi, conocido por su simbolismo en la cultura asiática. El Koi, representado en colores vibrantes y detalles intrincados, ofrece un aspecto llamativo y simbólico. Los Koi suelen simbolizar la perseverancia, el coraje y la buena fortuna, y su representación en la remera aporta una sensación de energía y positividad. La combinación de colores vivos y el diseño detallado del pez Koi hacen que esta remera sea una pieza atractiva y llena de significado."},
    {id: "4", title:"Grey Graffiti Jean", price:30000, category:"Pantalones", img:"https://i.pinimg.com/564x/33/64/e8/3364e8e6ce7c353ee40d14663494e789.jpg", stock: 22, description:"Este jean gris combina la sutileza del color con detalles distintivos. Las roturas pequeñas estratégicamente ubicadas añaden un toque de rebeldía y desgaste controlado al denim, mientras que los dibujos en negro agregan un elemento artístico y expresivo. Estos dibujos pueden variar desde detalles simples hasta diseños más elaborados, creando un contraste visual atractivo sobre el fondo gris del jean. Esta combinación de roturas sutiles y dibujos aporta un estilo único y creativo, ideal para aquellos que buscan una prenda de denim con un toque artístico y diferente."},
    {id: "5", title:"Snowed Jean", price:32000, category:"Pantalones", img:"https://i.pinimg.com/564x/2e/56/4e/2e564e65929f6fde539a7a8d7a9602c3.jpg", stock: 8, description:"Este jean presenta un aspecto atrevido y distintivo, con un lavado claro que se mezcla con áreas más oscuras y roturas blancas que dan la impresión de una superficie nevada. Estas roturas, estratégicamente ubicadas, añaden un toque de estilo vanguardista y desenfadado al jean, creando un efecto visual llamativo y moderno. El contraste entre las áreas más claras y oscuras, junto con las roturas blancas, brinda un aspecto dinámico y único, ideal para aquellos que buscan un estilo audaz y a la moda."},
    {id: "6", title:"Patched Jean", price:28000, category:"Pantalones", img:"https://i.pinimg.com/564x/dd/27/5e/dd275e4b99a89b12137dbd4691b071c9.jpg", stock: 13, description:"Este jean azul presenta parches de tonos ligeramente más oscuros estratégicamente colocados, añadiendo un toque de contraste y carácter al diseño clásico del denim. Los parches de tonalidades azules más profundas se integran armoniosamente con el tono general del jean, aportando un aspecto sutilmente diferenciado y artesanal. Esta elección de parches más tonales complementa el estilo vintage con un toque moderno, creando una apariencia única que captura la atención sin perder su elegancia."},
    {id: "7", title:"Nike Air Force 1 Lv8", price:100000, category:"Zapatillas", img:"https://i.pinimg.com/564x/4d/e7/56/4de756b48d2d09e2a81d00908a67d9f2.jpg", stock: 20, description:"Las Nike Air Force 1 LV8 son una reinterpretación moderna de las clásicas Air Force 1, reconocidas por su diseño atemporal y su distintivo estilo. Estas zapatillas se destacan por sus detalles únicos y su construcción premium, que puede incluir combinaciones de cuero, gamuza y otros materiales de alta calidad. Incorporan la legendaria tecnología Air de Nike para una comodidad excepcional y una pisada suave. Con su versatilidad y su capacidad para complementar una amplia gama de looks, las Air Force 1 LV8 son un símbolo de estilo urbano y sofisticación casual."},
    {id: "8", title:"Nike Air Jordan Low", price:110000, category:"Zapatillas", img:"https://i.pinimg.com/564x/db/a6/68/dba668436471bc99eb368874e755afb3.jpg", stock: 17, description:"Las zapatillas Nike Air Jordan Low son una versión icónica de la legendaria línea Air Jordan. Conocidas por su estilo de corte bajo, mantienen la esencia y el legado de las Jordan originales. Están diseñadas con materiales premium que ofrecen durabilidad y confort, junto con la característica tecnología de amortiguación Air de Nike, que brinda una sensación ligera y de gran respuesta. Estas zapatillas, inspiradas en el legado del basquetbolista Michael Jordan, fusionan estilo deportivo y urbano, convirtiéndose en un símbolo de moda y cultura contemporánea."},
    {id: "9", title:"Vans SK8 HI", price:69000, category:"Zapatillas", img:"https://i.pinimg.com/564x/41/19/b2/4119b23e4cc3813e7c4ac512ffbf9ae3.jpg", stock: 10, description:"Las zapatillas Vans SK8-HI son un icono del skateboarding y la cultura urbana. Con su distintiva silueta de caña alta, materiales duraderos y suela waffle, ofrecen estilo, comodidad y un excelente soporte para el tobillo. Su diseño clásico y versátil las convierte en un elemento básico para el estilo casual o urbano, siendo apreciadas tanto por skaters como por amantes de la moda."}
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}

export const getProductByCategory = (productCategory) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === productCategory))
        }, 1000)
    })
}