import _ from 'lodash';
export class User {
  blockList: Array<string> = [];
  constructor(json: any) {
    Object.assign(this, json);
  }
	toJSON() {
		const res: any = {}
		for (const property in this) {
			if (typeof this[property] !== `function`) {
				res[property]	= this[property];
			}
		}
		return res;
	}
  addToBlockList = function(email) {
    if (!this.blockList.includes(email)) {
      this.blockList.push(email);
    }
  }
  removeFromBlockList = function(email) {
    const index = this.blockList.indexOf(email);
    if(index > -1) {
      this.blockList.splice(index, 1);
    }
  }
}
