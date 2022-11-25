function grossIncome(...inputs) {
    let sum=0
    for (let k of inputs) {
        sum += k 
    } 
    return sum
}
function taxableIncome(gross,...deductions) {
    let g=gross
    for (let k of deductions) {
        g -= k 
    } 
    return g
}
function deductions(gross) {
    let NHIF=0 , NSSF=200;
    switch(gross) {
        case gross <= 5999:
            NHIF =150 
            break
        case gross >= 6000 && gross <= 7999:
            NHIF =300
            break
        case gross >= 8000 && gross <= 11999:
            NHIF =400
            break
        case gross >= 12000 && gross <= 14999:
            NHIF =500
            break
        case gross >= 15000 && gross <= 19999:
            NHIF =600
            break
        case gross >= 20000 && gross <= 24999:
            NHIF =750
            break
        case gross >= 25000 && gross <= 29999:
            NHIF =850
            break
        case gross >= 30000 && gross <= 34999:
            NHIF =900
            break
        case gross >= 35000 && gross <= 39999:
            NHIF =950
            break
        case gross >= 40000 && gross <= 44999:
            NHIF =1000
            break
        case gross >= 45000 && gross <= 49999:
            NHIF =1100
            break
        case gross >= 50000 && gross <= 59999:
            NHIF =1200
            break
        case gross >= 60000 && gross <= 69999:
            NHIF =1300
            break
        case gross >= 70000 && gross <= 79999:
            NHIF =1400
            break
        case gross >= 80000 && gross <= 89999:
            NHIF =1500
            break
        case gross >= 90000 && gross <= 99999:
            NHIF =1600
            break
        case gross >= 100000 :
            NHIF =1700 
    }
    return [NHIF, NSSF]
}
function payAsYouEarn(taxable){
    if (taxable <= 24000){
        return taxable*0.1
    }
    else if (taxable <=32333 ) {
        return taxable*0.25
    }
    else {
        return taxable*0.3
    }
}
function handleClick(event) {
    let basicSalary=parseFloat(document.getElementById("basic").value)
    let allowances=parseFloat(document.getElementById("allow").value)
    let commission=parseFloat(document.getElementById("commin").value)
    let gross= grossIncome(basicSalary,allowances,commission)
    let taxable=taxableIncome(gross,...deductions(gross))
    let PAYE = payAsYouEarn(taxable)
    document.getElementById("PAYE").textContent=(PAYE)
}


