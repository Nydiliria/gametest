import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    fish: new ImageSource('images/fish.png'),
    shark: new ImageSource('images/Shark.webp'),
    bubble: new ImageSource('images/bubble.png'),
    background: new ImageSource('images/underwater_background.jpg'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }