AFRAME.registerComponent("fall-down", {
    schema:{
        move_y : {type:"number" ,default: 0}
    },
    tick: function(){
        window.addEventListener("click" , (e)=>{
            this.data.move_y-=0.0001
        })
        var p = this.el.getAttribute("position")
        p.y = p.y+ this.data.move_y
        this.el.setAttribute("position" , {x:p.x, y:p.y,z:p.z})
    }
})

AFRAME.registerComponent("move", {
    schema: {
      moveY: { type: "number", default: 1 },
    },
  
    tick: function () {
  
    this.data.moveY = this.data.moveY + 0.01;
      
  
      var pos = this.el.getAttribute("position");
  
      pos.y = this.data.moveY;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });
  