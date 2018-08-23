"use strict";
cc._RF.push(module, 'adcf84amnJBEpnwEZ6JN6lo', 'Pontucao');
// Scripts/Pontucao.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _mortos: 0,
        textoPontucao: cc.Label
    },

    onLoad: function onLoad() {
        this._mortos = 0;
        this.textoPontucao = this.getComponent(cc.Label);
        this.textoPontucao.string = this._mortos;

        cc.director.getScene().on("ZumbiMorreu", this.somarPontuacao, this);
    },


    somarPontuacao: function somarPontuacao() {
        this._mortos++;
        this.textoPontucao.string = this._mortos;
    }
});

cc._RF.pop();