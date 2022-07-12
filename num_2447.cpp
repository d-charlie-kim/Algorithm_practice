#include <iostream>

// void recursive(int x, int y, int z, char c, int size)
// {
// 	if (z == 1)
// 	{
// 		std::cout << c;
// 		if (x == 2)
// 			std::cout << std::endl;
// 	}
// 	else
// 	{
// 		recursive(0, 0, z / 3,  c, size);
// 		recursive(1, 0, z / 3,  c, size);
// 		recursive(2, 0, z / 3,  c, size);
// 		recursive(0, 1, z / 3,  c, size);
// 		recursive(1, 1, z / 3, ' ', size);
// 		recursive(2, 1, z / 3,  c, size);
// 		recursive(0, 2, z / 3,  c, size);
// 		recursive(1, 2, z / 3,  c, size);
// 		recursive(2, 2, z / 3,  c, size);
// 	}
// }

void recursive(int x, int y, int z)
{
	if ((x / z) % 3 == 1 && (y / z) % 3 == 1)
		std::cout << " ";
	else if (z == 1)
		std::cout << "*";
	else
		recursive(x, y, z / 3);
}

int main()
{
	int size = 0;
	std::cin >> size;
	for (int x = 0; x < size; x++)
	{
		for (int y = 0; y < size; y++)
			recursive(x, y, size);
		std::cout << std::endl;
	}
	return 0;
}
