function divide(array, left, right, pivot) {
    while (left <= right) {
        while (array[left] < pivot) left++; // pivot보다 크거나 같은 것 찾기
        while (array[right] > pivot) right--; // pivot보다 작거나 같은 것 찾기

        // 엇갈리지 않았다면 swap, 맨 위의 while문을 지켜줘야 한다. 위 2개의 while문에 의해 left가 right보다 커졌을 수도 있다.
        if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }

    return left;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    const pivot = array[mid];
    const partition = divide(array, left, right, pivot);

    quickSort(array, left, partition - 1);
    quickSort(array, partition, right);

    return array;
}

const sorted = quickSort([12, 2, 7, 4, 5, 3]);
console.log(sorted);
