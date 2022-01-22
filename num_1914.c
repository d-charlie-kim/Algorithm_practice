#include <stdio.h>

long long	count_first = 0;
long long	count_second = 1;

void	recursive(int num, int from, int to, int temp)
{
	if (num >= 1)
	{
		recursive(num - 1, from, temp, to);
		printf("%d %d\n", from, to);
		recursive(num - 1, temp, to, from);
	}
}

void	answer(int num)
{
	for (int i = 1; i < num; i++)
	{
		count_second = (count_second * 2) + 1;
		count_first = count_first * 2;
		if (count_second >= 1000000000000)
		{
			count_first += count_second / 1000000000000;
			count_second = count_second % 1000000000000;
		}
	}
}

int	main(void)
{
	int num;

	scanf("%d", &num);
	answer(num);
	if (count_first != 0)
		printf("%lld", count_first);
	printf("%lld\n", count_second);
	if (num <= 20)
		recursive(num, 1, 3, 2);
}
