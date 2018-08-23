"use strict";
cc._RF.push(module, '60d0fCLkAFIRr284jJjKFgt', 'GeradorDeInimigos');
// Scripts/GeradorDeInimigos.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        tempoParaGerar: cc.Float,
        inimigoPrefab: cc.Prefab,
        raio: cc.Float,
        _distanciaMinima: cc.Float,
        _limitador: cc.Component
    },

    onLoad: function onLoad() {
        this.schedule(this.gerar, this.tempoParaGerar);
        var resolucao = cc.director.getVisibleSize();
        var metadeDaLargura = resolucao.width / 2;
        this._distanciaMinima = metadeDaLargura;
        cc.director.getScene().on("receberOLimitadorDeZumbis", this.receberLimitador, this);
    },

    receberLimitador: function receberLimitador(evento) {
        this._limitador = evento.getUserData().limitador;
    },

    gerar: function gerar() {
        if (this.possoGerar()) {
            var posicao = this.calcularPosicao();
            this._limitador.novoZumbi(this.node.parent, posicao);
        }
    },

    calcularPosicao: function calcularPosicao() {
        var alcance = new cc.Vec2(Math.random() - 0.5, Math.random() - 0.5);
        alcance = alcance.normalize();
        alcance = alcance.mul(this.raio * Math.random());

        var posicao = this.node.position.add(alcance);
        return posicao;
    },

    possoGerar: function possoGerar() {
        var distanciaAtual = this.node.position.sub(cc.Camera.main.node.position);
        distanciaAtual = distanciaAtual.mag();
        var longeOSuficiente = distanciaAtual > this._distanciaMinima;
        return longeOSuficiente;
    }
});

cc._RF.pop();