// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

// ======================

/* let map = [
  ["e", "n", "e", "e", "e", "e", "e", "e", "e", "e"],
  ["n", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
  ["e", "e", "n", "e", "e", "e", "e", "e", "e", "e"],
  ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
  ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
  ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
  ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
  ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
  ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"],
  ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e"]
] */


function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
  }
  console.log("currently facing " + rover.direction);
  console.log("\n");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("currently facing " + rover.direction);
  console.log("\n");
}

function moveForward(rover){
  //if (rover.y < 10 && rover.direction === "S" && map[rover.y][rover.x + 1] === "e")
  if (rover.y < 10 && rover.direction === "S") {
    rover.y += 1;
    console.log("current position is \nX: " + rover.x + "\nY: " + rover.y);
  } else if (rover.y > 0 && rover.direction === "N") {
    rover.y -= 1;
    console.log("current position is \nX: " + rover.x + "\nY: " + rover.y);
  } else if (rover.x < 10 && rover.direction === "W") {
    rover.x += 1;
    console.log("current position is \nX: " + rover.x + "\nY: " + rover.y);
  } else if (rover.x > 0 && rover.direction === "E") {
    rover.x -= 1;
    console.log("current position is \nX: " + rover.x + "\nY: " + rover.y);
  } else {
    console.log("Error");
  }
  console.log("\n");
  rover.travelLog.push(rover.x + ", " + rover.y); 
}

function moveBackward(rover) {
  if (rover.y > 0 && rover.direction === "S") {
    rover.y -= 1;
    console.log("current position is \nX: " + rover.x + "\nY: " + rover.y);
  } else if (rover.y < 10 && rover.direction === "N") {
    rover.y += 1;
    console.log("current position is \nX: " + rover.x + "\nY: " + rover.y);
  } else if (rover.x > 10 && rover.direction === "W") {
    rover.x -= 1;
    console.log("current position is \nX: " + rover.x + "\nY: " + rover.y);
  } else if (rover.x < 0 && rover.direction === "E") {
    rover.x += 1;
    console.log("current position is \nX: " + rover.x + "\nY: " + rover.y);
  } else {
    console.log("Error");
  }
  console.log("\n");
  rover.travelLog.push("[" +rover.x + ", " + rover.y + "]"); 
}

function execute(commands) {
for (let i = 0; i < commands.length; i++) {
  if (commands[i] === "f") {
    moveForward(rover);
  } else if (commands[i] === "l") {
    turnLeft(rover);
  } else if (commands[i] === "r") {
    turnRight(rover);
  } else if (commands[i] === "b") {
    moveBackward(rover);
  } else {
    console.log("command not recognized: " + commands[i] +"\n Terminating Program..");
    break;
  }
}
}

execute("rrfffz");