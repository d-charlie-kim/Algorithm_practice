#include <stdio.h>

int main()
{
    int one[41];
    int zero[41];
    
    zero[0] = 1;
    one[0] = 0;
    zero[1] = 0;
    one[1] = 1;
    int i = 2;
    while (i < 41)
    {
        zero[i] = zero[i - 1] + zero[i - 2];
        one[i] = one[i - 1] + one[i - 2];
        i++;
    }
    int max, num;
    scanf("%d", &max);
    i = 0;
    while (i < max)
    {
        scanf("%d", &num);
        printf("%d %d\n", zero[num], one[num]);
        i++;
    }
}