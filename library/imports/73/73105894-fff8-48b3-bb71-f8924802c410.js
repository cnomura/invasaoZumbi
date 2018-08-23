"use strict";
cc._RF.push(module, '73105iU//hIs7tx+JJIAsQQ', 'LimitadorDeZumbis');
// Scripts/LimitadorDeZumbis.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        limiteDeZumbis: cc.Float,
        zumbiPrefab: cc.Prefab,
        _listaDeZumbis: cc.NodePool
    },

    onLoad: function onLoad() {
        cc.director.getScene().on("ZumbiMorreu", this.devolverZumbi, this);
        this._listaDeZumbis = new cc.NodePool("Inimigo");

        for (var i = 0; i < this.limiteDeZumbis; i++) {
            var zumbi = cc.instantiate(this.zumbiPrefab);
            this._listaDeZumbis.put(zumbi);
        }
    },

    start: function start() {
        var evento = new cc.Event.EventCustom("receberOLimitadorDeZumbis", true);
        evento.setUserData({
            limitador: this
        });
        this.node.dispatchEvent(evento);
    },

    devolverZumbi: function devolverZumbi(evento) {
        var zumbi = evento.getUserData();
        this._listaDeZumbis.put(zumbi);
    },

    novoZumbi: function novoZumbi(pai, posicao) {
        var zumbi = this._listaDeZumbis.get();
        if (zumbi != null) {
            zumbi.parent = pai;
            zumbi.position = posicao;
        }
    }
});

cc._RF.pop();