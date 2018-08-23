"use strict";
cc._RF.push(module, 'de0cb5n2yhOYZA4X54m2FZm', 'BarraDeVidaInimigo');
// Scripts/BarraDeVidaInimigo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _barraDeVida: cc.ProgressBar
    },

    onLoad: function onLoad() {
        this._barraDeVida = this.getComponent(cc.ProgressBar);
        this._barraDeVida.progress = 1;
        this.node.parent.on("atualizaVida", this.atualizaInface, this);
    },


    atualizaInface: function atualizaInface(evento) {
        var dados = evento.detail;
        this._barraDeVida.progress = dados.vidaAtual / dados.vidaMaxima;
    }
});

cc._RF.pop();