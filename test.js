let kname = '"a", "b"';
let change = kname.replace(/"([^"]*)"/g, "'$1'")
console.log(change);