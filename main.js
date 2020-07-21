import { React, Component } from "./React";

class MyComponent extends Component {
  render() {
    return (
      <div>
        cool<span>world</span>
        abcdefg
        <div>{this.children}</div>
      </div>
    );
  }
}

let a = (
  <MyComponent name="a" id="aaa">
    <div>123323</div>hjhjhj hjhjhj
  </MyComponent>
);

React.render(a, document.body);
