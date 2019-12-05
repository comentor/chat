import _ from 'lodash';
export class Room {
  id = '';
  name = '';
  createAt = '';
  createBy = '';
  users = [];
  constructor(json: any) {
    Object.assign(this, json, {id: json.id});
  }
  toJSON? = function() {
    return _.merge({}, this);
  }
}
