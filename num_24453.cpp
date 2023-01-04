#include <iostream>
#include <algorithm>

using namespace std;
#define MAX 500000
int N, M, X, Y, Answer;
int Arr[MAX + 2];

void testing(int *ptr)
{
	for (int i = 0; i < M + 3; i++)
	{
		std::cout << *ptr << "\n";
		ptr++;
	}
	std::cout << "-----\n";
}

void input(void)
{
	cin >> N >> M;
	for (int i = 1; i <= M; i++)
	{
		cin >> Arr[i];
	}
	cin >> X >> Y;
}

void solve(void)
{
	testing(Arr);
	sort(Arr, Arr + M + 1);
  Arr[M + 1] = N ;
	testing(Arr);

	int *p1 = Arr;
	int *p2 = Arr + 1;

	int min = M;
	while (p2 != Arr + M + 2 && p1 != p2)
	{
		if (*p2 - *p1 - 1 < X)
		{
			p2++;
		}
		else
		{
			if (min > p2 - p1 - 1)
				min = p2 - p1 - 1;
			p1++;
		}
	}
	Answer = M - max(min, Y);
}

void output(void)
{
	cout << Answer << "\n";
}

int main(void)
{
	cin.tie(NULL);
	cout.tie(NULL);
	ios::sync_with_stdio(false);

	input();
	solve();
	output();
}
