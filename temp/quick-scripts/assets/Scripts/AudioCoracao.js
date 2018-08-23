(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/AudioCoracao.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f2b066g1OBF54YcgNYxvJy0', 'AudioCoracao', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=AudioCoracao.js.map
        