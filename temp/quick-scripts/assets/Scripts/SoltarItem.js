(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/SoltarItem.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '68d5f0jEuRMCrwsYZdNbSMR', 'SoltarItem', __filename);
// Scripts/SoltarItem.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        item: cc.Prefab,
        chanceDeSoltar: {
            default: 0.5,
            type: cc.Float,
            slide: true,
            range: [0, 1]
        }
    },
    onLoad: function onLoad() {
        this.node.on("SoltarItem", this.soltarItem, this);
    },

    soltarItem: function soltarItem() {
        if (this.devoSoltar()) {
            var item = cc.instantiate(this.item);
            item.parent = this.node.parent;
            item.position = this.node.position;
        }
    },

    devoSoltar: function devoSoltar() {
        return Math.random() < this.chanceDeSoltar;
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
        //# sourceMappingURL=SoltarItem.js.map
        