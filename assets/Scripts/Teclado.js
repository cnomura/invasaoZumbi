let Teclado = cc.Class({
    extends: cc.Component,

    statics: {
        _teclas: [],
        estaPressionada: function (tecla) {
            if (Teclado._teclas.indexOf(tecla) != -1) {
                return true
            }
            return false;
        }
    },

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);
    },

    teclaPressionada: function (event) {
        if (Teclado._teclas.indexOf(event.keyCode) == -1) {
            Teclado._teclas.push(event.keyCode);
        }

    },

    teclaSolta: function (event) {
        let index = Teclado._teclas.indexOf(event.keyCode);
        Teclado._teclas.splice(index, 1);
    }
});
module.exports = Teclado;