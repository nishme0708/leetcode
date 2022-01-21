
var Logger = function() {
    this.data = {};    
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */

Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(!message) return null;
    if(this.data[message]!=undefined) {
        if(timestamp<this.data[message]) {
            return false;
        } else {
        this.data[message] = timestamp+10;
        return true;    
        }
    }else{
        this.data[message] = timestamp+10;
        return true;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */