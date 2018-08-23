cc.Class({
    extends: cc.Component,

    properties: {
        vidaMinima: {
            type: cc.Float,
            default: .5,
            range: [0, 1],
            slide: true,
        },
        _audioCoracao: cc.AudioSource,
    },

    onLoad() {
        this._audioCoracao = this.getComponent(cc.AudioSource);
        cc.director.getScene().on("JogadoraPerdeuVida", this.tocarAudio, this);
    },

    tocarAudio: function (evento) {
        let dados = evento.getUserData();
        let vidaRestante = dados.vidaAtual / dados.vidaMaxima;
        if (vidaRestante < this.vidaMinima && !this._audioCoracao.isPlaying) {
            this._audioCoracao.loop = true;
            this._audioCoracao.play();
        }
    }
});