import { Stack } from "./index";

describe("Stack class", () => {
  test("should be able to add and remove items", () => {
    const s = new Stack();
    s.push(1);
    expect(s.pop()).toEqual(1);
    s.push(2);
    expect(s.pop()).toEqual(2);
  });

  test("should follow `first in, last out` principle", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.pop()).toEqual(3);
    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual(1);
  });

  test("should have a peek method which returns the last element but doesn't remove it", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.peek()).toEqual(3);
    expect(s.pop()).toEqual(3);
    expect(s.peek()).toEqual(2);
    expect(s.pop()).toEqual(2);
    expect(s.peek()).toEqual(1);
    expect(s.pop()).toEqual(1);
  });
});
