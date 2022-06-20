import switchFn from "./switchComponents";

const displayComponents = (componentsData, components) => {
  const switchComponents = switchFn(components, "default");

  const renderComponents = componentsData
    ? componentsData.map((component) =>
        switchComponents(component)
      )
    : console.log("Component data not loading");

  return renderComponents;
};

export default displayComponents;
