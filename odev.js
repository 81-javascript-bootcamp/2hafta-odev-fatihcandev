/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenley

**/

const car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",
  displayDetails() {
      console.log(this.registrationNumber + " " + this.brand);
  }
}

const myCarDetails = () => car.displayDetails();
myCarDetails();

/*

OR

const myCarDetails = car.displayDetails.bind(car);
myCarDetails();

OR

myCarDetails.call(car);

OR

myCarDetails.apply(car);

*/

/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
  if (typeof name === "string") {
    const hasSpace = /\s/g.test(name);
    if (hasSpace) {
      const names = name.trim().split(' ');
      return names.every(name => name.length >= 2);
    } else {
      return name.length >= 2;
    }
  }
  return false;
}
/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}

summary.call(book, "dystopian", "1932");

// or

// summary.apply(book, ["dystopian", "1932"]);

// or

/*

const bindedSummary = summary.bind(book, "dystopian", "1932");
bindedSummary();

*/





