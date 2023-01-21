#include <iostream>
#include <algorithm>

int P, L, V, count, caseNum = 1;

int main()
{
	std::cin.tie(NULL);
	std::ios::sync_with_stdio(false);

	std::cin >> L >> P >> V;
	while (L != 0 || P != 0 || V != 0)
	{
		count = (L * (V / P));
		V = V % P;
		count += std::min(V, L);
		std::cout << "Case " << caseNum << ": " << count << "\n";
		caseNum += 1;
		std::cin >> L >> P >> V;
	}
	return 0;
}