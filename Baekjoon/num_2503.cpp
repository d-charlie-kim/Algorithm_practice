#include <iostream>

int N, answer = 0;
int candidates[10][10][10];
int call, S, B;

void input()
{
	std::cin >> N;
	for (int a = 1; a < 10; a++)
	{
		for (int b = 1; b < 10; b++)
		{
			for (int c = 1; c < 10; c++)
			{
				if (a != b && b != c && a != c)
					candidates[a][b][c] = 1;
			}
		}
	}
}

void count()
{
	for (int a = 1; a < 10; a++)
	{
		for (int b = 1; b < 10; b++)
		{
			for (int c = 1; c < 10; c++)
			{
				answer += candidates[a][b][c];
			}
		}
	}
}

void strike(int sCount, int first, int second, int third)
{
	int temp = 0;
	for (int a = 1; a < 10; a++)
	{
		for (int b = 1; b < 10; b++)
		{
			for (int c = 1; c < 10; c++)
			{
				if (a == first)
					temp += 1;
				if (b == second)
					temp += 1;
				if (c == third)
					temp += 1;
				if (temp != sCount)
					candidates[a][b][c] = 0;
				temp = 0;
			}
		}
	}
}

void ball(int bCount, int first, int second, int third)
{
	int temp = 0;
	for (int a = 1; a < 10; a++)
	{
		for (int b = 1; b < 10; b++)
		{
			for (int c = 1; c < 10; c++)
			{
				if (first == b || first == c)
					temp += 1;
				if (second == a || second == c)
					temp += 1;
				if (third == a || third == b)
					temp += 1;
				if (temp != bCount)
					candidates[a][b][c] = 0;
				temp = 0;
			}
		}
	}
}

void solve()
{
	int first, second, third;
	for (int i = 0; i < N; i++)
	{
		std::cin >> call >> S >> B;

		first = call / 100;
		second = (call / 10) % 10;
		third = call % 10;

		strike(S, first, second, third);
		ball(B, first, second, third);
	}
}

int main()
{
	std::cin.tie(NULL);
	std::ios::sync_with_stdio(false);

	input();
	solve();
	count();
	std::cout << answer << "\n";
	return 0;
}