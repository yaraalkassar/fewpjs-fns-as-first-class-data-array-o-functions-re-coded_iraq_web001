<<<<<<< HEAD
function wakeDog(name, breed) {
   return(`Wake ${name} the ${breed}`);
 }
 function leashDog(name, breed) {
   return(`Leash ${name} the ${breed}`);
 }
 function walkToPark(name, breed) {
   return(`Walk to the park with ${name} the ${breed}`);
 }
 function throwFrisbee(name, breed) {
   return(`Throw the frisbee for ${name} the ${breed}`);
 }
 function walkHome(name, breed) {
   return(`Walk home with ${name} the ${breed}`);
 }

 function unleashDog(name, breed) {
   return(`Unleash ${name} the ${breed}`);

 }

=======
 function wakeDog(name="Xerox", breed="Border Collie") {
    return(`Wake ${name} the ${breed}`);
  }
  function leashDog(name, breed) {

    return(`Leash ${name} the ${breed}`);
  }
  function walkToPark(name, breed) {
    return(`Walk to the park with ${name} the ${breed}`);
  }
  function throwFrisbee(name, breed) {
    return(`Throw the frisbee for ${name} the ${breed}`);
  }
  function walkHome(name, breed) {
    return(`Walk home with ${name} the ${breed}`);
  }

  function unleashDog(name, breed) {
    return(`Unleash ${name} the ${breed}`);
    return(`leash Dog ${name} the ${breed}`);
  }
  function walkToPark(name, breed) {
    return(`walk To Park ${name} the ${breed}`);
  }
  function throwFrisbee(name, breed) {
    return(`throw Frisbee ${name} the ${breed}`);
  }
  function walkHome(name, breed) {
    return(`walk Home ${name} the ${breed}`);
  }

  function unleashDog(name, breed) {
    return(`unleash Dog ${name} the ${breed}`);
  }
>>>>>>> fecb7e8f9fffec477162fc362cc1d7d300e8941d
const routine=[wakeDog,
leashDog,
walkToPark,
throwFrisbee,
walkHome,
unleashDog];

function exerciseDog (dogName, dogBreed) {
<<<<<<< HEAD
return routine.map(printArray => printArray(dogName, dogBreed));

 }
=======
//  return routine.map(fn => fn(dogName, dogBreed))

  }

}
>>>>>>> fecb7e8f9fffec477162fc362cc1d7d300e8941d
