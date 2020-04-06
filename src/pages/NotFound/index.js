import React from "react";

// import { Container } from './styles';

export default function NotFound() {
  return (
    <div
      class="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center">
        404
      </h1>
      <div class="inline-block align-middle">
        <h2 class="font-weight-normal lead" id="desc">
          The page you requested was not found.
        </h2>
      </div>
    </div>
  );
}
