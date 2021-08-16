#include <stdio.h>

int main()
{
	int T, R;
	char str[20];
	int i = 0;
	int j;
	int k;

	scanf("%d", &T);
	while (i < T)
	{
		scanf("%d%s", &R, str);
		j = 0;
		while (str[j])
		{
			k = 0;
			while (k < R)
			{
				printf("%c", str[j]);
				k++;
			}
			j++;
		}
		printf("\n");
		i++;
	}
}