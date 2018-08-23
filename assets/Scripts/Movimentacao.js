cc.Class({
    extends: cc.Component,

    properties: {
        _direcao: cc.Vec2,
        velocidade: cc.Float,
        _deltaTime: 0,
    },

    update: function (deltaTime) {
        this._deltaTime = deltaTime;
    },
    andarPraFrente: function () {
        this._andar(1);
    },

    andarPraTras: function () {
        this._andar(-1);
    },

    _andar: function (sentido) {
        let deslocamento = this._direcao.mul(sentido * this._deltaTime * this.velocidade);
        this.node.position = this.node.position.add(deslocamento);
    },

    setDirecao: function (direcao) {
        this._direcao = direcao.normalize();
    }
});