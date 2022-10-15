AFRAME.registerComponent("effect",{

    schema:{
        selected_item_id:{default:"",type:"string"},
        
    },
    init: function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handlePostersListState: function(){
        const id = this.el.getAttribute("id")

        const posterId = ["superman","spiderman","aero","outer-space"]
        if(posterId.includes(id)){
            const posterContainer = document.querySelector("#poster-container")
            posterContainer.setAttribute("effect",{
                selected_item_id:id

            })
            this.el.setAttribute("material",{
                color:"grey" ,opacity:1
            })
        }
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePostersListState()
        })
    


    },
    handleMouseLeaveEvents: function () {
     
        this.el.addEventListener("mouseleave", () => {
          const { selected_item_id } = this.data;
          if (selected_item_id) {
            const el = document.querySelector(`#${selected_item_id}`);
            const id = el.getAttribute("id");
            if (id == selected_item_id) {
              el.setAttribute("material", {
                color: "red",
                opacity: 1
              });
            }
          }
        });
      },

})