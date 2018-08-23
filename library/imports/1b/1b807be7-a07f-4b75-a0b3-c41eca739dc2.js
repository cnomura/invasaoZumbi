"use strict";
cc._RF.push(module, '1b807vnoH9LdaCzxB7Kc53C', 'GameOver');
// Scripts/GameOver.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _gameOver: cc.Node,
        _possoReiniciar: false
    },

    onLoad: function onLoad() {
        cc.director.resume();

        this._gameOver = cc.find("Interface/GameOver");
        this._possoReiniciar = false;
        var canvas = cc.find("Canvas");
        canvas.on("mousedown", this.jogarNovamente, this);
        cc.director.getScene().on("JogoAcabou", this.jogoAcabou, this);
    },

    jogarNovamente: function jogarNovamente() {
        if (this._possoReiniciar) {
            cc.director.loadScene("Jogo");
        }
    },

    jogoAcabou: function jogoAcabou() {
        this._possoReiniciar = true;
        cc.director.pause();
        this._gameOver.active = true;
    }
});

cc._RF.pop();