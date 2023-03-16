#include <iostream>
#include <algorithm>

int N, count = 0;
std::pair<int, int> table[100001];

bool compare(std::pair<int, int> a, std::pair<int, int> b)
{
	if (a.second == b.second)
		return (a.first < b.first);
	return (a.second < b.second);
}

void input()
{
	std::cin >> N;

	for (int i = 0; i < N; i++)
		std::cin >> table[i].first >> table[i].second;
	std::sort(table, table + N, compare);
}

void solve()
{
	int end = 0;
	for (int i = 0; i < N; i++)
	{
		if (table[i].first >= end)
		{
			count += 1;
			end = table[i].second;
		}
	}
}

int main()
{
	input();
	solve();
	std::cout << count << "\n";
	return 0;
}