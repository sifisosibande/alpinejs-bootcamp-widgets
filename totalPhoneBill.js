function totalPhoneBill(strCallAndSms) {
    var total = 0;
    const phoneBill = strCallAndSms.split(",");
    for (var i = 0; i < phoneBill.length; i++) {
        let callOrSms = phoneBill[i].trim();
        if (callOrSms === "call") {
            total = total + 2.75;
        } else {
            total = total + 0.65;
        }
    }
    return "R" + total.toFixed(2);
}

function phoneBillWidget() {
    return {
        callAndSms: '',
        totalBill: '',
        calculateTotal() {
            this.totalBill = totalPhoneBill(this.callAndSms);
        }
    };
}

