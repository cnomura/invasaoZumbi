"use strict";
cc._RF.push(module, 'ca44cyitBVNioSbkvvZMjMH', 'GeradorDeChefes');
// Scripts/GeradorDeChefes.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        chefePrefab: cc.Prefab,
        alvo: cc.Node,
        tempoParaGerar: cc.Float,
        _pontos: {
            default: [],
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        cc.director.getScene().on("adicionarAoGeradorDeChefes", this.adicionarPontoALista, this);
        this.schedule(this.gerar, this.tempoParaGerar);
    },

    adicionarPontoALista: function adicionarPontoALista(evento) {
        var ponto = evento.getUserData().node;
        this._pontos.push(ponto);
    },

    gerar: function gerar() {
        var ponto = this.escolhePontoMaisDistante();
        var chefe = cc.instantiate(this.chefePrefab);
        chefe.parent = ponto.parent;
        chefe.position = ponto.position;
    },

    escolhePontoMaisDistante: function escolhePontoMaisDistante() {

        var maiorDistanciaCalculada = 0;
        var pontoMaisDistante = this._pontos[0];
        for (var i = 0; i < this._pontos.length; i++) {
            var pontoAtual = this._pontos[i];
            var vetorDistancia = pontoAtual.position.sub(this.alvo.position);
            var distancia = vetorDistancia.mag();
            if (distancia > maiorDistanciaCalculada) {
                maiorDistanciaCalculada = distancia;
                pontoMaisDistante = pontoAtual;
            }
        }
        return pontoMaisDistante;
    }
});

cc._RF.pop();