#include <stdio.h>

int main(void)
{
	int	N, count = 0;
	char str[1000001] = { 0, };

	scanf ("%d%s", &N, str);
	for (int i = 0; i < N; i++)
	{
		if (str[i] == '1')
			count++;
	}
    printf("%d\n", count);
	return (0);
}
