(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/PontoDeNascimentoChefe.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '78533v1eK9PB4DG25oz1Jdw', 'PontoDeNascimentoChefe', __filename);
// Scripts/PontoDeNascimentoChefe.js

"use strict";

cc.Class({
    extends: cc.Component,

    start: function start() {
        var evento = new cc.Event.EventCustom("adicionarAoGeradorDeChefes", true);
        evento.setUserData({
            node: this.node
        });
        this.node.dispatchEvent(evento);
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
        //# sourceMappingURL=PontoDeNascimentoChefe.js.map
        