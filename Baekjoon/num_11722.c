//recursive different way

#include <stdio.h>

int	ret = 1;
int N;
int nums[1001];
int	visit[1001] = { 0, };

void	checking(int index)
{
	int big = 1;

	if (index < 0)
		return ;
	for (int i = index + 1; i < N; i++)
	{
		if (nums[index] > nums[i])
			big = visit[i] + 1;
		if (big > visit[index])
			visit[index] = big;
	}
	checking(index - 1);
}

int main(void)
{
	scanf ("%d", &N);
	for (int i = 0; i < N; i++)
		scanf("%d", &nums[i]);
	visit[N - 1] = 1;
	if (N > 1)
	{
		checking(N - 2);
		for (int i = 0; i < N; i++)
		{
			if (ret < visit[i])
				ret = visit[i];
		}
	}
	printf("%d\n", ret);
}
