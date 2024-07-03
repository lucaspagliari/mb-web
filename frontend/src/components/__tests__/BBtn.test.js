import BBtn from "../BBtn.vue";
import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils"


describe("Component BBtn", () => {
  it("should render text passed in slot", () => {
    const text = faker.string.alphanumeric(16);
    const btn = mount(BBtn, {
      slots: {
        default: text,
      },
    });

    expect(btn.text()).toBe(text)
  });

  it("should assign outlined class when outlined is true", () => {
    const btn = mount(BBtn, {
      props: {
        outlined: true
      }
    });

    expect(btn.classes()).toContain('v-button__outlined')
  });
});