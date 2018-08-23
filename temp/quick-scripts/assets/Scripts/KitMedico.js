(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/KitMedico.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '596d1RcQWlEBbFrVVsCv5Jc', 'KitMedico', __filename);
// Scripts/KitMedico.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        cura: cc.Float
    },

    onCollisionEnter: function onCollisionEnter(outro) {
        outro.node.emit("RecuperarVida", {
            recuperar: this.cura
        });
        this.node.destroy();
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
        //# sourceMappingURL=KitMedico.js.map
        