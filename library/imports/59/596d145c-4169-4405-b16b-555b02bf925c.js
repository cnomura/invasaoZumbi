"use strict";
cc._RF.push(module, '596d1RcQWlEBbFrVVsCv5Jc', 'KitMedico');
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