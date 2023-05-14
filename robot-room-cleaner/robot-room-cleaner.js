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
   
 // Checking if the row and col are within limit and the room is cleanable 
function checkValid(room, row, col) {
  if (row < 0 || row >= room.length || col < 0 || col >= room[row].length) {
    return false;
  }
  if(room[row][col] == 0 ) return false;
  return !visited.has(row+','+col);
}

function traverse(row,col,robot) {  
 // Marking row,col as visited so we don't visit this again
  visited.add(row+','+col);
  // Cleaning it
  robot.clean();
  
  // Checking if top is valid
 let top = checkValid(robot.room, row - 1, col);
  if (top) {
    robot.move();
    traverse(row - 1, col,robot);
	
	//Backtracking
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }
  
  // Checking if right move is valid
  let right = checkValid(robot.room, row, col + 1);
  if (right) {
    robot.turnRight();
    robot.move();
	
	// Moving to default orientation of top
    robot.turnLeft();
    traverse(row, col + 1,robot);
	
	//Back tracking
    robot.turnLeft();
    robot.move();
    robot.turnRight();
  }

// checking if left move is valid
  let left = checkValid(robot.room, row, col - 1);
  if (left) {
    robot.turnLeft();
    robot.move();
	// Moving to default orientation of top
    robot.turnRight();
    traverse(row, col - 1,robot);
	
	// Backtracking
    robot.turnRight();
    robot.move();
    robot.turnLeft();
  }

// Checking if down move is valid
  let down = checkValid(robot.room, row + 1, col);
  if (down) {
    robot.turnRight();
    robot.turnRight();
    robot.move();
	// Moving to default orientation of top
    robot.turnRight();
    robot.turnRight();
    traverse(row + 1, col,robot);
	// Backtracking
    robot.move();
  }
}  
    
    
  traverse(robot.row,robot.col,robot);
};