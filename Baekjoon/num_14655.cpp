#include <iostream>

int N, A = 0, B = 0;

int main()
{
	std::cin >> N;

	int temp;
	for (int i = 0; i < N; i++)
	{
		std::cin >> temp;
		if (temp < 0)
			A -= temp;
		else
			A += temp;
	}
	for (int i = 0; i < N; i++)
	{
		std::cin >> temp;
		if (temp > 0)
			B -= temp;
		else
			B += temp;
	}
	std::cout << A - B << "\n";
}