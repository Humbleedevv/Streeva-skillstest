import displayComponents from "../../../functions/wordpress/displayComponents";
import homeComponentList from "./homeComponentList";

const HomeTemplate = ({ componentData }) => {
  return displayComponents(componentData, homeComponentList);
};

export default HomeTemplate;
