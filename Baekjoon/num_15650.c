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

void	recursive(int *nums, int *check, int count)
{
	if (count == m)
	{
		printing(nums);
		return ;
	}
	for (int i = 1; i <= n; i++)
	{
		if (check[i] == 0 && i > nums[count - 1])  // 15649 문제에서 해당 조건만 추가.
		{
			check[i] = 1;
			nums[count] = i;
			recursive(nums, check, count + 1);
			check[i] = 0;
		}
	}
}

int	main(void)
{
	int nums[9] = {0, 0, 0, 0, 0, 0, 0, 0};
	int	check[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

	scanf ("%d%d", &n, &m);
	for (int i = 1; i <= n; i++)
	{
		nums[0] = i;
		check[i] = 1;
		recursive(nums, check, 1);
		check[i] = 0;
	}
	return (0);
}
