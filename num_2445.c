#include <stdio.h>

int   main(void)
{
   int num;
   scanf ("%d", &num);
   int line = (num * 2);
   int i, j;
   i = 1;
   while (i < num + 1)
   {
      j = 0;
      while (j < i)
      {
         printf("*");
         j++;
      }
      while (j < line - i)
      {
         printf(" ");
         j++;
      }
      while (j < line)
      {
         printf("*");
         j++;
      }
      printf("\n");
      i++;
   }
   i = 1;
   while(i < num)
   {
      j = 0;
      while (j < line - num - i)
      {
         printf("*");
         j++;
      }
      while (j < line - num + i)
      {
         printf(" ");
         j++;
      }
      while (j < line)
      {
         printf("*");
         j++;
      }
      printf("\n");
      i++;
   }
}
