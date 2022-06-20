import displayComponents from "../../../functions/wordpress/displayComponents";
import pagesComponentList from "./pagesComponentList";

const PagesTemplate = ({ componentData }) => {
  return displayComponents(componentData, pagesComponentList);
};

export default PagesTemplate;
