import BStepper from "../BStepper.vue";
import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils"

const stepperFactory = (props, slots) => mount(BStepper, { props, slots })

describe("Component BStepper", () => {
  it("should render text passed in slot", () => {
    const text = faker.string.alphanumeric(16);
    const stepper = stepperFactory({}, { default: text })

    expect(stepper.text()).contain(text)
  });

  it("should render current index passed as prop", () => {
    const index = faker.number.int();
    const stepper = stepperFactory({ index })

    expect(stepper.text()).contain(index + 1)
  });

  it("should render max index passed as prop", () => {
    const maxIndex = faker.number.int();
    const stepper = stepperFactory({ maxIndex })

    expect(stepper.text()).contain(maxIndex)
  });
});