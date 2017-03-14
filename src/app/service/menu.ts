/**
 * Created by Vk on 13/3/2017.
 */

export class MenuService{

  constructor(){

  };

  public sidebarName() : any{
  return  [{id:'dashboard',url:'/dashboard',name:'DashBoard'},
      {id:'crcomp',url:'/component',name:'Component'},
      {id:'crservice',url:'/service',name:'Service'},
      {id:'crdirect',url:'/directive',name:'Directive'},
      {id:'crpipe',url:'/pipe',name:'Pipe'},
      {id:'crrouting',url:'/routing',name:'Routing'},
      {id:'crhttp',url:'/httpServ',name:'Http'},
      {id:'crForms',url:'/form',name:'Form'},
      {id:'sample',url:'/sample',name:'Sample'}]
  }

}
