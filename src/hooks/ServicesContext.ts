import { createContext } from "react";
import ServicesManager from '../objects/Service/ServicesManager';

export var ServicesData = new ServicesManager();

const ServicesContext = createContext(ServicesData);

export default ServicesContext;