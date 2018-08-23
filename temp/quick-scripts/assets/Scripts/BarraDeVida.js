(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/BarraDeVida.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '004f6eqNMdAw5jpEDAJhVf8', 'BarraDeVida', __filename);
// Scripts/BarraDeVida.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        barraDeVida: cc.ProgressBar
    },

    onLoad: function onLoad() {
        this.barraDeVida = this.getComponent(cc.ProgressBar);
        cc.director.getScene().on("JogadoraPerdeuVida", this.atualizaBarraDeVida, this);
    },


    atualizaBarraDeVida: function atualizaBarraDeVida(evento) {
        var dados = evento.getUserData();
        this.barraDeVida.progress = dados.vidaAtual / dados.vidaMaxima;
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
        //# sourceMappingURL=BarraDeVida.js.map
        