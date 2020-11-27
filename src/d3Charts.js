function loadD3() {
  // d3.json("data/ciudades_poblacion_acceso_500m.json", function(data) {
    // console.log(data);
    // const groupData = data;
    const groupData = [
      {
        key: "Monterrey",
        values: [
          {grpName: "supermercados", grpValue:0.8616168856621482},
          {grpName: "farmacias", grpValue:0.571008308170467},
          {grpName: "hospitales", grpValue:0.10979042305665483},
          // {grpName: "avg", grpValue:0.51413853896309}
        ]
      },
      {
        key: "Laguna",
        values: [
          {grpName: "supermercados", grpValue:0.8541032259035863},
          {grpName: "farmacias", grpValue:0.6497876892654105},
          {grpName: "hospitales", grpValue:0.0757098898580218},
          // {grpName: "avg", grpValue:0.5265336016756729}
        ]
      },
      {
        key: "Saltillo",
        values: [
          {grpName: "supermercados", grpValue:0.8246279034282377},
          {grpName: "farmacias", grpValue:0.5828603713972224},
          {grpName: "hospitales", grpValue:0.036682154516603914},
          // {grpName: "avg", grpValue:0.4813901431140213}
        ]
      },
      {
        key: "Querétaro",
        values: [
          {grpName: "supermercados", grpValue:0.8081153718728217},
          {grpName: "farmacias", grpValue:0.7474856836121085},
          {grpName: "hospitales", grpValue:0.08345487211818707},
          // {grpName: "avg", grpValue:0.5463519758677058}
        ]
      },
      {
        key: "Merida",
        values: [
          {grpName: "supermercados", grpValue:0.7804702483179742},
          {grpName: "farmacias", grpValue:0.5513072461801517},
          {grpName: "hospitales", grpValue:0.03493181481101352},
          // {grpName: "avg", grpValue:0.45556976976971314}
        ]
      },
      {
        key: "Aguascalientes",
        values: [
          {grpName: "supermercados", grpValue:0.7691336561086368},
          {grpName: "farmacias", grpValue:0.6592769304220901},
          {grpName: "hospitales", grpValue:0.0769464739135115},
          // {grpName: "avg", grpValue:0.5017856868147462}
        ]
      },
      {
        key: "Mexicali",
        values: [
          {grpName: "supermercados", grpValue:0.7449333952700674},
          {grpName: "farmacias", grpValue:0.47779017077831526},
          {grpName: "hospitales", grpValue:0.03319976087584618},
          // {grpName: "avg", grpValue:0.4186411089747429}
        ]
      },
      {
        key: "Mexico",
        values: [
          {grpName: "supermercados", grpValue:0.7306441371127174},
          {grpName: "farmacias", grpValue:0.9182431413280354},
          {grpName: "hospitales", grpValue:0.1177247458815045},
          // {grpName: "avg", grpValue:0.5888706747740858}
        ]
      },
      {
        key: "SLP",
        values: [
          {grpName: "supermercados", grpValue:0.7062156600010863},
          {grpName: "farmacias", grpValue:0.6815787054293709},
          {grpName: "hospitales", grpValue:0.06628988766810921},
          // {grpName: "avg", grpValue:0.4846947510328555}
        ]
      },
      {
        key: "Guadalajara",
        values: [
          {grpName: "supermercados", grpValue:0.6869314758049446},
          {grpName: "farmacias", grpValue:0.7967079604652854},
          {grpName: "hospitales", grpValue:0.10181203160862269},
          // {grpName: "avg", grpValue:0.5284838226262841}
        ]
      },
      {
        key: "Puebla",
        values: [
          {grpName: "supermercados", grpValue:0.6077885884561949},
          {grpName: "farmacias", grpValue:0.6836757204185121},
          {grpName: "hospitales", grpValue:0.06330959278361795},
          // {grpName: "avg", grpValue:0.451591300552775}
        ]
      },
      {
        key: "Cuernavaca",
        values: [
          {grpName: "supermercados", grpValue:0.519456804370429},
          {grpName: "farmacias", grpValue:0.567842878993185},
          {grpName: "hospitales", grpValue:0.06725697211831758},
          // {grpName: "avg", grpValue:0.38485221849397716}
        ]
      },
      {
        key: "Toluca",
        values: [
          {grpName: "supermercados", grpValue:0.49151969133222545},
          {grpName: "farmacias", grpValue:0.6391198089034573},
          {grpName: "hospitales", grpValue:0.07404533059191558},
          // {grpName: "avg", grpValue:0.4015616102758661}
        ]
      }
    ];

let margin = {top: 20, right: 20, bottom: 30, left: 40},
width = 1000 - margin.left - margin.right,
height = 480 - margin.top - margin.bottom;



let x0  = d3.scaleBand().rangeRound([0, width], .5);
let x1  = d3.scaleBand();
// let y   = d3.scaleLinear().rangeRound([height, 0]);
let y   = d3.scaleLinear()
  .domain([0, 1])
  .range([height, 0])

let xAxis = d3.axisBottom().scale(x0)
                            // .tickFormat(d3.timeFormat("Week %V"))
                            // .tickFormat(d3.timeFormat("Week %V"))
                            // .tickValues(groupData.map(d=>d.key));
                            .tickValues(groupData.map(d=>d.key));

let yAxis = d3.axisLeft()
  // .ticks(3)
  .scale(y);

  yAxis.tickValues([0,0.25,0.5, 0.75,1]);



// const color = d3.scaleOrdinal(d3.schemeCategory10);
const color = d3.scaleOrdinal()
    //  .range(['#0C3383', '#EDD13B', '#D51D1D', '#E3DCFF']);
    //  .range(['#00FDFB', '#FED300','#FEA700']);
    //  .range(
    //   ["#b3a744",
    //     "#ca653e",
    //     "#63b76b"
    //   ]     
      .range(
      ["#C6C6C6",
      "#636363",
      
      "#E7E7E7"
      ]
     );
    //  .range(["#9d6e5d",
    //  "#5498ad",
    //  "#7d7b54",
    //  "#3b605c",
    //  "#66977f"]);

let svg = d3.select("#d3-b")

// let svg = d3.select('body').append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.call(responsivefy)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

let categoriesNames = groupData.map(function(d) { return d.key; });
let rateNames       = groupData[0].values.map(function(d) { return d.grpName; });

x0.domain(categoriesNames);
x1.domain(rateNames).rangeRound([0, x0.bandwidth()]);
y.domain([0, d3.max(groupData, function(key) { return d3.max(key.values, function(d) { return d.grpValue; }); })]);

svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);


