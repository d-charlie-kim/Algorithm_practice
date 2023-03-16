#include <iostream>

using namespace std;

int N;
long long answer = 0;

void solve()
{
	cin >> N;

	int A, B;
	int count = 1;
	long long sum = 0;

	cin >> A;
	for (int i = 1; i < N; i++)
	{
		cin >> B;
		if (A <= B)
			count += 1;
		else
		{
			A = B;
			
		}
	}
}

void output()
{
	cout << answer << "\n";
}
int main()
{
	solve();
	output();
	return 0;
}