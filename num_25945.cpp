	#include <iostream>
	#include <algorithm>

	using namespace std;

	#define MAX 1000000

	int n, total = 0, average;
	int answer = 0;
	int lst[MAX + 1];

	void input()
	{
		cin >> n;
		
		for (int i = 0; i < n; i++)
		{
			cin >> lst[i];
			total += lst[i];
		}
		average = total / n;
	}

	void solve()
	{
		int bigA = 0, bigB = 0;
		int smallA = 0, smallB = 0;

		for (int i = 0; i < n; i++)
		{
			if (lst[i] > average)
			{
				bigA += (lst[i] - (average + 1));
				bigB += (lst[i] - average);
			}
			if (lst[i] < average)
			{
				smallA += (average - lst[i]);
				smallB += (average - (lst[i] + 1));
			}
		}

		answer = min(max(bigA, smallA), max(bigB, smallB));
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
