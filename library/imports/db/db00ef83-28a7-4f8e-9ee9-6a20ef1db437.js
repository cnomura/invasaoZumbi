"use strict";
cc._RF.push(module, 'db00e+DKKdPjp7paiDvHbQ3', 'Inimigo');
// Scripts/Inimigo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        alvo: cc.Node,
        dano: cc.Float,
        distanciaPerseguir: cc.Float,
        distanciaAtaque: cc.Float,
        tempoVagar: cc.Float,
        direcaoVagar: cc.Vec2,
        vidaMaxima: cc.Float,

        _vidaAtual: cc.Float,
        _movimentacao: cc.Component,
        _controleAnimacao: cc.Component,
        _gameOver: cc.Node,
        _tempoRestanteParaVagar: cc.Float,
        _atacando: cc.Boolean,
        _vivo: cc.Boolean
    },

    onLoad: function onLoad() {
        this._movimentacao = this.getComponent("Movimentacao");
        this._controleAnimacao = this.getComponent("ControleDeAnimacao");
        this.audioMorte = this.getComponent(cc.AudioSource);

        this.alvo = cc.find("Personagens/Personagem");
        this.node.on("SofrerDano", this.sofrerDano, this);
        this.inicializa();
    },

    reuse: function reuse() {
        this.inicializa();
    },

    inicializa: function inicializa() {
        this._tempoRestanteParaVagar = this.tempoVagar;
        this.direcaoVagar = cc.Vec2.UP;

        this._vidaAtual = this.vidaMaxima;
        this._atacando = false;
        this._vivo = true;

        this.node.emit("atualizaVida", {
            vidaAtual: this._vidaAtual,
            vidaMaxima: this.vidaMaxima
        });
    },

    update: function update(deltaTime) {
        if (this._vivo && !this._atacando) {
            this._tempoRestanteParaVagar -= deltaTime;
            var direcaoAlvo = this.alvo.position.sub(this.node.position);
            var distancia = direcaoAlvo.mag();

            if (distancia < this.distanciaAtaque) {
                this.iniciarAtaque(direcaoAlvo);
            } else if (distancia < this.distanciaPerseguir) {
                this.andar(direcaoAlvo);
            } else {
                this.vagar();
            }
        }
    },

    andar: function andar(direcao) {
        this._controleAnimacao.mudaAnimacao(direcao, "Andar");
        this._movimentacao.setDirecao(direcao);
        this._movimentacao.andarPraFrente();
    },

    iniciarAtaque: function iniciarAtaque(direcao) {
        this._controleAnimacao.mudaAnimacao(direcao, "Atacar");
        this._atacando = true;
    },

    atacar: function atacar(direcao) {
        this.alvo.emit("SofreDano", {
            dano: this.dano
        });
        this._atacando = false;
    },

    vagar: function vagar() {
        if (this._tempoRestanteParaVagar < 0) {
            this.direcaoVagar = new cc.Vec2(Math.random() - 0.5, Math.random() - 0.5);
            this._tempoRestanteParaVagar = this.tempoVagar;
        }
        this.andar(this.direcaoVagar);
    },

    sofrerDano: function sofrerDano(evento) {
        this._vidaAtual -= evento.detail.dano;
        this.node.emit("atualizaVida", {
            vidaAtual: this._vidaAtual,
            vidaMaxima: this.vidaMaxima
        });
        if (this._vidaAtual < 0) {
            this.morrer();
        }
    },

    morrer: function morrer() {
        this._controleAnimacao.mudaAnimacao(cc.Vec2.UP.mul(-1), "Morte");
        this._vivo = false;
    },

    destruir: function destruir() {
        this.node.emit("SoltarItem");
        var eventoMorte = new cc.Event.EventCustom("ZumbiMorreu", true);
        eventoMorte.setUserData(this.node);
        this.node.dispatchEvent(eventoMorte);
    }
});

cc._RF.pop();