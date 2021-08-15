#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	int size;
	int *num;
	int	i;
	int small;
	int big;

	scanf("%d", &size);
	num = (int *)malloc(sizeof(int) * size);
	i = 0;
	while (i < size)
	{
		scanf("%d", &(num[i]));
		if (i == 0)
		{
			small = num[i];
			big = num[i];
		}
		if (i != 0 && small > num[i])
			small = num[i];
		if (i != 0 && big < num[i])
			big = num[i];
		i++;
	}
	printf("%d\n", small * big)
}