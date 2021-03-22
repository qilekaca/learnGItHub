import { Compare, defaultCompare, swap } from './util'
// function bubbleSort(array, compareFn = defaultCompare) {
//   const { length } = array
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
//         swap(array, j, j + 1)
//       }
//     }
//   }
//   return array
// }

const arr = [3, 5, 1, 6, 4, 7, 2]
// ------------------
// NOTE: 冒泡排序
function bubbleSort(array) {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array
}
// console.log(bubbleSort(arr))

// -----------------
// NOTE: 选择排序
function selectionSort(array) {
  const { length } = array
  let indexMin
  for (let i = 0; i < length - 1; i++) {
    indexMin = i
    for (let j = i; j < length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      ;[array[i], array[indexMin]] = [array[indexMin], array[i]]
    }
  }
  return array
}

// NOTE: 插入排序
function insertionSort(array) {
  const { length } = array
  let temp
  for (let i = 0; i < length; i++) {
    let j = i
    temp = array[i]
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
  return array
}

// ------------------
// NOTE: 归并排序
function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle), compareFn)
    const right = mergeSort(array.slice(middle, length), compareFn)
    array = merge(left, right, compareFn)
  }
  return array
}
function merge(left, right) {
  let i = 0
  let j = 0
  const result = []
  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === Compare.LESS_THAN
        ? left[i++]
        : right[j++]
    )
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

// ------------------------
// NOTE: 快速排序
function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn)
}

function quick(array, left, right, compareFn) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right, compareFn)
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn)
    }
    if (index < right) {
      quick(array, index, right, compareFn)
    }
  }
  return array
}

function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  return i
}

// console.log(quickSort(arr))
// ------------------------------
// NOTE: 计数排序
function countingSort(array) {
  if (array.length < 2) {
    return array
  }
  const maxValue = findMaxValue(array)
  const counts = new Array(maxValue + 1)
  array.forEach((element) => {
    if (!counts[element]) {
      counts[element] = 0
    }
    counts[element]++
  })
  let sortedIndex = 0
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i
      count--
    }
  })
  return array
}
