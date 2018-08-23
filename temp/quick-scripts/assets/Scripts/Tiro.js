(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Tiro.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c5766ild89G/6LN/rGws++G', 'Tiro', __filename);
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
        //# sourceMappingURL=Tiro.js.map
        