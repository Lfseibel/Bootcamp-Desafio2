enum Profissao {
  Pedreiro,
  Atriz,
}

interface IPessoa {
  name: string;
  idade: number;
  profissao: Profissao;
}

let pessoa: IPessoa = {
  name: "Maria",
  idade: 10,
  profissao: Profissao.Pedreiro,
};
