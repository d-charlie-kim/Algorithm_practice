#include <stdio.h>

int n, m;
int	save_nums[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

void	printing(int *answer_nums)
{
	for (int i = 0; i < m; i++)
		{
			if (i != 0)
				printf(" ");
			printf("%d", answer_nums[i]);
		}
		printf("\n");
}

void	recursive(int *answer_nums, int *visit, int *double_check, int count)
{
	if (count == m)
	{
		printing(answer_nums);
		return ;
	}
	for (int i = 1; i <= n; i++)
	{
		if (visit[i] == 0 || double_check[i] > 0)
		{
			visit[i] = 1;
			answer_nums[count] = save_nums[i];
			if (visit[i] != 0 && double_check[i] > 0)
			{
				double_check[i]--;
				recursive(answer_nums, visit, double_check, count + 1);
				double_check[i]++;
			}
			else
				recursive(answer_nums, visit, double_check, count + 1);
			visit[i] = 0;
		}
	}
}

void	check_sorting(int *double_check)
{
	int	temp = 0;

	for (int i = 0; i < n; i++)
	{
		for (int j = 1; j <= n; j++)
		{
			if (save_nums[j - 1] > save_nums[j])
			{
				temp = double_check[j - 1];
				double_check[j - 1] = double_check[j];
				double_check[j] = temp;
				temp = save_nums[j - 1];
				save_nums[j - 1] = save_nums[j];
				save_nums[j] = temp;
			}
		}
	}
}

int	main(void)
{
	int answer_nums[9] = {0, 0, 0, 0, 0, 0, 0, 0};
	int	visit[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0};
	int	double_check[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

	scanf ("%d%d", &n, &m);
	for (int i = 0; i < n; i++)
	{
		scanf("%d", &save_nums[i]);
		for (int j = 0; j < i; j++)
		{
			if (save_nums[j] == save_nums[i])
			{
				if (double_check[j] == 0)
					double_check[j]++;
				double_check[j]++;
				save_nums[i] = 0;
				i--;
				n--;
			}
		}
	}
	check_sorting(double_check);
	for (int i = 1; i <= n; i++)
	{
		answer_nums[0] = save_nums[i];
		visit[i] = 1;
		if (double_check[i] > 0)
		{
			double_check[i]--;
			recursive(answer_nums, visit, double_check, 1);
			double_check[i]++;
		}
		else
			recursive(answer_nums, visit, double_check, 1);
		visit[i] = 0;
	}
	return (0);
}
