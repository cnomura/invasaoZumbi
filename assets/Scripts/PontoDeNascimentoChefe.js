cc.Class({
    extends: cc.Component,

    start: function () {
        let evento = new cc.Event.EventCustom("adicionarAoGeradorDeChefes", true);
        evento.setUserData({
            node: this.node
        });
        this.node.dispatchEvent(evento);
    }
});