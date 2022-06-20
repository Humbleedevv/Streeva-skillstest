import Hero from "../../organisms/Hero";
import ComponentExample from "../../content/ComponentExample";
import ComponentExampleTwo from "../../content/ComponentExampleTwo";

const pagesComponentList = {
  hero: (component) => {
    return !!component && <Hero key={component.id} />;
  },
  exampleComponent: (component) => {
    return (
      !!component && (
        <ComponentExample
          key={component.id}
          title={component.title}
          text={component.text}
        />
      )
    );
  },
  exampleComponent2: (component) => {
    return (
      !!component && (
        <ComponentExampleTwo
          key={component.id}
          title={component.title}
          text={component.text}
        />
      )
    );
  },
  exampleComponent3: (component) => {
    return (
      !!component && (
        <ComponentExample
          key={component.id}
          title={component.title}
          text={component.text}
        />
      )
    );
  },
  default: (component) => {
    console.log(
      `The component :: ${component.acf_fc_layout} has content available for this page but no component to render in position :: ${component.id}`,
      index
    );
  },
};

export default pagesComponentList;
