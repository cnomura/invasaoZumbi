cc.Class({
    extends: cc.Component,

    properties: {
        limiteMinimo: cc.Vec2,
        limiteMaximo: cc.Vec2,
        usarResolucao: false,
    },

    onLoad: function () {
        if (this.usarResolucao) {
            let resolucao = cc.director.getVisibleSize();
            let metadeDaAltura = resolucao.height / 2;
            let metadeDaLargura = resolucao.width / 2;

            this.limiteMinimo.x += metadeDaLargura;
            this.limiteMinimo.y += metadeDaAltura;

            this.limiteMaximo.x -= metadeDaLargura;
            this.limiteMaximo.y -= metadeDaAltura;
        }
    },

    update(dt) {
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
    },
});