#include <stdio.h>

int main()
{
	int N, M;
	int trees[1000001] = { 0, };
	int i = 0;
	int min = 0, max = 0;
	long long count;
	int cut;
	scanf ("%d%d", &N, &M);
	while (i < N)
		scanf("%d", &(trees[i++]));
	i = 0;
	if (N == 1)
	{
		printf("%d\n", trees[0] - M);
		return (0);
	}
	while (i < N)
	{
		if (max < trees[i])
			max = trees[i];
		i++;
	}
	while (cut != (min + max) / 2)
	{
		i = 0;
		cut = (min + max) / 2;
		count = 0;
		while (i < N)
		{
			if (trees[i] >= cut)
				count = count + trees[i] - cut;
			i++;
		}
		if (count >= M)
			min = cut;
		else
			max = cut;
	}
	printf("%d\n", cut);
	return (0);
}
