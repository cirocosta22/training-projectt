const habitante = () => {
  const pessoas = [
    { name: 'ciro', salario: 2300, filhos: 3 },
    { name: 'vera', salario: 2400, filhos: 7 },
    { name: 'Ramon', salario: 1300, filhos: 4 },
    { name: 'Bartolomeu', salario: 1500, filhos: 2 }
  ]

  let totalSalario = 0

  pessoas.forEach(pessoa => {
    totalSalario += pessoa.salario
  })
  let percapta = totalSalario / pessoas.length
  if (
    pessoas[1].salario > pessoas[0].salario &&
    pessoas[1].salario > pessoas[3].salario &&
    pessoas[1].salario > pessoas[2].salario
  ) {
    console.log(`maior salario mensal é o de ${pessoas[1].name}`)
  } else {
    console.log('pessoas')
  }
}
habitante()

// problema 5 resolvido
