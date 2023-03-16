#include <iostream>
#include <string>
#include <map>
#include <vector>

std::map<std::string, int> scores;
std::map<std::string, std::vector<std::string> > graph;

void setting(int N)
{
	for (int i = 0; i < N; i++)
	{
		std::string target, from;
		std::vector<std::string> froms;
		int count;

		std::cin >> target >> count;
		for (; count > 0; count--) {
			std::cin >> from;
			scores.insert(make_pair(from, 1));
			froms.push_back(from);
		}
		graph.insert(make_pair(target, froms));
		scores.insert(make_pair(target, 1));
	}
}

bool isDuplicate(std::string target, std::string from)
{
	auto iter = graph.find(from);
	if (iter == graph.end())
		return false;

	if (find((*iter).second.begin(), (*iter).second.end(), target) == (*iter).second.end())
		return false;
	return true;
}

void calculating(std::string target)
{
	auto iter = graph.find(target);
	if (iter == graph.end())
		return;

	for (auto loop = (*iter).second.begin(); loop != (*iter).second.end(); loop++)
	{
		std::cout << "::: " << *loop << " ::: " << scores[*loop] << "\n";
		if(!isDuplicate(target, *loop))
			calculating(*loop);
	}

	for (auto loop = (*iter).second.begin(); loop != (*iter).second.end(); loop++)
	{
		std::cout << target << "  :::  " << scores[target] << "\n";
		scores[target] = scores[target] + scores[*loop];
	}
}

int main()
{
	int N;
	std::cin >> N;
	setting(N);

	std::string target;
	std::cin >> target;
	calculating(target);

	std::cout << scores[target] << "\n";
}