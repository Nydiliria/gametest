import { Actor, Vector } from "excalibur"
import { Resources } from './resources'

export class Bubble extends Actor {
    constructor() {
        super()
        console.log("i am a bubble")
        this.graphics.use(Resources.bubble.toSprite())

        this.scale = new Vector(0.2, 0.2)
        this.pos = new Vector(Math.random() * 1280, 720)
        this.vel = new Vector(0, -(Math.random() * 90 + 10)) 
        this.events.on("exitviewport", (e) => this.bubbleLeft(e))
    }

    bubbleLeft(e) {
        e.target.pos = new Vector(Math.random() * 1280, 720)
        e.target.vel = new Vector(0, -(Math.random() * 90 + 10)) 
    }
}
