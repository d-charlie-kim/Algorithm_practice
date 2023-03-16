#include <iostream>
#include <cmath>

using namespace std;

#define MAX 90

int N;
long long answer;
long long lst[MAX + 1];
long long zeroCount[MAX + 1];

void input()
{
	cin >> N;
}

void solve()
{
	lst[1] = 1;
	lst[2] = 1;
	zeroCount[1] = 0;
	zeroCount[2] = 1;

	for (int i = 3; i <= N; i++)
	{
		lst[i] = lst[i - 1] + zeroCount[i - 1];
		zeroCount[i] = lst[i - 1];
	}
	answer = lst[N];
}

void output()
{
	cout << answer << "\n";
}

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(NULL);

	input();
	solve();
	output();
	return 0;
}