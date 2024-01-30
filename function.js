/* const delayedFunction = () => {
    console.log('Delayed function executed!');
};
setTimeout(delayedFunction,2000); */

/* const repeatedFunction=() => {
    console.log('Repeated function executed!');
};
const intervalid = setInterval(repeatedFunction,1000); */

/* function repeatedFunction(){
    console.log('Executing repeated function');
    
}
const intervalid = setInterval(repeatedFunction,1000);
setTimeout(() => {
 clearInterval(intervalid);
 console.log('Interval stopped');
},5000); */

// ASYNCHRONOUS CALLBACK FUNCTION

function parentFunction(name, callback) {
  setTimeout(callback,1000);
    console.log("Hey" + name );
}

parentFunction("Random String", function randomFunction(){
    console.log("Hey iam a callback function");
});
