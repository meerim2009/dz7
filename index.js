class Transport {
    constructor(mode, owner, start) {
        this.mode = mode
        this.#owner = owner
        this.start = start
    }

    getOwner() {
         return this.#owner()
    }


    makeStart() {
        console.log(this.start)
    }
    isStarted() {
        console.log('Transport is started')
    }
}

class Car extends Transport {
    volume = 2
    year = 2020
    colour = black
    constructor(mode, owner, start, volume, year, colour) {
        super(mode, owner, start);
    }
    }
    makeStart()
{
        console.log(this.start)
    }
    isStarted()
{
    console.log('Car is started')
}

class Ship extends Transport {
    weight = 10000
}
makeStart() {
    console.log(this.start)
}
 isStarted()
{
    console.log('Ship is started')
}

class Plane extends Transport {
    name = Boeing
}
makeStart() {
    console.log(this.start)
}
 isStarted()
{
    console.log('Plane is started')
}






const transport = new Transport('Car', 'Marat')
transport.getOwner()
