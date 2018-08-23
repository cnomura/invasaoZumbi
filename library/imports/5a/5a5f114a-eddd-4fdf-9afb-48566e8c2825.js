"use strict";
cc._RF.push(module, '5a5f1FK7d1P35r7SFZujCgl', 'TocarAudioComEvento');
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