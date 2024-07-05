import BField from "../BField.vue";
import { describe, it, expect, vi } from "vitest";
import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils"


const fieldFactory = (props, slots) => mount(BField, {
  props,
  slots
});

describe("Component BField", () => {
  it("should render label passed as prop", () => {
    const label = faker.string.alphanumeric(16);
    const field = fieldFactory({ label })

    expect(field.text()).toBe(label)
  });

  it.each([
    'text',
    'date',
    'password',
    'email',
  ]
  )("should assign type '%s' to field when type passed as prop", (type) => {
    const field = fieldFactory({ type })
    expect(field.get(`input[type=${type}]`)).toBeTruthy()
  });

  it("should disabled field when prop disabled is true", () => {
    const field = fieldFactory({ disabled: true })
    expect(field.get('input[disabled]')).toBeTruthy()
  });

  it("should update modelValue and run rules when input value change", async () => {
    const text = faker.string.alphanumeric(16);
    const rule = vi.fn()

    const field = fieldFactory({
      rules: [rule],
      'onUpdate:modelValue': (e) => field.setProps({ modelValue: e })
    })
    await field.find('input').setValue(text)

    expect(field.props('modelValue')).toBe(text)
    expect(rule).toBeCalled()
    expect(rule).toBeCalledWith(text)
  });
});