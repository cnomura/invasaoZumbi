cc.Class({
    extends: cc.Component,

    properties: {
        anguloDiagonal: cc.Float,
        _animacao: cc.Animation,
        _senoMinimo: cc.Float,
        _cossenoMinimo: cc.Float,
    },

    onLoad: function () {
        this._animacao = this.getComponent(cc.Animation);
        this._animacao.play("AndarBaixo");

        this._senoMinimo = Math.sin(cc.degreesToRadians(this.anguloDiagonal));
        this._cossenoMinimo = Math.cos(cc.degreesToRadians(90 - this.anguloDiagonal));
    },

    mudaAnimacao: function (direcao, estado) {
        let proximaAnimacao = estado;

        let angulo = Math.atan2(direcao.y, direcao.x);

        let cosseno = Math.cos(angulo);
        cosseno = Math.abs(cosseno);

        let seno = Math.sin(angulo);
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