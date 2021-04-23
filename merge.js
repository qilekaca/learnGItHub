// leetcode - 56
// NOTE: 计算数组的交集
intervals = [[8,10],[15,18],[1,3],[2,6]]
// 输出 [[1,6],[8,10],[15,18]]
var merge = function(intervals) {
    if (intervals.length = 0) return
    const result = []
    intervals.sort((a, b) => a[0] - b[0])
    result.push(intervals[0])
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > result[result.length - 1][1]) {
            result.push(intervals[i])
        } else {
            if (result[result.length - 1][1] < intervals[i][1]) {
                result[result.length - 1][1] = intervals[i][1]
            }
        }
    }
    return result
};

merge(intervals)

