import { createStore } from "redux";
// *** creatStore allows us to export the creation of our store. *** ///
import reducer from "./ducks/reducer";




export default createStore( reducer );