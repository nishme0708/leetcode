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
var cleanRoom = function (robot) {
  let visited = new Set();
   
  
function checkValid(room, row, col) {
  if (row < 0 || row >= room.length || col < 0 || col >= room[row].length) {
    return false;
  }
  if(room[row][col] == 0 ) return false;
  return !visited.has(row+','+col);
}

function traverse(row,col,robot) {  
  visited.add(row+','+col);
  robot.clean();
 let top = checkValid(robot.room, row - 1, col);
  if (top) {
    robot.move();
    traverse(row - 1, col,robot);
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }
  let right = checkValid(robot.room, row, col + 1);
  if (right) {
    robot.turnRight();
    robot.move();
    robot.turnLeft();
    traverse(row, col + 1,robot);
    robot.turnLeft();
    robot.move();
    robot.turnRight();
  }

  let left = checkValid(robot.room, row, col - 1);
  if (left) {
    robot.turnLeft();
    robot.move();
    robot.turnRight();
    traverse(row, col - 1,robot);
    robot.turnRight();
    robot.move();
    robot.turnLeft();
  }

  let down = checkValid(robot.room, row + 1, col);
  if (down) {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
    traverse(row + 1, col,robot);
    robot.move();
  }
}  
    
    
  traverse(robot.row,robot.col,robot);
};
