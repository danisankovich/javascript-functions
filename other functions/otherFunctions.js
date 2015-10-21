function thousandsCommas(num) { //put the commas in a number to separate thousands
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //oh regex
}
// console.log(numberWithCommas(20000000.50));
