"use strict";
cc._RF.push(module, '78533v1eK9PB4DG25oz1Jdw', 'PontoDeNascimentoChefe');
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