export default class GameItem extends Laya.Sprite {
    constructor() {
        super();

        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.texture = 'testBox2d/b.png';
    }

    //更改皮肤
    setTexturen(textureName){
        this.texture = textureName;
    }
}
