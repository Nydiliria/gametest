import { Actor, Vector } from "excalibur"
import { Resources } from './resources'

export class Shark extends Actor {
    constructor(){
        super()
        console.log("i am a shark")
        this.graphics.use(Resources.Shark.toSprite())
        this.scale = new Vector(0.6, 0.6)
        this.pos = new Vector(40, 225)
        this.vel = new Vector(60,0)
        this.events.on("ExitViewPort", (e) => this.sharkLeft(e))
    }
}
