import { d as defineComponent, s as script$1, c as createBlock, w as withCtx, r as resolveComponent, o as openBlock, a as createElementBlock, F as Fragment, b as renderList, e as createBaseVNode, t as toDisplayString, f as createCommentVNode, g as createApp } from './Layout-cabcc632.js';

var script = defineComponent({
  components: {
    Layout: script$1
  },

  props: ['allMetadata'],

  setup(props) {
    return props;
  }
});

const _hoisted_1 = /*#__PURE__*/createBaseVNode("h1", { class: "display-4" }, "List of Stanzas", -1 /* HOISTED */);
const _hoisted_2 = {
  key: 0,
  class: "list-group mt-3"
};
const _hoisted_3 = ["href"];
const _hoisted_4 = {
  key: 0,
  class: "small text-muted text-truncate mt-1 mb-0"
};
const _hoisted_5 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");

  return (openBlock(), createBlock(_component_Layout, null, {
    default: withCtx(() => [
      _hoisted_1,
      (_ctx.allMetadata.length > 0)
        ? (openBlock(), createElementBlock("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.allMetadata, (metadata) => {
              return (openBlock(), createElementBlock("a", {
                key: metadata['@id'],
                href: `./${metadata['@id']}.html`,
                class: "list-group-item list-group-item-action py-3"
              }, [
                createBaseVNode("div", null, toDisplayString(metadata['stanza:label']), 1 /* TEXT */),
                (metadata['stanza:definition'])
                  ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(metadata['stanza:definition']), 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ], 8 /* PROPS */, _hoisted_3))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : (openBlock(), createElementBlock("p", _hoisted_5, "No stanzas defined."))
    ]),
    _: 1 /* STABLE */
  }))
}

script.render = render;
script.__file = "node_modules/togostanza/src/components/Index.vue";

var allMetadata = [{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"breadcrumbs","stanza:label":"Breadcrumbs","stanza:definition":"Breadcrumbs MetaStanza ","stanza:type":"Stanza","stanza:provider":"TogoStanza","stanza:license":"MIT","stanza:author":"Anton Zhuravlev","stanza:address":"anton@penqe.com","stanza:contributor":[],"stanza:created":"2021-11-26","stanza:updated":"2021-11-26","stanza:parameter":[{"stanza:key":"data-url","stanza:example":"https://raw.githubusercontent.com/togostanza/togostanza-data/main/samples/json/tree-data.json","stanza:description":"Data source URL","stanza:required":true},{"stanza:key":"data-type","stanza:type":"single-choice","stanza:choice":["json","tsv","csv","sparql-results-json"],"stanza:example":"json","stanza:description":"Data type","stanza:required":true},{"stanza:key":"width","stanza:type":"number","stanza:example":400,"stanza:description":"Width","stanza:required":true},{"stanza:key":"height","stanza:type":"number","stanza:example":400,"stanza:description":"Height","stanza:required":true},{"stanza:key":"is-coupled","stanza:type":"boolean","stanza:example":false,"stanza:description":"Couple to another stanza","stanza:required":true}],"stanza:menu-placement":"bottom-right","stanza:style":[],"stanza:incomingEvent":[{"stanza:key":"selectedDatumChanged","stanza:description":"event, wich dispatches when user selects some node in other stanza"}],"stanza:outgoingEvent":[{"stanza:key":"selectedDatumChanged","stanza:description":"event, wich dispatches when user selects some node"}]},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"sunburst","stanza:label":"Sunburst","stanza:definition":"Sunburst MetaStanza","stanza:type":"Stanza","stanza:display":"Chart","stanza:provider":"Togostanza","stanza:license":"MIT","stanza:author":"Anton Zhuravlev","stanza:address":"anton@penqe.com","stanza:contributor":[],"stanza:created":"2021-10-28","stanza:updated":"2021-10-28","stanza:parameter":[{"stanza:key":"data-url","stanza:example":"https://raw.githubusercontent.com/togostanza/togostanza-data/main/samples/json/tree-data.json","stanza:description":"Data source URL","stanza:required":true},{"stanza:key":"data-type","stanza:type":"single-choice","stanza:choice":["json","tsv","csv","sparql-results-json"],"stanza:example":"json","stanza:description":"Data type","stanza:required":true},{"stanza:key":"scaling","stanza:type":"single-choice","stanza:choice":["Natural","Equal children","Equal parents"],"stanza:example":"Natural","stanza:description":"Scaling of nodes","stanza:required":true},{"stanza:key":"max-depth","stanza:type":"number","stanza:example":3,"stanza:description":"Maximum depth to show","stanza:required":false},{"stanza:key":"show-numbers","stanza:type":"boolean","stanza:example":true,"stanza:description":"Show numbers under labels","stanza:required":false},{"stanza:key":"gap-width","stanza:type":"number","stanza:example":2,"stanza:description":"Gap between chart nodes levels, in px","stanza:required":false},{"stanza:key":"nodes-gap-width","stanza:type":"number","stanza:example":8,"stanza:description":"Gap between chart nodes that are on same level, unitless coefficient","stanza:required":false},{"stanza:key":"nodes-corner-radius","stanza:type":"number","stanza:example":0,"stanza:description":"Corner radius of nodes","stanza:required":false},{"stanza:key":"custom-css-url","stanza:example":"","stanza:description":"Stylesheet(css file) URL to override current style","stanza:required":false},{"stanza:key":"width","stanza:type":"number","stanza:example":400,"stanza:description":"Width"},{"stanza:key":"height","stanza:type":"number","stanza:example":400,"stanza:description":"Height"}],"stanza:menu-placement":"bottom-right","stanza:style":[{"stanza:key":"--togostanza-background-color","stanza:type":"color","stanza:default":"#eeeeee","stanza:description":"Background color"},{"stanza:key":"--togostanza-label-text-outline","stanza:type":"color","stanza:default":"rgba(0,0,0,0)","stanza:description":"Label text outline. 'rgba(0,0,0,0)' for no outline"},{"stanza:key":"--togostanza-label-font-family","stanza:type":"text","stanza:default":"Helvetica Neue","stanza:description":"Label font family"},{"stanza:key":"--togostanza-label-font-color","stanza:type":"color","stanza:default":"#4E5059","stanza:description":"Label font color"},{"stanza:key":"--togostanza-label-font-size","stanza:type":"string","stanza:default":"11px","stanza:description":"Label font size"},{"stanza:key":"--togostanza-label-font-weight","stanza:type":"string","stanza:default":"normal","stanza:description":"Label font weight"},{"stanza:key":"--togostanza-number-label-font-family","stanza:type":"text","stanza:default":"Helvetica Neue","stanza:description":"Number label font family"},{"stanza:key":"--togostanza-number-label-font-color","stanza:type":"color","stanza:default":"#4E5059","stanza:description":"Number label font color"},{"stanza:key":"--togostanza-number-label-font-size","stanza:type":"string","stanza:default":"7px","stanza:description":"Number label font size"},{"stanza:key":"--togostanza-number-label-font-weight","stanza:type":"string","stanza:default":"normal","stanza:description":"Number label font weight"},{"stanza:key":"--togostanza-colorscheme-color1","stanza:type":"color","stanza:default":"#6590e6","stanza:description":"Color 1"},{"stanza:key":"--togostanza-colorscheme-color2","stanza:type":"color","stanza:default":"#3ac9b6","stanza:description":"Color 2"},{"stanza:key":"--togostanza-colorscheme-color3","stanza:type":"color","stanza:default":"#9ede2f","stanza:description":"Color 3"},{"stanza:key":"--togostanza-colorscheme-color4","stanza:type":"color","stanza:default":"#F5DA64","stanza:description":"Color 4"},{"stanza:key":"--togostanza-colorscheme-color5","stanza:type":"color","stanza:default":"#F57F5B","stanza:description":"Color 5"},{"stanza:key":"--togostanza-colorscheme-color6","stanza:type":"color","stanza:default":"#F75976","stanza:description":"Color 6"}],"stanza:incomingEvent":[{"stanza:key":"selectedDatumChanged","stanza:description":"event, wich dispatches when user selects some node in other stanza"}],"stanza:outgoingEvent":[{"stanza:key":"selectedDatumChanged","stanza:description":"event, wich dispatches when user selects some node"}]}];

createApp(script, {allMetadata}).mount('body');
//# sourceMappingURL=index-app.js.map
