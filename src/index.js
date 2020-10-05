module.exports = function toReadable(number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr = number.toString().split('');
    // .map(elem => +elem);

    const getTens = (t, n) => {
        if (t > 1) {
            if (n > 0) {
                return (tens[t - 2] + ' ' + numbers[n]);
            }
            return tens[t - 2];
        } else {
            return (numbers[t + n]);
        }
    }

    const getNums = (n) => {
        return (numbers[n]);
    }

    switch (arr.length) {
        case 1:
            return getNums(arr[0]);
            break;
        case 2:
            if (arr[0] > 1) {
                return getTens(arr[0], arr[1]);
            }
            return getNums(arr[0] + arr[1]);
            break;
        case 3:
            if(arr[1] == 0 && arr[2] == 0){
                return (getNums(arr[0]) + ' hundred')
            }
            if(arr[1] > 1){
                return (numbers[arr[0]] + ' hundred ' + getTens(arr[1], arr[2]));
            }
            return (numbers[arr[0]] + ' hundred ' + getNums( +(arr[1] + arr[2])));
        
            break;
    }
    return arr;
}

