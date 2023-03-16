#include <stdio.h>

int	ret = 1;
int N;
int nums[1001];
int	num_sum[1001] = { 0, };

void	checking(int index)
{
	int big = 0;

	if (index < 0)
		return ;
	for (int i = index + 1; i < N; i++)
	{
		if (nums[index] < nums[i])
			big = num_sum[i] + nums[index];
		else
			big = nums[index];
		if (big > num_sum[index])
			num_sum[index] = big;
	}
	checking(index - 1);
}

int main(void)
{
	scanf ("%d", &N);
	for (int i = 0; i < N; i++)
		scanf("%d", &nums[i]);
	num_sum[N - 1] = nums[N - 1];
	if (N > 1)
	{
		checking(N - 2);
		for (int i = 0; i < N; i++)
		{
			if (ret < num_sum[i])
				ret = num_sum[i];
		}
	}
	else
		ret = nums[0];
	printf("%d\n", ret);
}
