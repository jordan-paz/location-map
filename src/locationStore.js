import { observable, action } from "mobx";
import axios from "axios";

class Store {
  @observable locations = [];
  @observable selectedLocation = null;

  @action
  selectLocation = location => (this.selectedLocation = location);

  @action
  getLocations = async () => {
    const response = await axios.get("http://localhost:9000");
    console.log(response);
    this.locations = response.data;
  };
}
export default Store;
