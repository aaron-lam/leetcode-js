const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const hasPath = (maze, start, destination) => {
    const q = [start];
    const visited = new Array(maze.length).fill(0).map(() => new Array(maze[0].length).fill(false));
    visited[start[0]][start[1]] = true;
    while (q.length > 0) {
        const [i, j] = q.shift();
        if (i === destination[0] && j === destination[1]) {
            return true;
        }
        for (const dir of DIRS) {
            let newI = i + dir[0];
            let newJ = j + dir[1];
            while (newI >= 0 && newJ >= 0 && newI < maze.length && newJ < maze[0].length && maze[newI][newJ] === 0) {
                newI += dir[0];
                newJ += dir[1];
            }
            newI -= dir[0];
            newJ -= dir[1];
            if (!visited[newI][newJ]) {
                q.push([newI, newJ]);
                visited[newI][newJ] = true;
            }    
        }
    }
    return false;
};
