const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

class Player {
  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }

  get type() { return "player"; }

  static create(pos) {
    return new Player(pos.plus(new Vec(0, -0.5)),
                      new Vec(0,0));
  }
}

Player.prototype.size = new Vec(0.8, 1.5);
