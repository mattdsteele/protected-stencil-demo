/*! Built with http://stenciljs.com */
const{h:t}=window.mycomponent;class e{getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((e=this.last)?` ${e}`:"");var t,e}render(){return t("div",null,"Hello, World! I'm ",this.getText())}static get is(){return"my-component"}static get encapsulation(){return"shadow"}static get properties(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"},middle:{type:String,attr:"middle"}}}static get style(){return""}}export{e as MyComponent};