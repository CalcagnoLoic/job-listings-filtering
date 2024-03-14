type Shape = {
  kindShape: "round" | "line";
};

const Component = ({ kindShape }: Shape) => <div className={kindShape}></div>;

export default Component;
