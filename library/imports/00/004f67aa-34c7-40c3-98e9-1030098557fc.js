"use strict";
cc._RF.push(module, '004f6eqNMdAw5jpEDAJhVf8', 'BarraDeVida');
// Scripts/BarraDeVida.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        barraDeVida: cc.ProgressBar
    },

    onLoad: function onLoad() {
        this.barraDeVida = this.getComponent(cc.ProgressBar);
        cc.director.getScene().on("JogadoraPerdeuVida", this.atualizaBarraDeVida, this);
    },


    atualizaBarraDeVida: function atualizaBarraDeVida(evento) {
        var dados = evento.getUserData();
        this.barraDeVida.progress = dados.vidaAtual / dados.vidaMaxima;
    }
});

cc._RF.pop();