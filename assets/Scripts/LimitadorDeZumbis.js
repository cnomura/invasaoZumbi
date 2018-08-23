cc.Class({
    extends: cc.Component,

    properties: {
        limiteDeZumbis: cc.Float,
        zumbiPrefab: cc.Prefab,
        _listaDeZumbis: cc.NodePool,
    },

    onLoad: function () {
        cc.director.getScene().on("ZumbiMorreu", this.devolverZumbi, this);
        this._listaDeZumbis = new cc.NodePool("Inimigo");

        for (let i = 0; i < this.limiteDeZumbis; i++) {
            let zumbi = cc.instantiate(this.zumbiPrefab);
            this._listaDeZumbis.put(zumbi);
        }
    },

    start: function () {
        let evento = new cc.Event.EventCustom("receberOLimitadorDeZumbis", true);
        evento.setUserData({
            limitador: this
        });
        this.node.dispatchEvent(evento);
    },

    devolverZumbi: function (evento) {
        let zumbi = evento.getUserData();
        this._listaDeZumbis.put(zumbi);
    },

    novoZumbi: function (pai, posicao) {
        let zumbi = this._listaDeZumbis.get();
        if (zumbi != null) {
            zumbi.parent = pai;
            zumbi.position = posicao;
        }
    }
});