import { index } from "d3"

let d3 = require("d3")
class Figure {
    constructor(width = 500, height = 500, barWidth = 50) {
        [this.c_width, this.c_height, this.barWidth ] = [ width, height, barWidth]
        this.svg = null
        this.max_D = 0
        this.data = null
        this.simulation = null
    }
    init(id) {
        this.svg = d3.select(id).append('svg')
        .attr('width', this.c_width)
        .attr('height', this.c_height)
        .call(d3.zoom().on("zoom", (event) => {
            this.svg.attr("transform", event.transform)
         }))
    }

    /* 柱状图  */
    /*  线性比列尺 */
    linear() {
        let linear = d3.scaleLinear().domain([0, this.max_D]).range([0, 350])
         return linear
    }
    linearX() {
         return d3.scaleLinear().domain([0, 50]).range([0, 300])
    }
    /* 坐标轴  */
    axis() {
        var xAxis = d3.axisBottom(this.linearX()).ticks(7);//设置刻度数目
        return xAxis
    }
    draw(data) {
        this.max_D = d3.max(data)
        this.svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('y', d => {
            return this.c_height - 100 - this.linear()(d)
        })
        .attr('x', (d, i) => {
            return i * this.barWidth + 100
        })
        .attr('width', this.barWidth -5)
        .attr('height', d => {
            return this.linear()(d)
        })
        .attr('fill','steelblue')

        this.svg.append('g')
        .attr('transform','translate(100,400)')
        .attr('class', 'axis')
        .call(this.axis())

        this.addText(data)
        this.addClick()
    }
    addClick() {
        this.svg.selectAll('rect')
        .on('mouseover', function(d) {
            d3.select(this)
            .attr('fill', '#9483f5')
        })
        .on('mouseout', function(d) {
            d3.select(this)
            .transition()
            .delay(200)
            .attr('fill', 'steelblue')
        })


    }
    addText(data) {
        this.svg.selectAll('.dataText')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'dataText')
        .attr('x', (d,index) => {
            return  100 + index * this.barWidth
        })
        .attr('transform', 'translate(0,20)')
        .attr('dx', d => {
            return (this.barWidth - 5)/2
        })
        .text(d=>d )
        .style("fill", "#fff")
        .style("text-anchor", "middle")
        .attr("y",d => {
            return this.c_height - 100
        })
        .transition()
        .delay((d, index) => {
            return index * 200
        })
        .duration(2000)
        .ease(d3.easeBounce)
        .attr("y",d => {
            return this.c_height - 100 - this.linear()(d)
        })
    }

    /*   力导图     */
    drawForce(nodes, edges , color) {
        this.data = { nodes, edges, color}
        this.simulation = d3.forceSimulation().nodes(nodes)
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(this.c_width / 2, this.c_height / 2))
        .force("link", d3.forceLink(edges).id(d => d.index).distance(120).strength(1))
        
        let nodesSvg = this.drawNodes()
        let linksSvg = this.drawLinks()
        this.simulation.on('tick', () => {
            linksSvg
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y)
        
            nodesSvg
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
            })
    }
    drawLinks() {
        return this.svg.append('g')
        .selectAll('line')
        .data(this.data.edges)
        .enter()
        .append('line')
        .attr('stroke-width', 1)
        .style('stroke', '#c1c3c5')
    }
    drawNodes() {
        return this.svg.append("g")
        .selectAll('circle')
        .data(this.data.nodes)
        .enter()
        .append('circle')
        .attr('r', 20)
        .attr('stroke', '#97cbff')
        .attr('stroke-width', 2)
        .attr('fill', (d, index) => {
            return this.data.color[index]
        })
        .call(this.drag(this.simulation))
    }
    drag = simulation => {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }
        
        function dragged(event) {
            console.log(event.subject)
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        }
        
        function dragended(event) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
      }
}
export default Figure