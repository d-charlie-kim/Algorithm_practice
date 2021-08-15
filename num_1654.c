#include <stdio.h>
#include <stdlib.h>

int main()
{
	int dest, src;
	int *line;
	int i = 0;

	scanf("%d%d", &src, &dest);
	line = (int *)malloc(sizeof(int) * src);
	while (i < src)
	{
		scanf("%d", &(line[i]));
		i++;
	}
	int biggest;
	i = 0;
	while (i < src)
	{
		if (line[i] > biggest)
			biggest = line[i];
		i++;
	}
	int count;
	int max;
	int A = 0;
	int B = biggest;
	max = B;
	while (1)
	{
		i = 0;
		count = 0;
		while (i < src)
		{
			count = count + (line[i] / max);
			i++;
		}
		if (count >= dest)
			A = max;
		else
			B = max;
		max = (A + B) / 2;
		if (max == A || A == B)
		{
			printf("%d\n", A);
			break;
		}
	}
}