import BField from "../BField.vue";
import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils"

const fieldFactory = (props, options) => mount(BField, { props, ...options })

describe("Component BField", () => {
  it("should render label passed as prop", () => {
    const label = faker.string.alphanumeric(16);
    const field = fieldFactory({ label })

    expect(field.text()).toBe(label)
  });

});