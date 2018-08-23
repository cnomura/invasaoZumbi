"use strict";
cc._RF.push(module, '7a912MmNEtHM6+Z3JSNdKUT', 'ControleCamera');
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