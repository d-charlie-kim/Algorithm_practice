#include <stdio.h>

int ret = 2147483647;

void recursive(int num, int count)
{
	if (count > ret)
		return ;
	if (num == 1)
		ret = count;
	if (num % 3 == 0)
		recursive(num / 3, count + 1);
	if (num % 2 == 0)
		recursive(num / 2, count + 1);
	recursive(num - 1, count + 1);
}

int main()
{
	int num;

	scanf("%d", &num);
	recursive(num, 0);
	printf("%d\n", ret);
}
