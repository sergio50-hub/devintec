const myform = document.querySelector("#booking");
const myformSubmit = myform.querySelector("button");

function showForm() {
  // Store field values in variables
  //

  // Simple text input fields
  let name = document.querySelector("#customer_name").value;
  let phone = document.querySelector("#phone_number").value;
  let email = document.querySelector("#email_address").value;

  // Radio button field
  //
  // Fetch all radio fields
  let taxiTypeRadio = document.querySelectorAll("input[name='taxi']");
  // Declare empty var to use in foreach loop
  let taxiType = "";
  // Loop through the array with a foreach to evaluate all found elements
  // Create a function within the forEach () => {}
  // Apply 2 vars for the function, v stands for value, k stands for key
  // ( v & k can be named whatever you want, however their value will be the same, meaning first var is the value, second the key)
  taxiTypeRadio.forEach((v, k) => {
    // Check if the found radio element has the attribute checked
    // If so, add the value of the radio element to a var
    if (taxiTypeRadio[k].checked) {
      taxiType = taxiTypeRadio[k].value;
    }
  });

  // Checkbox field
  //
  // Same reasoning as for the radio buttons
  // Only difference is that a radio button can only have 1 possible value
  // Checkbox fields can have multiples values (car, van, tuktuk can be checked all at once)
  // Therefor the empty var is declared as an array - line 39
  // The checked values get pushed (appended) to the array - line 42
  let extras = document.querySelectorAll("input[name='extras']");
  let extra = [];
  extras.forEach((v, k) => {
    if (extras[k].checked) {
      extra.push(extras[k].value);
    }
  });

  // Date - Time field (works the same as simple text input field)
  let datum = document.querySelector("input[name='pickup_time']").value;

  // Select field
  let pickupPlaceKey = document.querySelector("select[name='pickup_place']")
    .value;
  let pickupPlace = document.querySelector("select[name='pickup_place']")
    .options[pickupPlaceKey].label;

  // Datalist field (works the same as simple text input field)
  let dropoffPlace = document.querySelector("input[name='dropoff_place']")
    .value;

  // Textarea field (works the same as simple text input field)
  let specialInstructions = document.querySelector("textarea[name='comments']")
    .value;

  // Group all results in array (method example 1)
  var myResults = [];
  myResults.push(
    name,
    phone,
    email,
    taxiType,
    extra,
    datum,
    pickupPlace,
    dropoffPlace,
    specialInstructions
  );

  // Group all results in an object instead (method example 2)
  var myObjectResults = {
    Name: name,
    Phone: phone,
    Email: email,
    Type: taxiType,
    Extras: extra,
    Date: datum,
    "Pickup Place": pickupPlace,
    "Dropoff Place": dropoffPlace,
    "Special Instructions": specialInstructions
  };

  // Show output of form
  //
  var outputDiv = document.querySelector("#resultForm");

  // Create ul and append to output div
  var resultsUl = document.createElement("ul");
  resultsUl.classList.add("form-results");
  outputDiv.appendChild(resultsUl);

  // Show output of form (via array)
  myResults.forEach((v, k) => {
    // Create li element, put value in a var and append valuetext to the li
    let resultLi = document.createElement("li");
    let resultContent = document.createTextNode(v);
    resultLi.appendChild(resultContent);
    // Append to ul
    resultsUl.appendChild(resultLi);
  });

  // Show output of form (via js object)
  // Trying via js object because a meaningful key can be given and be used for the label of the result
  var resultsObjectUl = document.createElement("ul");
  resultsObjectUl.classList.add("form-results");
  outputDiv.appendChild(resultsObjectUl);

  let myObjectEntries = Object.entries(myObjectResults);
  for (const [label, result] of myObjectEntries) {
    // Create elements
    let resultObjectLi = document.createElement("li");
    let resultObjectLabelElement = document.createElement("label");
    // Store values in vars
    let resultObjectContentLabel = document.createTextNode(label);
    let resultObjectContentResult = document.createTextNode(result);
    // Compose html output
    resultObjectLabelElement.appendChild(resultObjectContentLabel);
    resultObjectLi.appendChild(resultObjectLabelElement);
    resultObjectLi.appendChild(resultObjectContentResult);
    // Append it to the ul
    resultsObjectUl.appendChild(resultObjectLi);
  }

  // After form submit scroll to the bottom of the page to view the output
  window.scrollTo(0, document.body.scrollHeight);
}

// Add eventlistener on submit button, on click, execute function
myformSubmit.addEventListener("click", function(e) {
  // Prevent default is necessary because otherwise the default behviour of submitting a form kicks in (going to the action url stated in the html).
  e.preventDefault();
  // Execute function
  showForm();
});
