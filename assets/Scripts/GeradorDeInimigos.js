cc.Class({
    extends: cc.Component,

    properties: {
        tempoParaGerar: cc.Float,
        inimigoPrefab: cc.Prefab,
        raio: cc.Float,
        _distanciaMinima: cc.Float,
        _limitador: cc.Component,
    },

    onLoad: function () {
        this.schedule(this.gerar, this.tempoParaGerar);
        let resolucao = cc.director.getVisibleSize();
        let metadeDaLargura = resolucao.width / 2;
        this._distanciaMinima = metadeDaLargura;
        cc.director.getScene().on("receberOLimitadorDeZumbis", this.receberLimitador, this);
    },

    receberLimitador: function (evento) {
        this._limitador = evento.getUserData().limitador;
    },

    gerar: function () {
        if (this.possoGerar()) {
            let posicao = this.calcularPosicao();
            this._limitador.novoZumbi(this.node.parent, posicao);
        }
    },

    calcularPosicao: function () {
        let alcance = new cc.Vec2(Math.random() - 0.5, Math.random() - 0.5);
        alcance = alcance.normalize();
        alcance = alcance.mul(this.raio * Math.random());

        let posicao = this.node.position.add(alcance);
        return posicao;
    },
    
    possoGerar: function () {
        let distanciaAtual = this.node.position.sub(cc.Camera.main.node.position);
        distanciaAtual = distanciaAtual.mag();
        let longeOSuficiente = distanciaAtual > this._distanciaMinima;
        return longeOSuficiente;
    }
});