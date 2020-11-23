let margin = {top: 20, right: 20, bottom: 30, left: 40};
let width = 1000 - margin.left - margin.right;
let height = 480 - margin.top - margin.bottom;

let legendHexes = [
  {
    value: 5,
    label: "5 minutos"
  },
  {
    value: 10,
    label: "10 minutos"    
  },
  {
    value: 15,
    label: "15 minutos"    

    
  },
  {
    value: 30,
    label: "30 minutos"    

  }, 
  {
    value: 60,
    label: "60 minutos"    
  }
];

let svgContainer = 
    d3.select("#d3-legend")
      // .append("svg")
      // .attr("width", 500)
      // .attr("height", 500);
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);


      var _s32 = (Math.sqrt(3)/2);
      var A = 25;
      var xDiff = 100;
      var yDiff = 100;
      var pointData = [[A+xDiff, 0+yDiff], [A/2+xDiff, A*_s32+yDiff], [-A/2+xDiff, A*_s32+yDiff], [-A+xDiff, 0+yDiff],
      [-A/2+xDiff, -A*_s32+yDiff], [A/2+xDiff, -A*_s32+yDiff]];
      // var svgContainer = d3.select("body") //create container
      //         .append("svg")
      //         .attr("width", 1000)
      //         .attr("height", 1000);
      
      var enterElements = svgContainer.selectAll("path.area"); //draw elements
      
      for (let i = 0; i < 5; i++) {

        let sep = i*10;

        enterElements.data([pointData]).enter().append("path")
        .style("fill", "#ff0000")
        .attr("d", d3.line())
        .attr("transform", `translate(${sep}%, 0%)`)
      }
