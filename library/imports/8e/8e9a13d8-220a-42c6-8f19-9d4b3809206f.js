"use strict";
cc._RF.push(module, '8e9a1PYIgpCxo8ZnUs4CSBv', 'Teclado');
// Scripts/Teclado.js

"use strict";

var Teclado = cc.Class({
    extends: cc.Component,

    statics: {
        _teclas: [],
        estaPressionada: function estaPressionada(tecla) {
            if (Teclado._teclas.indexOf(tecla) != -1) {
                return true;
            }
            return false;
        }
    },

    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);
    },


    teclaPressionada: function teclaPressionada(event) {
        if (Teclado._teclas.indexOf(event.keyCode) == -1) {
            Teclado._teclas.push(event.keyCode);
        }
    },

    teclaSolta: function teclaSolta(event) {
        var index = Teclado._teclas.indexOf(event.keyCode);
        Teclado._teclas.splice(index, 1);
    }
});
module.exports = Teclado;

cc._RF.pop();