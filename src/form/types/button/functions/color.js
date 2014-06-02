//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//
//------------------------------------------------------------------------------
d3plus.input.button.color = function ( elem , vars ) {

  elem
    .style("background-color",function(d){

      if ( vars.focus.value !== d[vars.id.value] ) {

        if ( vars.hover.value === d[vars.id.value] ) {
          return d3plus.color.lighter(vars.ui.color.secondary.value,.1)
        }
        else {
          return vars.ui.color.secondary.value
        }

      }
      else {

        if ( vars.hover.value === d[vars.id.value] ) {
          return d3.rgb(vars.ui.color.primary.value).darker(0.15).toString()
        }
        else {
          return vars.ui.color.primary.value
        }

      }

    })
    .style("color",function(d){

      var image = d[vars.icon.value] && vars.data.value.length < vars.data.large

      if ( vars.focus.value === d[vars.id.value] ) {
        var opacity = 1
      }
      else {
        var opacity = 0.75
      }

      if ( vars.focus.value === d[vars.id.value] && d[vars.color.value] && !image ) {
        var color = d3plus.color.legible(d[vars.color.value])
      }
      else if ( vars.focus.value === d[vars.id.value] ) {
        var color = d3plus.color.text(vars.ui.color.primary.value)
      }
      else {
        var color = d3plus.color.text(vars.ui.color.secondary.value)
      }

      var color = d3.rgb(color)

      return "rgba("+color.r+","+color.g+","+color.b+","+opacity+")"

    })
    .style("border-color",vars.ui.color.secondary.value)

}
