import { drawArray } from './drawArray.js';
import { isArraySorted } from './isArraySorted.js';

export function *bubbleSort(LastY) {
	var i, j;
	var len = LastY.length;
	const starttime = new Date().getTime();
	for (i = 0; i < len; i++) {
		no_loops = no_loops + 1;
		no_steps = no_steps + 1;
		for (j = 0; j < len; j++) {
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p1").innerHTML = no_loops;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
			if (LastY[j] > LastY[j + 1]) {
				var temp = LastY[j]
				LastY[j] = LastY[j + 1];
				LastY[j + 1] = temp;
				no_steps = no_steps + 2;
			}
		}
		yield {LastY};
		if (isArraySorted(LastY) == true) {
			no_steps = no_steps + 1;
			document.getElementById("p1").innerHTML = no_loops;
			document.getElementById("p2").innerHTML = no_steps;
			return;
		}
	}
}

export function *visbubbleSort(LastY) {
	var i, j;
	var len = LastY.length;
	const starttime = new Date().getTime();
	for (i = 0; i < len; i++) {
		no_loops = no_loops + 1;
		no_steps = no_steps + 1;
		for (j = 0; j < len; j++) {
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p1").innerHTML = no_loops;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
			if (LastY[j] > LastY[j + 1]) {
				var temp = LastY[j]
				LastY[j] = LastY[j + 1];
				LastY[j + 1] = temp;
				no_steps = no_steps + 2;
			}
			yield {LastY};
		}
		if (isArraySorted(LastY) == true) {
			no_steps = no_steps + 1;
			document.getElementById("p1").innerHTML = no_loops;
			document.getElementById("p2").innerHTML = no_steps;
			return;
		}
	}
}

export function *selectionSort(LastY) {
	let n = LastY.length;
	const starttime = new Date().getTime();
	for (let i = 0; i < n; i++) {
		no_loops = no_loops + 1;
		no_steps = no_steps + 1;
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p1").innerHTML = no_loops;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		let min = i;
		for (let j = i + 1; j < n; j++) {
			no_steps = no_steps + 2;
			if (LastY[j] < LastY[min]) {
				min = j;
			}
		}
		if (min != i) {
			let tmp = LastY[i];
			LastY[i] = LastY[min];
			LastY[min] = tmp;
		}
		yield {LastY};

		if (isArraySorted(LastY)) {
			no_steps = no_steps + 1;
			document.getElementById("p1").innerHTML = no_loops;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
			return;
		}
	}  
}

export function *insertionSort(LastY) {
    let n = LastY.length;
	const starttime = new Date().getTime();
        for (let i = 1; i < n; i++) {
			no_loops = no_loops + 1;
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p1").innerHTML = no_loops;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
            // Choosing the first element in our unsorted subarray
            let current = LastY[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < LastY[j])) {
                LastY[j+1] = LastY[j];
                j--;
				no_steps = no_steps + 2;
            }
            LastY[j+1] = current;
			no_steps = no_steps + 1;
			yield {LastY};
        }
    if (isArraySorted(LastY)) {
		no_steps = no_steps + 1;
		document.getElementById("p1").innerHTML = no_loops;
		document.getElementById("p2").innerHTML = no_steps;
		return;
	}
}

export function *mergeSort(LastY) {
	const starttime = new Date().getTime();
	var n = LastY.length;
    var curr_size;
    var left_start;
	no_loops--
    for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
		no_loops++
		document.getElementById("p1").innerHTML = no_loops;
        for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
            var mid = Math.min(left_start + curr_size - 1, n - 1);
            var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
            merge(LastY, left_start, mid, right_end);
			yield {LastY};
            }
        }
    }
function merge(LastY , l , m , r) {
    var i, j, k;
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = Array(n1).fill(0);
    var R = Array(n2).fill(0);

    for (i = 0; i < n1; i++)
        L[i] = LastY[l + i];
    for (j = 0; j < n2; j++)
        R[j] = LastY[m + 1 + j];

    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            LastY[k] = L[i];
            i++;
			no_steps++;
        } else {
            LastY[k] = R[j];
            j++;
			no_steps++;
        }
        k++;
    }

    while (i < n1) {
        LastY[k] = L[i];
        i++;
        k++;
		no_steps++;
    }

    while (j < n2) {
        LastY[k] = R[j];
        j++;
        k++;
		no_steps++;
    }
}


function partition(arr, low, high) {
    let temp;
    let pivot = arr[high];
    let i = (low - 1);
	
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
			no_steps++
			no_steps++
        }
    }
	
    temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
	no_steps++
	no_steps++
    return i + 1;
}
   
