import { Actor, Vector } from "excalibur"
import { Resources } from './resources'

export class Fish extends Actor {
    constructor() {
        super()
        console.log("i am a fish")
        this.graphics.use(Resources.fish.toSprite())

        let sc = Math.random() * 0.2 + 2
        this.scale = new Vector(sc, sc)

        this.pos = new Vector(Math.random() * 1280, Math.random() * 720)
        this.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50)

        this.events.on("exitviewport", (e) => this.fishLeft(e))
    }

    fishLeft(e) {
        e.target.pos = new Vector(1350, Math.random() * 720) 
}