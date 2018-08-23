cc.Class({
    extends: cc.Component,

    properties: {
        _mortos: 0,
        textoPontucao: cc.Label,
    },

    onLoad() {
        this._mortos = 0;
        this.textoPontucao = this.getComponent(cc.Label);
        this.textoPontucao.string = this._mortos;

        cc.director.getScene().on("ZumbiMorreu", this.somarPontuacao, this);
    },

    somarPontuacao: function () {
        this._mortos++;
        this.textoPontucao.string = this._mortos;
    }
});