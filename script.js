//  comment like this in js

function updateRate() //function that updates the rate for the slider
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function compute() //function that computes the interest
{
    var principal = document.getElementById("principal").value;
    if (principal<=0) { 
        alert("Seriously??!!\nPlease enter a positive number.");     
        document.getElementById("principal").focus();
    }
    else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    var amount = document.getElementById("result").value
    document.getElementById("result").innerHTML="If you deposit $<mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of $<mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    }
    
}
 
