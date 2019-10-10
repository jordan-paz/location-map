import { decorate, observable } from "mobx";
import { observer } from "mobx-react";

class Store {
  @observable locations = [];
  @observable selectedLocation = null;
  getLocations;
}
export default Store;
