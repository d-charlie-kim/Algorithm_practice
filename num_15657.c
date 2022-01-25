#include <stdio.h>

int n, m;
int	haha[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

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
		if (haha[i] >= nums[count - 1])
		{
			nums[count] = haha[i];
			recursive(nums, count + 1);
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
			if (haha[j - 1] > haha[j])
			{
				temp = haha[j - 1];
				haha[j - 1] = haha[j];
				haha[j] = temp;
			}
		}
	}
}

int	main(void)
{
	int nums[9] = {0, 0, 0, 0, 0, 0, 0, 0};

	scanf ("%d%d", &n, &m);
	for (int i = 0; i < n; i++)
		scanf("%d", &haha[i]);
	check_sorting();
	for (int i = 1; i <= n; i++)
	{
		nums[0] = haha[i];
		recursive(nums, 1);
	}
	return (0);
}
