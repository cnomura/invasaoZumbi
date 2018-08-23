require=function c(n,s,r){function d(i,o){if(!s[i]){if(!n[i]){var t="function"==typeof require&&require;if(!o&&t)return t(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var e=s[i]={exports:{}};n[i][0].call(e.exports,function(o){return d(n[i][1][o]||o)},e,e.exports,c,n,s,r)}return s[i].exports}for(var u="function"==typeof require&&require,o=0;o<r.length;o++)d(r[o]);return d}({AjusteZIndex:[function(o,i,t){"use strict";cc._RF.push(i,"ef119ExvnhE/p6MgZ2KuNEV","AjusteZIndex"),cc.Class({extends:cc.Component,update:function(o){this.node.zIndex=-this.node.y}}),cc._RF.pop()},{}],AudioCoracao:[function(o,i,t){"use strict";cc._RF.push(i,"f2b066g1OBF54YcgNYxvJy0","AudioCoracao"),cc.Class({extends:cc.Component,properties:{vidaMinima:{type:cc.Float,default:.5,range:[0,1],slide:!0},_audioCoracao:cc.AudioSource},onLoad:function(){this._audioCoracao=this.getComponent(cc.AudioSource),cc.director.getScene().on("JogadoraPerdeuVida",this.tocarAudio,this)},tocarAudio:function(o){var i=o.getUserData();i.vidaAtual/i.vidaMaxima<this.vidaMinima&&!this._audioCoracao.isPlaying&&(this._audioCoracao.loop=!0,this._audioCoracao.play())}}),cc._RF.pop()},{}],BarraDeVidaInimigo:[function(o,i,t){"use strict";cc._RF.push(i,"de0cb5n2yhOYZA4X54m2FZm","BarraDeVidaInimigo"),cc.Class({extends:cc.Component,properties:{_barraDeVida:cc.ProgressBar},onLoad:function(){this._barraDeVida=this.getComponent(cc.ProgressBar),this._barraDeVida.progress=1,this.node.parent.on("atualizaVida",this.atualizaInface,this)},atualizaInface:function(o){var i=o.detail;this._barraDeVida.progress=i.vidaAtual/i.vidaMaxima}}),cc._RF.pop()},{}],BarraDeVida:[function(o,i,t){"use strict";cc._RF.push(i,"004f6eqNMdAw5jpEDAJhVf8","BarraDeVida"),cc.Class({extends:cc.Component,properties:{barraDeVida:cc.ProgressBar},onLoad:function(){this.barraDeVida=this.getComponent(cc.ProgressBar),cc.director.getScene().on("JogadoraPerdeuVida",this.atualizaBarraDeVida,this)},atualizaBarraDeVida:function(o){var i=o.getUserData();this.barraDeVida.progress=i.vidaAtual/i.vidaMaxima}}),cc._RF.pop()},{}],CarregarCena:[function(o,i,t){"use strict";cc._RF.push(i,"fe0f1tCPX9JypdDreY3RXc2","CarregarCena"),cc.Class({extends:cc.Component,carregarCenaComAnimacao:function(o){cc.director.loadScene(o)}}),cc._RF.pop()},{}],ColisaoCenario:[function(o,i,t){"use strict";cc._RF.push(i,"7feff8ttABKtrztCcm4vX0w","ColisaoCenario"),cc.Class({extends:cc.Component,properties:{_movimentacao:cc.Component},onLoad:function(){cc.director.getCollisionManager().enabled=!0,this._movimentacao=this.getComponent("Movimentacao")},onCollisionStay:function(o){"cenario"==o.node.group&&this._movimentacao.andarPraTras()}}),cc._RF.pop()},{}],ControleCamera:[function(o,i,t){"use strict";cc._RF.push(i,"7a912MmNEtHM6+Z3JSNdKUT","ControleCamera"),cc.Class({extends:cc.Component,properties:{alvo:cc.Node},update:function(o){this.node.position=this.alvo.position}}),cc._RF.pop()},{}],ControleDeAnimacao:[function(o,i,t){"use strict";cc._RF.push(i,"b89beM8sy5DAovOJdua7UsW","ControleDeAnimacao"),cc.Class({extends:cc.Component,properties:{anguloDiagonal:cc.Float,_animacao:cc.Animation,_senoMinimo:cc.Float,_cossenoMinimo:cc.Float},onLoad:function(){this._animacao=this.getComponent(cc.Animation),this._animacao.play("AndarBaixo"),this._senoMinimo=Math.sin(cc.degreesToRadians(this.anguloDiagonal)),this._cossenoMinimo=Math.cos(cc.degreesToRadians(90-this.anguloDiagonal))},mudaAnimacao:function(o,i){var t=i,a=Math.atan2(o.y,o.x),e=Math.cos(a);e=Math.abs(e);var c=Math.sin(a);c=Math.abs(c),e>this._cossenoMinimo&&(0<o.x?t+="Direita":o.x<0&&(t+="Esquerda")),c>this._senoMinimo&&(0<o.y?t+="Cima":o.y<0&&(t+="Baixo")),this._animacao.getAnimationState(t).isPlaying||this._animacao.play(t)}}),cc._RF.pop()},{}],GameOver:[function(o,i,t){"use strict";cc._RF.push(i,"1b807vnoH9LdaCzxB7Kc53C","GameOver"),cc.Class({extends:cc.Component,properties:{_gameOver:cc.Node,_possoReiniciar:!1},onLoad:function(){cc.director.resume(),this._gameOver=cc.find("Interface/GameOver"),this._possoReiniciar=!1,cc.find("Canvas").on("mousedown",this.jogarNovamente,this),cc.director.getScene().on("JogoAcabou",this.jogoAcabou,this)},jogarNovamente:function(){this._possoReiniciar&&cc.director.loadScene("Jogo")},jogoAcabou:function(){this._possoReiniciar=!0,cc.director.pause(),this._gameOver.active=!0}}),cc._RF.pop()},{}],GeradorDeChefes:[function(o,i,t){"use strict";cc._RF.push(i,"ca44cyitBVNioSbkvvZMjMH","GeradorDeChefes"),cc.Class({extends:cc.Component,properties:{chefePrefab:cc.Prefab,alvo:cc.Node,tempoParaGerar:cc.Float,_pontos:{default:[],type:cc.Node}},onLoad:function(){cc.director.getScene().on("adicionarAoGeradorDeChefes",this.adicionarPontoALista,this),this.schedule(this.gerar,this.tempoParaGerar)},adicionarPontoALista:function(o){var i=o.getUserData().node;this._pontos.push(i)},gerar:function(){var o=this.escolhePontoMaisDistante(),i=cc.instantiate(this.chefePrefab);i.parent=o.parent,i.position=o.position},escolhePontoMaisDistante:function(){for(var o=0,i=this._pontos[0],t=0;t<this._pontos.length;t++){var a=this._pontos[t],e=a.position.sub(this.alvo.position).mag();o<e&&(o=e,i=a)}return i}}),cc._RF.pop()},{}],GeradorDeInimigos:[function(o,i,t){"use strict";cc._RF.push(i,"60d0fCLkAFIRr284jJjKFgt","GeradorDeInimigos"),cc.Class({extends:cc.Component,properties:{tempoParaGerar:cc.Float,inimigoPrefab:cc.Prefab,raio:cc.Float,_distanciaMinima:cc.Float,_limitador:cc.Component},onLoad:function(){this.schedule(this.gerar,this.tempoParaGerar);var o=cc.director.getVisibleSize().width/2;this._distanciaMinima=o,cc.director.getScene().on("receberOLimitadorDeZumbis",this.receberLimitador,this)},receberLimitador:function(o){this._limitador=o.getUserData().limitador},gerar:function(){if(this.possoGerar()){var o=this.calcularPosicao();this._limitador.novoZumbi(this.node.parent,o)}},calcularPosicao:function(){var o=new cc.Vec2(Math.random()-.5,Math.random()-.5);return o=(o=o.normalize()).mul(this.raio*Math.random()),this.node.position.add(o)},possoGerar:function(){var o=this.node.position.sub(cc.Camera.main.node.position);return(o=o.mag())>this._distanciaMinima}}),cc._RF.pop()},{}],Inimigo:[function(o,i,t){"use strict";cc._RF.push(i,"db00e+DKKdPjp7paiDvHbQ3","Inimigo"),cc.Class({extends:cc.Component,properties:{alvo:cc.Node,dano:cc.Float,distanciaPerseguir:cc.Float,distanciaAtaque:cc.Float,tempoVagar:cc.Float,direcaoVagar:cc.Vec2,vidaMaxima:cc.Float,_vidaAtual:cc.Float,_movimentacao:cc.Component,_controleAnimacao:cc.Component,_gameOver:cc.Node,_tempoRestanteParaVagar:cc.Float,_atacando:cc.Boolean,_vivo:cc.Boolean},onLoad:function(){this._movimentacao=this.getComponent("Movimentacao"),this._controleAnimacao=this.getComponent("ControleDeAnimacao"),this.audioMorte=this.getComponent(cc.AudioSource),this.alvo=cc.find("Personagens/Personagem"),this.node.on("SofrerDano",this.sofrerDano,this),this.inicializa()},reuse:function(){this.inicializa()},inicializa:function(){this._tempoRestanteParaVagar=this.tempoVagar,this.direcaoVagar=cc.Vec2.UP,this._vidaAtual=this.vidaMaxima,this._atacando=!1,this._vivo=!0,this.node.emit("atualizaVida",{vidaAtual:this._vidaAtual,vidaMaxima:this.vidaMaxima})},update:function(o){if(this._vivo&&!this._atacando){this._tempoRestanteParaVagar-=o;var i=this.alvo.position.sub(this.node.position),t=i.mag();t<this.distanciaAtaque?this.iniciarAtaque(i):t<this.distanciaPerseguir?this.andar(i):this.vagar()}},andar:function(o){this._controleAnimacao.mudaAnimacao(o,"Andar"),this._movimentacao.setDirecao(o),this._movimentacao.andarPraFrente()},iniciarAtaque:function(o){this._controleAnimacao.mudaAnimacao(o,"Atacar"),this._atacando=!0},atacar:function(o){this.alvo.emit("SofreDano",{dano:this.dano}),this._atacando=!1},vagar:function(){this._tempoRestanteParaVagar<0&&(this.direcaoVagar=new cc.Vec2(Math.random()-.5,Math.random()-.5),this._tempoRestanteParaVagar=this.tempoVagar),this.andar(this.direcaoVagar)},sofrerDano:function(o){this._vidaAtual-=o.detail.dano,this.node.emit("atualizaVida",{vidaAtual:this._vidaAtual,vidaMaxima:this.vidaMaxima}),this._vidaAtual<0&&this.morrer()},morrer:function(){this._controleAnimacao.mudaAnimacao(cc.Vec2.UP.mul(-1),"Morte"),this._vivo=!1},destruir:function(){this.node.emit("SoltarItem");var o=new cc.Event.EventCustom("ZumbiMorreu",!0);o.setUserData(this.node),this.node.dispatchEvent(o)}}),cc._RF.pop()},{}],Jogador:[function(o,i,t){"use strict";cc._RF.push(i,"d3299InP/hAoKRk6tw0FpIQ","Jogador");var a=o("Teclado");cc.Class({extends:cc.Component,properties:{tiro:cc.Prefab,vidaMaxima:cc.Float,_vidaAtual:cc.Float,_direcao:cc.Vec2,_movimentacao:cc.Component,_controleAnimacao:cc.Component,_canvas:cc.Canvas,_camera:cc.Node,_posicaoArma:cc.Node,_audioTiro:cc.AudioSource,_direcaoMouse:cc.Vec2,_eventoAtualizaVida:cc.Event.EventCustom,_jogoAcabou:cc.Event.EventCustom},onLoad:function(){this._movimentacao=this.getComponent("Movimentacao"),this._controleAnimacao=this.getComponent("ControleDeAnimacao"),this._audioTiro=this.getComponent(cc.AudioSource),this._canvas=cc.find("Canvas"),this._canvas.on("mousedown",this.atirar,this),this._canvas.on("mousemove",this.calcularDirecaoMouse,this),this._camera=cc.find("Camera"),this.node.on("SofreDano",this.sofrerDano,this),this.node.on("RecuperarVida",this.recuperarVida,this),this._vidaAtual=this.vidaMaxima,this._posicaoArma=this.node.children[0],this._direcaoMouse=cc.Vec2.UP,this._eventoAtualizaVida=new cc.Event.EventCustom("JogadoraPerdeuVida",!0),this._jogoAcabou=new cc.Event.EventCustom("JogoAcabou",!0)},update:function(o){this.andar(),this.verficarTeclado(),this.atualizaAnimacao()},andar:function(){this._movimentacao.setDirecao(this._direcao),this._movimentacao.andarPraFrente()},verficarTeclado:function(){this._direcao=cc.Vec2.ZERO,a.estaPressionada(cc.KEY.a)&&(this._direcao.x-=1),a.estaPressionada(cc.KEY.d)&&(this._direcao.x+=1),a.estaPressionada(cc.KEY.s)&&(this._direcao.y-=1),a.estaPressionada(cc.KEY.w)&&(this._direcao.y+=1)},atualizaAnimacao:function(){this._controleAnimacao.mudaAnimacao(this._direcaoMouse,this.estadoAtual())},sofrerDano:function(o){this._vidaAtual-=o.detail.dano,this.disparaEventoGlobal(this._eventoAtualizaVida,{vidaAtual:this._vidaAtual,vidaMaxima:this.vidaMaxima}),this._vidaAtual<0&&this.disparaEventoGlobal(this._jogoAcabou)},recuperarVida:function(o){this._vidaAtual+=parseFloat(o.detail.recuperar),this._vidaAtual=Math.min(this._vidaAtual,this.vidaMaxima),this.disparaEventoGlobal(this._eventoAtualizaVida,{vidaAtual:this._vidaAtual,vidaMaxima:this.vidaMaxima})},disparaEventoGlobal:function(o,i){o.setUserData(i),this.node.dispatchEvent(o)},estadoAtual:function(o){return 0==this._direcao.mag()?"Parado":"Andar"},calcularDirecaoMouse:function(o){var i=o.getLocation();i=new cc.Vec2(i.x,i.y),i=this._canvas.convertToNodeSpaceAR(i);var t=this._camera.convertToNodeSpaceAR(this.node.position),a=i.sub(t);this._direcaoMouse=a},atirar:function(o){var i=this._direcaoMouse;cc.instantiate(this.tiro).getComponent("Tiro").iniciliza(this.node.parent,this._posicaoArma.position.add(this.node.position),i),this._audioTiro.play()}}),cc._RF.pop()},{Teclado:"Teclado"}],KitMedico:[function(o,i,t){"use strict";cc._RF.push(i,"596d1RcQWlEBbFrVVsCv5Jc","KitMedico"),cc.Class({extends:cc.Component,properties:{cura:cc.Float},onCollisionEnter:function(o){o.node.emit("RecuperarVida",{recuperar:this.cura}),this.node.destroy()}}),cc._RF.pop()},{}],LimitadorDeMovimento:[function(o,i,t){"use strict";cc._RF.push(i,"b6b36Y+vbpIrY6QZipzLfV0","LimitadorDeMovimento"),cc.Class({extends:cc.Component,properties:{limiteMinimo:cc.Vec2,limiteMaximo:cc.Vec2,usarResolucao:!1},onLoad:function(){if(this.usarResolucao){var o=cc.director.getVisibleSize(),i=o.height/2,t=o.width/2;this.limiteMinimo.x+=t,this.limiteMinimo.y+=i,this.limiteMaximo.x-=t,this.limiteMaximo.y-=i}},update:function(o){this.node.position.x<this.limiteMinimo.x?this.node.x=this.limiteMinimo.x:this.node.position.x>this.limiteMaximo.x&&(this.node.x=this.limiteMaximo.x),this.node.position.y<this.limiteMinimo.y?this.node.y=this.limiteMinimo.y:this.node.position.y>this.limiteMaximo.y&&(this.node.y=this.limiteMaximo.y)}}),cc._RF.pop()},{}],LimitadorDeZumbis:[function(o,i,t){"use strict";cc._RF.push(i,"73105iU//hIs7tx+JJIAsQQ","LimitadorDeZumbis"),cc.Class({extends:cc.Component,properties:{limiteDeZumbis:cc.Float,zumbiPrefab:cc.Prefab,_listaDeZumbis:cc.NodePool},onLoad:function(){cc.director.getScene().on("ZumbiMorreu",this.devolverZumbi,this),this._listaDeZumbis=new cc.NodePool("Inimigo");for(var o=0;o<this.limiteDeZumbis;o++){var i=cc.instantiate(this.zumbiPrefab);this._listaDeZumbis.put(i)}},start:function(){var o=new cc.Event.EventCustom("receberOLimitadorDeZumbis",!0);o.setUserData({limitador:this}),this.node.dispatchEvent(o)},devolverZumbi:function(o){var i=o.getUserData();this._listaDeZumbis.put(i)},novoZumbi:function(o,i){var t=this._listaDeZumbis.get();null!=t&&(t.parent=o,t.position=i)}}),cc._RF.pop()},{}],Movimentacao:[function(o,i,t){"use strict";cc._RF.push(i,"9d4cb8EmZNF+Ih0N1m0amIH","Movimentacao"),cc.Class({extends:cc.Component,properties:{_direcao:cc.Vec2,velocidade:cc.Float,_deltaTime:0},update:function(o){this._deltaTime=o},andarPraFrente:function(){this._andar(1)},andarPraTras:function(){this._andar(-1)},_andar:function(o){var i=this._direcao.mul(o*this._deltaTime*this.velocidade);this.node.position=this.node.position.add(i)},setDirecao:function(o){this._direcao=o.normalize()}}),cc._RF.pop()},{}],PontoDeNascimentoChefe:[function(o,i,t){"use strict";cc._RF.push(i,"78533v1eK9PB4DG25oz1Jdw","PontoDeNascimentoChefe"),cc.Class({extends:cc.Component,start:function(){var o=new cc.Event.EventCustom("adicionarAoGeradorDeChefes",!0);o.setUserData({node:this.node}),this.node.dispatchEvent(o)}}),cc._RF.pop()},{}],Pontucao:[function(o,i,t){"use strict";cc._RF.push(i,"adcf84amnJBEpnwEZ6JN6lo","Pontucao"),cc.Class({extends:cc.Component,properties:{_mortos:0,textoPontucao:cc.Label},onLoad:function(){this._mortos=0,this.textoPontucao=this.getComponent(cc.Label),this.textoPontucao.string=this._mortos,cc.director.getScene().on("ZumbiMorreu",this.somarPontuacao,this)},somarPontuacao:function(){this._mortos++,this.textoPontucao.string=this._mortos}}),cc._RF.pop()},{}],SoltarItem:[function(o,i,t){"use strict";cc._RF.push(i,"68d5f0jEuRMCrwsYZdNbSMR","SoltarItem"),cc.Class({extends:cc.Component,properties:{item:cc.Prefab,chanceDeSoltar:{default:.5,type:cc.Float,slide:!0,range:[0,1]}},onLoad:function(){this.node.on("SoltarItem",this.soltarItem,this)},soltarItem:function(){if(this.devoSoltar()){var o=cc.instantiate(this.item);o.parent=this.node.parent,o.position=this.node.position}},devoSoltar:function(){return Math.random()<this.chanceDeSoltar}}),cc._RF.pop()},{}],Teclado:[function(o,i,t){"use strict";cc._RF.push(i,"8e9a1PYIgpCxo8ZnUs4CSBv","Teclado");var a=cc.Class({extends:cc.Component,statics:{_teclas:[],estaPressionada:function(o){return-1!=a._teclas.indexOf(o)}},onLoad:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.teclaPressionada,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.teclaSolta,this)},teclaPressionada:function(o){-1==a._teclas.indexOf(o.keyCode)&&a._teclas.push(o.keyCode)},teclaSolta:function(o){var i=a._teclas.indexOf(o.keyCode);a._teclas.splice(i,1)}});i.exports=a,cc._RF.pop()},{}],Tiro:[function(o,i,t){"use strict";cc._RF.push(i,"c5766ild89G/6LN/rGws++G","Tiro"),cc.Class({extends:cc.Component,properties:{dano:cc.Float,_movimentacao:cc.Component},onLoad:function(){cc.director.getCollisionManager().enabled=!0,this._movimentacao=this.getComponent("Movimentacao")},update:function(){this._movimentacao.andarPraFrente()},iniciliza:function(o,i,t){this.node.parent=o,this.node.position=i,this._movimentacao.setDirecao(t)},onCollisionEnter:function(o){o.node.emit("SofrerDano",{dano:this.dano}),this.node.destroy()}}),cc._RF.pop()},{}],TocarAudioComEvento:[function(o,i,t){"use strict";cc._RF.push(i,"5a5f1FK7d1P35r7SFZujCgl","TocarAudioComEvento"),cc.Class({extends:cc.Component,properties:{evento:cc.String,_audio:cc.AudioSource},onLoad:function(){this._audio=this.getComponent(cc.AudioSource),cc.director.getScene().on(this.evento,this.tocarAudio,this)},tocarAudio:function(){this._audio.play()}}),cc._RF.pop()},{}]},{},["AjusteZIndex","AudioCoracao","BarraDeVida","BarraDeVidaInimigo","CarregarCena","ColisaoCenario","ControleCamera","ControleDeAnimacao","GameOver","GeradorDeChefes","GeradorDeInimigos","Inimigo","Jogador","KitMedico","LimitadorDeMovimento","LimitadorDeZumbis","Movimentacao","PontoDeNascimentoChefe","Pontucao","SoltarItem","Teclado","Tiro","TocarAudioComEvento"]);