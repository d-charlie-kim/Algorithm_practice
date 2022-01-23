#include <stdio.h>

int visit[100001] = { 0, };
int	queue[100001] = { 0, };

void	move(int here, int index)
{
	visit[here] = 1;
	queue[index] = here;
}

int	one_step(int here, int index)
{
	if (here > 2 && visit[here - 1] == 0)
		move(here - 1, index++);
	if (visit[here + 1] == 0)
		move(here + 1, index++);
	if (here <= 50000 && visit[here * 2] == 0)
		move(here * 2, index++);
	return (index);
}

int main(void)
{
	int src, dest, index = 0;
	scanf("%d%d", &src, &dest);
	visit[src] = 1;
	queue[0] = src;
	if (src >= dest)
	{
		printf("%d\n", src - dest);
		return (0);
	}
	for (int i = 0; i < 100000; i++)
	{
		if (src == 0 && i == 0)
		{
			i = 1;
			queue[0] = 1;
		}
		for (int j = index; queue[j]; j++)
		{
			if (queue[j] == dest)
			{
				printf("%d\n", i);
				return (0);
			}
			index = one_step(queue[j], index);
		}
	}
}
