#include <stdio.h>

int visit[100001] = { 0, };
int	step1[100001] = { 0, };
int	step2[100001] = { 0, };

void	move(int here, int *b, int index)
{
	visit[here] = 1;
	b[index] = here;
}

int	one_step(int here, int *b, int index)
{
	if (here > 2 && visit[here - 1] == 0)
		move(here - 1, b, index++);
	if (here <= 100000 && visit[here + 1] == 0)
		move(here + 1, b, index++);
	if (here <= 50000 && visit[here * 2] == 0)
		move(here * 2, b, index++);
	return (index);
}

int main(void)
{
	int src, dest, index;
	int	*a, *b;
	scanf("%d%d", &src, &dest);
	visit[src] = 1;
	step1[0] = src;
	if (src >= dest)
	{
		printf("%d\n", src - dest);
		return (0);
	}
	for (int i = 0; i < 20000; ++i)
	{
		if (src == 0 && i == 0)
		{
			a = step2;
			b = step1;
			i = 1;
			a[0] = 1;
			visit[1] = 1;
		}
		else if (i % 2 == 0)
		{
			a = step1;
			b = step2;
		}
		else
		{
			a = step2;
			b = step1;
		}
		index = 0;
		for (int j = 0; a[j]; j++)
		{
			if (a[j] == dest)
			{
				printf("%d\n", i);
				return (0);
			}
			index = one_step(a[j], b, index);
		}
	}
}

/*
	해결하기는 했으나, 배열 두개로 하지 않고
	리스트를 이용한 Queue를 만들면 편하다.

	BFS 를 이용하기 위해서는 Queue가 필수이며,
	C++의 경우에는 vector<int>로 가능할 것 같기도 하다.
*/
