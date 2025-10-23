import {Sum} from "../Sum";

test("Sum function should add two numbers", () => {
    const result = Sum(10, 20)
    //Assertion 
    expect(result).toBe(30)
})