svg.append("g")
  .attr("class", "y axis")
  .style('opacity','0')
  .call(yAxis)
    // .append("text")
    //     .attr("transform", "rotate(-90)")
    //     .attr("y", 6)
    //     .attr("dy", ".71em")
    //     .style("text-anchor", "end")
    //     .style('font-weight','bold')
    //     .style('fill', 'white')
    //     .text("Value");

svg.select('.y').transition().duration(500).delay(1300).style('opacity','1');

let slice = svg.selectAll(".slice")
  .data(groupData)
  .enter().append("g")
  .attr("class", "g")
  .attr("transform",function(d) { return "translate(" + x0(d.key) + ",0)"; });

  slice.selectAll("rect")
  .data(function(d) { return d.values; })
    .enter().append("rect")
        .attr("width", x1.bandwidth())
        .attr("x", function(d) { return x1(d.grpName); })
          .style("fill", function(d) { return color(d.grpName) })
          .style("opacity","1")
          .attr("y", function(d) { return y(0); })
          .attr("height", function(d) { return height - y(0); })
        // .on("mouseover", function(d) {
        //     d3.select(this).style("fill", d3.rgb(color(d.grpName)).darker(2));
        // })
        // .on("mouseout", function(d) {
        //     d3.select(this).style("fill", color(d.grpName));
        // });


slice.selectAll("rect")
  .transition()
  .delay(function (d) {return Math.random()*1000;})
  .duration(1000)
  .attr("y", function(d) { return y(d.grpValue); })
  .attr("height", function(d) { return height - y(d.grpValue); });

  //Legend
let legend = svg.selectAll(".legend")
  // .data(groupData[0].values.map(function(d) { return d.grpName; }).reverse())
  .data(groupData[0].values.map(function(d) { return d.grpName; }))
.enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d,i) { return "translate(0," + i * 20 + ")"; })
  .style("opacity","0");

legend.append("rect")
  .attr("x", width - 18)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", function(d) { return color(d); });

legend.append("text")
  .attr("x", width - 24)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "end")
  .style('fill', 'white')
  .style('font-family', 'Arimo')
  .style('letter-spacing', '-0.01em')
  .style('font-size', '18px')
  .text(function(d) {return d; });

legend.transition().duration(500).delay(function(d,i){ return 1300 + 200 * i; }).style("opacity","1");

//  });
  function responsivefy(svg) {
    // container will be the DOM element
    // that the svg is appended to
    // we then measure the container
    // and find its aspect ratio
    const container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style('width'), 10),
        height = parseInt(svg.style('height'), 10),
        aspect = width / height;
  
    // set viewBox attribute to the initial size
    // control scaling with preserveAspectRatio
    // resize svg on inital page load
    svg.attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMinYMid')
        .call(resize);
  
    // add a listener so the chart will be resized
    // when the window resizes
    // multiple listeners for the same event type
    // requires a namespace, i.e., 'click.foo'
    // api docs: https://goo.gl/F3ZCFr
    d3.select(window).on(
        'resize.' + container.attr('id'), 
        resize
    );
  
    // this is the code that resizes the chart
    // it will be called on load
    // and in response to window resizes
    // gets the width of the container
    // and resizes the svg to fill it
    // while maintaining a consistent aspect ratio
    function resize() {
        const w = parseInt(container.style('width'));
        svg.attr('width', w);
        svg.attr('height', Math.round(w / aspect));
    }
  }
}