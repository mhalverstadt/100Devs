function Stopwatch(){
    let duration = 0
    let startTime = 0
    let stopTime = 0
    let running = false

    this.start = function(){
        if(running){
            throw new Error ('Stopwatch is already running')
        }
        running = true
        startTime = Date.now()
    }

    this.stop = function(){
        if(running !== true){
            throw new Error ('Stopwatch is not running')
        }
        running = false
        stopTime = Date.now()
        duration += (stopTime - startTime)/1000
    }

    this.reset = function(){
        duration = 0
        startTime = 0
        stopTime = 0
        running = false
    }
    Object.defineProperty(this,'duration', {
        get: function(){
            return duration
        }
    })
}

const sw = new Stopwatch()