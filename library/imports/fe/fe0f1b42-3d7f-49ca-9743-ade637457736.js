"use strict";
cc._RF.push(module, 'fe0f1tCPX9JypdDreY3RXc2', 'CarregarCena');
// Scripts/CarregarCena.js

"use strict";

cc.Class({
    extends: cc.Component,

    carregarCenaComAnimacao: function carregarCenaComAnimacao(nomeCena) {
        cc.director.loadScene(nomeCena);
    }
});

cc._RF.pop();