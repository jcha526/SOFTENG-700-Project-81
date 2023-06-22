import { sqrt, round } from 'mathjs'

function calc_pos(a, b, c) {
    cos_a = (b * b + c * c - a * a) / (2 * b * c);
    x = b * cos_a;
    y = b * sqrt(1 - cos_a * cos_a);

    return [round(x, 1), round(y, 1)];
}