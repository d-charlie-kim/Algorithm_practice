#include <stdio.h>

int		ft_fibonacci(int index)
{
	if (index == 0)
		return (0);
	if (index == 1)
		return (1);
	return (ft_fibonacci(index - 1) + ft_fibonacci(index - 2));
}
l
int main(void)
{
	int n;
	scanf("%d", &n);
	printf("%d\n", ft_fibonacci(n));
}
