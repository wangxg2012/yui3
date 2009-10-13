YUI.add("value-change",function(D){var B=D.Event,C=D.Lang,A=D.Env.evt.plugins;listeners={},eventName="valueChange",PRIVATE={},CHANGE="change",KEYDOWN="keydown",KEYPRESS="keypress",COUNT="count",DELAY="delay",WAITING="waiting",VALUE="value",makeHandler=function(E){var F=PRIVATE[E];return function(G){if(F[WAITING]){F[WAITING].cancel();}F[WAITING]=D.later(F[DELAY],this,function(){var H=F[VALUE],I=this.get("value");if(H===I){return;}F[VALUE]=I;this.fire(E,{type:eventName,value:I,oldValue:H,lastKeyEvent:G,target:this,currentTarget:this});});};},event={on:function(O,P,F,E,L){var N=D.Array(arguments,0,true),K=D.Lang.isString(F)?D.all(F):D.all([F]),J=null,H={events:[CHANGE,KEYDOWN,KEYPRESS]};H[DELAY]=50;L=D.merge(H,L||{});if(D.Lang.isString(F)&&K.size()===0){J=new D.EventHandle(this,"PROMISE");J.detach=D.Event.onAvailable(F,function(){var S=D.on.apply(D,N);for(var R in S){if(S.hasOwnProperty(R)){J[R]=S[R];}}},D.Event,true,false).detach;return J;}if(K.size()>1){J=[];K.each(function(R){N[2]=R;J.push(D.on.apply(D,N));});return J;}if(K.size()===0){return null;}K=K.item(0);var M=[D.stamp(K),eventName].join("-"),Q=PRIVATE[M];if(!Q){Q=PRIVATE[M]={};Q[COUNT]=0;}if(!K.getEvent(M)){var I=makeHandler(M);D.Array.each(L.events,function(R){Q[R]=K.on(R,I);});}Q[DELAY]=L[DELAY];Q[COUNT]++;N.splice(0,5,M,P,(E||K));var G=K.on.apply(K,N);D.after(function(){Q[COUNT]--;if(Q[COUNT]<=0){D.Array.each(L.events,function(R){K.detach(Q[R]);});}},G,"detach");return G;}};D.Env.evt.plugins[eventName]=event;if(D.Node){D.Node.DOM_EVENTS[eventName]=event;}},"@VERSION@",{requires:["node-base"]});