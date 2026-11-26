import { useState } from "react";

function App() {
  const internalcss = {
    color: "white",
    backgroundColor: "grey",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };

  return (
    <>
    <h1>React CSS</h1>
      {/* inline css */}
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>
        Hi I am Inline CSS
      </h1>

      {/* Internal CSS */}
      <p style={internalcss}>Hi I am Internal CSS</p>

      <p>
        <p>external css</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        voluptatibus est eos placeat architecto accusantium tenetur tempore,
        ducimus rem? Soluta quibusdam facilis sequi, veritatis blanditiis vitae
        repellendus beatae nostrum nihil! Modi quaerat ullam facere, eveniet
        quibusdam laboriosam cum recusandae consequuntur, necessitatibus ad
        dolorem eius ratione voluptatem. Similique, ipsam unde? Sunt quas
        eveniet cum porro facilis. Iure ea nostrum distinctio recusandae?
        Cumque, vitae. Eligendi eum ut neque veniam, ratione, et qui aperiam
        beatae animi facere doloribus laborum incidunt! Tempora alias numquam
        architecto. Corporis nobis ea modi ex, recusandae excepturi ut sapiente.
        Voluptatum maxime impedit blanditiis repellat ea at cum, minus optio!
        Neque numquam optio quae illo facilis adipisci tempora officiis enim
        magni. Laborum voluptatibus placeat aliquam odit! Iure rem odio omnis?
        Fugit id doloribus tenetur pariatur dolore explicabo rem vel dolorum
        exercitationem repellat quae inventore, voluptate minus odio excepturi
        itaque. Deserunt architecto ratione maiores placeat voluptate fugit
        sequi eos est quasi. Apple Banana Zebr
      </p>
      <h1 className="ashish">Hi I am Class CSS</h1>
      
    </>
  );
}

export default App;
