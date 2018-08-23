cc.Class({
    extends: cc.Component,

    properties: {
        evento: cc.String,
        _audio: cc.AudioSource
    },
    
    onLoad() {
        this._audio = this.getComponent(cc.AudioSource);
        cc.director.getScene().on(this.evento, this.tocarAudio, this);
    },

    tocarAudio: function () {
        this._audio.play();
    }
});