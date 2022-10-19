//Listner for submit

document
  .getElementById("loan-form")
  .addEventListener("submit", function(e){
    //hide results
    document.getElementById('results').style.display = 'none';
    //Show loader 
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 1500)
    e.preventDefault();
  });

function calculateResults(e) {
  // console.log('testing...');

  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const yearToPay = document.getElementById("year");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;

  //Compute Monthly Payment

  const x = Math.pow(1+calculatedInterest, calculatedPayment);
  const monthly = (principal* x * calculatedInterest) / (x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
    
    //Show the results
    document.getElementById('results').style.display = 'block';

    //hide the loader
    document.getElementById('loading').style.display = 'none';
  }else{
    showError('Please check your numbers!');
  }
}


function showError(error){
      //hide the results
      document.getElementById('results').style.display = 'none';

      //hide the loader
      document.getElementById('loading').style.display = 'none';

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  //clear error after few seconds

  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}