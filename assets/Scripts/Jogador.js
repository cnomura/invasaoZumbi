let Teclado = require("Teclado");
cc.Class({
    extends: cc.Component,

    properties: {
        tiro: cc.Prefab,
        vidaMaxima: cc.Float,

        _vidaAtual: cc.Float,
        _direcao: cc.Vec2,
        _movimentacao: cc.Component,
        _controleAnimacao: cc.Component,
        _canvas: cc.Canvas,
        _camera: cc.Node,
        _posicaoArma: cc.Node,
        _audioTiro: cc.AudioSource,
        _direcaoMouse: cc.Vec2,
        _eventoAtualizaVida: cc.Event.EventCustom,
        _jogoAcabou: cc.Event.EventCustom,
    },

    onLoad: function () {
        this._movimentacao = this.getComponent("Movimentacao");
        this._controleAnimacao = this.getComponent("ControleDeAnimacao");
        this._audioTiro = this.getComponent(cc.AudioSource);
        this._canvas = cc.find("Canvas");
        this._canvas.on("mousedown", this.atirar, this);
        this._canvas.on("mousemove", this.calcularDirecaoMouse, this);
        this._camera = cc.find("Camera");
        this.node.on("SofreDano", this.sofrerDano, this);
        this.node.on("RecuperarVida", this.recuperarVida, this);
        this._vidaAtual = this.vidaMaxima;
        this._posicaoArma = this.node.children[0];
        this._direcaoMouse = cc.Vec2.UP;
        this._eventoAtualizaVida = new cc.Event.EventCustom("JogadoraPerdeuVida", true);
        this._jogoAcabou = new cc.Event.EventCustom("JogoAcabou", true);
    },

    update: function (deltaTime) {
        this.andar();
        this.verficarTeclado();
        this.atualizaAnimacao();
    },

    andar: function () {
        this._movimentacao.setDirecao(this._direcao);
        this._movimentacao.andarPraFrente();
    },

    verficarTeclado: function () {
        this._direcao = cc.Vec2.ZERO;

        if (Teclado.estaPressionada(cc.KEY.a)) {
            this._direcao.x -= 1;
        }
        if (Teclado.estaPressionada(cc.KEY.d)) {
            this._direcao.x += 1;
        }

        if (Teclado.estaPressionada(cc.KEY.s)) {
            this._direcao.y -= 1;
        }
        if (Teclado.estaPressionada(cc.KEY.w)) {
            this._direcao.y += 1;
        }
    },

    atualizaAnimacao: function () {
        this._controleAnimacao.mudaAnimacao(this._direcaoMouse, this.estadoAtual());
    },

    sofrerDano: function (evento) {
        this._vidaAtual -= evento.detail.dano;

        this.disparaEventoGlobal(this._eventoAtualizaVida, {
            vidaAtual: this._vidaAtual,
            vidaMaxima: this.vidaMaxima
        });

        if (this._vidaAtual < 0) {
            this.disparaEventoGlobal(this._jogoAcabou);
        }
    },

    recuperarVida: function (evento) {
        this._vidaAtual += parseFloat(evento.detail.recuperar);
        this._vidaAtual = Math.min(this._vidaAtual, this.vidaMaxima);

        this.disparaEventoGlobal(this._eventoAtualizaVida, {
            vidaAtual: this._vidaAtual,
            vidaMaxima: this.vidaMaxima
        });

    },

    disparaEventoGlobal: function (evento, informacoes) {
        evento.setUserData(informacoes);
        this.node.dispatchEvent(evento);
    },

    estadoAtual: function (event) {
        let estado;
        if (this._direcao.mag() == 0) {
            estado = "Parado";
        } else {
            estado = "Andar";
        }
        return estado;
    },

    calcularDirecaoMouse: function (event) {
        let posicaoMouse = event.getLocation();
        posicaoMouse = new cc.Vec2(posicaoMouse.x, posicaoMouse.y);
        posicaoMouse = this._canvas.convertToNodeSpaceAR(posicaoMouse);
        let posicaoJogadora = this._camera.convertToNodeSpaceAR(this.node.position);

        let direcao = posicaoMouse.sub(posicaoJogadora);
        this._direcaoMouse = direcao;
    },

    atirar: function (event) {
        let direcao = this._direcaoMouse;
        let disparo = cc.instantiate(this.tiro);
        disparo.getComponent("Tiro").iniciliza(this.node.parent,
            this._posicaoArma.position.add(this.node.position),
            direcao);

        this._audioTiro.play();
    },
});