export function *quickSort(LastY) {
	const starttime = new Date().getTime();
    let l = 0;
	let h = LastY.length;
		
    let stack = new Array(h - l + 1);
    stack.fill(0);
   
    let top = -1;
   
    stack[++top] = l;
    stack[++top] = h;
   
    while (top >= 0) {
		no_loops++
		document.getElementById("p1").innerHTML = no_loops;
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		yield {LastY};
        h = stack[top--];
        l = stack[top--];
        let p = partition(LastY, l, h);
        if (p - 1 > l) {
            stack[++top] = l;
            stack[++top] = p - 1;
        }
   
        if (p + 1 < h) {
            stack[++top] = p + 1;
            stack[++top] = h;
        }
    }
}

export function *heapSort(LastY) {
    var N = LastY.length;
	const starttime = new Date().getTime();
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(LastY, N, i);
 
    for (var i = N - 1; i > 0; i--) {
		no_loops++
		document.getElementById("p1").innerHTML = no_loops;
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		yield {LastY};
        var temp = LastY[0];
        LastY[0] = LastY[i];
		no_steps++
        LastY[i] = temp;
		no_steps++
        heapify(LastY, i, 0);
	}
}
 
function heapify(LastY, N, i) {
    var largest = i; 
    var l = 2 * i + 1; 
    var r = 2 * i + 2; 
    if (l < N && LastY[l] > LastY[largest])
        largest = l;
    if (r < N && LastY[r] > LastY[largest])
        largest = r;
    if (largest != i) {
        var swap = LastY[i];
        LastY[i] = LastY[largest];
		no_steps++
        LastY[largest] = swap;
		no_steps++
        heapify(LastY, N, largest);
	}
}

export function *countingSort(LastY, temparray) {
	const starttime = new Date().getTime();
	if (temparray.length === 0) {
		return temparray;
	}
	for (let i = 0; i < temparray.length; i++){
		temparray[i] = Math.round(temparray[i]);
	}

	let min = temparray[0];
	let max = temparray[0];
	for (let i = 1; i < temparray.length; i++) {
		if (temparray[i] < min) {
			min = temparray[i];
		}
		if (temparray[i] > max) {
			max = temparray[i];
		}
	}

	const count = new Array(max - min + 1).fill(0);
	const output = new Array(temparray.length);

	for (let i = 0; i < temparray.length; i++) {
		count[temparray[i] - min]++;
	}

	for (let i = 1; i < count.length; i++) {
		count[i] += count[i - 1];
	}

	for (let i = temparray.length - 1; i >= 0; i--) {
		no_loops++
		document.getElementById("p1").innerHTML = no_loops;
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		
		output[count[temparray[i] - min] - 1] = temparray[i];
		no_steps++
		LastY[count[temparray[i] - min] - 1] = output[count[temparray[i] - min] - 1];
		no_steps++
		count[temparray[i] - min]--;
		no_steps++

		yield {LastY};
	}
}

export function *radixSort (arr) {
	const starttime = new Date().getTime();
	for (let i = 0; i < arr.length; i++){
		arr[i] = Math.round(arr[i]);
	}
    var idx1, idx2, idx3, len1, len2, radix, radixKey;
    var radices = {}, buckets = {}, num, curr;
    var currLen, radixStr, currBucket;

    len1 = arr.length;
    len2 = 10;  // radix sort uses ten buckets
       
    for (idx1 = 0;idx1 < len1;idx1++) {
		radices[arr[idx1].toString().length] = 0;
    }

    for (radix in radices) {
		no_loops++
		no_steps++
		len1 = arr.length;
		for (idx1 = 0;idx1 < len1;idx1++) {
			no_steps++
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p3").innerHTML = curtime;
			curr = arr[idx1];
			currLen = curr.toString().length;
			if (currLen >= radix) {
				radixKey = curr.toString()[currLen - radix];
				if (!buckets.hasOwnProperty(radixKey)) {
					buckets[radixKey] = [];
				}
				buckets[radixKey].push(curr);          
			}
			else {
				if (!buckets.hasOwnProperty('0')) {
					buckets['0'] = [];
				}
				buckets['0'].push(curr);          
			}
		}
		idx1 = 0;
		for (idx2 = 0;idx2 < len2;idx2++) {
			no_steps++
			yield {LastY};
			document.getElementById("p1").innerHTML = no_loops;
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
			if (buckets[idx2] != null) {
				currBucket = buckets[idx2];
				len1 = currBucket.length;
				for (idx3 = 0;idx3 < len1;idx3++) {
					arr[idx1++] = currBucket[idx3];
				}
			}
		}
		
		buckets = {};
    }
 }
 
