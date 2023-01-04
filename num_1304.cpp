#include <iostream>

int Cities[3001];

int N, M;

void input()
{
	std::cin >> N >> M;

	int S, E;
	for (int i = 0; i < M; i++)
	{
		std::cin >> S >> E;
		if (S < E)
			continue;
		if (Cities[S] != 0)
			Cities[S] = std::min(E, Cities[S]);
		else
			Cities[S] = E;
	}
}

int findMin(int start, int end)
{
	int goal = end;
	for (int i = start - 1; i >= end; i--)
	{
		if (Cities[i] != 0)
			goal = std::min(goal, Cities[i]);
	}
	if (goal < end)
		goal = findMin(end, goal);
	return goal;
}

bool searching(int cityNum)
{
	for (int from = N, to = 0, count = 0; from > 1; from--)
	{
		if (Cities[from] == 0)
			count += 1;
		else
		{
			to = findMin(from, Cities[from]);
			count += (from - to) + 1;
			from = to;
		}

		if (count == cityNum)
			count = 0;
		else if (count > cityNum)
			return false;
	}
	return true;
}

int findBiggestArea()
{
	int size = 1;
	for (int i = N; i > 1; i--)
	{
		if (Cities[i] == 0)
			continue;
		if (Cities[i] != 0)
		{
			int to = findMin(i, Cities[i]);
			size = std::max(size, i - to + 1);
			i = to - 1;
		}
	}
	return size;
}

int solve()
{
	for (int i = findBiggestArea(); i <= (N / 2); i++)
	{
		if ((N % i) == 0)
		{
			if (searching(i))
				return (N / i);
		}
	}
	return 1;
}

int main()
{
	input();
	int answer = solve();
	std::cout << answer << "\n";
}