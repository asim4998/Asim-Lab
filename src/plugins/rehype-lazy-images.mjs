// Adds loading="lazy" + decoding="async" to every content image,
// so below-the-fold images never slow down the initial page load.
export function rehypeLazyImages() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'element' && node.tagName === 'img') {
        node.properties = node.properties || {};
        if (!node.properties.loading) node.properties.loading = 'lazy';
        if (!node.properties.decoding) node.properties.decoding = 'async';
      }
      for (const child of node.children || []) walk(child);
    };
    walk(tree);
  };
}
