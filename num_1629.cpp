#include <iostream>
#include <cmath>

using namespace std;

long long A, B, C, answer;
long long current = 1, side = 1;

void input()
{
	cin >> A >> B >> C;
}

void recursive(long long num, long long power)
{
	if (power == 1)
	{
		current = num;
		return ;
	}

	if (power % 2 == 1)
	{
		side = (side * num) % C;
		power -= 1;
	}

	long long temp = (num * num) % C;
	recursive(temp, power / 2);

}

void solve()
{
	recursive(A, B);
	answer = (current * side) % C;
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