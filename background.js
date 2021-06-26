const { Todo } = require("./model");

// import your Todo model here
let counter = 0;

function myCountingProcess() {
  console.log(`ran ${counter} times`);
  counter++;
}

function myCleanUpProcess() {
  // delete todo with done === true
  // and 1 day past deadline
  //
  // this make a date object for on day ago
  // var d = new Date();
  // d.setDate(d.getDate() - 1);
  //
  // {done: true, deadline: {$gte: ? }}
  //
  //
  // use your todo model here

  let date = new Date();
  date.setDate(date.getDate() + 1);
  console.log("deleting any todos after", date);
  Todo.deleteMany(
    { done: true, deadline: { $gt: date } },
    (err, deleteResult) => {
      if (err) {
        console.log(err);
      }
      console.log(`deleted ${deleteResult.deletedCount} todos`);
    }
  );
}

module.exports = {
  myCountingProcess,
  myCleanUpProcess,
};
