#include <iostream>
#include <cmath>

using namespace std;

int N, r, c;
int answer;

void input()
{
	cin >> N >> r >> c;
}

void recursive(int power, int y, int x)
{
	if (power == 1)
	{
		answer += (y * 2) + x;
		return;
	}

	int half = pow(2, power - 1);

	if (y < half && x < half)
	{
		recursive(power - 1, y, x);
	}
	else if (y < half && x >= half)
	{
		answer += (half * half);
		recursive(power - 1, y, x - half);
	}
	else if (y >= half && x < half)
	{
		answer += (half * half) * 2;
		recursive(power - 1, y - half, x);
	}
	else
	{
		answer += (half * half) * 3;
		recursive(power - 1, y - half, x - half);
	}
}

void solve()
{
	recursive(N, r, c);
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