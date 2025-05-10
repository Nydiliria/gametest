import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Shark} from "./shark.js"
import { Fish } from './fish.js'
import { Bubble } from './bubble.js'
import { Background } from './background.js'


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
        for (let i = 0; i < 15; i++) {
        console.log("start de game!")
        let fishOne = new Fish() 
        this.add(fishOne)
        }

        this.addShark()
        
        for (let i = 0; i < 3; i++) { 
            this.addBubble()
        }

        //this.addBackground()
    }

    addShark() {
        let sharkOne = new Shark()
        this.add(sharkOne)
    }

    addBubble() {
        let bubbleOne = new Bubble()
        this.add(bubbleOne)
    }

    /*addBackground() {
        let backgroundOne = new Background
        this.add(backgroundOne)
    }*/

}

new Game()
