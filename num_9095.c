#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	int	*num;
	int temp, size;

	scanf("%d", &size);
	num = (int *)malloc(sizeof(int) * 10);
	num[0] = 1;
	num[1] = 2;
	num[2] = 4;
	int i = 3;
	while (i < 10)
	{
		num[i] = num[i - 3] + num[i - 2] + num[i - 1];
		i++;
	}
	while (size > 0)
	{
		scanf("%d", &temp);
		printf("%d\n", num[temp - 1]);
		size--;
	}
}