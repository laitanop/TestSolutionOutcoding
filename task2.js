/*  Answer Question. 
1. in the above task, what would happen if there where two actions of a same type?
Answer : the final object created Will have one property of the repeated type.
The second repeated type value will overwrite the first one.*/

// underscore.js
// task 1 extract actions types
  function extractActionTypes() {
    var myDataActions = myData.actions;
      var extractAction =  _.map(myDataActions, function(action) {
        return action.type;
    });
  }

// task 2 convert actions array into an object
function convertArrayToObject() {
  var myDataArray = myData.actions;
  var type = _.map(myDataArray, function(action) {
    return action.type;
});

  var params = _.map(myDataArray, function(action) {
    return action.params;

});

var myActionObject = _.object(type, params);
 console.log(myActionObject);
}

// 3. Sum and average.
function sumAndAverage() {
  var numbers = _.reject(["0", 2, 4, 6, null, [], 8, 10], function(element){
    return  typeof element !== 'number';
  });
    console.log(numbers);
    var sum = _.reduce(numbers, function(num1, num) {
      return num1 + num;
    }, 0);
    var average = sum /numbers.length;
    console.log("The sum of is: " + sum);
    console.log("The Average is: " + average);

  }

function secondTask() {
  extractActionTypes();
  convertArrayToObject();
  sumAndAverage();
}
