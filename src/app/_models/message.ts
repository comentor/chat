import _ from 'lodash';
export class Message {
  text = '';
  sentAt = '';
  sentBy = '';
  constructor(json: any) {
    Object.assign(this, json, {id: json.id});
  }
  toJSON? = function() {
    return _.merge({}, this);
  }
}
