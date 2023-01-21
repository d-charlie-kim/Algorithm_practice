#include <iostream>
#include <cmath>

double n;
int answer = 1;

void solve()
{
	double temp;

	for (; n != 0; )
	{
		temp = std::sqrt(n);
		if (temp == std::floor(temp))
			break ;
		else
		{
			n -= std::pow(std::floor(temp), 2);
			answer += 1;
		}
	}
}

int main()
{
	std::cin >> n;
	solve();
	std::cout << answer << "\n";
}
