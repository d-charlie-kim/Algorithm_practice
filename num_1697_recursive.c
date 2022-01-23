#include <stdio.h>
#include <stdio.h>

int	ret = 17000;
int src, dest;
int visit[100001] = { 0, };

void	recursive(int src, int count)
{
	if (count > ret || src < 0 || src >100000)
		return ;
	if (src == dest)
		ret = count;
	if (visit[src] == 0 || count <= visit[src])
	{
		visit[src] = count;
		if (src <= 50000 && src < dest)
			recursive(src * 2, count + 1);
		if (src < dest)
			recursive(src + 1, count + 1);
		recursive(src - 1, count + 1);
	}
}

int main()
{
	int count = 0;

	scanf("%d%d", &src, &dest);
	if (src < dest)
		recursive(src, count);
	else
		ret = src - dest;
	printf("%d\n", ret);
}
