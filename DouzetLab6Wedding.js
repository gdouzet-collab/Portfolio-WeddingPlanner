//The Wedding Planner JavaScript file

//asking the user for inputs
var guestInput = prompt("How many guests do you have?");
var tableInput = prompt("How many tables do you want?");

//converting the inputs to numbers
var guests = parseInt(guestInput, 10);
var tables = parseInt(tableInput, 10);

//start of if/else command
if (isNaN(guests) || isNaN(tables) || guests <= 1 || tables <= 1) 
  {
    alert("Please refresh and enter new numbers. They must be whole numbers greater than 1 for # of guests and # of tables desired.");
  } 
else 
  {
    //code to distribute # of guests evenly
    //minimum number of guests at every table
    var baseGuests = Math.floor(guests / tables);

    //# of tables that get one extra guest
    var extraTables = guests % tables;

    //# of tables with baseGuests + 1 people
    var biggerTableSize = baseGuests + 1;
    var numBiggerTables = extraTables;

    //setting remaining tables to have baseGuests # of people
    var numSmallerTables = tables - numBiggerTables;

    //message string
    var message = "Your " + guests + " guests will be seated as follows: ";
    if (extraTables === 0) 
      {
        //message states # of tables then # of people per table. Ex: "3 tables of 4."
        message += tables + " tables of " + baseGuests + ".";
      } 
    else 
      {
        //message part for the larger tables with one extra guest
        if (numBiggerTables > 0) 
          {
            message += numBiggerTables + " table";
            if (numBiggerTables > 1) 
              {
                message += "s";
              }
            message += " of " + biggerTableSize;
          }
        //message part for the smaller tables with baseGuests # of people
        if (numSmallerTables > 0) 
          {
            if (numBiggerTables > 0) 
              {
                message += ", and ";
              }
            message += numSmallerTables + " table";
            if (numSmallerTables > 1) 
              {
                message += "s";
              }
            message += " of " + baseGuests;
          }
        message += ".";
      }
    //printing the results to the user
    alert(message);
    //closing the original if/else command
  }
