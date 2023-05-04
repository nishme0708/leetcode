/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
	let prevNumber = false;
    for(let char of s) {
        if(char == ']') {
            let pop = '';
            let res =''
            while(true){
                pop = stack.pop();
				if(pop == '[') break;
                res=pop+res;
            }
            let number = Number(stack.pop());
			let str= '';
            for(let i =0;i<(number);i++) {
                str+=res;
            }
			while(stack.length) {
				let pop = stack.pop();
				if(pop == '[' || pop ==']') {
					stack.push(pop);
					break;
				} else {
					str = pop + str;
				}
			}
			stack.push(str);
            
        } else {
			if(isNaN(char)) {
			prevNumber = false;	
            stack.push(char); 
			} else {
				if(prevNumber) {
					let prev = stack.pop();
					stack.push(prev+char);					
				} else {
					stack.push(char);
				}
				prevNumber = true;
			}
        }
    }
	if(stack.length == 1) return stack[0];
    let result = '';
    while(stack.length) {
        result=stack.pop()+result;
    }
    return result;
};