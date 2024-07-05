import BBtn from "../BBtn.vue";
import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils"


const btnFactory = (props, slots) => mount(BBtn, {
  props,
  slots
});

describe("Component BBtn", () => {
  it("should render text passed in slot", () => {
    const text = faker.string.alphanumeric(16);
    const btn = btnFactory({}, { default: text })
    expect(btn.text()).toBe(text)
  });

  it("should assign outlined class when outlined is true", () => {
    const btn = btnFactory({ outlined: true })
    expect(btn.classes()).toContain('b-btn__outlined')
  });

  it("should assign disabled class when outlined is true", () => {
    const btn = btnFactory({ disabled: true })
    expect(btn.classes()).toContain('b-btn__disabled')
  });
});