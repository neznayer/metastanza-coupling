import { S as Stanza, d as downloadSvgMenuItem, a as downloadPngMenuItem, b as appendCustomCss, l as loadData, s as stratify, c as select, h as hierarchy, e as defineStanzaElement } from './load-data-7f37112d.js';

class Breadcrumbs extends Stanza {
  menu() {
    return [
      downloadSvgMenuItem(this, "tree"),
      downloadPngMenuItem(this, "tree"),
    ];
  }

  handleEvent(event) {
    console.log(event);
  }

  async render() {
    const dispatcher = this.element.dispatchEvent;

    appendCustomCss(this, this.params["custom-css-url"]);

    //width
    const width = this.params["width"];
    const height = this.params["height"];
    const isCoupledStanza = this.params["is-coupled"];

    let data;
    if (!isCoupledStanza) {
      data = await loadData(this.params["data-url"], this.params["data-type"]);
    } else {
      data = this.params["data"];
    }

    this.renderTemplate({
      template: "stanza.html.hbs",
    });

    const filteredData = data.filter(
      (item) => (item.children && !item.n) || (item.n && item.n > 0)
    );

    //Add root element if there are more than one elements without parent.
    const rootElemIndexes = [];
    for (let i = 0; i < filteredData.length - 1; i++) {
      if (!filteredData[i]?.parent) {
        rootElemIndexes.push(i);
      }
    }
    if (rootElemIndexes.length > 1) {
      filteredData.push({ id: -1, value: "", label: "" });

      rootElemIndexes.forEach((index) => {
        filteredData[index].parent = -1;
      });
    }

    const el = this.root.querySelector("#breadcrumbs");

    const opts = {
      width,
      height,
    };
    renderElement(el, filteredData, opts, dispatcher);
  }
}

let showingD;

function renderElement(el, data, opts, dispatcher = null) {
  const nestedData = stratify()
    .id((d) => d.id)
    .parentId((d) => d.parent)(data);

  const container = select(el)
    .attr("style", `width:${opts.width}px;height:${opts.height}px;`)
    .append("div")
    .classed("container", true);

  const hierarchyData = hierarchy(nestedData);

  let currenData = hierarchyData.find((item) => {
    return item.data.data.id === 6;
  });

  const getCurrentData = (d) => {
    return hierarchyData
      .find((item) => {
        return item === d;
      })
      .ancestors()
      .reverse();
  };

  function showDropdown(e, datum) {
    if (showingD === datum) {
      container.selectAll(".node-dropdown-menu").remove();
      showingD = null;
      return;
    }

    showingD = datum;

    container.selectAll(".node-dropdown-menu").remove();

    const menuBack = container
      .append("div")
      .classed("node-dropdown-menu", true)
      .style("left", this.parentNode.offsetLeft + "px");

    const rows = menuBack
      .selectAll("div")
      .data(datum.parent.children.filter((d) => d !== datum))
      .join("div")
      .classed("node-dropdown-menu-item", true)
      .on("click", (e, d) => {
        container.selectAll(".node-dropdown-menu").remove();
        showingD = null;
        dispatcher(new CustomEvent("selectedDatumChanged", { detail: { d } }));
        return update(getCurrentData(d));
      });
    rows.append("span").text((d) => d.data.data.label);
  }

  function update(data) {
    const breadcrumbNodes = container
      .selectAll("div.breadcrumb-node")
      .data(data, (d) => d.data.data.id);

    // REMOVE
    breadcrumbNodes.exit().remove();

    // ADD
    const breadcrumbNode = breadcrumbNodes
      .enter()
      .append("div")
      .classed("breadcrumb-node", true);

    breadcrumbNode

      .append("div")
      .classed("node-label", true)
      .on("click", (e, d) => {
        return update(getCurrentData(d));
      })
      .text((d) => (d.data.data.label === "" ? "/" : d.data.data.label));

    // node dropdown icon
    breadcrumbNode
      .append("div")
      .classed("node-dropdown-container", true)
      .attr("style", (d) => (d.parent?.children ? null : "display:none"))
      .filter((d) => d.parent?.children)
      .on("click", showDropdown)
      .append("div")
      .classed("node-dropdown", true);

    // node forward icon
    breadcrumbNode
      .append("div")
      .classed("node-forward", true)
      .attr("style", (d) => (d.children ? null : "display:none"));

    // UPDATE

    breadcrumbNodes
      .selectAll("div.node-label")
      .text((d) => (d.data.data.label === "" ? "/" : d.data.data.label));

    let currentHeight = container.node().getBoundingClientRect().height;
    console.log("currentHeight", currentHeight);
    data.length - 1 - 2;

    // while (currentHeight > opts.height) {
    //   if (i > maxI) {
    //   }

    //   container
    //     .selectAll("div.breadcrumb-node")
    //     .filter((d) => d.depth === i)
    //     .select("div.node-label")
    //     .text("...");
    //   currentHeight = container.node().getBoundingClientRect().height;
    //   i++;
    // }
  }

  update(getCurrentData(currenData));
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Breadcrumbs
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "breadcrumbs",
	"stanza:label": "Breadcrumbs",
	"stanza:definition": "Breadcrumbs MetaStanza ",
	"stanza:type": "Stanza",
	"stanza:provider": "TogoStanza",
	"stanza:license": "MIT",
	"stanza:author": "Anton Zhuravlev",
	"stanza:address": "anton@penqe.com",
	"stanza:contributor": [
],
	"stanza:created": "2021-11-26",
	"stanza:updated": "2021-11-26",
	"stanza:parameter": [
	{
		"stanza:key": "data-url",
		"stanza:example": "https://raw.githubusercontent.com/togostanza/togostanza-data/main/samples/json/tree-data.json",
		"stanza:description": "Data source URL",
		"stanza:required": true
	},
	{
		"stanza:key": "data-type",
		"stanza:type": "single-choice",
		"stanza:choice": [
			"json",
			"tsv",
			"csv",
			"sparql-results-json"
		],
		"stanza:example": "json",
		"stanza:description": "Data type",
		"stanza:required": true
	},
	{
		"stanza:key": "width",
		"stanza:type": "number",
		"stanza:example": 400,
		"stanza:description": "Width",
		"stanza:required": true
	},
	{
		"stanza:key": "height",
		"stanza:type": "number",
		"stanza:example": 400,
		"stanza:description": "Height",
		"stanza:required": true
	},
	{
		"stanza:key": "is-coupled",
		"stanza:type": "boolean",
		"stanza:example": false,
		"stanza:description": "Couple to another stanza",
		"stanza:required": true
	}
],
	"stanza:menu-placement": "bottom-right",
	"stanza:style": [
],
	"stanza:incomingEvent": [
	{
		"stanza:key": "selectedDatumChanged",
		"stanza:description": "event, wich dispatches when user selects some node in other stanza"
	}
],
	"stanza:outgoingEvent": [
	{
		"stanza:key": "selectedDatumChanged",
		"stanza:description": "event, wich dispatches when user selects some node"
	}
]
};

var templates = [
  ["stanza.html.hbs", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"breadcrumbs\"></div>";
},"useData":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=breadcrumbs.js.map
