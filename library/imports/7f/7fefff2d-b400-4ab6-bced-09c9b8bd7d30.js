"use strict";
cc._RF.push(module, '7feff8ttABKtrztCcm4vX0w', 'ColisaoCenario');
// Scripts/ColisaoCenario.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _movimentacao: cc.Component
    },

    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        this._movimentacao = this.getComponent("Movimentacao");
    },

    onCollisionStay: function onCollisionStay(outro) {
        if (outro.node.group == "cenario") {

            this._movimentacao.andarPraTras();
        }
    }
});

cc._RF.pop();