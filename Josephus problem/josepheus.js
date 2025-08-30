class Solution {
    josephus(n, k) {
   if (n == 1) return 1;
let w = 0;
for (let i = 2; i <= n; i++) {
    w = (w + k) % i;
}
return w + 1
        
    }
}
