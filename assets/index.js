const conta = {
  verificaSeTemDesconto(comand) {
    return (
      comand.cliente === 'Ciro' &&
      comand.primeiracompra === true &&
      comand.pagamento === true &&
      comand.valorTotal > 1000
    )
  },
  verificaSeValorMenorQueMil(comand) {
    return (
      comand.cliente === 'vera' &&
      comand.primeiracompra === true &&
      comand.pagamento === true &&
      comand.valorTotal < 1000 &&
      comand.valorTotal > 500
    )
  },
  verificaSeCompraMenorQuequinhentos(comand) {
    return (
      comand.cliente === 'Ramon' &&
      comand.primeiracompra === true &&
      comand.pagamento === true &&
      comand.valorTotal < 500
    )
  },
  verificaParcelamento(comand) {
    return (
      comand.cliente === 'Lucas' &&
      comand.primeiracompra === true &&
      comand.pagamento === false &&
      comand.valorTotal > 1000
    )
  },
  casoCinco(comand) {
    return (
      comand.cliente === 'Juliana' &&
      comand.primeiracompra === true &&
      comand.pagamento === false &&
      comand.valorTotal < 1000 &&
      comand.valor > 500
    )
  },
  casoSeis(comand) {
    return (
      comand.cliente === 'Deborah' &&
      comand.primeiracompra === true &&
      comand.pagamento === false &&
      comand.valorTotal < 500
    )
  },
  casoSete(comand) {
    return (
      comand.cliente === 'Joao' &&
      comand.primeiracompra === false &&
      comand.pagamento === true &&
      comand.valorTotal > 1000
    )
  },
  casoOito(comand) {
    return (
      comand.cliente === 'Eva' &&
      comand.primeiracompra === false &&
      comand.pagamento === true &&
      comand.valorTotal < 1000 &&
      comand.valorTotal > 500
    )
  },
  casoNove(comand) {
    return (
      comand.cliente === 'Jose' &&
      comand.primeiracompra === false &&
      comand.pagamento === true &&
      comand.valorTotal < 500
    )
  },
  casoDez(comand) {
    return (
      comand.cliente === 'Natanael' &&
      comand.primeiracompra === false &&
      comand.pagamento === false &&
      comand.valorTotal > 1000
    )
  }
}

const geradorDesconto = comand => {
  if (conta.verificaSeTemDesconto(comand)) {
    return `cliente tem direito a ${
      (comand.valorTotal * 30) / 100
    } R$ de desconto`
  } else if (conta.verificaSeValorMenorQueMil(comand)) {
    return (comand.valorTotal * 25) / 100
  } else if (conta.verificaSeCompraMenorQuequinhentos(comand)) {
    return `cliente tem direito a ${
      (comand.valorTotal * 20) / 100
    } R$ de desconto`
  } else if (conta.verificaParcelamento(comand)) {
    return `cliente tem direito a ${
      (comand.valorTotal * 20) / 100
    } R$ de desconto`
  } else if (conta.casoCinco(comand)) {
    return `cliente tem direito a ${
      (comand.valorTotal * 15) / 100
    } R$ de desconto`
  } else if (conta.casoSeis(comand)) {
    return `cliente tem direito a ${
      (comand.valorTotal * 10) / 100
    } R$ de desconto`
  } else if (conta.casoSete(comand)) {
    return `cliente tem direito a ${
      (comand.valorTotal * 20) / 100
    } R$ de desconto`
  } else if (conta.casoOito(comand)) {
    return `obrigado pela compra , volte sempre // valor sem desconto ${
      comand.valorTotal
    } e com desconto ${Math.abs(
      (comand.valorTotal * 15) / 100 - comand.valorTotal
    )}`
  } else if (conta.casoNove(comand)) {
    return `obrigado pela compra ${comand.cliente} no valor de ${
      comand.valorTotal
    }, com o desconto de 10 % ficou ${Math.abs(
      (comand.valorTotal * 10) / 100 - comand.valorTotal
    )}`
  } else if (conta.casoDez(comand)) {
    return `obrigado pela compra ${comand.cliente} sua compra no valor de ${
      comand.valorTotal
    }, com desconto de 10% ficou de ${Math.abs(
      (comand.valorTotal * 10) / 100 - comand.valorTotal
    )}`
  }
}
console.log(
  geradorDesconto({
    cliente: 'Natanael',
    primeiracompra: false,
    pagamento: false,
    valorTotal: 1360
  })
)
