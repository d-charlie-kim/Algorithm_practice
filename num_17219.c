#include <stdio.h>
#include <string.h>

int main()
{
	int N, M;
	scanf("%d%d", &N, &M);
	char password[100001][2][22];
	char target[100001][22];
	for (int i = 0; i < N; i++)
		scanf("%s%s", password[i][0], password[i][1]);
	for (int i = 0; i < M; i++)
		scanf("%s", target[i]);
	for (int i = 0; i < M; i++)
	{
		for (int j = 0; j < N; j++)
		{
			if (!(strcmp(password[j][0], target[i])))
			{
				printf("%s\n", password[j][1]);
				break;
			}
		}
	}
}
