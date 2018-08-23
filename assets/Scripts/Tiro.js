cc.Class({
    extends: cc.Component,

    properties: {
        dano: cc.Float,
        _movimentacao: cc.Component,
    },

    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
        this._movimentacao = this.getComponent("Movimentacao");
    },
    
    update: function () {
        this._movimentacao.andarPraFrente();
    },

    iniciliza: function (pai, posicao, direcao) {
        this.node.parent = pai;
        this.node.position = posicao;
        this._movimentacao.setDirecao(direcao);
    },

    onCollisionEnter: function (outro) {
        outro.node.emit("SofrerDano", {
            dano: this.dano
        });
        this.node.destroy();
    }
});