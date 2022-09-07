const {effect, ref} = VueReactivity;

function renderer(domString,container){
    container.innerHTML = domString;
}

const  count = ref(0);


effect(()=>{
    renderer(`<h1>${count.value}</h1>`,document.getElementById('app'))
})



function createRenderer(){
    function render(vnode,contianer){
      if(vnode){
        
      }
    }
    return {
        render
    };
}