function insertionBucketSort(array) {
  var length = array.length;
  
  for(var i = 1; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  return array;
}

export function *bucketSort(array) {
	const starttime = new Date().getTime();
	var bucketSize = 10;
	if (array.length === 0) {
		return array;
	}

	var i,
		minValue = array[0],
		maxValue = array[0],
		bucketSize = bucketSize || 5;
  
	array.forEach(function (currentVal) {
		no_steps++;
		if (currentVal < minValue) {
			minValue = currentVal;
		} 
		else if (currentVal > maxValue) {
			maxValue = currentVal;
		}
	})

	var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
	var allBuckets = new Array(bucketCount);
  
	for (i = 0; i < allBuckets.length; i++) {
		no_steps++;
		allBuckets[i] = [];
	}

	array.forEach(function (currentVal) {
		no_steps++;
		allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
	});

	let k = 0;
	var bucket = [];
	for (let i = 0; i < allBuckets.length; i++) {
		document.getElementById("p1").innerHTML = no_loops;
		no_steps++;
		no_loops++;
		bucket[i] = insertionBucketSort(allBuckets[i]);
		for (let j = 0; j < bucket[i].length; j++) {
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
			no_steps++;
			array[k] = bucket[i][j];
			k++;
			yield {LastY};
		}
	}
	return array;
}

export function *bingoSort(vec) {
	const starttime = new Date().getTime();
	var n = vec.length;
    let bingo = vec[0];
    let nextBingo = vec[0];
    for (let i = 1; i < n; bingo = Math.min(bingo, vec[i]), nextBingo = Math.max(nextBingo, vec[i]), i++)
        ;
    let largestEle = nextBingo;
    let nextElePos = 0;
    while (bingo < nextBingo)
    {
		no_loops++;
		document.getElementById("p1").innerHTML = no_loops;
		yield {LastY};
        let startPos = nextElePos;
        for (let i = startPos; i < n; i++) {
			no_steps++;
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
            if (vec[i] == bingo) {
                [vec[i], vec[nextElePos]] = [vec[nextElePos], vec[i]];
                nextElePos = nextElePos + 1;
            }
             
            else if (vec[i] < nextBingo)
                nextBingo = vec[i];
        }
        bingo = nextBingo;
        nextBingo = largestEle;
    }
}

export function *shellSort(arr) {
	const starttime = new Date().getTime();
    let n = arr.length;
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
		no_loops++;
		document.getElementById("p1").innerHTML = no_loops;
        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];
				yield {LastY};
				no_steps++;
				let curtime = new Date().getTime() - starttime;
				document.getElementById("p2").innerHTML = no_steps;
				document.getElementById("p3").innerHTML = curtime;
            arr[j] = temp;
        }
    }
    return arr;
}


let MIN_MERGE = 32;
function minRunLength(n) {
    let r = 0;
    while (n >= MIN_MERGE) {
        r |= (n & 1);
        n >>= 1;
    }
    return n + r;
}
 
