let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.reverse();

console.log(reversedNumbers);
// [5, 4, 3, 2, 1]

console.log(numbers);
// [5, 4, 3, 2, 1]
function customReverse(originalArray) {

  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {

    // Swap the elements with temp variable
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;

    // Move indices to the middle
    leftIndex++;
    rightIndex--;
  }
}
function writeIt(){
// creates new window to display page - SECTION A.3
diswin = window.open();
diswin.document.open();
diswin.document.write(temp2);
diswin.document.close()
}
document.open()
document.write(test.bold()+"<P>")
document.write(test.fontsize(7)+"<P>")
document.write(test.fontcolor("red")+"<P>")
document.write(test.toUpperCase()+"<P>")
var sent = "This is a demonstration of a banner moving from the left to right. It makes use of the substring property of Javascript to make an interesting display"
var slen = sent.length
var siz = 25
var a = -3, b = 0
var subsent = "x"

// Creates a function to capture substrings of sent - SECTION B
function makeSub(a,b) {
subsent = sent.substring(a,b) ;
return subsent;
}


const movies = [
        { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
        { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
    ]

function getMovies(){
    setTimeout(() => {
        movies.forEach((movie, index) => {
            console.log(movie.title)
        })
    }, 1000);
}

function createMovies(movie){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            movies.push(movie);

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong!')
            }
        }, 2000);
    })
}

createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`})
.then(getMovies);

async function init(){
    await createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`});
    
    getMovies(); (*)
}

init();
 
