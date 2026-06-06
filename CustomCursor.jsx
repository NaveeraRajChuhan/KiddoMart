import React, {
  useEffect,
  useState
} from "react";

function CustomCursor() {
  const [pos, setPos] =
    useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: pos.x,
          top: pos.y
        }}
      />

      <div
        className="cursor2"
        style={{
          left: pos.x,
          top: pos.y
        }}
      />
    </>
  );
}

export default CustomCursor;