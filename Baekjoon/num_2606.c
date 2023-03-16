#include "stdio.h"
#include "stdlib.h"
#include "string.h"

int main()
{
	int computer_num;
	int pair_num;
	int **pair;
	int	*computers;
	int count = 0;

	scanf("%d%d", &computer_num, &pair_num);
	pair = (int **)malloc(sizeof(int *) * pair_num);
	computers = (int *)malloc(sizeof(int) * computer_num);
	bzero(computers, computer_num);
	computers[0] = 1;
	int i = 0;
	while (i < pair_num)
	{
		pair[i] =  (int *)malloc(sizeof(int) * 2);
		scanf("%d%d", &(pair[i][0]), &(pair[i][1]));
		i++;
	}
	int size = 0;
	while (size < computer_num)
	{
		i = 0;
		while (i < pair_num)
		{
			if (computers[pair[i][0] - 1] == 1)
				computers[pair[i][1] - 1] = 1;
			if (computers[pair[i][1] - 1] == 1)
				computers[pair[i][0] - 1] = 1;
			i++;
		}
		size++;
	}
	i = 0;
	while (i < computer_num)
	{
		if (computers[i] == 1)
			count++;
		i++;
	}
	printf("%d\n", count - 1);
}