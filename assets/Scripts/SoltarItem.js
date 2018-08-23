cc.Class({
    extends: cc.Component,

    properties: {
        item: cc.Prefab,
        chanceDeSoltar: {
            default: 0.5,
            type: cc.Float,
            slide: true,
            range: [0, 1],
        }
    },
    onLoad: function () {
        this.node.on("SoltarItem", this.soltarItem, this);
    },

    soltarItem: function () {
        if (this.devoSoltar()) {
            let item = cc.instantiate(this.item);
            item.parent = this.node.parent;
            item.position = this.node.position;
        }
    },

    devoSoltar: function () {
        return Math.random() < this.chanceDeSoltar;
    }
});