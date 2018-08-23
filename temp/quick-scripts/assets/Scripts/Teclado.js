(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Teclado.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8e9a1PYIgpCxo8ZnUs4CSBv', 'Teclado', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Teclado.js.map
        