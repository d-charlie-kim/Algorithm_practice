#include <stdio.h>

int main()
{
	int num;
	scanf ("%d", &num);
	int i = 0, j = 0;
	int line = (num * 2) - 1;
	while (i < num)
	{
		j = 0;
		while (j < line - num + i + 1)
		{
			if (i + 1 == num)
				printf("*");
			else if (j == line - num - i)
				printf("*");
			else if (j == line - num + i)
				printf("*");
			else
				printf(" ");
			j++;
		}
		printf("\n");
		i++;
	}
}
