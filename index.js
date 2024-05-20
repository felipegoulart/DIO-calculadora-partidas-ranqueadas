import promptSync from 'prompt-sync'

const prompt = promptSync({
  sigint: true
})

const victories = prompt('Número de vitórias: ')
const defeats = prompt('Número de derrotas: ')

function getRankedPoints (victories, defeats) {
  return victories - defeats
}

function getRankByPoints (points) {
  const ranks = {
    [points <= 10]: 'Ferro',
    [points >= 11 && points <= 20]: 'Bronze',
    [points >= 21 && points <= 50]: 'Prata',
    [points >= 51 && points <= 80]: 'Ouro',
    [points >= 81 && points <= 90]: 'Diamante',
    [points >= 91 && points <= 100]: 'Lendário',
    [points >= 101]: 'Imortal'
  }

  return ranks.true
}

const points = getRankedPoints(victories, defeats)
const rank = getRankByPoints(points)

console.log(`"O Herói tem de saldo de **${points}** está no nível de **${rank}**"`)
