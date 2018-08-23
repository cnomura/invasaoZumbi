"use strict";
cc._RF.push(module, 'c5766ild89G/6LN/rGws++G', 'Tiro');
// Scripts/Tiro.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        dano: cc.Float,
        _movimentacao: cc.Component
    },

    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        this._movimentacao = this.getComponent("Movimentacao");
    },

    update: function update() {
        this._movimentacao.andarPraFrente();
    },

    iniciliza: function iniciliza(pai, posicao, direcao) {
        this.node.parent = pai;
        this.node.position = posicao;
        this._movimentacao.setDirecao(direcao);
    },

    onCollisionEnter: function onCollisionEnter(outro) {
        outro.node.emit("SofrerDano", {
            dano: this.dano
        });
        this.node.destroy();
    }
});

cc._RF.pop();