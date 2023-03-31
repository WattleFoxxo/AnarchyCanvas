//---------------------------//
//  app.js - Anarchy Canvas  //
//---------------------------// 

var config = JSON.parse(httpGet(`${window.location.origin}/api/config`));

var socket = io();

var pickedColour = 1;

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}

PIXI.utils.sayHello(type);
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const app = new PIXI.Application({ 
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window,
    antialias: false,
    transparent: false,
    resolution: 1
});

document.body.appendChild(app.view);
app.view.oncontextmenu = function(e) { e.preventDefault(); e.stopPropagation(); }
app.renderer.backgroundColor = 0xc1c1c2;

const viewport = new pixi_viewport.Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: config.width,
    worldHeight: config.height,
    events: app.renderer.events
})
app.stage.addChild(viewport)

viewport.drag({"mouseButtons":"middle-right"}).pinch().wheel().decelerate()
viewport.fit()
viewport.moveCenter(config.width / 2, config.height / 2)
viewport.zoom
viewport.clampZoom({"minScale":0.5, "maxScale":15})

viewport.on("clicked", (e) => {
    if ((e.world.x >= 0 && e.world.y >= 0) && (e.world.x <= config.width && e.world.y <= config.height)){
        socket.emit("draw", {"colour":pickedColour, "x":e.world.x, "y":e.world.y})
        console.log('clicked (' + e.world.x + ',' + e.world.y + ')')
    }
});

var base64 = httpGet(`${window.location.origin}/api/canvas`);
var image = new Image();
image.src = base64;
var base = new PIXI.BaseTexture(image);
var texture = PIXI.Texture.from(base);
var canvasSprite = new PIXI.Sprite(texture);
viewport.addChild(canvasSprite);

socket.on('server_draw', (msg) => {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(config.colours[msg.colour]);
    graphics.drawRect(parseInt(msg.x), parseInt(msg.y), 1, 1);
    graphics.endFill();
    viewport.addChild(graphics);
});


function setColour(colour) {
    var oldbutton = document.getElementById(pickedColour);
    oldbutton.classList = "active";
    var button = document.getElementById(colour);
    button.classList = "active focused";
    pickedColour = colour;
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
