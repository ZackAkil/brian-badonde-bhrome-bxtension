function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

a = document.getElementsByTagName('body')

x = textNodesUnder(a[0])

x.forEach(function(ele){
ele.data = “Bahhh!” + ele.data 
});
