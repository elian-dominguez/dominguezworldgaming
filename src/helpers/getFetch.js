import fifa21 from '../assets/fifa21.png'
import gtav from '../assets/gtav.jpg'
import r7 from '../assets/r7.jpg'
import cod3 from '../assets/cod3.jpg'
import forza from '../assets/forza.jpg'
import mkx from '../assets/mkx.jpg'
import smario from '../assets/smario.jpg'
import zelda from '../assets/zelda.jpg'
import dsiders from '../assets/dsiders.jpg'

export const games = [
    { id: "1", categoria: "playstation", title: 'FIFA 21', description: "FIFA 21 es la nueva entrega del simulador de fútbol de EA Sports, el juego deportivo más influyente del mundo.", image: fifa21, price: 9000},
    { id: "2", categoria: "playstation", title: 'Grand Theft Auto V', description: "Grand Theft Auto V es el juego de mundo abierto más grande, más dinámico y más diverso jamás creado. Combina la historia y la jugabilidad de un modo nuevo, mientras los jugadores entran y salen repetidamente de las vidas de los tres personajes principales.", image: gtav, price: 6399},
    { id: "3", categoria: "playstation", title: 'Resident Evil 7', description: "La saga de terror de Capcom vuelve a los orígenes con una evolución del Survival Horror que marca un nuevo comienzo. El miedo, la tensión y los rompecabezas imposibles están de vuelta por todo lo alto.", image: r7, price: 4100},
    { id: "4", categoria: "xbox", title: "Call of Duty: Black Ops III", description: "Bienvenido a 2065. Una nueva clase de soldados de operaciones encubiertas surge mientras que la línea que separa a la humanidad de la alta tecnología robótica propia de los conflictos armados se vuelve difusa.", image: cod3, price: 6500},
    { id: "5", categoria: "xbox", title: "Forza Motorsport 5", description: "Forza Motorsport 5 es la fantasía de coches definitiva, que solo ha podido hacerse realidad en Xbox One.Un motor gráfico totalmente nuevo, modo multijugador de 16 jugadores, partidas basadas en la nube y cientos de coches perfectamente recreados se dan cita en Forza Motorsport 5, donde se conducen los sueños.", image: forza, price: 5400},
    { id: "6", categoria: "xbox", title: "Mortal Kombat X", description: "Mortal Kombat X (abreviado MKX) es un videojuego de pelea creado por Ed Boon, desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment, fue anunciado en junio de 2014, mediante un vídeo que mostraba a Sub-Zero y Scorpion peleando entre sí.", image: mkx, price: 9000},
    { id: "7", categoria: "nintendo", title: "Super Mario Bross U", description: "¡Únete a Mario, Luigi y a sus amigos en cualquier momento y en cualquier lugar en una divertida aventura para uno o varios jugadores! Disfruta de dos aventuras de desplazamiento lateral con hasta tres amigos* e intenta salvar al Reino Champiñón. Incluye los juegos New Super Mario Bros. U y New Super Luigi U, ¡ambos incluyen a Nabbit y a Toadette como personajes jugables!.", image: smario, price: 7250},
    { id: "8", categoria: "nintendo", title: "Legend of Zelda: Breath of the Wild", description: "Sin reino. Sin recuerdos. Después de un letargo que ha durado 100 años, Link se despierta solo en un mundo que ya no recuerda. Ahora, el héroe legendario debe explorar ese extenso y misterioso mundo y recuperar sus recuerdos antes de que Hyrule esté perdido para siempre. Armado únicamente con lo que encuentre a su paso, Link emprenderá una aventura para buscar respuestas y obtener los recursos que necesita para sobrevivir.", image: zelda, price: 8350},
    { id: "9", categoria: "nintendo", title: "Darksiders Warmastered Edition", description: "Las fuerzas del mal engañaron a Guerra, el primer jinete del Apocalipsis, para desencadenar prematuramente el fin del mundo. Ahora lo acusan de incumplir la ley sagrada e incitar un conflicto entre el Cielo y el Infierno en el que las fuerzas demoníacas derrotaron a las huestes celestiales y conquistaron la Tierra.", image: dsiders, price: 4400}
]

export const getFetch = new Promise((resolve, reject) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(games)
        }, 2000)
    } else {
        reject("Error")
    }
})

// export function getFetchOne (id) {
//         new Promise ((resolve, reject) => {
//         let condition = true
//         if (condition) {
//             setTimeout(() => {
//                 const juegos = games.find(game => game.id === id)
//                 resolve(juegos)
//             }, 2000)
//         } else {
//             reject("Error")
//         }
//     })
// }