(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Pontucao.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'adcf84amnJBEpnwEZ6JN6lo', 'Pontucao', __filename);
// Scripts/Pontucao.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _mortos: 0,
        textoPontucao: cc.Label
    },

    onLoad: function onLoad() {
        this._mortos = 0;
        this.textoPontucao = this.getComponent(cc.Label);
        this.textoPontucao.string = this._mortos;

        cc.director.getScene().on("ZumbiMorreu", this.somarPontuacao, this);
    },


    somarPontuacao: function somarPontuacao() {
        this._mortos++;
        this.textoPontucao.string = this._mortos;
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
        //# sourceMappingURL=Pontucao.js.map
        