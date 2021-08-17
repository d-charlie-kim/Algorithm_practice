#include <stdio.h>

int   main(void)
{
   int num;
   scanf ("%d", &num);
   int line = (num * 2) - 1;
   int i = 0;
   int j;
   while(i < num)
   {
      j = 0;
      while (j < line - num - i)
      {
         printf(" ");
         j++;
      }
      while (j < line - num + i + 1)
      {
         printf("*");
         j++;
      }
      printf("\n");
      i++;
   }
   i = 1;
   while (i < num)
   {
      j = 0;
      while (j < i)
      {
         printf(" ");
         j++;
      }
      while (j < line - i)
      {
         printf("*");
         j++;
      }
      printf("\n");
      i++;
   }
}
