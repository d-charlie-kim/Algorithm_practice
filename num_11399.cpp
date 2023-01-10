#include <iostream>
#include <algorithm>

int N;
int times[1001];
int answer = 0;

void input()
{
	std::cin >> N;
	for (int i = 0; i < N; i++)
		std::cin >> times[i];
	std::sort(times, times + N);
}

void solve()
{
	int multiple = N;
	for (int i = 0; i < N; i++, multiple--)
		answer += (times[i] * multiple);
}

int main()
{
	input();
	solve();
	std::cout << answer << "\n";
	return 0;
}