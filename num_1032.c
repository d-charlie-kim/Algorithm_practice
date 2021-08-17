#include <stdio.h>
#include <string.h>

int main()
{
	int size;
	char str[51][51];
	scanf("%d", &size);
	int i = 0, j = 0;
	while (i < size)
	{
		bzero(str[i], 51);
		scanf("%s", str[i]);
		i++;
	}
	while (j < strlen(str[0]))
	{
		i = 0;
		while (i + 1 < size)
		{
			if (str[i][j] != str[i + 1][j])
			{
				printf("?");
				break;
			}
			else if (i + 2 == size)
			{
				printf("%c", str[0][j]);
				break;
			}
			else
				i++;
		}
		if (size == 1)
			printf("%c", str[0][j]);		
		j++;
	}
	printf("\n");
}
