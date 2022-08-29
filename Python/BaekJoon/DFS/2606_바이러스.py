import sys
sys.stdin = open('input.txt')
input = sys.stdin.readline

computers = int(input())
pairs = int(input())
matrix = [[] for _ in range(computers + 1)]
visited = [0] * (computers + 1)

for _ in range(pairs):
    a, b = map(int, input().split())
    matrix[a].append(b)
    matrix[b].append(a)
    
def DFS(x):
    for i in matrix[x]:
        if visited[i] == 0:
            visited[i] = 1
            DFS(i)

DFS(1)

print(sum(visited) - 1)