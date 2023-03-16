#include <stdio.h>

int n, m;
int	save_nums[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

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
		if (check[i] == 0)
		{
			check[i] = 1;
			nums[count] = save_nums[i];
			recursive(nums, check, count + 1);
			check[i] = 0;
		}
	}
}

void	check_sorting(void)
{
	int	temp = 0;

	for (int i = 0; i < n; i++)
	{
		for (int j = 1; j <= n; j++)
		{
			if (save_nums[j - 1] > save_nums[j])
			{
				temp = save_nums[j - 1];
				save_nums[j - 1] = save_nums[j];
				save_nums[j] = temp;
			}
		}
	}
}

int	main(void)
{
	int nums[9] = {0, 0, 0, 0, 0, 0, 0, 0};
	int	check[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

	scanf ("%d%d", &n, &m);
	for (int i = 0; i < n; i++)
		scanf("%d", &save_nums[i]);
	check_sorting();
	for (int i = 1; i <= n; i++)
	{
		nums[0] = save_nums[i];
		check[i] = 1;
		recursive(nums, check, 1);
		check[i] = 0;
	}
	return (0);
}
