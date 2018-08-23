cc.Class({
    extends: cc.Component,

    properties: {
        _gameOver: cc.Node,
        _possoReiniciar: false,
    },

    onLoad: function () {
        cc.director.resume();

        this._gameOver = cc.find("Interface/GameOver");
        this._possoReiniciar = false;
        let canvas = cc.find("Canvas");
        canvas.on("mousedown", this.jogarNovamente, this);
        cc.director.getScene().on("JogoAcabou", this.jogoAcabou, this);

    },

    jogarNovamente: function () {
        if (this._possoReiniciar) {
            cc.director.loadScene("Jogo");
        }
    },

    jogoAcabou: function () {
        this._possoReiniciar = true;
        cc.director.pause();
        this._gameOver.active = true;
    }
});