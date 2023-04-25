import React from "react";

function Html(props) {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "green" }}>Html Language</h2>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            width={250}
            height={250}
          />
        </div>
        <div>
          <dl>
            <dt>
              <b>Language</b>
            </dt>
            <dd>HTML</dd>
            <dt>
              <b>Description</b>
            </dt>
            <dd>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet
                sapiente, ipsum libero eum rerum eveniet assumenda delectus.
                Molestias corrupti doloremque, totam iure harum quam libero unde
                ipsum incidunt inventore, odit eveniet error in cupiditate, nisi
                earum sapiente quos voluptates suscipit illum quo blanditiis
                quibusdam consequatur voluptatum! Nemo, accusantium laudantium.
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Html;
