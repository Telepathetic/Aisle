import Interactor from 'kye-engine/lib/entities/interactor';
import { Map } from 'immutable';

export default class Edible extends Interactor {
  constructor(attribute) {
    super(attribute);
  }

  get pushable() {
    return false;
  }
}
Edible.attributesBySymbol = Map({ e: null });
Edible.__name = 'Edible'; // uglify killin' me
