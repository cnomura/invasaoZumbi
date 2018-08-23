cc.Class({
    extends: cc.Component,

    carregarCenaComAnimacao: function(nomeCena){
    	cc.director.loadScene(nomeCena);
    }
});