import { observable, action } from "mobx";
import axios from "axios";

class Store {
  @observable locations = [];
  @observable selectedLocation = null;

  @action
  getLocations = async () => {
    const response = await axios.get("http://localhost:9000");
    console.log(response);
    this.locations = response.data;
  };

  @action
  selectLocation = index => {
    this.selectedLocation = this.locations[index];
  };
}
export default Store;
