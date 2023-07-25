import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Watch() {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    setPlayer(
      VC.lightbox("#watchButton", {
        vcId: "cl9zhl6w00001murdrywx6080",
        events: {
          event: (x) => console.log(x),
        },
      })
    );
  }, []);

  return (
    <>
      <h1>Watch page</h1>
      <button id="watchButton">Watch</button>
      <div style={{ "padding-top": "1rem" }}>
        <Link to="/">home</Link>
      </div>
    </>
  );
}
