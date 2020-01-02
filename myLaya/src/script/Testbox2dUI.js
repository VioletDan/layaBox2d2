export default class Testbox2dUI extends Laya.Scene{
    constructor(){
        super()
        Testbox2dUI.instance = this
        Laya.MouseManager.multiTouchEnabled = false
        //加载场景文件
        this.loadScene("test/testBox2d.scene")
    }

    onEnable() {
        this.b.visible = false
        this.c.visible = false
    }
}