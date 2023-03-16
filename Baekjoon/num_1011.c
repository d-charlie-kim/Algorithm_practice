#include <stdio.h>

int main()
{
   int T;
   scanf ("%d", &T);
   long long A, B, n, count, temp;
   for (int i = 0; i < T; i++)
   {
      temp = 0;
      n = 1;
      count = 0;
      scanf("%lld%lld", &A, &B);
      while (1)
      {
         temp = temp + (n * 2);
         count = count + 2;
         if (temp >= B - A)
            break;
         n++;
      }
      if ((B - A) - (temp - (n * 2)) <= n)
         count--;
      printf("%lld\n", count);
   }
}
