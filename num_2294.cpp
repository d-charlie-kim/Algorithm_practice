#include <iostream>
#include <algorithm>

using namespace std;

#define MAX 10000

int N, K;
int answer = 0;
int lst[MAX + 1];
int coins[101];

void input()
{
	cin >> N >> K;

	coins[0] = -1;
	for (int i = 1; i <= N; i++)
		cin >> coins[i];

	sort(coins, coins + N + 1);
}

void recursive(int now, int count)
{
	if (now > K)
		return ;
	if (lst[now] != 0 && lst[now] <= count)
		return ;

	lst[now] = count;
	for (int i = N; i >= 1; i--)
	{
		recursive(now + coins[i], count + 1);
	}
}

void solve()
{
	recursive(0, 0);
	if (lst[K] == 0)
		answer = -1;
	else
		answer = lst[K];
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