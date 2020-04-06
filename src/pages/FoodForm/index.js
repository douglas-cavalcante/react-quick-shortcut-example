import React from "react";

// import { Container } from './styles';

export default function FoodForm() {
  return (
    <form>
      <div class="form-row align-items-center">
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInput">
            Food
          </label>
          <input
            type="text"
            class="form-control mb-2"
            id="inlineFormInput"
            placeholder="Jane Doe"
          />
        </div>
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInputGroup">
            Username
          </label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="Username"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
