function calculater(a, b, c, d)
{
    if (a * d == c * b)
        return true;
    return false;
}

function solution(dots) {
    if (calculater(dots[0][0] - dots[1][0], dots[0][1] - dots[1][1], dots[2][0] - dots[3][0], dots[2][1] - dots[3][1]))
        return 1;
    if (calculater(dots[0][0] - dots[2][0], dots[0][1] - dots[2][1], dots[1][0] - dots[3][0], dots[1][1] - dots[3][1]))
        return 1;
    if (calculater(dots[1][0] - dots[2][0], dots[1][1] - dots[2][1], dots[0][0] - dots[3][0], dots[0][1] - dots[3][1]))
        return 1;
    return 0;
}