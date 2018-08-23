cc.Class({
    extends: cc.Component,

    properties: {
        alvo: cc.Node,
    },

    update(dt) {
        this.node.position = this.alvo.position;
    },
});