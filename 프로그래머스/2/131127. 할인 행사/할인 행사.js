function check(store) {
    for (const num of store.values()) {
        if (num !== 0) {
            return 0;
        }
    }
    return 1;
}

function solution(want, number, discount) {
    let count = 0, start = 0; end = 0;
    const store = new Map();
    for (let i = 0; i < want.length; i++) {
        store.set(want[i], number[i]);
    }
    
    for (; end < discount.length; end++) {
        if (store.has(discount[end])) {
            store.set(discount[end], store.get(discount[end]) - 1);
        }
        if (end - start == 10) {
            if (store.has(discount[start])) {
                store.set(discount[start], store.get(discount[start]) + 1);
            }
            start++;
        }
        count += check(store);
    }
    return count;
}