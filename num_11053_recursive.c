#include <stdio.h>

// clean, but time-out

int	ret = 0;
int N;
int nums[1001];

void	finding(int check, int index, int temp)
{
	if (temp + N - index > ret)
	{
		if (check < nums[index])
			finding(nums[index], index + 1, temp + 1);
		finding(check, index + 1, temp);
	}
	if (temp > ret)
		ret = temp;
}

int main(void)
{
	scanf ("%d", &N);
	for (int i = 0; i < N; i++)
		scanf("%d", &nums[i]);
	finding(0, 0, 0);
	printf("%d\n", ret);
}
