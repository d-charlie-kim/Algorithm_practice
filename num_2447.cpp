#include <iostream>

void recursive(int x, int y, int z, char c, int size)
{
	if (z == 1)
	{
		std::cout << c;
		if (x == 2)
			std::cout << std::endl;
	}
	else
	{
		recursive(0, 0, z / 3,  c, size);
		recursive(1, 0, z / 3,  c, size);
		recursive(2, 0, z / 3,  c, size);
		recursive(0, 1, z / 3,  c, size);
		recursive(1, 1, z / 3, ' ', size);
		recursive(2, 1, z / 3,  c, size);
		recursive(0, 2, z / 3,  c, size);
		recursive(1, 2, z / 3,  c, size);
		recursive(2, 2, z / 3,  c, size);
	}
}

int main()
{
	int size = 0;
	std::cin >> size;
	recursive(0, 0, size, '*', size);
	return 0;
}

