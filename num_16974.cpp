#include <iostream>

using namespace std;

long long N, X;
long long answer = 0;
long long layers[52];
long long patty[52];

void input()
{
	cin >> N >> X;

	layers[0] = 1;
	patty[0] = 1;
	for (long long i = 1; i <= N; i++)
	{
		layers[i] = (layers[i - 1] * 2) + 3;
		patty[i] = (patty[i - 1] * 2) + 1;
	}
}

long long recursive(long long lv, long long count)
{
	if (count == 0)
		return 0;
	if (lv == 0)
		return 1;
	if (layers[lv] == count)
		return patty[lv];

	if (count - 1 <= layers[lv - 1])
		return (recursive(lv - 1, count - 1));
	else
		return (recursive(lv - 1, layers[lv - 1]) + recursive(lv - 1, count - layers[lv - 1] - 2)  + 1);
}

void solve()
{
	answer = recursive(N, X);
}

void output()
{
	cout << answer << "\n";
}

int main()
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);

	input();
	solve();
	output();
	return 0;
}
