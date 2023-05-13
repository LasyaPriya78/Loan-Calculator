window.onload = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input=>{
        input.addEventListener('change',calculateloan);
    })
}

function calculateloan() {
    const principal = document.querySelector("#amount").value;
    const interestrate = document.querySelector("#interest").value;
    const tenure = document.querySelector("#tenure").value;
    
    if(!principal || !interestrate || !tenure) return;

    const interestmonthly = interestrate/100/12;

    const emi = principal * interestmonthly * Math.pow(1+interestmonthly, tenure)/(Math.pow(1+interestmonthly,tenure)-1);
    const totalAmount = emi*tenure;
    const totalInterest = totalAmount - principal;
    
    document.querySelector("#emi").innerText="EMI: ₹"+emi.toFixed(2);
    document.querySelector("#totalAmount").innerText= "Total Amount: ₹"+totalAmount.toFixed(2);
    document.querySelector("#totalInterest").innerText= "Total Interest: ₹"+totalInterest.toFixed(2);
    
}