import { describe, test, expect, vi, beforeAll, afterAll } from "vitest";
import { Sparrow } from "../../src/ejercicio-6/models/Sparrow";
import { Penguin } from "../../src/ejercicio-6/models/Penguin";
import { Bird } from "../../src/ejercicio-6/models/Bird";

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

  test("debe instanciarse correctamente", () => {
    const bird = new Bird();
    expect(bird).toBeInstanceOf(Bird);
  });

  test("debe llamar console.log con 'I am a bird.' al ejecutar describe()", () => {
    const bird = new Bird();
    const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    
    bird.describe();

    expect(consoleLogSpy).toHaveBeenCalledWith("I am a bird.");
    
    consoleLogSpy.mockRestore();
  });
});
