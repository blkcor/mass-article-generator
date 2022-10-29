export function randomInt(min, max) {
    const p = Math.random();
    return Math.floor((1 - p) * min + p * max);
}


export function createRandomPicker(arr) {
    arr = [...arr]; // copy 数组，以免修改原始数据
    function randomPick() {
        const len = arr.length - 1;
        const index = randomInt(0, len);
        const picked = arr[index];
        [arr[index], arr[len]] = [arr[len], arr[index]];
        return picked;
    }
    randomPick(); // 抛弃第一次选择结果
    return randomPick;
}