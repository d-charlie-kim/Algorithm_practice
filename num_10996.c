#include <stdio.h>

int main()
{
	int num;
	scanf ("%d", &num);
	int i = 0, j = 0;
	int temp;
	if (num % 2 == 1)
		temp = (num + 1) / 2;
	else
		temp = num / 2;
	while (j < num)
	{
		i = 0;
		while (i < temp)
		{
			printf("*");
			if (i != temp)
				printf(" ");
			i++;
		}
		printf("\n ");
		i = 0;
		while (i < num - temp)
		{
			printf("*");
			if (i != temp)
				printf(" ");
			i++;
		}
		printf("\n");
		j++;
	}
}
