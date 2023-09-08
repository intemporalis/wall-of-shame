import { useEffect, useState } from "react";

type Props = {
    name:string;
    typography?:string;
    color?:string;
}

function Icon(props:Props) {
  const { name, ...otherProps } = props;

  /* Use state hook to store icon module value */
  const [iconModule, setIconModule] = useState<any>(null);

  useEffect(() => {
    /* Use dynamic import to get corresponding icon as a module */

    // vv this blows up vv
    import (`@mui/icons-material/${name}`)
      .then((module) => {
        /* Persist data in state */
        setIconModule(module);
      })
      .catch((error) => {
        /* Do not forget to handle errors */
        console.log(error)
        console.error(`Icon with name: ${name} not found!`);
      });
  }, [ name /* update on name change */ ]);

  const renderIcon = () => {
    if (!iconModule) return null;

    /* Equal to: import { ReactComponent as Icon } from "./path/to/icon.svg" */
    const Component = iconModule.ReactComponent;

    return <Component {...otherProps} />;
  };

  return <>{renderIcon()}</>;
}
export default Icon;