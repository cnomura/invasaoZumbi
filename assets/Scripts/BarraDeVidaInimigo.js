cc.Class({
    extends: cc.Component,

    properties: {
        _barraDeVida: cc.ProgressBar,
    },

    onLoad() {
        this._barraDeVida = this.getComponent(cc.ProgressBar);
        this._barraDeVida.progress = 1;
        this.node.parent.on("atualizaVida", this.atualizaInface, this);
    },

    atualizaInface: function (evento) {
        let dados = evento.detail;
        this._barraDeVida.progress = dados.vidaAtual / dados.vidaMaxima;
    }
});