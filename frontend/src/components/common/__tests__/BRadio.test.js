import BRadio from "../BRadio.vue";
import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils"

const radioFactory = (props, options) => mount(BRadio, { props, ...options })

describe("Component BRadio", () => {
    it("should render text passed in slot", () => {
        const text = faker.string.alphanumeric(16);
        const radio = radioFactory({ label: text })

        expect(radio.text()).toBe(text)
    });
});