class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type

        this.hab = this.attack(this.type)
    }

    attack(type){
        switch(type){
            case "Mago": 
            return "magia"
            
            case "Guerreiro": 
            return "espada"
            
            case "Monge": 
            return "artes marciais"           

            case "Ninja": 
            return "shuriken"
            
        }
    }
}

let hero = new Hero("Roronoa Zoro", 21, "Monge")
console.log(`o ${hero.type} atacou usando ${hero.hab}`)
