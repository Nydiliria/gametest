import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Shark} from "./shark.js"
import { Fish } from './fish.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        for (let i = 0; i < 30; i++) {
        console.log("start de game!")
        let fishOne = new Fish() 
        this.add(fishOne)
        }
    }

}

new Game()
