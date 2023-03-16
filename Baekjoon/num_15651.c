#include <stdio.h>

int n, m;

void	printing(int *nums)
{
	for (int i = 0; i < m; i++)
		{
			if (i != 0)
				printf(" ");
			printf("%d", nums[i]);
		}
		printf("\n");
}

void	recursive(int *nums, int count)
{
	if (count == m)
	{
		printing(nums);
		return ;
	}
	for (int i = 1; i <= n; i++)
	{
		nums[count] = i;
		recursive(nums, count + 1);
	}
}

int	main(void)
{
	int nums[9] = {0, 0, 0, 0, 0, 0, 0, 0};

	scanf ("%d%d", &n, &m);
	for (int i = 1; i <= n; i++)
	{
		nums[0] = i;
		recursive(nums, 1);
	}
	return (0);
}
