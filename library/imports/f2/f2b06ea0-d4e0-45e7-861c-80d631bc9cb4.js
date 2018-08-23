"use strict";
cc._RF.push(module, 'f2b066g1OBF54YcgNYxvJy0', 'AudioCoracao');
// Scripts/AudioCoracao.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        vidaMinima: {
            type: cc.Float,
            default: .5,
            range: [0, 1],
            slide: true
        },
        _audioCoracao: cc.AudioSource
    },

    onLoad: function onLoad() {
        this._audioCoracao = this.getComponent(cc.AudioSource);
        cc.director.getScene().on("JogadoraPerdeuVida", this.tocarAudio, this);
    },


    tocarAudio: function tocarAudio(evento) {
        var dados = evento.getUserData();
        var vidaRestante = dados.vidaAtual / dados.vidaMaxima;
        if (vidaRestante < this.vidaMinima && !this._audioCoracao.isPlaying) {
            this._audioCoracao.loop = true;
            this._audioCoracao.play();
        }
    }
});

cc._RF.pop();