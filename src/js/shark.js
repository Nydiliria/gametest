import { Actor, Vector } from "excalibur"
import { Resources } from './resources'

export class Shark extends Actor {
    constructor() {
        super()
        console.log("i am a shark")
        this.graphics.use(Resources.shark.toSprite())
        this.scale = new Vector(0.6, 0.6)
        this.pos = new Vector(-100, Math.random() * 720) 
        this.vel = new Vector(60, 0) 
        this.events.on("exitviewport", (e) => this.sharkLeft(e))
    }

    sharkLeft(e) {
        console.log("shark left the screen")
        this.pos = new Vector(-100, Math.random() * 720) 
        this.vel = new Vector(60, 0) 
    }
}
