(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/GameOver.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1b807vnoH9LdaCzxB7Kc53C', 'GameOver', __filename);
// Scripts/GameOver.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _gameOver: cc.Node,
        _possoReiniciar: false
    },

    onLoad: function onLoad() {
        cc.director.resume();

        this._gameOver = cc.find("Interface/GameOver");
        this._possoReiniciar = false;
        var canvas = cc.find("Canvas");
        canvas.on("mousedown", this.jogarNovamente, this);
        cc.director.getScene().on("JogoAcabou", this.jogoAcabou, this);
    },

    jogarNovamente: function jogarNovamente() {
        if (this._possoReiniciar) {
            cc.director.loadScene("Jogo");
        }
    },

    jogoAcabou: function jogoAcabou() {
        this._possoReiniciar = true;
        cc.director.pause();
        this._gameOver.active = true;
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
        //# sourceMappingURL=GameOver.js.map
        