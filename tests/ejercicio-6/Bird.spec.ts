import { describe, test, expect, vi, beforeAll, afterAll } from "vitest";
import { Sparrow } from "../../src/ejercicio-6/models/Sparrow";
import { Penguin } from "../../src/ejercicio-6/models/Penguin";

describe("Bird subclasses", () => {
  beforeAll(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });
  
  afterAll(() => {
    vi.restoreAllMocks();
  });
  
  test("Sparrow should be able to fly", () => {
    const sparrow = new Sparrow();
    const consoleSpy = vi.spyOn(console, "log");

    sparrow.fly();

    expect(consoleSpy).toHaveBeenCalledWith("Flying...");
    consoleSpy.mockRestore();
  });

  test("Penguin should not have a fly method", () => {
    const penguin = new Penguin();
    expect("fly" in penguin).toBe(false);
  });  

  test("Penguin should be able to swim", () => {
    const penguin = new Penguin();
    const consoleSpy = vi.spyOn(console, "log");

    penguin.swim();

    expect(consoleSpy).toHaveBeenCalledWith("Swimming...");
    consoleSpy.mockRestore();
  });
});
