const titleToNumber = (columnTitle) => [...columnTitle].reduce((sum, cur) => sum * 26 + cur.charCodeAt(0) - 64, 0);
