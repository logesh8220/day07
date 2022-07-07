


//Uber Price Caliculation

class uber {
    constructor(distance,bookingfees){
        this.distance = distance;
        this.bookingfees = bookingfees;
    }
}
 class ubercal extends uber  {
    constructor(distance,bookingfees){
    super (distance,bookingfees)
    }
    price () {
        console.log(`kilometeris:${this.distance}.KM 
uberCharge:₹${this.distance*14} + bookingFess:₹${this.bookingfees}
TotalCost:₹${this.distance*14 + this.bookingfees}`)   
    } 
}
let uberPrice = new ubercal (87,187)
uberPrice.price();



//Person Class

class person {
    constructor(Name,age,phoneNo,area,street,pin){
        this.Name = Name;
        this.age  = age;
        this.phoneNo = phoneNo
        this.area = area;
        this.street = street;
        this.pin = pin
    }
}

class persondetials extends person {
    constructor(Name,age,phoneNo,area,street,pin){
        super(Name,age,phoneNo,area,street,pin)
    }
    detials () {
       console.log(`PERSON DETIALS:
       NAME:${this.Name}
       AGE:${this.age}
       PHONE NO:${this.phoneNo}
       AREA:${this.area}
       STREET:${this.street}
       PIN:${this.pin}`) 
    }
}

let obj =  new persondetials ("logesh",21,8220739131,"chennai","GandhiStreet",600025)
obj.detials()
