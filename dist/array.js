"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMax(nums) {
    let maxValue = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }
    return maxValue;
}
