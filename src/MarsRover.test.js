import rover from "./MarsRover";

describe("Mars Rover", () => {
  describe("when it receives F and it's looking N", () => {
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "N"
    };

    describe("and there are NO obstacles", () => {
      const canMoveToPosition = jest.fn().mockRejectedValue(true);

      it("moves forward", () => {
        const marsRover = rover(initialPosition, canMoveToPosition);

        expect(marsRover.move("F")).toStrictEqual({
          position: { x: 0, y: 1 },
          direction: "N"
        });
      });
    });

    describe("and it finds an obstacle or the limit of the planet", () => {
      const canMoveToPosition = jest.fn().mockReturnValue(false);

      it("remains in the same position and reports the obstacle", () => {
        const marsRover = rover(initialPosition, canMoveToPosition);

        expect(marsRover.move("F")).toStrictEqual({
          position: { x: 0, y: 0 },
          direction: "N",
          error: {
            message: "Rover can't move to the next position",
            position: { x: 0, y: 1 }
          }
        });
      });
    });
  });

  describe("when it receives F and it's looking E", () => {
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "E"
    };
    describe("and there are NO obstacles ", () => {
      const canMoveToPosition = jest.fn().mockRejectedValue(true);

      it("moves forward", () => {
        const marsrover = rover(initialPosition, canMoveToPosition);
        expect(marsrover.move("F")).toStrictEqual({
          position: { x: 1, y: 0 },
          direction: "E"
        });
      });
    });

    describe("and it finds an obstacle or the limit of the planet", () => {
      const canMoveToPosition = jest.fn().mockReturnValue(false);

      it("remains in the same position and reports the obstacle", () => {
        const marsRover = rover(initialPosition, canMoveToPosition);

        expect(marsRover.move("F")).toStrictEqual({
          position: { x: 0, y: 0 },
          direction: "E",
          error: {
            message: "Rover can't move to the next position",
            position: { x: 1, y: 0 }
          }
        });
      });
    });
  });

  describe("when it receives F and it's looking S", () => {
    const initialPosition = {
      position: { x: 0, y: 1 },
      direction: "S"
    };
    describe("and there are NO obstacles", () => {
      const canMoveToPosition = jest.fn().mockRejectedValue(true);

      it("moves forward", () => {
        const marsrover = rover(initialPosition, canMoveToPosition);
        expect(marsrover.move("F")).toStrictEqual({
          position: { x: 0, y: 0 },
          direction: "S"
        });
      });
    });

    describe("and it finds an obstacle or the limits of the planet", () => {
      const canMoveToPosition = jest.fn().mockReturnValue(false);

      it("remains in the same position and reports the obstacle", () => {
        const marsRover = rover(initialPosition, canMoveToPosition);

        expect(marsRover.move("F")).toStrictEqual({
          position: { x: 0, y: 1 },
          direction: "S",
          error: {
            message: "Rover can't move to the next position",
            position: { x: 0, y: 0 }
          }
        });
      });
    });
  });

  describe("when it receives F and it's looking W", () => {
    const initialPosition = {
      position: { x: 1, y: 0 },
      direction: "W"
    };
    describe("and there are NO obstacles", () => {
      const canMoveToPosition = jest.fn().mockRejectedValue(true);

      it("moves forward", () => {
        const marsrover = rover(initialPosition, canMoveToPosition);
        expect(marsrover.move("F")).toStrictEqual({
          position: { x: 0, y: 0 },
          direction: "W"
        });
      });
    });

    describe("and it finds an obstacle or the limits of the planet", () => {
      const canMoveToPosition = jest.fn().mockReturnValue(false);

      it("remains in the same position and reports the obstacle", () => {
        const marsRover = rover(initialPosition, canMoveToPosition);

        expect(marsRover.move("F")).toStrictEqual({
          position: { x: 1, y: 0 },
          direction: "W",
          error: {
            message: "Rover can't move to the next position",
            position: { x: 0, y: 0 }
          }
        });
      });
    });
  });

  describe("when it receives 'L' and it's looking 'N'", () => {
    const canMoveToPosition = jest.fn();
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "N"
    };

    it("turns to look to 'W'", () => {
      const marsRover = rover(initialPosition, canMoveToPosition);

      expect(marsRover.move("L")).toStrictEqual({
        position: { x: 0, y: 0 },
        direction: "W"
      });
    });
  });

  describe("when it receives 'L' and it's looking 'W'", () => {
    const canMoveToPosition = jest.fn();
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "W"
    };

    it("turns to look to 'S'", () => {
      const marsRover = rover(initialPosition, canMoveToPosition);

      expect(marsRover.move("L")).toStrictEqual({
        position: { x: 0, y: 0 },
        direction: "S"
      });
    });
  });

  describe("when it receives 'L' and it's looking 'S'", () => {
    const canMoveToPosition = jest.fn();
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "S"
    };

    it("turns to look to 'E'", () => {
      const marsRover = rover(initialPosition, canMoveToPosition);

      expect(marsRover.move("L")).toStrictEqual({
        position: { x: 0, y: 0 },
        direction: "E"
      });
    });
  });

  describe("when it receives 'L' and it's looking 'E'", () => {
    const canMoveToPosition = jest.fn();
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "E"
    };

    it("turns to look to 'N'", () => {
      const marsRover = rover(initialPosition, canMoveToPosition);

      expect(marsRover.move("L")).toStrictEqual({
        position: { x: 0, y: 0 },
        direction: "N"
      });
    });
  });

  describe("when it receives 'R' and it's looking 'N'", () => {
    const canMoveToPosition = jest.fn();
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "N"
    };

    it("turns to look to 'E'", () => {
      const marsRover = rover(initialPosition, canMoveToPosition);

      expect(marsRover.move("R")).toStrictEqual({
        position: { x: 0, y: 0 },
        direction: "E"
      });
    });
  });

  describe("when it receives 'R' and it's looking 'E'", () => {
    const canMoveToPosition = jest.fn();
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "E"
    };

    it("turns to look to 'S'", () => {
      const marsRover = rover(initialPosition, canMoveToPosition);

      expect(marsRover.move("R")).toStrictEqual({
        position: { x: 0, y: 0 },
        direction: "S"
      });
    });
  });

  describe("when it receives 'R' and it's looking 'S'", () => {
    const canMoveToPosition = jest.fn();
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "S"
    };

    it("turns to look to 'W'", () => {
      const marsRover = rover(initialPosition, canMoveToPosition);

      expect(marsRover.move("R")).toStrictEqual({
        position: { x: 0, y: 0 },
        direction: "W"
      });
    });
  });

  describe("when it receives 'R' and it's looking 'W'", () => {
    const canMoveToPosition = jest.fn();
    const initialPosition = {
      position: { x: 0, y: 0 },
      direction: "W"
    };

    it("turns to look to 'N'", () => {
      const marsRover = rover(initialPosition, canMoveToPosition);

      expect(marsRover.move("R")).toStrictEqual({
        position: { x: 0, y: 0 },
        direction: "N"
      });
    });
  });

  describe("when it receives many commands", () => {
    describe("and it doesn't find any obstacles", () => {
      const initialPosition = {
        position: { x: 0, y: 0 },
        direction: "N"
      };

      const canMoveToPosition = jest.fn().mockReturnValue(true);

      it("moves to the next position", () => {
        const marsRover = rover(initialPosition, canMoveToPosition);

        expect(marsRover.move("FFRFFRFFFFRRFFL")).toStrictEqual({
          position: { x: 2, y: 0 },
          direction: "W"
        });
      });
    });

    describe("and it finds any obstacle or the limits of the planet", () => {
      const initialPosition = {
        position: { x: 0, y: 0 },
        direction: "N"
      };

      const canMoveToPosition = jest
        .fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false);

      it("remains in the same position and reports the obstacle", () => {
        const marsRover = rover(initialPosition, canMoveToPosition);

        expect(marsRover.move("FFRFFRFFFFRRFFL")).toStrictEqual({
          position: { x: 1, y: 2 },
          direction: "E",
          error: {
            message: "Rover can't move to the next position",
            position: { x: 2, y: 2 }
          }
        });
      });
    });
  });
});
