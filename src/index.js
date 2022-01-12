module.exports = function reverse (n) {
    let a = String(n);
    let b = Array.from(a);
      let w = [];
      
    for (let i = 0; i<a.length; i++) {
      w.unshift(b[i])
    }
    
    if (b[0] === '-') {
      w = w.slice(0,-1);
    } 
      
    let c = w.toString();
    let e  = c.replace(/[,]/g, ' ');
    let f  = e.replace(/\s/g, '');
    return Number(f);
    
}
