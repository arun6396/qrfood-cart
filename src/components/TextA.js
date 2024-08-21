import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [" Restaurant", "Your happy place", "Foodies", "Crazy Food"];

const TextA = () => {
  const [index, setIndex] = React.useState(0);
  
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
};
export default TextA;
