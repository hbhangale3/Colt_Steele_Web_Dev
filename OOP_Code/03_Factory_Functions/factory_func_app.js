function makeColor(r,g,b){
    const color = {};
    color.r=r;
    color.g=g;
    color.b=b;

    //using this here because in JS method captures the values of r, g, b from the outer function once and for all
    //meaning they are tied to the variables at the time the method was created, not to the object itself.method captures the values of r, g, b from the outer function once and for all
    color.rgb = function(){
        const{r, g , b} = this;
        return `rgb(${r}, ${g}, ${b})`
    }

    color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		)
	}
//returning the color object.
    return color;
}

// const col1 = makeColor(240,67,180);
// const col2 = makeColor(100,145,10);

// col1.rgb();
// col2.hex();

function Car(model,make,year){
    this.model = model;
    this.make=make;
    this.year=year;
    console.log(this);
}

Car.prototype.print = function(){
    console.log(`The car company is ${this.make}, the model is ${this.model} and year of manufacture is ${this.year}`)
}

const car1 = new Car("CR-V", "Honda", 2015);

