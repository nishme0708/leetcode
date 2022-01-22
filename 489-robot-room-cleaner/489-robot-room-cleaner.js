/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
function goback(robot){
    robot.turnLeft();
    robot.turnLeft();
    robot.move();
    robot.turnLeft();
    robot.turnLeft();
}

const dir = [[-1,0],[0,1],[1,0],[0,-1]];



var cleanRoom = function(robot) {
    let visited = {};
    function traverse(i,j,curr){
    visited[i+'-'+j] = true;
        robot.clean();
        for(let a =0;a<dir.length;a++) {
            let b = (a+curr) % 4;
            let new_i = i+dir[b][0];
            let new_j = j+dir[b][1];
            let key = new_i+'-'+new_j;
            if(!visited[key] && robot.move()){
                traverse(new_i,new_j,b);
                goback(robot);
            }
            robot.turnRight();
        }
}
    traverse(0,0,0);
};