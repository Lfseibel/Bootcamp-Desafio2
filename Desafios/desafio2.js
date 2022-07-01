"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Pedreiro"] = 0] = "Pedreiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
})(Profissao || (Profissao = {}));
let pessoa = {
    name: "Maria",
    idade: 10,
    profissao: Profissao.Pedreiro,
};
