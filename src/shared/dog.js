// @flow

export default class {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark(): string {
    return `wah wah, i am ${this.name}`;
  }

  barkInConsole() {
    /* eslint-disable no-console */
    console.log(this.bark());
    /* eslint-enable no-console */
  }
}

