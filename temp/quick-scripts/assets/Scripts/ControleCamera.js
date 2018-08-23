(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/ControleCamera.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7a912MmNEtHM6+Z3JSNdKUT', 'ControleCamera', __filename);
// Scripts/ControleCamera.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        alvo: cc.Node
    },

    update: function update(dt) {
        this.node.position = this.alvo.position;
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
        //# sourceMappingURL=ControleCamera.js.map
        