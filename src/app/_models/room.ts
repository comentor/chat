import _ from 'lodash';
export class Room {
  id = '';
  name = '';
  createdAt = '';
  createdBy = '';
  type = '';
  users = [];
  joinedAt: any = {};
  invitedBy: any = {};
  constructor(json: any) {
    Object.assign(this, json, {id: json.id});
  }
  toJSON? = function() {
    return _.merge({}, this);
  }
}
