#include <stdio.h>

int	ret = 0;

void	recursive(int money, int period)
{
	if (period > 0)
	{
		if (period >= 5)
			recursive(money * 1.35, period - 5);
		if (period >= 3)
			recursive(money * 1.2, period - 3);
		if (period >= 1)
			recursive(money * 1.05, period - 1);
	}
	if (money > ret)
		ret = money;
}

int main(void)
{
	int	money, period;

	scanf("%d%d", &money, &period);
	recursive(money, period);
	printf("%d\n", ret);
}