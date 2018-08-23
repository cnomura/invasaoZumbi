cc.Class({
    extends: cc.Component,

    properties: {
        chefePrefab: cc.Prefab,
        alvo: cc.Node,
        tempoParaGerar: cc.Float,
        _pontos: {
            default: [],
            type: cc.Node
        }
    },


    onLoad: function () {
        cc.director.getScene().on("adicionarAoGeradorDeChefes", this.adicionarPontoALista, this);
        this.schedule(this.gerar, this.tempoParaGerar);
    },

    adicionarPontoALista: function (evento) {
        let ponto = evento.getUserData().node;
        this._pontos.push(ponto);
    },

    gerar: function () {
        let ponto = this.escolhePontoMaisDistante();
        let chefe = cc.instantiate(this.chefePrefab);
        chefe.parent = ponto.parent;
        chefe.position = ponto.position;
    },

    escolhePontoMaisDistante: function () {

        let maiorDistanciaCalculada = 0;
        let pontoMaisDistante = this._pontos[0];
        for (let i = 0; i < this._pontos.length; i++) {
            let pontoAtual = this._pontos[i];
            let vetorDistancia = pontoAtual.position.sub(this.alvo.position);
            let distancia = vetorDistancia.mag();
            if (distancia > maiorDistanciaCalculada) {
                maiorDistanciaCalculada = distancia;
                pontoMaisDistante = pontoAtual;
            }
        }
        return pontoMaisDistante;
    }
});