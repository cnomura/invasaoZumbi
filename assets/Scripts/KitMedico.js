cc.Class({
    extends: cc.Component,

    properties: {
        cura: cc.Float,
    },

    onCollisionEnter: function (outro) {
        outro.node.emit("RecuperarVida", {
            recuperar: this.cura
        });
        this.node.destroy();
    }
});