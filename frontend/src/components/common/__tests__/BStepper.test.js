import BStepper from "../BStepper.vue";
import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils"

const stepperFactory = (props, options) => mount(BStepper, { props, ...options })

describe("Component BStepper", () => {
    it("should render text passed in slot", () => {
        const text = faker.string.alphanumeric(16);
        const radio = stepperFactory({}, { slots: { default: text } })

        expect(radio.text()).contain(text)
    });

    it("should render current index passed as prop", () => {
        const index = faker.number.int();
        const radio = stepperFactory({ index },)

        expect(radio.text()).contain(index + 1)
    });
});