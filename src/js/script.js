// Array de objetos que representa os vinhos da vinícola
const vinhos = [
    {
        nome: "Agnello Reserva",
        tipo: "tinto",
        safra: 2020,
        estoque: 12
    },
    {
        nome: "Vale Dourado",
        tipo: "branco",
        safra: 2022,
        estoque: 4
    },
    {
        nome: "Rosé da Serra",
        tipo: "rosé",
        safra: 2023,
        estoque: 8
    },
    {
        nome: "Cabernet Especial",
        tipo: "tinto",
        safra: 2019,
        estoque: 3
    },
    {
        nome: "Brisa do Vale",
        tipo: "branco",
        safra: 2021,
        estoque: 6
    }
];

// cadastro de novo vinho (array)
function adicionarVinho(vinho) {
    const tiposPermitidos = ["tinto", "branco", "rosé"];

    if (
        !vinho ||
        typeof vinho.nome !== "string" ||
        vinho.nome.trim() === "" ||
        !tiposPermitidos.includes(vinho.tipo) ||
        !Number.isInteger(vinho.safra) ||
        vinho.safra <= 0 ||
        !Number.isInteger(vinho.estoque) ||
        vinho.estoque < 0
    ) {
        console.log("Erro: os dados do vinho são inválidos.");
        return false;
    }

    const novoVinho = {
        nome: vinho.nome.trim(),
        tipo: vinho.tipo,
        safra: vinho.safra,
        estoque: vinho.estoque
    };

    vinhos.push(novoVinho);

    console.log(`Vinho "${novoVinho.nome}" cadastrado com sucesso!`);

    return true;
}

// lista todos os vinhos forEach().
function listarVinhos() {
    console.log(" LISTA COMPLETA DE VINHOS ");

    vinhos.forEach((vinho, indice) => {
        console.log(
            `${indice + 1}. Nome: ${vinho.nome} | ` +
            `Tipo: ${vinho.tipo} | ` +
            `Safra: ${vinho.safra} | ` +
            `Estoque: ${vinho.estoque} unidade(s)`
        );
    });
}

// vinhos com menos de 5 unidades usando filter().
function listarEstoqueBaixo() {
    const vinhosComEstoqueBaixo = vinhos.filter(
        (vinho) => vinho.estoque < 5
    );

    console.log(" VINHOS COM ESTOQUE ABAIXO DE 5 ");

    if (vinhosComEstoqueBaixo.length === 0) {
        console.log("Nenhum vinho está com estoque baixo.");
    } else {
        vinhosComEstoqueBaixo.forEach((vinho) => {
            console.log(
                `${vinho.nome}: ${vinho.estoque} unidade(s)`
            );
        });
    }

    return vinhosComEstoqueBaixo;
}

// calcula a quantidade total de garrafas utilizando reduce().
function calcularEstoqueTotal() {
    const totalEstoque = vinhos.reduce(
        (total, vinho) => total + vinho.estoque,
        0
    );

    console.log(" ESTOQUE TOTAL DA VINÍCOLA ");
    console.log(`Total de garrafas: ${totalEstoque}`);

    return totalEstoque;
}

function listarNomesEmCaixaAlta() {
    const nomesEmCaixaAlta = vinhos.map(
        (vinho) => vinho.nome.toUpperCase()
    );

    console.log(" NOMES DOS VINHOS EM CAIXA ALTA ");

    nomesEmCaixaAlta.forEach((nome) => {
        console.log(nome);
    });

    return nomesEmCaixaAlta;
}

// executar todos os relatórios.
function gerarRelatorios() {
    console.log("VINHERIA AGNELLO - RELATÓRIOS DE ESTOQUE");

    listarVinhos();
    listarEstoqueBaixo();
    calcularEstoqueTotal();
    listarNomesEmCaixaAlta();
}

adicionarVinho({
    nome: "Merlot da Casa",
    tipo: "tinto",
    safra: 2021,
    estoque: 2
});

gerarRelatorios();