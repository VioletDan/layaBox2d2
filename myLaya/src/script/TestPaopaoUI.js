import GameItem from "./GameItem";

export default class TestPaopao extends Laya.Scene {
    constructor() {
        super()
        TestPaopao.instance = this;
        Laya.MouseManager.multiTouchEnabled = false;
        //加载场景文件
        this.loadScene("test/testPaopao.scene");
        this.skin = 'testBox2d/b1.png';
        this.distanceNum = 25; //每个泡泡的间隔                                                                                                                                                                                                                                                                                                                                                                                 
        this.ballNum = 30;
        this.ballRow = 6;
        this.ballLine = Math.ceil(this.ballNum / this.ballRow); // 5
        this.ballW = 57;
        this.ballH = 52;
    }

    onEnable() {
        //初始化盒子宽高
        this.ballContent.width = this.ballW * this.ballRow + (this.ballRow - 1) * this.distanceNum
        this.ballContent.height = this.ballH * this.ballLine + (this.ballLine - 1) * this.distanceNum
        this.ballContent.pos((Laya.stage.width - this.ballContent.width) / 2, 300)
        this.creatBall()
    }

    creatBall() {
        for (var i = 0; i < this.ballLine; i++) {
            for (var j = 0; j < this.ballRow; j++) {
                let item = new GameItem();
                item.pos(j * this.ballH + j * this.distanceNum, i * this.ballH + i * this.distanceNum)
                // item.setTexturen('testBox2d/b1.png')
                this.ballContent.addChild(item);
            }
        }
    }
}