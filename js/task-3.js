function checkForSpam(message) {
    const blackListWord1 = "sale";
    const blackListWord2 = "spam";
    if (message.toLowerCase().includes(blackListWord1.toLowerCase()) || message.toLowerCase().includes(blackListWord2.toLowerCase())) {
        return true;
    
        
    } else {
        return false;
    }

}

console.log(checkForSpam("Latest technology news")); 
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
console.log(checkForSpam("[SPAM] How to earn fast money?")); 

