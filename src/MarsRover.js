/** This function receives the initial position where rover is within the planet
 * and a function to be called before every move
 * to detect if there are obstacles or not.
 */

function rover(initialPosition, canMoveToPosition) {
  return {
    // move is a property of the returned object and also a function
    move(commands) {
      let currentPosition = initialPosition;
      const commandsArray = commands.split("");

      for (let i = 0; i < commandsArray.length; i++) {
        var command = commandsArray[i];

        if (command === "L") {
          currentPosition = {
            ...currentPosition,
            direction: turnLeft(currentPosition)
          };
          continue;
        }
        if (command === "R") {
          currentPosition = {
            ...currentPosition,
            direction: turnRight(currentPosition)
          };
          continue;
        }
        if (command === "F") {
          const newPosition = moveForward(currentPosition);

          if (!canMoveToPosition(newPosition)) {
            return {
              ...currentPosition,
              error: {
                message: "Rover can't move to the next position",
                position: newPosition
              }
            };
          }
          currentPosition = {
            ...currentPosition,
            position: newPosition
          };
        }
      }
      return currentPosition;
    }
  };
}

//Get new position of a rover based on the direction it is facing
function moveForward({ position, direction }) {
  if (direction === "N") {
    return {
      ...position,
      y: position.y + 1
    };
  }
  if (direction === "S") {
    return {
      ...position,
      y: position.y - 1
    };
  }
  if (direction === "E") {
    return {
      ...position,
      x: position.x + 1
    };
  }
  if (direction === "W") {
    return {
      ...position,
      x: position.x - 1
    };
  }
}

//Get new direction when rover receives L to turn left
function turnLeft({ direction }) {
  if (direction === "N") {
    return "W";
  }
  if (direction === "W") {
    return "S";
  }
  if (direction === "S") {
    return "E";
  }
  if (direction === "E") {
    return "N";
  }
}

//Get new direction when rover receives R to turn right
function turnRight({ direction }) {
  if (direction === "N") {
    return "E";
  }
  if (direction === "E") {
    return "S";
  }
  if (direction === "S") {
    return "W";
  }
  if (direction === "W") {
    return "N";
  }
}

export default rover;
