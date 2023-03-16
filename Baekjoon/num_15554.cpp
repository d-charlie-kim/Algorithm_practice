#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

#define MAX 500000

int N;
long long answer = 0;
vector<pair <long long, long long> > lst;

void input()
{
	cin >> N;

	long long tempA, tempB;
	for (int i = 0; i < N; i++)
	{
		cin >> tempA >> tempB;
		lst.push_back(make_pair(tempA, tempB));
	}

	sort(lst.begin(), lst.end());
}

void calculate(int i, int j, long long totalV)
{
	while (j < N - 1)
	{
		answer = max(answer, totalV - (lst[j].first - lst[i].first));
		j += 1;
		totalV += lst[j].second;
	}
	answer = max(answer, totalV - (lst[j].first - lst[i].first));
}

void solve()
{
	for (int i = 0; i <= N - 1; i++)
		calculate(i, i, lst[i].second);
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
