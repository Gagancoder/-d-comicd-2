AFRAME.registerComponent("home", {
    init: function () {
      this.posterContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "superman",
          title: "Superman",
          url: "../assets/2.jpg",
        },
        {
          id: "spiderman",
          title: "Spider-Man",
          url: "../assets/1.jpeg",
        },
  
        {
          id: "aero",
          title: "Aero",
          url: "../assets/3.jpg",
        },
        {
          id: "outer-space",
          title: "Outer Space",
          url: "../assets/4.jpg",
        },
      ];
      let previousXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = previousXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;
  
        const borderEl = this.createBorder(position,item.id)
      
        const thumbnail = this.createPoster(item)
        borderEl.appendChild(thumbnail)

        const titleEl = this.createTitleEl(position,item)
        borderEl.appendChild(titleEl)
        
        
       
        // Title Text Element
        
        this.posterContainer.appendChild(borderEl);
      }
  
    },
          // Border Element
    createBorder: function(position,id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",height:2100,width:23
      })
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{
        color:"red",opacity:1
      })
      entityEl.setAttribute("effect",{})
      return entityEl
     },
    // Thumbnail Element
    createPoster: function(item,position){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",height:28,width:20
      })
      entityEl.setAttribute("position",{x:0,y:5,z:1})
      entityEl.setAttribute("material",{
        src:item.url
      })
      
      return entityEl
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        
        color: "#000",
        value: item.title,
        fontsize:200
      });
      const elPosition = position;
      elPosition.y = 25;
      elPosition.z = 1;
      elPosition.x = -1
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    }
  });
  
  