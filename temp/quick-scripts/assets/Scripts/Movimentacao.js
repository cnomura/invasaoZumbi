(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Movimentacao.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9d4cb8EmZNF+Ih0N1m0amIH', 'Movimentacao', __filename);
// Scripts/Movimentacao.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        _direcao: cc.Vec2,
        velocidade: cc.Float,
        _deltaTime: 0
    },

    update: function update(deltaTime) {
        this._deltaTime = deltaTime;
    },
    andarPraFrente: function andarPraFrente() {
        this._andar(1);
    },

    andarPraTras: function andarPraTras() {
        this._andar(-1);
    },

    _andar: function _andar(sentido) {
        var deslocamento = this._direcao.mul(sentido * this._deltaTime * this.velocidade);
        this.node.position = this.node.position.add(deslocamento);
    },

    setDirecao: function setDirecao(direcao) {
        this._direcao = direcao.normalize();
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
        //# sourceMappingURL=Movimentacao.js.map
        