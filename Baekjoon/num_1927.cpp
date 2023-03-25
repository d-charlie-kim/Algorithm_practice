#include <iostream>
#include <cmath>
#include <climits>

using namespace std;

int N, heapSize = 0;
int heap[100010] = {
		0,
};

void input()
{
	cin >> N;
}

void putNew(int newNum)
{
	heap[heapSize + 1] = newNum;
	heapSize++;
	if (heapSize == 1)
		return;

	for (int child = heapSize;;)
	{
		int parent = floor(child / 2);
		if (heap[parent] > newNum)
		{
			heap[child] = heap[parent];
			heap[parent] = newNum;
			child = parent;
		}
		else
			break;
		if (child == 1)
			break;
	}
}

void sortHeap()
{
	int now = 1;
	while (true)
	{
		int left = now * 2;
		int right = (now * 2) + 1;

		if (left > heapSize || (right > heapSize && heap[now] <= heap[left]) || (heap[now] <= heap[left] && heap[now] <= heap[right]))
			break;

		int smaller;
		if ((right > heapSize && heap[now] > heap[left]) || heap[now] < heap[right] || heap[left] < heap[right])
			smaller = left;
		else
			smaller = right;

		int temp = heap[now];
		heap[now] = heap[smaller];
		heap[smaller] = temp;

		now = smaller;
	}
}

void popSmallest()
{
	if (heapSize == 0)
		cout << 0 << "\n";
	else
	{
		cout << heap[1] << "\n";

		heap[1] = heap[heapSize];
		heap[heapSize] = 0;
		heapSize--;

		sortHeap();
	}
}

void solve()
{
	int input;
	for (int i = 0; i < N; i++)
	{
		cin >> input;
		if (input == 0)
			popSmallest();
		else
			putNew(input);
		// for (int i = 1; i <= heapSize; i++)
		// 	cout << "::" << heap[i] << " :: heapSize: " << heapSize << "\n";
	}
}

int main()
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);

	input();
	solve();
	return 0;
}