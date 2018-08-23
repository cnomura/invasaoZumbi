"use strict";
cc._RF.push(module, 'ef119ExvnhE/p6MgZ2KuNEV', 'AjusteZIndex');
// Scripts/AjusteZIndex.js

"use strict";

cc.Class({
    extends: cc.Component,

    update: function update(dt) {
        this.node.zIndex = -this.node.y;
    }
});

cc._RF.pop();