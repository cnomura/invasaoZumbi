(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/CarregarCena.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fe0f1tCPX9JypdDreY3RXc2', 'CarregarCena', __filename);
// Scripts/CarregarCena.js

"use strict";

cc.Class({
    extends: cc.Component,

    carregarCenaComAnimacao: function carregarCenaComAnimacao(nomeCena) {
        cc.director.loadScene(nomeCena);
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
        //# sourceMappingURL=CarregarCena.js.map
        