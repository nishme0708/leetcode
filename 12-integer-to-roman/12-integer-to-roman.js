/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = '';
    let arr = [{
        val:1000,
        char: 'M'
    },{
        val:900,
        char: 'CM'
    },{
        val:500,
        char: 'D'
    },{
        val:400,
        char: 'CD'
    },{
        val:100,
        char: 'C'
    },{
        val:90,
        char: 'XC'
    },{
        val:50,
        char: 'L'
    },{
        val:40,
        char: 'XL'
    },{
        val:10,
        char: 'X'
    },{
        val:9,
        char: 'IX'
    },{
        val:5,
        char: 'V'
    },{
        val:4,
        char: 'IV'
    },
              {
        val:1,
        char: 'I'
    }];
    let j = 0;
    while(num>0) {
        
            if(num>=arr[j].val) {
                res+=arr[j].char;
                num-=arr[j].val;
            } else {
                j++;
            }
        
    }
    return res;
};