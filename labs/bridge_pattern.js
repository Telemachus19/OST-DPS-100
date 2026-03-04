class Device {
  constructor() {
    this.volume = 50;
  }
  increase_volume() {
    this.volume += 10;
    console.log(`${this.constructor.name} Volume: ${this.volume}`);
  }
  decrease_volume() {
    this.volume -= 10;
    console.log(`${this.constructor.name} Volume: ${this.volume}`);
  }
  mute() {
    this.volume = 0;
    console.log(`${this.constructor.name} is Muted`);
  }
}

class TV extends Device {}
class Speaker extends Device {}

class BasicRemote {
  constructor(device) {
    this.device = device;
  }
  volumeUp() {
    this.device.increase_volume();
  }
  volumeDown() {
    this.device.decrease_volume();
  }
}

class AdvancedRemote extends BasicRemote {
  constructor(device) {
    super(device);
  }
  muteDevice() {
    this.device.mute();
  }
}

const myTV = new TV();
const basicRemote = new BasicRemote(myTV);
basicRemote.volumeUp();

const mySpeaker = new Speaker();
const advancedRemote = new AdvancedRemote(mySpeaker);
advancedRemote.volumeDown();
advancedRemote.muteDevice();
