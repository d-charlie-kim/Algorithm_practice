#include <stdio.h>

int main()
{
	int num;
	scanf ("%d", &num);
	int i = 0, j = 0;
	while (i < num)
	{
		j = 0;
		while (j < i + 1)
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
		while (j < num - i)
		{
			printf("*");
			j++;
		}
		printf("\n");
		i++;
	}
}
