function solution(s) {
    let count = 0, zero = 0, binary = s;
    
    while (binary !== '1') {
        zero += binary.length - binary.replaceAll('0', '').length;
        binary = binary.replaceAll('0', '').length.toString(2);
        count += 1;
    }
    return [count, zero];
}