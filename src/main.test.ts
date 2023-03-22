import { dp } from "./main";

describe("dp function test", () => {
    it("that the dp function returns correct results", () => {
        const weights = [2, 3, 4, 5];
        const values = [3, 4, 5, 6];
        const itemCount = weights.length;
        // items 1 and 2 can be selected
        expect(dp(5, weights, values, itemCount)).toBe(7); 
        // items 1 and 3 can be selected
        expect(dp(6, weights, values, itemCount)).toBe(8);
    });

    it("should return the maximum value that can be put in a dp of capacity 300", () => {
        const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        const values = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        const capacity = 300;
        const itemCount = weights.length;
        expect(dp(capacity, weights, values, itemCount)).toBe(300);
    });

    it("should return the maximum value that can be put in a dp of capacity 10000", () => {
        const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        const values = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        const capacity = 10000;
        const itemCount = weights.length;
        expect(dp(capacity, weights, values, itemCount)).toBe(450);
    });

    it("should return 0 when there are no items", () => {
        const weights: number[] = [];
        const values: number[] = [];
        const capacity = 50;
        const itemCount = weights.length;
        expect(dp(capacity, weights, values, itemCount)).toBe(0);
    });

    it("should return 0 when the capacity of the dp is 0", () => {
        const weights = [10, 20, 30];
        const values = [60, 100, 120];
        const capacity = 0;
        const itemCount = weights.length;
        expect(dp(capacity, weights, values, itemCount)).toBe(0);
    });

    it("If the total weight exceeds the capacity, the maximum value should be set to 0", () => {
        const weights = [10, 20, 30];
        const values = [60, 100, 120];
        const capacity = 9;
        const itemCount = weights.length;
        expect(dp(capacity, weights, values, itemCount)).toBe(0);
    });

    it("If allowable capacity = total weight, maximum value = total value.", () => {
        const weights = [10, 20, 30];
        const values = [60, 100, 120];
        const capacity = 60;
        const itemCount = weights.length;
        expect(dp(capacity, weights, values, itemCount)).toBe(280);
    });
});
