"use strict";
cc._RF.push(module, '68d5f0jEuRMCrwsYZdNbSMR', 'SoltarItem');
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