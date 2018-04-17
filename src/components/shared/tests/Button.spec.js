import React from "react";
import { shallow } from "enzyme";

import CloseButton from "../Button/Close";
import CommandBarButton from "../Button/CommandBarButton";
import PaneToggleButton from "../Button/PaneToggle";

describe("CloseButton", () => {
  const spy = jest.fn();
  const tooltip = "Close something";
  const wrapper = shallow(
    <CloseButton buttonClass="error" handleClick={spy} tooltip={tooltip} />
  );
  it("renders", () => expect(wrapper).toMatchSnapshot());
  wrapper.find("button").simulate("click");
  it("handleClick is called", () => expect(spy).toHaveBeenCalled());
  it("tooltip is passed through", () =>
    expect(wrapper.find("button").prop("title")).toEqual(tooltip));
});

describe("CommandBarButton", () => {
  it("renders", () => {
    expect(
      shallow(
        <CommandBarButton className="resume" pressed={false}>
          <img />
        </CommandBarButton>
      )
    ).toMatchSnapshot();
  });
});

describe("PaneToggleButton", () => {
  const spy = jest.fn();
  const wrapper = shallow(
    <PaneToggleButton collapsed={false} handleClick={spy} position="start" />
  );
  it("renders start", () => expect(wrapper).toMatchSnapshot());
  it("renders start horizontal", () => {
    wrapper.setProps({ horizontal: true });
    expect(wrapper).toMatchSnapshot();
  });
  it("renders start collapsed", () => {
    wrapper.setProps({ collapsed: true, horizontal: false });
    expect(wrapper).toMatchSnapshot();
  });
  it("renders end", () => {
    wrapper.setProps({ position: "end" });
    expect(wrapper).toMatchSnapshot();
  });
  it("renders end horizontal", () => {
    wrapper.setProps({ horizontal: true });
    expect(wrapper).toMatchSnapshot();
  });
  it("renders end collapsed", () => {
    wrapper.setProps({ collapsed: true, horizontal: false });
    expect(wrapper).toMatchSnapshot();
  });
  it("handleClick is called", () => {
    wrapper.find("CommandBarButton").simulate("click");
    expect(spy).toHaveBeenCalledWith("end", true);
  });
});
