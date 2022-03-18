import fifa21 from '../assets/fifa21.png'
import gtav from '../assets/gtav.jpg'
import r7 from '../assets/r7.jpg'

const games = [
    { id: 1, title: 'FIFA 21', description: "FIFA 21 es la nueva entrega del simulador de fútbol de EA Sports, el juego deportivo más influyente del mundo.", image: fifa21, price: '$9.000' },
    { id: 2, title: 'Grand Theft Auto V', description: "Grand Theft Auto V es el juego de mundo abierto más grande, más dinámico y más diverso jamás creado. Combina la historia y la jugabilidad de un modo nuevo, mientras los jugadores entran y salen repetidamente de las vidas de los tres personajes principales.", image: gtav, price: '$6.399' },
    { id: 3, title: 'Resident Evil 7', description: "La saga de terror de Capcom vuelve a los orígenes con una evolución del Survival Horror que marca un nuevo comienzo. El miedo, la tensión y los rompecabezas imposibles están de vuelta por todo lo alto.", image: r7, price: '$4.100' }
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