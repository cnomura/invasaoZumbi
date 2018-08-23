"use strict";
cc._RF.push(module, 'b6b36Y+vbpIrY6QZipzLfV0', 'LimitadorDeMovimento');
// Scripts/LimitadorDeMovimento.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        limiteMinimo: cc.Vec2,
        limiteMaximo: cc.Vec2,
        usarResolucao: false
    },

    onLoad: function onLoad() {
        if (this.usarResolucao) {
            var resolucao = cc.director.getVisibleSize();
            var metadeDaAltura = resolucao.height / 2;
            var metadeDaLargura = resolucao.width / 2;

            this.limiteMinimo.x += metadeDaLargura;
            this.limiteMinimo.y += metadeDaAltura;

            this.limiteMaximo.x -= metadeDaLargura;
            this.limiteMaximo.y -= metadeDaAltura;
        }
    },

    update: function update(dt) {
        if (this.node.position.x < this.limiteMinimo.x) {
            this.node.x = this.limiteMinimo.x;
        } else if (this.node.position.x > this.limiteMaximo.x) {
            this.node.x = this.limiteMaximo.x;
        }

        if (this.node.position.y < this.limiteMinimo.y) {
            this.node.y = this.limiteMinimo.y;
        } else if (this.node.position.y > this.limiteMaximo.y) {
            this.node.y = this.limiteMaximo.y;
        }
    }
});

cc._RF.pop();