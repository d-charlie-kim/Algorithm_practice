#include <iostream>
#include <vector>
#include <map>
using namespace std;

map<int, int> visited;

static void visit(int N, vector<vector<int> > road, int step, int before) {
    visited[before] = step;
    if (step == 0)
        return ;
    for (int i = 0; i < road.size(); i++) {
        if (road[i][0] == before && road[i][2] <= step && visited[road[i][1]] < step - road[i][2]) {
            visit(N, road, step - road[i][2], road[i][1]);
        }
        else if (road[i][1] == before && road[i][2] <= step && visited[road[i][0]] < step - road[i][2]) {
            visit(N, road, step - road[i][2], road[i][0]);
        }
    }
}

int solution(int N, vector<vector<int> > road, int K) {
    int answer = 0;
    visit(N, road, K, 1);
    answer = visited.size();
    return answer;
}