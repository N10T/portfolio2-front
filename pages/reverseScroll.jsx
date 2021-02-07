import React from "react";

const style = {
  title: {
    fontFamily: "Oswald, sans-serif",
    backgroundColor: "white",
    borderRadius: "4px",
    padding: "50px",
  },
  container: {
    position: "fixed",
    display: "flex",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",
  },
  left: {
    fontSize: "48px",
    width: "50%",
    height: "1800px",
    background: "green",
    color: "#fff",
    float: "left",
    textAlign: "center",
  },
  right: {
    fontSize: "48px",
    width: "50%",
    height: "1800px",
    zIndex: "0",
    // marginTop: "-1800px" /*Start offset, put it at same as*/,
    backgroundColor: "#191f27",
    color: "#35ff99",
    float: "left",
    textAlign: "center",
  },
};

export default function ReverseScroll() {
  const [height, setheight] = React.useState("-1500px");

  React.useEffect(() => {
    const rightElement = document.getElementById("right");
    const leftElement = document.getElementById("left");
    // rightElement.style.marginTop = "-" + (window.innerHeight/2) + "px";
    // leftElement.style.top = leftElement.clientHeight+"px";

    document.onscroll = (e) => {
      rightElement.style.transform = "translate3d(0," + 2 * window.scrollY + "px, 0)";
      // console.log(window.scrollY);
      // console.log(window.innerHeight);
    };
  }, []);

  return (
    <div id="reverseScroll">
      <div style={style.container}>
        <h1 style={style.title}>Reverse scroll</h1>
      </div>
      <div style={style.left} id="left">
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
        <div className="arrow">↑</div>
      </div>

      <div style={style.right} id="right">
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
        <div className="arrow">↓</div>
      </div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
