(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/GeradorDeChefes.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ca44cyitBVNioSbkvvZMjMH', 'GeradorDeChefes', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GeradorDeChefes.js.map
        