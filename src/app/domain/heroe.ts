export class Heroe {

  _name;
  _description;
  _link;
  _image;

  constructor(name: string, description: string, link: string, image: string) {
    this._name = name;
    this._description = description;
    this._image = image;
    this._link = link;
  }

  get name() { return this._name; }
  set name(val) {  this._name = val; }

  get description() { return this._description; }
  set description(val) {  this._description = val; }

  get link() { return this._link; }
  set link(val) {  this._link = val; }

  get image() { return this._image; }
  set image(val) {  this._image = val; }

}
