// JavaScript File

const returnKeycode = 13;
const WAIT_TIME = 850;

function calculateFactorial()
{
    if(event.keycode == returnKeycode || event.which == returnKeycode)
    {
        let inputBox = document.getElementById("inputBox");
        let errorMessenger = document.getElementById("errorMessenger");
        
        let num = parseFloat(inputBox.value);
        let intNum = parseInt(num, 10);
        
        if((num-intNum != 0) || num<0)
        {
            if (errorMessenger.className == "isError")
            {
                errorMessenger.className = "anotherError";
                setTimeout(function(){
                    errorMessenger.className = "isError";
                }, WAIT_TIME);

            }
            else
            {
                errorMessenger.innerHTML  = "Only positive integers are accepted";
                errorMessenger.className = "isError";
            }
            
            inputBox.value = "";
            return;
        }
        errorMessenger.className = "noError";
        errorMessenger.innerHTML = "";
        
        let factorialResultList = document.getElementById("factorialResultList");
        let newItem = document.createElement("li");
        let removeButton = document.createElement("button");
        
        removeButton.innerHTML = "Remove";
        removeButton.className = "RemoveButton";
        
        for(let x = num-1; x > 1; x--)
        {
            num *= x;
        }
        
        newItem.innerHTML = intNum + " Factorial is " +num;
        newItem.appendChild(removeButton);
        factorialResultList.appendChild(newItem);
        
        removeButton.addEventListener("click",function(){factorialResultList.removeChild(newItem)});

        inputBox.value = "";
    }
}
