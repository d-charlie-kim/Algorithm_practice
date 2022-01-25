#include <stdio.h>

int n, m;
int check_index;

void	recursive(int *nums, int *check, int count)
{
	check_index = 1;
	if (count == m)
	{
		for (int i = 0; i < count; i++)
		{
			if (i != 0)
				printf(" ");
			printf("%d", nums[i]);
		}
		printf("\n");
		return ;
	}
	while (check[check_index] == 1)
		check_index++;
	if (check_index == m)
		return ;
	check[check_index] = 1;
	nums[count] = check_index;
	recursive(nums, check, count + 1);
	nums[count] = 0;
	recursive(nums, check, count);
}

int	main(void)
{
	int nums[9] = {0, 0, 0, 0, 0, 0, 0, 0};
	int	check[9] = {1, 0, 0, 0, 0, 0, 0, 0};

	scanf ("%d%d", &n, &m);
	for (int i = 0; i < n; i++)
	{
		nums[0] = i + 1;
		check[i + 1] = 1;
		recursive(nums, check, 1);
		check[i + 1] = 0;
	}
	
}