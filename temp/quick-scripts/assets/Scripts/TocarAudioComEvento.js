(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/TocarAudioComEvento.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5a5f1FK7d1P35r7SFZujCgl', 'TocarAudioComEvento', __filename);
// Scripts/TocarAudioComEvento.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        evento: cc.String,
        _audio: cc.AudioSource
    },

    onLoad: function onLoad() {
        this._audio = this.getComponent(cc.AudioSource);
        cc.director.getScene().on(this.evento, this.tocarAudio, this);
    },


    tocarAudio: function tocarAudio() {
        this._audio.play();
    }
});

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
        //# sourceMappingURL=TocarAudioComEvento.js.map
        