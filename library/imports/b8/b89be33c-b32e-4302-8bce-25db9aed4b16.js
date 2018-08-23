"use strict";
cc._RF.push(module, 'b89beM8sy5DAovOJdua7UsW', 'ControleDeAnimacao');
// Scripts/ControleDeAnimacao.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        anguloDiagonal: cc.Float,
        _animacao: cc.Animation,
        _senoMinimo: cc.Float,
        _cossenoMinimo: cc.Float
    },

    onLoad: function onLoad() {
        this._animacao = this.getComponent(cc.Animation);
        this._animacao.play("AndarBaixo");

        this._senoMinimo = Math.sin(cc.degreesToRadians(this.anguloDiagonal));
        this._cossenoMinimo = Math.cos(cc.degreesToRadians(90 - this.anguloDiagonal));
    },

    mudaAnimacao: function mudaAnimacao(direcao, estado) {
        var proximaAnimacao = estado;

        var angulo = Math.atan2(direcao.y, direcao.x);

        var cosseno = Math.cos(angulo);
        cosseno = Math.abs(cosseno);

        var seno = Math.sin(angulo);
        seno = Math.abs(seno);

        if (cosseno > this._cossenoMinimo) {
            if (direcao.x > 0) {
                proximaAnimacao += "Direita";
            } else if (direcao.x < 0) {
                proximaAnimacao += "Esquerda";
            }
        }

        if (seno > this._senoMinimo) {
            if (direcao.y > 0) {
                proximaAnimacao += "Cima";
            } else if (direcao.y < 0) {
                proximaAnimacao += "Baixo";
            }
        }

        if (!this._animacao.getAnimationState(proximaAnimacao).isPlaying) {
            this._animacao.play(proximaAnimacao);
        }
    }
});

cc._RF.pop();