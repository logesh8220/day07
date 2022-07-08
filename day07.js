


//Uber Price Calculation



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


//--------------------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------------------------------


//Movie Rating 

class movies {
    constructor(title,studio,rating){
          this.title = title;
          this.studio = studio;
          this.rating = rating;
    }
}
class rating extends movies {
    constructor(title,studio,rating){
        super (title,studio,rating)
    }

    ratings () {
        if(this.rating === "PG"){
            console.log(`Movie Detials:
            The movie is: ${this.title}
            The studio is:${this.studio}
            The rating is:${this.rating}`)
        }
        else {
            console.log(`Movie Detials:
            The movie is: ${this.title}
            The studio is:${this.studio}
            The rating is:${this.rating}`)
        }
    }
}

let movieobj =  new rating("Casino Royale","Eon Productions", "PG­13")
movieobj.ratings()
