// Astro rehype plugins for Asim's Lab:
// 1. lazy-load all content images
// 2. add slug ids to h2/h3 headings (for table of contents anchors)
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\s-]/gu, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .slice(0, 60) || 'section';
}

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

export function rehypeLazyImages() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'element') {
        if (node.tagName === 'img') {
          node.properties = node.properties || {};
          if (!node.properties.loading) node.properties.loading = 'lazy';
          if (!node.properties.decoding) node.properties.decoding = 'async';
        }
        if ((node.tagName === 'h2' || node.tagName === 'h3') && !node.properties?.id) {
          node.properties = node.properties || {};
          node.properties.id = slugify(textOf(node));
        }
      }
      for (const child of node.children || []) walk(child);
    };
    walk(tree);
  };
}
