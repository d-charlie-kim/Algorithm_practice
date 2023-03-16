#include <iostream>
#include <algorithm>

using namespace std;

int N, BigIndex;
long long nums[100001];
long long answer = 0;

void input()
{
	cin >> N;

	for (int i = 0; i < N; i++)
	{
		cin >> nums[i];
	}
}

long long mcount(int start, int end, int left, int right)
{
	long long minv = min(nums[left], nums[right]);
	long long sum = nums[left] + nums[right];
	long long current = sum * minv;

	while (left != start || right != end)
	{
		if (left == start || (right != end && nums[left - 1] < nums[right + 1]))
		{
			sum += nums[right + 1];
			minv = min(minv, nums[right + 1]);
			right += 1;
		}
		else
		{
			sum += nums[left - 1];
			minv = min(minv, nums[left - 1]);
			left -= 1;
		}
		current = max(current, sum * minv);
	}
	return current;
}

long long recursive(int left, int right)
{
	if (left == right)
		return (nums[left] * nums[left]);

	long long lv = recursive(left, (left + right) / 2);
	long long rv = recursive(((left + right) / 2) + 1, right);
	long long mv = mcount(left, right, (left + right) / 2, ((left + right) / 2) + 1);
	
	return max(mv, max(lv, rv));
}

void solve()
{
	answer = recursive(0, N - 1);
}

void output()
{
	cout << answer << "\n";
}

int main()
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);

	input();
	solve();
	output();
	return 0;
}