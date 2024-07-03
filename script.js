function calcularOrcamento() {
    const tipoCaminhao = parseFloat(document.getElementById('tipoCaminhao').value);
    const implemento = parseFloat(document.getElementById('implemento').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const localizacao = parseFloat(document.getElementById('localizacao').value);

    const valorPorVeiculo = tipoCaminhao + implemento + localizacao;

    let desconto = 0;
    if (quantidade >= 6 && quantidade <= 10) {
        desconto = 0.08;
    } else if (quantidade >= 11 && quantidade <= 20) {
        desconto = 0.12;
    }

    const valorComDesconto = valorPorVeiculo * (1 - desconto);

    document.getElementById('resultado').innerHTML = `
        <p>Valor por Veículo (com desconto): R$ ${valorComDesconto.toFixed(2)}</p>
    `;
}