function insertionTimSort(arr,left,right) {
    for(let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
         
        while (j >= left && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}
 
function mergee(arr, l, m, r) {
    let len1 = m - l + 1, len2 = r - m;
    let left = new Array(len1);
    let right = new Array(len2);
    for(let x = 0; x < len1; x++) {
		no_steps++;
        left[x] = arr[l + x];
    }
    for(let x = 0; x < len2; x++) {
		no_steps++;
        right[x] = arr[m + 1 + x];
    }
 
    let i = 0;
    let j = 0;
    let k = l;
 
    while (i < len1 && j < len2) {
		no_steps++;
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        }
        else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    while (i < len1) {
		no_steps++;
        arr[k] = left[i];
        k++;
        i++;
    }
    while (j < len2) {
		no_steps++;
        arr[k] = right[j];
        k++;
        j++;
    }
}
 
export function  *timSort(arr) {
	const starttime = new Date().getTime();
	var n = arr.length;
    let minRun = minRunLength(MIN_MERGE);

    for(let i = 0; i < n; i += minRun) {
		no_steps++;
        insertionTimSort(arr, i, Math.min((i + MIN_MERGE - 1), (n - 1)));
    }

    for(let size = minRun; size < n; size = 2 * size) {
		no_loops++;
		document.getElementById("p1").innerHTML = no_loops;
        for(let left = 0; left < n; left += 2 * size) {
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
            let mid = left + size - 1;
			no_steps++;
            let right = Math.min((left + 2 * size - 1), (n - 1));
			no_steps++;
            if(mid < right)
                mergee(arr, left, mid, right);
			yield {LastY};
        }
    }
}

function getNextGap(gap) {
    gap = parseInt((gap*10)/13, 10);
    if (gap < 1)
        return 1;
    return gap;
}
   
export function *combSort(arr) {
	const starttime = new Date().getTime();
    let n = arr.length;
    let gap = n;
    let swapped = true;
    while (gap != 1 || swapped == true){
		yield {LastY};
		no_loops++;
		document.getElementById("p1").innerHTML = no_loops;
        gap = getNextGap(gap);
        swapped = false;
        for (let i=0; i<n-gap; i++) {
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
            if (arr[i] > arr[i+gap]) {
                let temp = arr[i];
                arr[i] = arr[i+gap];
				no_steps++;
                arr[i+gap] = temp;
				no_steps++;
                swapped = true;
            }
			
        }
    }
}

export function *viscombSort(arr) {
	const starttime = new Date().getTime();
    let n = arr.length;
    let gap = n;
    let swapped = true;
    while (gap != 1 || swapped == true){
		no_loops++;
		document.getElementById("p1").innerHTML = no_loops;
        gap = getNextGap(gap);
        swapped = false;
        for (let i=0; i<n-gap; i++) {
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
            if (arr[i] > arr[i+gap]) {
                let temp = arr[i];
                arr[i] = arr[i+gap];
				no_steps++;
                arr[i+gap] = temp;
				no_steps++;
                swapped = true;
            }
			yield {LastY};

        }
    }
}

export function *cycleSort(arr) {
	const starttime = new Date().getTime();
	var n = arr.length;
    let writes = 0;
    for (let cycle_start = 0; cycle_start <= n - 2; cycle_start++) {
		no_loops++;
		document.getElementById("p1").innerHTML = no_loops;
        let item = arr[cycle_start];
        let pos = cycle_start;
        for (let i = cycle_start + 1; i < n; i++)
            if (arr[i] < item)
                pos++;
            if (pos == cycle_start)
                continue;
            while (item == arr[pos])
                pos += 1;
            if (pos != cycle_start)
            {
                let temp = item;
                item = arr[pos];
                arr[pos] = temp;
                writes++;
            }
            while (pos != cycle_start)
            {
				no_steps++;
				let curtime = new Date().getTime() - starttime;
				document.getElementById("p2").innerHTML = no_steps;
				document.getElementById("p3").innerHTML = curtime;
                pos = cycle_start;
                for (let i = cycle_start + 1; i < n; i++)
                    if (arr[i] < item)
                        pos += 1;
                while (item == arr[pos])
                    pos += 1;
                if (item != arr[pos]) {
                    let temp = item;
                    item = arr[pos];
                    arr[pos] = temp;
                    writes++;
				yield {LastY};
                }
            }
        }
}

export function *coctailSort(a) {
	const starttime = new Date().getTime();
    let swapped = true;
    let start = 0;
    let end = a.length;
    while (swapped == true) {
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		no_loops++;
		document.getElementById("p1").innerHTML = no_loops;
		yield {LastY};
        swapped = false;
        for (let i = start; i < end - 1; ++i) {
			no_steps++;
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
            if (swapped == false)
                break;
            swapped = false;
            end = end - 1;
        for (let i = end - 1; i >= start; i--) {
			no_steps++;
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
        start = start + 1;
    }
}

export function *viscoctailSort(a) {
	const starttime = new Date().getTime();
    let swapped = true;
    let start = 0;
    let end = a.length;
    while (swapped == true) {
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		no_loops++;
		document.getElementById("p1").innerHTML = no_loops;
        swapped = false;
        for (let i = start; i < end - 1; ++i) {
			no_steps++;
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
			yield {LastY};
        }
            if (swapped == false)
                break;
            swapped = false;
            end = end - 1;
        for (let i = end - 1; i >= start; i--) {
			no_steps++;
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
			yield {LastY};
        }
        start = start + 1;
    }
}

function kernel(x, p, q) {
  const d = 1 << (p - q);

  for (let i = 0; i < x.length; i++) {
    const up = ((i >> p) & 2) === 0;
    if ((i & d) == 0 && (x[i] > x[i | d]) === up) {
      const tmp = x[i];
      x[i] = x[i | d];
	  no_steps++;
      x[i | d] = tmp;
	  no_steps++;
    }
  }
}

export function *bitonicSort(x) {
	const starttime = new Date().getTime();
	var n = Math.log2(x.length) / Math.log2(2);
	for (let i = 0; i < n; i++) {
		no_loops++;
		for(let j = 0; j <=i; j++) {
			let curtime = new Date().getTime() - starttime;
			document.getElementById("p2").innerHTML = no_steps;
			document.getElementById("p3").innerHTML = curtime;
			document.getElementById("p1").innerHTML = no_loops;
			kernel(x, i, j);
			yield {LastY};
		}
	}
}

function flip(arr, i) {
    let temp, start = 0;
    while (start < i) {
        temp = arr[start];
        arr[start] = arr[i];
		no_steps++;
        arr[i] = temp;
		no_steps++;
        start++;
        i--;
    }
}

function findMax(arr, n) {
    let mi, i;
    for (mi = 0, i = 0; i < n; ++i)
        if (arr[i] > arr[mi])
            mi = i;             
    return mi;
}
  
export function *pancakeSort(arr) {
	const starttime = new Date().getTime();
	var n = arr.length;
    for (let curr_size = n; curr_size > 1; --curr_size) {
		no_loops++;
        let mi = findMax(arr, curr_size);
        if (mi != curr_size - 1) {
            flip(arr, mi);
            flip(arr, curr_size - 1);
        }
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		document.getElementById("p1").innerHTML = no_loops;
		yield {LastY};
    }
    return 0;
}

function isSorted(a, n){
    for(var i = 1; i < a.length; i++)
        if (a[i] < a[i-1])
            return false;
    return true;
}
function swap(arr, xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
	no_steps++;
    arr[yp] = temp;
	no_steps++;
}
function shuffle(a, n){
    var i, j=n;
    for (i=0; i < n; i++){
        var ind = Math.floor(Math.random() * n);
        swap(a, j-i-1, ind);
    }
    return a;
}
      
export function *bogoSort(a){
	const starttime = new Date().getTime();
	var n = a.length;
    while (!isSorted(a, n)){
		no_loops++;
        a = shuffle(a, n);
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		document.getElementById("p1").innerHTML = no_loops;
		yield {LastY};
	}
    return a;
}

export function *gnomeSort(arr) {
	const starttime = new Date().getTime();
	var n = arr.length;
    let index = 0;
    while (index < n) {
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		document.getElementById("p1").innerHTML = no_loops;
		no_loops++;
        if (index == 0)
            index++;
        if (arr[index] >= arr[index - 1])
            index++;
        else {
            let temp = 0;
            temp = arr[index];
            arr[index] = arr[index - 1];
			no_steps++;
            arr[index - 1] = temp;
			no_steps++;
            index--;
        }
		yield {LastY};
    }
    return;
}

export function *oddEvenSort(arr) {
	const starttime = new Date().getTime();
	var n = arr.length;
    let isSorted = false;
    while (!isSorted) {
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		document.getElementById("p1").innerHTML = no_loops;
		no_loops++;
		yield {LastY};
        isSorted = true;
        let temp =0;
        for (let i=1; i<=n-2; i=i+2) {
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
				no_steps++;
                arr[i] = arr[i+1];
				no_steps++;
                arr[i+1] = temp;
                isSorted = false;
            }
        }
        for (let i=0; i<=n-2; i=i+2) {
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
				no_steps++;
                arr[i] = arr[i+1];
				no_steps++;
                arr[i+1] = temp;
                isSorted = false;
            }
        }
    }
    return;
}

export function *visoddEvenSort(arr) {
	const starttime = new Date().getTime();
	var n = arr.length;
    let isSorted = false;
    while (!isSorted) {
		let curtime = new Date().getTime() - starttime;
		document.getElementById("p2").innerHTML = no_steps;
		document.getElementById("p3").innerHTML = curtime;
		document.getElementById("p1").innerHTML = no_loops;
		no_loops++;
        isSorted = true;
        let temp =0;
        for (let i=1; i<=n-2; i=i+2) {
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
				no_steps++;
                arr[i] = arr[i+1];
				no_steps++;
                arr[i+1] = temp;
                isSorted = false;
            }
			yield {LastY};
        }
        for (let i=0; i<=n-2; i=i+2) {
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
				no_steps++;
                arr[i] = arr[i+1];
				no_steps++;
                arr[i+1] = temp;
                isSorted = false;
            }
			yield {LastY};
        }
    }
    return;
}
