cc.Class({
    extends: cc.Component,

    update(dt) {
        this.node.zIndex = -this.node.y;
    },
});